import getData from '../functions/fetchData'
import validateInpt from '../functions/validateInput'

const displayData = () => {
  const inpt = document.querySelector('.loc')
  const submitBtn = document.querySelector('.submit')
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    validateInpt(inpt.value)
    getData(inpt.value)
  })
}

export default displayData