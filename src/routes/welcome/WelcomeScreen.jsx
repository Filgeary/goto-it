import { useNavigate } from 'react-router-dom'

function WelcomeScreen() {
  const navigate = useNavigate()

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 50, alignItems: 'center' }}>
        <h1 style={{ fontSize: '5rem' }}>Здесь будет много:</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <h2>
            <i>кино</i>
          </h2>
          <h2>
            <i>магии</i>
          </h2>
          <h2>
            <i>и чуток юмора...</i>
          </h2>
        </div>

        <button onClick={() => navigate('/story/1')}>Далее</button>
      </div>
    </>
  )
}

export default WelcomeScreen
