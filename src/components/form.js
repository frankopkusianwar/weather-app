import getElements from './elements'
import { createElementWithAttributes, setAttributesForElements, apendChildren, setAttributesForInput } from '../helpers/helper'

const renderForm = () => {
  const { formDiv } = getElements();
  setAttributesForElements(formDiv, 'mt-5 bg-light border w-50 p-3 mx-auto')
  const form = createElementWithAttributes('form', 'form')
  const formGroup = createElementWithAttributes('div', 'form-group')
  const formInput = createElementWithAttributes('input', 'form-control loc')
  setAttributesForInput(formInput, 'text', 'Enter City Name', 'location', '')
  const btn = createElementWithAttributes('button', 'btn btn-dark mt-2 submit')
  setAttributesForInput(btn, 'submit', '', 'submit', 'Submit')
  
  formGroup.appendChild(formInput)
  formGroup.appendChild(btn)
  form.appendChild(formGroup)
  formDiv.appendChild(form)
}

export default renderForm
