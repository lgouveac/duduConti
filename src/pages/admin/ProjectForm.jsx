import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { parseVideoUrl, videoEmbedUrl } from '../../lib/video'

function slugify(s) {
  return String(s)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // remove acentos
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Reconstrói uma URL a partir do provedor/id salvo, para preencher o campo ao editar.
function videoToUrl(provider, id) {
  if (!provider || !id) return ''
  if (provider === 'youtube') return `https://youtu.be/${id}`
  if (provider === 'vimeo') return `https://vimeo.com/${id}`
  return ''
}

export default function ProjectForm({ project, existing, onCancel, onSaved }) {
  const isNew = !project
  const [title, setTitle] = useState(project?.title || '')
  const [slug, setSlug] = useState(project?.slug || '')
  const [role, setRole] = useState(project?.role || '')
  const [videoUrl, setVideoUrl] = useState(
    videoToUrl(project?.video_provider, project?.video_id)
  )
  const [description, setDescription] = useState(project?.description || '')
  const [images, setImages] = useState(project?.images?.length ? project.images : [''])
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  const video = parseVideoUrl(videoUrl)
  const previewEmbed = videoEmbedUrl(video.provider, video.id)

  function updateImage(i, val) {
    setImages((arr) => arr.map((v, idx) => (idx === i ? val : v)))
  }
  function addImage() {
    setImages((arr) => [...arr, ''])
  }
  function removeImage(i) {
    setImages((arr) => arr.filter((_, idx) => idx !== i))
  }
  function moveImage(i, dir) {
    const t = i + dir
    if (t < 0 || t >= images.length) return
    setImages((arr) => {
      const next = [...arr]
      ;[next[i], next[t]] = [next[t], next[i]]
      return next
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)

    const finalSlug = (slug.trim() || slugify(title)).trim()
    if (!title.trim()) return setError('O título é obrigatório.')
    if (!finalSlug) return setError('Não foi possível gerar o link (slug). Preencha o título.')

    const cleanImages = images.map((s) => s.trim()).filter(Boolean)

    const payload = {
      title: title.trim(),
      slug: finalSlug,
      role: role.trim(),
      video_provider: video.provider,
      video_id: video.id,
      description: description,
      images: cleanImages,
    }

    setSaving(true)
    let res
    if (isNew) {
      const maxOrder = existing.reduce((m, p) => Math.max(m, p.sort_order ?? 0), -1)
      payload.sort_order = maxOrder + 1
      res = await supabase.from('projects').insert(payload)
    } else {
      res = await supabase.from('projects').update(payload).eq('id', project.id)
    }
    setSaving(false)

    if (res.error) {
      if (res.error.code === '23505') setError('Já existe um projeto com esse link (slug).')
      else setError(res.error.message)
      return
    }
    onSaved()
  }

  return (
    <form className="admin-section" onSubmit={handleSubmit}>
      <div className="admin-section__head">
        <h2 className="admin-section__title">{isNew ? 'Novo projeto' : 'Editar projeto'}</h2>
        <button type="button" className="admin-btn admin-btn--ghost" onClick={onCancel}>
          ← voltar
        </button>
      </div>

      {error && <p className="admin-error">{error}</p>}

      <label className="admin-field">
        <span>Título</span>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>

      <label className="admin-field">
        <span>
          Link da página (slug) <em>— deixe em branco para gerar do título</em>
        </span>
        <input
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder={slugify(title) || 'meu-projeto'}
        />
      </label>

      <label className="admin-field">
        <span>Função / cargo</span>
        <input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Diretor de Fotografia" />
      </label>

      <label className="admin-field">
        <span>Vídeo (cole o link do YouTube ou do Vimeo)</span>
        <input
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="https://youtu.be/… ou https://vimeo.com/…"
        />
        {videoUrl.trim() && (
          <small className={`admin-hint ${video.provider ? 'admin-hint--ok' : 'admin-hint--bad'}`}>
            {video.provider
              ? `✓ ${video.provider === 'youtube' ? 'YouTube' : 'Vimeo'} detectado (id: ${video.id})`
              : '✕ não reconheci esse link de vídeo'}
          </small>
        )}
      </label>

      {previewEmbed && (
        <div className="admin-video-preview">
          <iframe src={previewEmbed} allowFullScreen title="prévia do vídeo" />
        </div>
      )}

      <label className="admin-field">
        <span>
          Descrição <em>— separe parágrafos com uma linha em branco</em>
        </span>
        <textarea
          rows={8}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <div className="admin-field">
        <span>Imagens (URLs)</span>
        <div className="admin-images">
          {images.map((img, i) => (
            <div className="admin-image-row" key={i}>
              {img.trim() ? (
                <img className="admin-image-row__thumb" src={img} alt="" />
              ) : (
                <span className="admin-image-row__thumb admin-image-row__thumb--empty" />
              )}
              <input
                value={img}
                onChange={(e) => updateImage(i, e.target.value)}
                placeholder="https://…"
              />
              <button type="button" className="admin-icon" onClick={() => moveImage(i, -1)} title="Subir">
                ↑
              </button>
              <button type="button" className="admin-icon" onClick={() => moveImage(i, 1)} title="Descer">
                ↓
              </button>
              <button
                type="button"
                className="admin-icon admin-icon--danger"
                onClick={() => removeImage(i)}
                title="Remover"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
        <button type="button" className="admin-btn admin-btn--small" onClick={addImage}>
          + adicionar imagem
        </button>
      </div>

      <div className="admin-form-actions">
        <button type="submit" className="admin-btn" disabled={saving}>
          {saving ? 'salvando…' : 'salvar projeto'}
        </button>
        <button type="button" className="admin-btn admin-btn--ghost" onClick={onCancel}>
          cancelar
        </button>
      </div>
    </form>
  )
}
