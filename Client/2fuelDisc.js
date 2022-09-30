let submitBtn = document.querySelector('#submitBtn')
let form = document.querySelector('#input-form')

const submitInfo = (e) => {
    e.preventDefault()
    
    alert("Your request has been submitted successfully.");

    let ownerInput = document.querySelector('#owner')
    let companyInput = document.querySelector('#company')
    let emailInput = document.querySelector('#email')
    let yearsInput = document.querySelector('#years')
    let numInput = document.querySelector('input[name="radio"]:checked')

    ownerInput.value = ''
    companyInput.value = ''
    emailInput.value = ''
    yearsInput.value = ''
    numInput.checked = false

}
form.addEventListener('submit', submitInfo)