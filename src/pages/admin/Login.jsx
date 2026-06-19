import { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../../lib/supabase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError('E-mail ou senha inválidos.')
    setLoading(false)
  }

  return (
    <div className="admin-shell">
      <form className="admin-card admin-card--center" onSubmit={handleSubmit}>
        <h1 className="admin-logo">Painel</h1>
        <p className="admin-note">Entre para gerenciar o conteúdo do site.</p>

        <label className="admin-field">
          <span>E-mail</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </label>

        <label className="admin-field">
          <span>Senha</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </label>

        {error && <p className="admin-error">{error}</p>}

        <button type="submit" className="admin-btn" disabled={loading}>
          {loading ? 'entrando…' : 'entrar'}
        </button>

        <Link to="/" className="admin-link">
          ← voltar ao site
        </Link>
      </form>
    </div>
  )
}
