import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { supabase, isSupabaseConfigured } from './supabase'
import { projects as staticProjects } from '../data/projects'
import { defaultPages } from '../data/pages'

const ContentContext = createContext(null)

// Converte um projeto do formato estático antigo (vimeoId) para o formato novo.
function normalizeStaticProject(p, i) {
  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    role: p.role,
    video_provider: p.vimeoId ? 'vimeo' : null,
    video_id: p.vimeoId || null,
    description: p.description || '',
    images: p.images || [],
    sort_order: i,
  }
}

const fallbackProjects = staticProjects.map(normalizeStaticProject)

// Garante que todas as chaves padrão existam, mesclando o que veio do banco.
function mergePages(rows) {
  const merged = JSON.parse(JSON.stringify(defaultPages))
  for (const row of rows || []) {
    merged[row.key] = { ...(merged[row.key] || {}), ...(row.content || {}) }
  }
  return merged
}

export function ContentProvider({ children }) {
  const [projects, setProjects] = useState(null)
  const [pages, setPages] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)

    // Sem Supabase configurado: usa os dados estáticos.
    if (!isSupabaseConfigured) {
      setProjects(fallbackProjects)
      setPages(mergePages([]))
      setLoading(false)
      return
    }

    try {
      const [projRes, pagesRes] = await Promise.all([
        supabase.from('projects').select('*').order('sort_order', { ascending: true }),
        supabase.from('pages').select('*'),
      ])

      if (projRes.error) throw projRes.error
      if (pagesRes.error) throw pagesRes.error

      // Se o banco ainda não tem projetos, mostra os estáticos como fallback.
      setProjects(projRes.data?.length ? projRes.data : fallbackProjects)
      setPages(mergePages(pagesRes.data))
    } catch (err) {
      console.error('Falha ao carregar conteúdo do Supabase:', err)
      setError(err)
      setProjects(fallbackProjects)
      setPages(mergePages([]))
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  return (
    <ContentContext.Provider value={{ projects, pages, loading, error, reload: load }}>
      {children}
    </ContentContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useContent() {
  const ctx = useContext(ContentContext)
  if (!ctx) throw new Error('useContent precisa estar dentro de <ContentProvider>')
  return ctx
}
