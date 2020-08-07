import getData from './fetchData'
import validateInpt from './validateInput'
import renderContent from '../components/weatherContent'
const displayData = () => {
  const p = document.querySelector('p')
  const inpt = document.querySelector('.loc')
  const submitBtn = document.querySelector('.submit')
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    validateInpt(inpt.value)
    const res = getData(inpt.value)
    res.then((response) => {
      const data = response.json();
      return data
    }).then((data) => {
      console.log(data)
      renderContent(data)
    }).catch((error) => {
      console.log(error.message)
    })
  })
}

export default displayData