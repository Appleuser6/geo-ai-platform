import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
  }

  const handleCardClick = (index) => {
    if (index === 0) {
      window.open('https://www.hbuas.edu.cn/', '_blank')
    }
  }

  const modules = [
    '成矿预测', '城市地质', '绿色矿山', '项目管理',
    '电子界桩', '边坡监测', '环境监测', '应急服务',
    '三维规划', '智慧小区', '地下管网', '地名地址'
  ]

  return (
    <div className="dashboard-container">
      <div className="dashboard-background"></div>
      <div className="dashboard-content">
        <header className="dashboard-header">
          <div className="header-left">
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
          <div className="header-right">
            <div className="user-info">
              <span className="user-icon">👤</span>
              <span>管理员</span>
            </div>
            <button className="logout-button" onClick={handleLogout}>退出登录</button>
          </div>
        </header>
        <main className="dashboard-main">
          <div className="modules-grid">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`module-card ${index === 0 ? 'clickable' : ''}`}
                onClick={() => handleCardClick(index)}
              >
                <div className="card-icon">
                  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="8" width="48" height="48" rx="4" fill="none" stroke="#1890ff" strokeWidth="2"/>
                    <path d="M20 32 L44 32" stroke="#1890ff" strokeWidth="2" strokeDasharray="4,4"/>
                    <path d="M32 20 L32 44" stroke="#1890ff" strokeWidth="2"/>
                    <circle cx="32" cy="32" r="6" fill="#1890ff"/>
                  </svg>
                </div>
                <span className="card-text">{module}</span>
                {index === 0 && <span className="card-arrow">→</span>}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
