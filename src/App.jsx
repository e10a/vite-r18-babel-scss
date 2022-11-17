import reactLogo from 'assets/icons/react.svg'
import './App.module.scss'
import useCounter from 'hooks/useCounter'
import Component from 'components/Component/Component'
import styles from './App.module.scss'
import { YellowCounterProvider } from 'context/YellowCounterProvider'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home';

// const Home = await import('pages/Home')

const App = () => {
  return (
    <YellowCounterProvider>
      <Home/>
    </YellowCounterProvider>
  )
}

export default App
