import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate()

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          alignItems: 'center',
        }}
      >
        <h2
          style={{
            textAlign: 'end',
            marginLeft: 'auto',
            transform: 'translateX(70px)',
          }}
        >
          <i>Коламбия Пикчерз не представляет</i>
        </h2>
        <h1 style={{ fontSize: '7rem' }}>Войти в АйТи</h1>
        <span style={{ marginTop: -30, marginBottom: 30 }}>основано на реальных событиях</span>

        <button onClick={() => navigate('/welcome')}>Далее</button>
      </div>
    </>
  )
}

export default App
