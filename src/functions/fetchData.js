const getData = (city) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=92991e52ab85aab6dc928ff69d5ed09b`)
  .then((response) => {
    const data = response.json();
    return data
  })
}

const getFarenheight = (city) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=92991e52ab85aab6dc928ff69d5ed09b`)
  .then((response) => {
    const data = response.json();
    return data
  }) 
}

export { getData, getFarenheight }
