import { getData, getFarenheight } from './fetchData'
import validateInpt from './validateInput'
import getElements from '../components/elements'
import renderContent from '../components/weatherContent'

const displayData = () => {
  const { submitBtn, inpt} = getElements();
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    renderCelcius()
  })
  const renderCelcius = () => {
    const celcuisResponse = getData(inpt.value)
    celcuisResponse.then((data) => {
      renderContent(data, '°C')
      const { btns } = getElements();
      toggleBtns(btns)
    })
  }
  const renderFaren = () => {
      const farenResponse = getFarenheight(inpt.value)
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
