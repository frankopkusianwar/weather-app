import getElements from './elements'

const { mainDiv, body } = getElements();

const validateInpt = () => {
  mainDiv.textContent = 'City Not Found'
  body.setAttribute('class', 'bg-light')
}

export default validateInpt
