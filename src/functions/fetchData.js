const getData = (city) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=92991e52ab85aab6dc928ff69d5ed09b`)
}

export default getData
