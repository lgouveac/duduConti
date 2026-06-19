// Detecta o provedor e o ID de um vídeo a partir de um link (YouTube ou Vimeo)
// ou de um ID puro. Usado tanto no site público quanto no painel admin.
export function parseVideoUrl(input) {
  if (!input) return { provider: null, id: null }
  const s = String(input).trim()
  if (!s) return { provider: null, id: null }

  // YouTube: watch?v=, youtu.be/, embed/, shorts/, live/
  const yt = s.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/|v\/)|youtu\.be\/)([\w-]{11})/
  )
  if (yt) return { provider: 'youtube', id: yt[1] }

  // Vimeo: vimeo.com/123456789 ou vimeo.com/video/123456789
  const vm = s.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (vm) return { provider: 'vimeo', id: vm[1] }

  // ID puro: só dígitos = Vimeo; 11 caracteres = YouTube
  if (/^\d+$/.test(s)) return { provider: 'vimeo', id: s }
  if (/^[\w-]{11}$/.test(s)) return { provider: 'youtube', id: s }

  return { provider: null, id: null }
}

// Monta a URL de embed (iframe) a partir do provedor + ID.
export function videoEmbedUrl(provider, id) {
  if (!provider || !id) return null
  if (provider === 'youtube') {
    return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`
  }
  if (provider === 'vimeo') {
    return `https://player.vimeo.com/video/${id}?autopause=0&title=0&byline=0&portrait=0`
  }
  return null
}

// Atributos do iframe que variam por provedor.
export function videoIframeProps(provider) {
  if (provider === 'vimeo') {
    return { allow: 'autoplay; fullscreen; picture-in-picture' }
  }
  return {
    allow:
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  }
}
