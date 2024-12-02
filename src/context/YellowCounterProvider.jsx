import React, { createContext, useCallback, useContext, useState } from 'react'
import PropTypes from 'prop-types'

export const YellowCounterContext = createContext({
  value: 0,
  increment: () => {}
})

export const YellowCounterProvider = ({ children }) => {
  const [value, setValue] = useState(0)

  const increment = useCallback(() => {
    setValue(value + 1)
  }, [value])

  return (
    <YellowCounterContext.Provider value={{ value, increment }}>
      {children}
    </YellowCounterContext.Provider>
  )
}

YellowCounterProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export function useYellowCounter() {
  const context = useContext(YellowCounterContext)
  if (context === undefined) {
    throw new Error('useYellowCounter must be used within a YellowCounterProvider')
  }
  return context
}
