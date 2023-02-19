const tg = window.Telegram.WebApp

const useTelegram = () => {
  const onCloseApp = () => {
    tg.close()
  }

  const onReadyApp = () => {
    tg.ready()
  }

  return {
    onCloseApp,
    onReadyApp,
    tg,
    user: tg?.initDataUnsafe?.user
  }
}

export default useTelegram
