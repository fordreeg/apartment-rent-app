import React, {useCallback, useEffect} from 'react'
import useTelegram from "../hooks/useTelegram";
import Form from "../components/Form";


const MainView = () => {
  const {tg} = useTelegram()

  const onSendData = useCallback(() => {
    console.log('kek -->')
    const data = {
      country: 'ukraine',
      street: 'some',
      subject: 'ya'
    }
    tg.sendData(JSON.stringify(data));
  }, [tg])

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [onSendData, tg])

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить данные'
    })
  }, [tg.MainButton])

  useEffect(() => {
    tg.MainButton.show()
  }, [tg.MainButton])

  console.log('initDataUnsafe. -->', tg.initDataUnsafe)
  console.log('initData. -->', tg.initData)

  return (
    <main className='wrapper'>
      <h1 className='title'>введіть критерії пошуку</h1>
      <Form/>
    </main>
  )
}

export default MainView
