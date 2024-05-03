import { useNavigate } from 'react-router-dom'
import reactLogo from '../../assets/react.svg'
import './FinalScreen.css'

function FinalScreen() {
  const navigate = useNavigate()

  return (
    <>
      <div className='FinalScreen-wrapper'>
        <img
          src={reactLogo}
          width={300}
          height={300}
          className='FinalScreen-logo'
          alt='React logo'
        />
        <h1 style={{ fontSize: '6rem' }}>Гильдия React</h1>

        <button onClick={() => navigate('/')}>Начать сначала</button>
      </div>
    </>
  )
}

export default FinalScreen
