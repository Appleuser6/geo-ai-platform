import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
      <div className="login-background"></div>
      <div className="login-content">
        <div className="login-header">
          <div className="logo">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="#1890ff" strokeWidth="3"/>
              <path d="M50 20 L80 50 L50 80 L20 50 Z" fill="none" stroke="#1890ff" strokeWidth="2"/>
              <circle cx="50" cy="50" r="8" fill="#1890ff"/>
              <line x1="50" y1="10" x2="50" y2="20" stroke="#1890ff" strokeWidth="2"/>
              <line x1="50" y1="80" x2="50" y2="90" stroke="#1890ff" strokeWidth="2"/>
              <line x1="10" y1="50" x2="20" y2="50" stroke="#1890ff" strokeWidth="2"/>
              <line x1="80" y1="50" x2="90" y2="50" stroke="#1890ff" strokeWidth="2"/>
            </svg>
          </div>
          <h1 className="title">襄阳地质资源环境大数据平台</h1>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">用户名</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="请输入用户名"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">密码</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="请输入密码"
              required
            />
          </div>
          <button type="submit" className="login-button">登录</button>
        </form>
      </div>
    </div>
  )
}

export default Login
