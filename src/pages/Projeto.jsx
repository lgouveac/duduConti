import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useContent } from '../lib/ContentContext'
import { videoEmbedUrl, videoIframeProps } from '../lib/video'

export default function Projeto() {
  const { slug } = useParams()
  const { projects, loading } = useContent()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (loading || !projects) {
    return <div className="state state--loading">carregando…</div>
  }

  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  if (!project) {
    return (
      <div className="project-detail">
        <Link to="/" className="project-detail__back">
          &larr; voltar
        </Link>
        <p>Projeto não encontrado.</p>
      </div>
    )
  }

  const prev = index > 0 ? projects[index - 1] : null
  const next = index < projects.length - 1 ? projects[index + 1] : null

  const embedUrl = videoEmbedUrl(project.video_provider, project.video_id)

  return (
    <div className="project-detail">
      <Link to="/" className="project-detail__back">
        &larr; voltar
      </Link>

      <div className="project-detail__header">
        <h1 className="project-detail__title">{project.title}</h1>
        <p className="project-detail__role">{project.role}</p>
        {project.description && (
          <div className="project-detail__description">
            {project.description.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>

      {embedUrl && (
        <div className="project-detail__video">
          <iframe
            src={embedUrl}
            {...videoIframeProps(project.video_provider)}
            allowFullScreen
            title={project.title}
          />
        </div>
      )}

      <div className="project-detail__images">
        {(project.images || []).map((img, i) => (
          <img key={i} src={img} alt={`${project.title} - ${i + 1}`} loading="lazy" />
        ))}
      </div>

      <div className="project-detail__nav">
        {prev ? (
          <div className="project-detail__nav-item">
            <span className="project-detail__nav-label">anterior</span>
            <Link to={`/projeto/${prev.slug}`} className="project-detail__nav-link">
              {prev.title}
            </Link>
          </div>
        ) : (
          <div />
        )}
        {next ? (
          <div className="project-detail__nav-item project-detail__nav-item--next">
            <span className="project-detail__nav-label">próximo</span>
            <Link to={`/projeto/${next.slug}`} className="project-detail__nav-link">
              {next.title}
            </Link>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
