// MOCKUP


export function fetchWaterConsumption(fetchActions) {
  fetchActions.start()
  fetchActions.receive(mockHistory())
}

const mockHistory = () => {
  let date = new Date()
  const hist = {}
  for(let i = 0; i < 30; i++){
    hist[date.toISOString().substr(0, 10)] = Math.floor(Math.random() * 10)
    date.setDate(date.getDate() - 1)
  }
  return hist
}