import { getData } from './fetchData'
import validateInpt from '../components/validateInput'
import getElements from '../components/elements'
import renderContent from '../components/weatherContent'

const displayData = () => {
  const { submitBtn, inpt} = getElements();
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.setItem('cname', inpt.value)
    renderCelcius()
    inpt.value = ''
  })
  const renderCelcius = () => {
    let cityname = localStorage.getItem('cname')
    const celcuisResponse = getData(cityname, 'metric')
    celcuisResponse.then((data) => {
      renderContent(data, '°C')
      const { btns } = getElements();
      toggleBtns(btns,name)
    }).catch(() => {
      validateInpt()
    })
  }
  const renderFaren = () => {
    let fname = localStorage.getItem('cname')
    const farenResponse = getData(fname, 'imperial')
    farenResponse.then((data) => {
      renderContent(data, '°F')
      const { btns } = getElements();
      toggleBtns(btns)
    })
  }
    
  const toggleBtns = (btns) => {
    btns.forEach(bt => {
      bt.addEventListener('click', () => {
        bt.textContent == 'Celcius' ? renderCelcius() : renderFaren()
      })
    })
  }
}

export default displayData
