const usernameRegex = /[a-z]+[0-9]+[_@./!*#&+-]$/i;
const nameRegex = /^[a-zA-Z][a-zA-Z \-']+$/;

const userInput = document.querySelector('#user-input');
const firstNameInput = document.querySelector('#first-name-input');
const surnameInput = document.querySelector('#surname-input');
const dobInput = document.querySelector('#dob-input');
const form = document.querySelector('form');

const warning = document.createElement('p');

dobInput.addEventListener('blur', handleDate)

function handleDate(event) {
    const inputDate = event.target.value;
    const inputYear = inputDate.slice(0,4)
    let dateNow = new Date();
    let currentYear = dateNow.getFullYear();
    let usersAge = currentYear - +inputYear;
    if (usersAge <18) {
        event.target.classList.add('invalid')
        event.target.classList.remove('valid')
        
        warning.innerText = `${event.target.value} is invalid, you must be 18 or over to sign in`
        event.target.parentNode.appendChild(warning)
        
    }
    else {
        event.target.classList.add('valid')
        event.target.classList.remove('invalid')
        warning.remove()
    }
}



userInput.addEventListener('blur', (event) => {validateUserInput(event, usernameRegex)});
firstNameInput.addEventListener('blur', (event) => {validateNameInput(event, nameRegex)});
surnameInput.addEventListener('blur', (event) => {validateNameInput(event, nameRegex)})

function validateNameInput(event, regex) {
    const input = event.target.value;

    if (regex.test(input)) {
        event.target.classList.add('valid')
        event.target.classList.remove('invalid')
        warning.remove()
    }
    else {
        event.target.classList.add('invalid')
        event.target.classList.remove('valid')

        
        warning.innerText = `${event.target.value} is invalid, name must only contain letters, spaces, hyphens and apostrophes`
        event.target.parentNode.appendChild(warning)
    }
}
function validateUserInput(event, regex) {
    const input = event.target.value;

    if (regex.test(input)) {
        event.target.classList.add('valid')
        event.target.classList.remove('invalid')
        warning.remove()
    }
    else {
        event.target.classList.add('invalid')
        event.target.classList.remove('valid')
        
        warning.innerText = `${event.target.value} is invalid, username must contain letters, numbers and at least 1 special character`
        event.target.parentNode.appendChild(warning)
       
    }
}

form.addEventListener('submit', validateSubmit);

function validateSubmit(event) {
    if(!userInput.classList.contains('valid') || !firstNameInput.classList.contains('valid') || !surnameInput.classList.contains('valid') || !ageCheck) {
        event.preventDefault();
    }
}