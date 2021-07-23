import React from 'react'
import MyComponents from './components/MyComponents'
import StoreProvider from './store/StoreProvider'

const App = () => {
  return (
    <div>
      <StoreProvider>
        <MyComponents />
      </StoreProvider>
    </div>
  )
}

export default App
