import getElements from './elements'
import { createElementWithAttributes, setAttributesForElements, apendChildren } from '../helpers/helper'
const renderContent = (data) => {
  const { mainDiv } = getElements();
  setAttributesForElements(mainDiv, 'bg-success')
  const p1 = createElementWithAttributes('p', 'main', `Main: ${data.weather[0].main}`)
  const p2 = createElementWithAttributes('p', 'description', `Description: ${data.weather[0].description}`)
  const p3 = createElementWithAttributes('p', 'max', `Max: ${data.main.temp_max}`)
  const p4 = createElementWithAttributes('p', 'min', `Min: ${data.main.temp_min}`)
  const p5 = createElementWithAttributes('p', 'feels like', `Feels Like: ${data.main.feels_like}`)
  apendChildren(mainDiv, p1, p2, p3, p4, p5)
}

export default renderContent
