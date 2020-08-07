import getData from './fetchData'
import validateInpt from './validateInput'
import renderContent from '../components/weatherContent'
const displayData = () => {
  const p = document.querySelector('p')
  const inpt = document.querySelector('.loc')
  const submitBtn = document.querySelector('.submit')
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const res = getData(inpt.value)
    res.then((response) => {
      const data = response.json();
      return data
    }).then((data) => {
      renderContent(data)
    }).catch((error) => {
      console.log(error.message)
    })
  })
}

export default displayData