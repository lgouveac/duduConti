import { useEffect, useRef, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useContent } from '../../lib/ContentContext'
import ProjectForm from './ProjectForm'

export default function ProjectsManager() {
  const { reload } = useContent()
  const [list, setList] = useState(null)
  const [editing, setEditing] = useState(null) // objeto do projeto, ou 'new', ou null
  const [error, setError] = useState(null)
  const dragIndex = useRef(null)

  async function fetchList() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('sort_order', { ascending: true })
    if (error) setError(error.message)
    else setList(data)
  }

  useEffect(() => {
    // setState ocorre após await (assíncrono), não no corpo síncrono do efeito.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchList()
  }, [])

  // Persiste a nova ordem (sort_order = posição na lista).
  // Usa UPDATE por linha (e não upsert) para não disparar INSERT em colunas
  // obrigatórias como slug/title. Só atualiza as linhas que mudaram de posição.
  async function persistOrder(newList) {
    setList(newList)
    const changed = newList
      .map((p, i) => ({ p, i }))
      .filter(({ p, i }) => p.sort_order !== i)
    const results = await Promise.all(
      changed.map(({ p, i }) =>
        supabase.from('projects').update({ sort_order: i }).eq('id', p.id)
      )
    )
    const failed = results.find((r) => r.error)
    if (failed) setError(failed.error.message)
    // Reflete os novos sort_order no estado local
    setList(newList.map((p, i) => ({ ...p, sort_order: i })))
    reload()
  }

  function move(index, dir) {
    const target = index + dir
    if (target < 0 || target >= list.length) return
    const next = [...list]
    ;[next[index], next[target]] = [next[target], next[index]]
    persistOrder(next)
  }

  function onDrop(index) {
    const from = dragIndex.current
    dragIndex.current = null
    if (from === null || from === index) return
    const next = [...list]
    const [moved] = next.splice(from, 1)
    next.splice(index, 0, moved)
    persistOrder(next)
  }

  async function handleDelete(project) {
    if (!confirm(`Excluir o projeto "${project.title}"? Essa ação não pode ser desfeita.`)) return
    const { error } = await supabase.from('projects').delete().eq('id', project.id)
    if (error) return setError(error.message)
    fetchList()
    reload()
  }

  async function handleSaved() {
    setEditing(null)
    await fetchList()
    reload()
  }

  if (editing) {
    return (
      <ProjectForm
        project={editing === 'new' ? null : editing}
        existing={list || []}
        onCancel={() => setEditing(null)}
        onSaved={handleSaved}
      />
    )
  }

  return (
    <div className="admin-section">
      <div className="admin-section__head">
        <div>
          <h2 className="admin-section__title">Projetos</h2>
          <p className="admin-note">
            Arraste para reordenar (ou use as setas). A ordem aqui é a ordem no site.
          </p>
        </div>
        <button className="admin-btn" onClick={() => setEditing('new')}>
          + novo projeto
        </button>
      </div>

      {error && <p className="admin-error">{error}</p>}

      {!list ? (
        <p className="admin-note">carregando…</p>
      ) : list.length === 0 ? (
        <p className="admin-note">Nenhum projeto ainda. Clique em “+ novo projeto”.</p>
      ) : (
        <ul className="admin-list">
          {list.map((p, i) => (
            <li
              key={p.id}
              className="admin-row"
              draggable
              onDragStart={() => (dragIndex.current = i)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => onDrop(i)}
            >
              <span className="admin-row__handle" title="Arraste para reordenar">
                ⠿
              </span>
              {p.images?.[0] ? (
                <img className="admin-row__thumb" src={p.images[0]} alt="" />
              ) : (
                <span className="admin-row__thumb admin-row__thumb--empty" />
              )}
              <div className="admin-row__info">
                <span className="admin-row__title">{p.title}</span>
                <span className="admin-row__meta">
                  {p.role}
                  {p.video_provider ? ` · ${p.video_provider}` : ''}
                </span>
              </div>
              <div className="admin-row__actions">
                <button className="admin-icon" onClick={() => move(i, -1)} title="Subir">
                  ↑
                </button>
                <button className="admin-icon" onClick={() => move(i, 1)} title="Descer">
                  ↓
                </button>
                <button className="admin-btn admin-btn--small" onClick={() => setEditing(p)}>
                  editar
                </button>
                <button
                  className="admin-btn admin-btn--small admin-btn--danger"
                  onClick={() => handleDelete(p)}
                >
                  excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
