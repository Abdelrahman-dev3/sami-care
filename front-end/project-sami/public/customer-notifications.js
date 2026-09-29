/* Shared inbox for the Vue shell and the standalone mobile page. */
window.mountSamiNotifications = function ({ apiBase, onCount = () => {}, hideButton = false }) {
  const root = document.createElement('div')
  root.dir = 'rtl'
  root.innerHTML = `<style>
    .sn-root{position:fixed;z-index:10050;top:84px;left:16px;font-family:inherit;color:#30291e;direction:rtl}
    .sn-root button{font:inherit;cursor:pointer;border:1px solid #ded4c3;border-radius:12px;background:#fffaf2;color:#30291e;padding:10px 14px}
    .sn-root [hidden]{display:none!important}.sn-bell{box-shadow:0 4px 18px #0002}
    .sn-panel{width:min(380px,calc(100vw - 32px));max-height:70dvh;overflow:auto;background:#fffdf8;border:1px solid #d9ccb4;border-radius:18px;box-shadow:0 12px 44px #0003;padding:16px;margin-top:8px}
    .sn-head{display:flex;justify-content:space-between;align-items:center;gap:10px}.sn-head h2{font-size:19px;margin:0}.sn-tools{margin:12px 0;display:flex;gap:8px}
    .sn-item{display:block;width:100%;text-align:right;margin:8px 0}.sn-item.unread{background:#f3ead8;border-color:#b89554}.sn-item strong,.sn-item span,.sn-item time{display:block}.sn-item span{font-size:14px;line-height:1.7;margin:6px 0}.sn-item time{font-size:12px;color:#716552}.sn-status{font-size:13px;line-height:1.6}.sn-toast{max-width:340px;padding:12px;background:#30291e;color:white;border-radius:12px;margin-top:8px}
  </style><div class="sn-root" hidden><button class="sn-bell" aria-label="الإشعارات" aria-expanded="false">🔔 <span class="sn-count">0</span></button><section class="sn-panel" aria-label="الإشعارات" hidden><div class="sn-head"><h2>الإشعارات</h2><button class="sn-close" aria-label="إغلاق الإشعارات">✕</button></div><div class="sn-tools"><button class="sn-all">قراءة الكل</button><button class="sn-refresh">تحديث</button></div><p class="sn-status" role="status"></p><div class="sn-list"></div><button class="sn-more" hidden>عرض المزيد</button></section><div class="sn-toast" role="status" hidden></div></div>`
  document.body.append(root)
  const el = selector => root.querySelector(selector)
  const shell = el('.sn-root'), panel = el('.sn-panel'), bell = el('.sn-bell')
  bell.hidden = hideButton
  let token = null, generation = 0, streamController, timer, toastTimer, watchdog, disposed = false
  let items = [], seen = new Set(), initialized = false, page = 1, lastPage = 1, failures = 0
  const base = apiBase.replace(/\/$/, '')
  const readToken = () => { try { return localStorage.getItem('samiAuthToken') } catch { return null } }
  const headers = () => ({ Accept: 'application/json', Authorization: `Bearer ${token}` })
  const message = item => {
    const raw = item.data?.data?.message || item.data?.message || ''
    // Render legacy HTML templates as text, never insert server content as markup.
    const doc = new DOMParser().parseFromString(String(raw), 'text/html')
    return doc.body.textContent || ''
  }
  function render() {
    el('.sn-list').replaceChildren()
    for (const item of items) {
      const button = document.createElement('button')
      button.className = `sn-item${item.read_at ? '' : ' unread'}`
      const title = document.createElement('strong'), body = document.createElement('span'), time = document.createElement('time')
      title.textContent = item.data?.subject || item.data?.data?.type || 'إشعار'
      body.textContent = message(item)
      time.textContent = new Date(item.created_at).toLocaleString('ar-SA')
      button.append(title, body, time)
      button.setAttribute('aria-label', `${title.textContent}${item.read_at ? '' : '، غير مقروء'}`)
      button.onclick = () => mark(`/notifications/${encodeURIComponent(item.id)}/read`)
      el('.sn-list').append(button)
    }
    el('.sn-more').hidden = page >= lastPage
  }
  function accept(payload) {
    const incoming = payload.notification_data || []
    const fresh = incoming.filter(item => !seen.has(item.id) && !item.read_at)
    if (initialized && fresh.length) {
      el('.sn-toast').textContent = message(fresh[0])
      el('.sn-toast').hidden = false
      clearTimeout(toastTimer)
      toastTimer = setTimeout(() => { el('.sn-toast').hidden = true }, 6000)
      window.dispatchEvent(new CustomEvent('sami:customer-activity', { detail: fresh }))
    }
    incoming.forEach(item => seen.add(item.id))
    initialized = true
    // Keep older pages visible as new events arrive.
    const ids = new Set(incoming.map(item => item.id))
    items = [...incoming, ...items.filter(item => !ids.has(item.id))]
    lastPage = payload.last_page || 1
    const count = Number(payload.all_unread_count) || 0
    el('.sn-count').textContent = count > 99 ? '99+' : String(count)
    onCount(count)
    el('.sn-status').textContent = items.length ? '' : 'لا توجد إشعارات حتى الآن'
    render()
  }
  async function request(path, method = 'GET') {
    const response = await fetch(base + path, { method, headers: headers(), cache: 'no-store' })
    if (!response.ok) throw new Error(String(response.status))
    return response.json()
  }
  async function refresh() {
    const current = generation
    try {
      const payload = await request('/notification-list')
      if (current === generation && !disposed) accept(payload)
    } catch { if (current === generation) el('.sn-status').textContent = 'تعذر الاتصال. سنعيد المحاولة تلقائيًا.' }
  }
  async function mark(path) {
    const current = generation
    try {
      await request(path, 'POST')
      if (current !== generation || disposed) return
      if (path.endsWith('read-all')) items.forEach(item => { item.read_at ||= new Date().toISOString() })
      else {
        const id = decodeURIComponent(path.split('/')[2])
        const item = items.find(item => item.id === id)
        if (item) item.read_at ||= new Date().toISOString()
      }
      await refresh()
    } catch { el('.sn-status').textContent = 'تعذر تحديث حالة القراءة. حاول مجددًا.' }
  }
  async function connect(current) {
    if (disposed || !token || document.hidden || current !== generation) return
    streamController = new AbortController()
    const controller = streamController
    let reader
    const timeout = setTimeout(() => controller.abort(), 30000)
    watchdog = timeout
    try {
      const response = await fetch(base + '/notifications/stream', { headers: { ...headers(), Accept: 'text/event-stream' }, signal: controller.signal, cache: 'no-store' })
      if (!response.ok || !response.body || !response.headers.get('content-type')?.includes('text/event-stream')) throw new Error('stream unavailable')
      reader = response.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      while (true) {
        const { value, done } = await reader.read()
        if (done) break
        if (current !== generation || disposed) return
        buffer += decoder.decode(value, { stream: true })
        const events = buffer.split('\n\n')
        buffer = events.pop()
        for (const event of events) {
          const line = event.split('\n').find(line => line.startsWith('data: '))
          if (line) { accept(JSON.parse(line.slice(6))); failures = 0 }
        }
      }
    } catch {
      if (current === generation && !disposed && !document.hidden) {
        failures++
        await refresh()
      }
    } finally {
      reader?.releaseLock()
      clearTimeout(timeout)
      if (current === generation && !disposed && !document.hidden) timer = setTimeout(() => connect(current), Math.min(30000, failures ? 3000 * failures : 1000))
    }
  }
  function sync() {
    const next = readToken()
    if (next === token) return false
    generation++
    streamController?.abort()
    clearTimeout(timer)
    clearTimeout(toastTimer)
    token = next
    items = []; seen = new Set(); initialized = false; page = 1; lastPage = 1; failures = 0
    shell.hidden = !token; panel.hidden = true; bell.setAttribute('aria-expanded', 'false'); el('.sn-toast').hidden = true
    el('.sn-count').textContent = '0'
    onCount(0); render()
    if (token) { refresh(); connect(generation) }
    return true
  }
  function open() {
    sync()
    if (!token) return
    panel.hidden = false; bell.setAttribute('aria-expanded', 'true'); el('.sn-close').focus(); refresh()
  }
  function close() { panel.hidden = true; bell.setAttribute('aria-expanded', 'false'); if (!bell.hidden) bell.focus() }
  function visibility() {
    generation++; streamController?.abort(); clearTimeout(timer)
    if (!document.hidden && !sync() && token) { refresh(); connect(generation) }
  }
  const keydown = event => { if (event.key === 'Escape' && !panel.hidden) close() }
  bell.onclick = () => panel.hidden ? open() : close()
  el('.sn-close').onclick = close
  el('.sn-all').onclick = () => mark('/notifications/read-all')
  el('.sn-refresh').onclick = refresh
  el('.sn-more').onclick = async () => {
    const current = generation, button = el('.sn-more')
    button.disabled = true
    try {
      const payload = await request(`/notification-list?page=${page + 1}`)
      if (current !== generation || disposed) return
      page = payload.current_page
      const ids = new Set(items.map(item => item.id))
      items.push(...payload.notification_data.filter(item => !ids.has(item.id)))
      lastPage = payload.last_page; render()
    } catch { el('.sn-status').textContent = 'تعذر تحميل المزيد. حاول مجددًا.' }
    finally { button.disabled = false }
  }
  const authTimer = setInterval(sync, 1000)
  window.addEventListener('storage', sync)
  document.addEventListener('visibilitychange', visibility)
  document.addEventListener('keydown', keydown)
  sync()
  return {
    open,
    setHideButton(value) { bell.hidden = value },
    destroy() {
      disposed = true; generation++; streamController?.abort()
      clearInterval(authTimer); clearTimeout(timer); clearTimeout(watchdog); clearTimeout(toastTimer)
      window.removeEventListener('storage', sync)
      document.removeEventListener('visibilitychange', visibility)
      document.removeEventListener('keydown', keydown)
      root.remove()
    },
  }
}
