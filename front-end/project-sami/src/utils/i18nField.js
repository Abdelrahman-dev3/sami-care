/*
  حقول الترجمة الراجعة من الباك إند مش كلها بنفس الشكل: name بترجع كائن
  {ar,en} مباشرة، بينما description بترجع نص JSON مُرمَّز (string) لازم
  يتفكّ الأول. الدالة دي بتتعامل مع الحالتين + أي نص عادي مش مترجم أصلاً.
*/
export function localizeField(value, lang) {
  let v = value

  if (typeof v === 'string') {
    const trimmed = v.trim()
    if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
      try {
        v = JSON.parse(trimmed)
      } catch {
        return value
      }
    }
  }

  if (v && typeof v === 'object') {
    return v[lang] || v.ar || v.en || ''
  }

  return value ?? ''
}
