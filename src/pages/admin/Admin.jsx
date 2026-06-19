import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase, isSupabaseConfigured } from '../../lib/supabase'
import Login from './Login'
import ProjectsManager from './ProjectsManager'
import PagesManager from './PagesManager'

export default function Admin() {
  const [session, setSession] = useState(null)
  const [checking, setChecking] = useState(isSupabaseConfigured)
  const [tab, setTab] = useState('projetos')

  useEffect(() => {
    if (!isSupabaseConfigured) return
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setChecking(false)
    })
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, s) => setSession(s))
    return () => subscription.unsubscribe()
  }, [])

  if (!isSupabaseConfigured) {
    return (
      <div className="admin-shell">
        <div className="admin-card admin-card--center">
          <h1 className="admin-logo">Painel</h1>
          <p className="admin-note">
            O Supabase ainda não está configurado. Crie o arquivo <code>.env</code> com
            <code> VITE_SUPABASE_URL</code> e <code>VITE_SUPABASE_ANON_KEY</code> e reinicie o
            servidor. Veja o <code>README.md</code>.
          </p>
          <Link to="/" className="admin-link">
            ← voltar ao site
          </Link>
        </div>
      </div>
    )
  }

  if (checking) {
    return <div className="admin-shell">carregando…</div>
  }

  if (!session) {
    return <Login />
  }

  return (
    <div className="admin-shell">
      <header className="admin-header">
        <div className="admin-header__left">
          <span className="admin-logo">Painel</span>
          <nav className="admin-tabs">
            <button
              className={`admin-tab ${tab === 'projetos' ? 'admin-tab--active' : ''}`}
              onClick={() => setTab('projetos')}
            >
              Projetos
            </button>
            <button
              className={`admin-tab ${tab === 'paginas' ? 'admin-tab--active' : ''}`}
              onClick={() => setTab('paginas')}
            >
              Páginas
            </button>
          </nav>
        </div>
        <div className="admin-header__right">
          <Link to="/" className="admin-link" target="_blank">
            ver site ↗
          </Link>
          <button className="admin-btn admin-btn--ghost" onClick={() => supabase.auth.signOut()}>
            sair
          </button>
        </div>
      </header>

      <main className="admin-main">
        {tab === 'projetos' ? <ProjectsManager /> : <PagesManager />}
      </main>
    </div>
  )
}
