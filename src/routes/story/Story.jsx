import { useNavigate, useParams } from 'react-router-dom'

import img10 from '../../assets/img/10_result.webp'
import img11 from '../../assets/img/11_result.webp'
import img12 from '../../assets/img/12_result.webp'
import img13 from '../../assets/img/13_result.webp'
import img1 from '../../assets/img/1_result.webp'
import img2 from '../../assets/img/2_result.webp'
import img3 from '../../assets/img/3_result.webp'
import img4 from '../../assets/img/4_result.webp'
import img5 from '../../assets/img/5_result.webp'
import img7 from '../../assets/img/7_result.webp'
import img8 from '../../assets/img/8_result.webp'
import img9 from '../../assets/img/9_result.webp'
import LostPreview from '../../components/lost-preview/LostPreview'

import './Story.css'

const storiesMap = [
  {
    src: img1,
    text: 'Однажды, 2 группы совсем зелёных айтишников полетели на React интенсив. В 1 самолёте было 2 в 8 степени человек (они сами посчитались), на 2 самолёте было примерно 100.',
  },
  {
    src: img2,
    text: 'Во время полёта на самолёты внезапно обрушилась Форма Аутентификации. 2 самолёт начал теряться в облаках...',
  },
  {
    src: img3,
    text: '2 самолёт пропал окончательно. Но шторм продолжался и оставшиеся айтишники готовились к худшему...',
  },
  {
    src: img4,
    text: 'В какой-то момент и 1 самолёт стало засасывать в пучину неизвестности и опасности. На них обрушились: Каталог, Пагинация, Локализация, Авторизация, Алгоритм-Дерево. Это был слишком серьёзный удар и самолёт начал терять высоту... ',
  },
  {
    src: img5,
    text: 'error, error, unhandled rejection, 404, 503, SOS... <br/>\n\r Мечты многих айтишников разбились...',
  },
  {
    Component: LostPreview,
  },
  {
    src: img7,
    text: 'В тот день осталось только 14 счастливчиков. Их прозвали Стажёрами!',
  },
  {
    src: img8,
    text: 'Но в Сумеречной Долине они были не одни... Их поджидали никому неизвестные монстры: TypeScript, WebSocket, Vite, Canvas, SSR, WebWorker, AntDesign, Playwright...',
  },
  {
    src: img9,
    text: 'В конце концов они сразились в славной битве с Аттестейшен Босс! В том легендарном бою было поломано много клавиатур...',
  },
  {
    src: img10,
    text: 'Уцелело только 4 Стажёра... После битвы их прозвали Выжившими!',
  },
  {
    src: img11,
    text: 'И однажды вечером, около 6 часов, в пещере Выживших произошел магический созвон и грохотание! Невиданная сила спускалась с небес!',
  },
  {
    src: img12,
    text: 'Это прибыл Мастер Владмир! И он сказал Выжившим: "Следуйте за мной!"',
  },
  {
    src: img13,
    text: 'За 42 дня и 256 минут Выжившие прошли испытания Мастера, и они стали Волшебниками! В жажде новых приключений они отправились в...',
  },
]

const Story = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const isLastStory = +id === storiesMap.length
  const currentStory = storiesMap[+id - 1]
  const { Component: ComponentFromStory } = currentStory

  return (
    <>
      {ComponentFromStory ? (
        <ComponentFromStory />
      ) : (
        <div className='Story-wrapper'>
          <figure>
            <img
              className='Story-image'
              src={currentStory.src}
              alt='img1'
            />
          </figure>

          <div className='Story-text'>
            <h2>{currentStory.text}</h2>
          </div>
        </div>
      )}

      <button
        className='Story-control'
        onClick={() => navigate(!isLastStory ? `/story/${+id + 1}` : '/final')}
      >
        <span className='Story-control-text'>Далее</span>
      </button>
    </>
  )
}

export default Story
