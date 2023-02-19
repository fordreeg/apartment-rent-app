import React, {useEffect} from 'react'
import MainView from "./views/main.view"
import useTelegram from "./hooks/useTelegram";

function App() {
  const {onReadyApp} = useTelegram()

  useEffect(() => {
    onReadyApp()
  }, [onReadyApp])

  return (
    <div className="App">
      <MainView/>
      <a href="https://telegram.me/manqarium" className='author'>by vherasymenko</a>
    </div>
  )
}

export default App
