/* Shared metadata updater for Vue and the standalone mobile application. */
;(function (root) {
  const names = {
    '/':['الرئيسية','Home'], '/services':['الخدمات','Services'], '/store':['المنتجات','Products'],
    '/gifts':['الإهداء','Gifts'], '/packages-gifts':['الباقات','Packages'], '/branches':['الفروع','Branches'],
    '/contact':['تواصل معنا','Contact us'], '/page-about':['عن عناية سامي','About Sami Care'],
    '/blog':['المدونة','Blog'], '/home-service':['الخدمة المنزلية','Home service'], '/cafe':['المقهى','Cafe'],
    '/booking':['الحجز','Booking'], '/booking-receipt':['إيصال الحجز','Booking receipt'],
    '/gift-recipient':['استلام الهدية','Receive your gift'], '/account':['حسابي','My account'],
    '/terms':['الشروط والأحكام','Terms and conditions'], '/privacy-policy':['سياسة الخصوصية','Privacy policy']
  };
  function normalize(path) {
    path = '/' + String(path || '/').split(/[?#]/)[0].replace(/^\/+|\/+$/g, '');
    const aliases = {'/index.html':'/', '/about.html':'/page-about', '/TermsAndConditions':'/terms', '/privacy':'/privacy-policy', '/packages':'/packages-gifts'};
    return aliases[path] || path.replace(/\.html$/, '');
  }
  function supported(path) {
    return Object.hasOwn(names, path) || /^\/services\/\d+$/.test(path) || /^\/blog\/[^/]+$/.test(path);
  }
  function fallback(path, lang) {
    const key = names[path] ? path : path.startsWith('/services/') ? '/services' : path.startsWith('/blog/') ? '/blog' : '/';
    const english = lang === 'en';
    return {
      keywords: '',
      title: names[key][english ? 1 : 0] + (english ? ' | Sami Care' : ' | عناية سامي'),
      description: english ? 'Explore Sami Care services, packages and men’s grooming in Jeddah.' : 'اكتشف خدمات وباقات العناية الرجالية من عناية سامي في جدة.'
    };
  }
  function apply(doc, data) {
    setKeywords(doc, data.keywords);
    let title = doc.head.querySelector('title');
    if (!title) { title = doc.createElement('title'); doc.head.append(title); }
    title.setAttribute('translate', 'no');
    title.textContent = data.title;
    doc.head.querySelectorAll('title').forEach(node => { if (node !== title) node.remove(); });
    let description = doc.head.querySelector('meta[name="description"]');
    if (!description) { description = doc.createElement('meta'); description.name = 'description'; doc.head.append(description); }
    description.content = data.description;
    doc.head.querySelectorAll('meta[name="description"]').forEach(node => { if (node !== description) node.remove(); });
  }
  function setKeywords(doc, value) {
    const nodes = [...doc.head.querySelectorAll('meta[name="keywords"]')];
    const content = typeof value === 'string' ? value.trim() : '';
    if (!content) { nodes.forEach(node => node.remove()); return; }
    const node = nodes.shift() || doc.createElement('meta');
    node.name = 'keywords';
    node.content = content;
    if (!node.parentNode) doc.head.append(node);
    nodes.forEach(duplicate => duplicate.remove());
  }
  function create({ endpoint, doc = document, fetcher = (...args) => fetch(...args) }) {
    let serial = 0, lastKey = '', controller;
    async function update(path, lang, force = false) {
      path = normalize(path); lang = lang === 'en' ? 'en' : 'ar';
      if (!supported(path)) return;
      const key = path + ':' + lang;
      if (!force && key === lastKey) return;
      lastKey = key;
      const request = ++serial;
      controller?.abort();
      controller = new AbortController();
      const current = controller;
      const timer = setTimeout(() => current.abort(), 8000);
      const defaults = fallback(path, lang);
      apply(doc, defaults);
      try {
        const url = new URL(endpoint, doc.baseURI);
        url.searchParams.set('path', path); url.searchParams.set('lang', lang);
        const response = await fetcher(url.href, { signal: current.signal, cache: 'no-store', headers: { Accept: 'application/json' } });
        if (!response.ok) throw new Error('SEO unavailable');
        const body = await response.json();
        if (request !== serial || !body.status || !body.data) return;
        const data = body.data;
        apply(doc, {
          keywords: typeof data.keywords === 'string' ? data.keywords : '',
          title: typeof data.title === 'string' && data.title.trim() ? data.title : defaults.title,
          description: typeof data.description === 'string' && data.description.trim() ? data.description : defaults.description
        });
      } catch { /* Keep localized defaults when offline or the API is unavailable. */ }
      finally { clearTimeout(timer); }
    }
    return { update, dispose() { serial++; controller?.abort(); } };
  }
  root.SamiSeo = { create, normalize, supported, fallback, apply };
})(globalThis);
