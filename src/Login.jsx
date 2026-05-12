import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import loginBg from './assets/image/login-bg.png'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="login-container">
      <div className="login-background" style={{ backgroundImage: `url(${loginBg})` }}></div>
      <div className="login-overlay"></div>
      <div className="login-content">
        <div className="login-header">
          <div className="logo">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="#ffffff" strokeWidth="3"/>
              <path d="M50 20 L80 50 L50 80 L20 50 Z" fill="none" stroke="#ffffff" strokeWidth="2"/>
              <circle cx="50" cy="50" r="8" fill="#ffffff"/>
              <line x1="50" y1="10" x2="50" y2="20" stroke="#ffffff" strokeWidth="2"/>
              <line x1="50" y1="80" x2="50" y2="90" stroke="#ffffff" strokeWidth="2"/>
              <line x1="10" y1="50" x2="20" y2="50" stroke="#ffffff" strokeWidth="2"/>
              <line x1="80" y1="50" x2="90" y2="50" stroke="#ffffff" strokeWidth="2"/>
            </svg>
          </div>
          <h1 className="title">襄阳地质资源环境大数据平台</h1>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <div className="input-wrapper">
                            <svg className="input-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M4 21C4 17.6863 7.58172 15 12 15C16.4183 15 20 17.6863 20 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="请输入用户名"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-wrapper">
              <svg className="input-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12" cy="16" r="1" fill="currentColor"/>
              </svg>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="请输入密码"
                required
              />
            </div>
          </div>
          <button type="submit" className="login-button">登 录</button>
        </form>
      </div>
    </div>
  )
}

export default Login

