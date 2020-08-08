import getElements from './elements'
import { createElementWithAttributes, setAttributesForElements, apendChildren, setBodyBackground } from '../helpers/helper'

const { mainDiv, body } = getElements();

const renderContent = (data, str) => {
  mainDiv.textContent = ''
  setBodyBackground(data.weather[0].main, body)
  setAttributesForElements(mainDiv, 'bg-dark text-white p-3 mx-auto w-50 text-center')
  const h3 = createElementWithAttributes('h3', 'main', `${data.main.temp_max} ${str}`)
  const h5 = createElementWithAttributes('h5', 'main', `${data.name}`)
  const p1 = createElementWithAttributes('p', 'main', `Main: ${data.weather[0].main}`)
  const p2 = createElementWithAttributes('p', 'description', `Description: ${data.weather[0].description}`)
  const p3 = createElementWithAttributes('p', 'max', `Max: ${data.main.temp_max} ${str}`)
  const p4 = createElementWithAttributes('p', 'min', `Min: ${data.main.temp_min} ${str}`)
  const p5 = createElementWithAttributes('p', 'feels like', `Feels Like: ${data.main.feels_like} ${str}`)
  const buttonDiv = createElementWithAttributes('div', '', '')
  const button1 = createElementWithAttributes('button', 'btns btn btn-light mr-3', 'Celcius')
  const button2 = createElementWithAttributes('button', 'btns btn btn-light', 'FarenHeight')
  apendChildren(mainDiv, p1, p2, p3, p4, p5, h5, h3, buttonDiv, button1, button2)
}

export default renderContent
