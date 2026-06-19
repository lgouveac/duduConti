import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useContent } from '../../lib/ContentContext'
import { defaultPages } from '../../data/pages'

export default function PagesManager() {
  const { reload } = useContent()
  const [pages, setPages] = useState(null)
  const [status, setStatus] = useState({})
  const [error, setError] = useState(null)

  async function fetchPages() {
    const { data, error } = await supabase.from('pages').select('*')
    if (error) return setError(error.message)
    const merged = JSON.parse(JSON.stringify(defaultPages))
    for (const row of data || []) {
      merged[row.key] = { ...(merged[row.key] || {}), ...(row.content || {}) }
    }
    setPages(merged)
  }

  useEffect(() => {
    // setState ocorre após await (assíncrono), não no corpo síncrono do efeito.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchPages()
  }, [])

  function setField(key, field, value) {
    setPages((p) => ({ ...p, [key]: { ...p[key], [field]: value } }))
  }

  async function save(key) {
    setStatus((s) => ({ ...s, [key]: 'saving' }))
    setError(null)
    const { error } = await supabase
      .from('pages')
      .upsert({ key, content: pages[key] }, { onConflict: 'key' })
    if (error) {
      setError(error.message)
      setStatus((s) => ({ ...s, [key]: null }))
      return
    }
    setStatus((s) => ({ ...s, [key]: 'saved' }))
    reload()
    setTimeout(() => setStatus((s) => ({ ...s, [key]: null })), 2000)
  }

  if (!pages) return <p className="admin-note">carregando…</p>

  const btn = (key) => (
    <button className="admin-btn" onClick={() => save(key)} disabled={status[key] === 'saving'}>
      {status[key] === 'saving' ? 'salvando…' : status[key] === 'saved' ? '✓ salvo' : 'salvar'}
    </button>
  )

  return (
    <div className="admin-section">
      {error && <p className="admin-error">{error}</p>}

      {/* Marca / cabeçalho */}
      <div className="admin-block">
        <h2 className="admin-section__title">Marca (barra lateral)</h2>
        <label className="admin-field">
          <span>Nome — 1ª linha</span>
          <input
            value={pages.site.name_line1 || ''}
            onChange={(e) => setField('site', 'name_line1', e.target.value)}
          />
        </label>
        <label className="admin-field">
          <span>Nome — 2ª linha</span>
          <input
            value={pages.site.name_line2 || ''}
            onChange={(e) => setField('site', 'name_line2', e.target.value)}
          />
        </label>
        <label className="admin-field">
          <span>Tagline</span>
          <input
            value={pages.site.tagline || ''}
            onChange={(e) => setField('site', 'tagline', e.target.value)}
          />
        </label>
        {btn('site')}
      </div>

      {/* Página Sobre */}
      <div className="admin-block">
        <h2 className="admin-section__title">Página “Sobre”</h2>
        <label className="admin-field">
          <span>Imagem (URL)</span>
          <input
            value={pages.sobre.image || ''}
            onChange={(e) => setField('sobre', 'image', e.target.value)}
          />
        </label>
        {pages.sobre.image && (
          <img className="admin-preview-img" src={pages.sobre.image} alt="" />
        )}
        <label className="admin-field">
          <span>Título</span>
          <input
            value={pages.sobre.title || ''}
            onChange={(e) => setField('sobre', 'title', e.target.value)}
          />
        </label>
        <label className="admin-field">
          <span>Texto — separe parágrafos com uma linha em branco</span>
          <textarea
            rows={8}
            value={pages.sobre.text || ''}
            onChange={(e) => setField('sobre', 'text', e.target.value)}
          />
        </label>
        {btn('sobre')}
      </div>

      {/* Página Contato */}
      <div className="admin-block">
        <h2 className="admin-section__title">Página “Contato”</h2>
        <label className="admin-field">
          <span>Título</span>
          <input
            value={pages.contato.title || ''}
            onChange={(e) => setField('contato', 'title', e.target.value)}
          />
        </label>
        <label className="admin-field">
          <span>Texto</span>
          <textarea
            rows={4}
            value={pages.contato.text || ''}
            onChange={(e) => setField('contato', 'text', e.target.value)}
          />
        </label>
        <label className="admin-field">
          <span>WhatsApp (só números, com DDI e DDD)</span>
          <input
            value={pages.contato.whatsapp || ''}
            onChange={(e) => setField('contato', 'whatsapp', e.target.value)}
            placeholder="5521999999999"
          />
        </label>
        <label className="admin-field">
          <span>Mensagem inicial do WhatsApp</span>
          <input
            value={pages.contato.whatsapp_message || ''}
            onChange={(e) => setField('contato', 'whatsapp_message', e.target.value)}
          />
        </label>
        {btn('contato')}
      </div>
    </div>
  )
}
