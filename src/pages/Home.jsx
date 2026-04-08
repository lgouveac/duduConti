import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Home() {
  // Distribute images across the masonry - show all project images
  const items = projects.flatMap((project) =>
    project.images.map((img, i) => ({
      ...project,
      image: img,
      imageIndex: i,
    }))
  )

  // Shuffle for visual variety but keep it deterministic
  const shuffled = items.sort((a, b) => {
    const hashA = a.slug.length + a.imageIndex * 7
    const hashB = b.slug.length + b.imageIndex * 7
    return hashA - hashB
  })

  return (
    <div className="masonry">
      {shuffled.map((item, i) => (
        <Link
          key={`${item.slug}-${item.imageIndex}`}
          to={`/projeto/${item.slug}`}
          className="masonry__item"
        >
          <img
            src={item.image}
            alt={item.title}
            loading={i < 6 ? 'eager' : 'lazy'}
          />
          <div className="masonry__overlay">
            <span className="masonry__title">{item.title}</span>
            <span className="masonry__role">{item.role}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
