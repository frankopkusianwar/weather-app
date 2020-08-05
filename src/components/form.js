const renderForm = () => {
  const formDiv = document.querySelector('.form-fields')
  formDiv.setAttribute('class', 'mt-5')
  const form = document.createElement('form')
  const formGroup = document.createElement('div')
  formGroup.setAttribute('class', 'form-group')
  const formInput = document.createElement('input')
  formInput.setAttribute('type', 'text')
  formInput.setAttribute('class', 'form-control')
  formInput.setAttribute('id', 'location')
  formInput.setAttribute('placeholder', 'Enter Location')
  const btn = document.createElement('button')
  btn.setAttribute('type', 'submit')
  btn.setAttribute('class', 'btn btn-primary mt-2')
  btn.setAttribute('id', 'submit')
  btn.textContent = 'Submit';

  
  formGroup.appendChild(formInput)
  formGroup.appendChild(btn)
  form.appendChild(formGroup)
  formDiv.appendChild(form)
}

export default renderForm





/* <form>
      <div class="form-group">
        <input type="text" class="form-control" id="location">
      </div>
      <button type="submit" class="btn btn-primary" id="submit">Submit</button>
    </form> */