import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { projects } from '../data/projects'

export default function Projeto() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

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

      {project.vimeoId && (
        <div className="project-detail__video">
          <iframe
            src={`https://player.vimeo.com/video/${project.vimeoId}?autopause=0&title=0&byline=0&portrait=0`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={project.title}
          />
        </div>
      )}

      <div className="project-detail__images">
        {project.images.map((img, i) => (
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
