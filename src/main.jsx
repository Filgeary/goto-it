import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './routes/app/App'
import FinalScreen from './routes/final/FinalScreen'
import Story from './routes/story/Story'
import WelcomeScreen from './routes/welcome/WelcomeScreen'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/welcome',
    element: <WelcomeScreen />,
  },
  {
    path: '/story/:id',
    element: <Story />,
  },
  {
    path: '/final',
    element: <FinalScreen />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
