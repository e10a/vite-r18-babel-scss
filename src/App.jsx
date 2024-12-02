// import { YellowCounterProvider } from 'context/YellowCounterProvider'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.module.scss'
import React, { lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'

const modules = import.meta.glob('./pages/**/*.jsx')

// const Navigation = lazy('./components/Navigation/Navigation')
import Navigation from 'components/Navigation/Navigation'

console.clear()
const routes = Object.keys(modules).map((filePath) => {
  const Component = lazy(modules[filePath])
  const routePath = filePath
    .replace('./pages/', '') // Remove the base directory
    .replace('.jsx', '') // Remove the file extension
    .toLowerCase() // Convert to lowercase
  console.log(routePath)
  return { path: routePath === 'home/home' ? '/' : `/${routePath}`, component: Component }
})

const App = () => {
  const location = useLocation()

  return (
    <>
      <Navigation routes={routes} />
      <Suspense fallback={<div>loading</div>}>
        <>
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              {routes.map(({ path, component: Component }, index) => (
                <Route key={index} path={path} element={<Component />} />
              ))}
            </Routes>
          </AnimatePresence>
        </>
      </Suspense>
    </>
  )
}

export default App
