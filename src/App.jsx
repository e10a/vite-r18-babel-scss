import { YellowCounterProvider } from 'context/YellowCounterProvider'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.module.scss'
import { lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'

const Home = lazy(() => import('pages/Home'))
const Dashboard = lazy(() => import('pages/Dashboard'))

const App = () => {
  const location = useLocation()
  return (
    <YellowCounterProvider>
      <Suspense fallback={<div>loading</div>}>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </YellowCounterProvider>
  )
}

export default App
