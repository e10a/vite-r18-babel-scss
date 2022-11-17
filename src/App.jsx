import { YellowCounterProvider } from 'context/YellowCounterProvider'
import { Route, Routes } from 'react-router-dom'
// import Home from 'pages/Home'
import './App.module.scss'
import { lazy } from 'react'

const Home = lazy(() => import('pages/Home'))

const App = () => {
  return (
    <YellowCounterProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </YellowCounterProvider>
  )
}

export default App
