import { YellowCounterProvider } from 'context/YellowCounterProvider'
import { Route, Routes } from 'react-router-dom'
import './App.module.scss'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('pages/Home'))
const Dashboard = lazy(() => import('pages/Dashboard'))

const App = () => {
  return (
    <YellowCounterProvider>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </YellowCounterProvider>
  )
}

export default App
