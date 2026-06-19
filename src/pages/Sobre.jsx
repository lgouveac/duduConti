import { useContent } from '../lib/ContentContext'

export default function Sobre() {
  const { pages, loading } = useContent()

  if (loading || !pages) {
    return <div className="state state--loading">carregando…</div>
  }

  const sobre = pages.sobre || {}

  return (
    <div className="sobre">
      {sobre.image && (
        <img className="sobre__image" src={sobre.image} alt={sobre.title || 'Sobre'} />
      )}

      <h2 className="sobre__title">{sobre.title || 'Sobre'}</h2>

      <div className="sobre__text">
        {(sobre.text || '').split('\n\n').map((paragraph, i) => (
          <p key={i} style={{ marginBottom: 12 }}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}
