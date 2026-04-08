import { useState } from 'react'
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Projeto from './pages/Projeto'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)

  // Close menu on route change
  if (menuOpen) {
    const unlisten = () => setMenuOpen(false)
  }

  return (
    <div className="app">
      <button
        className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>

      {menuOpen && <div className="overlay overlay--visible" onClick={closeMenu} />}

      <aside className={`sidebar ${menuOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar__brand">
          <div className="sidebar__name">
            <Link to="/" onClick={closeMenu}>Eduardo<br />Conti</Link>
          </div>
          <div className="sidebar__tagline">diretor de fotografia</div>
        </div>

        <nav className="sidebar__nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`}
            onClick={closeMenu}
          >
            projetos
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) => `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`}
            onClick={closeMenu}
          >
            sobre
          </NavLink>
          <NavLink
            to="/contato"
            className={({ isActive }) => `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`}
            onClick={closeMenu}
          >
            contato
          </NavLink>
        </nav>

        <div className="sidebar__footer">
          Eduardo Conti {new Date().getFullYear()}
        </div>
      </aside>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projeto/:slug" element={<Projeto />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
