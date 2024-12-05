// mob header
document.querySelector('.burger__menu').addEventListener('click', function () {
    this.classList.toggle('active')
    document.querySelector('.mobile__nav').classList.toggle('active')
}); 

// modalWindow
function openModal() {
    document.querySelector('.modal__window').classList.remove('none')
}

function closeModal() {
    document.querySelector('.modal__window').classList.add('none')
}

// form validate

function validateForm() {
    const name = document.getElementById('name').value.trim()
    const phone = document.getElementById('phone').value.trim()
    const nameError = document.getElementById('nameError')
    const phoneError = document.getElementById('phoneError')

    let hasError = false

    if (name === '') {
        nameError.textContent = 'Name is required'
        document.getElementById('name').classList.add('error-border')
        setTimeout(() => {
            nameError.textContent = '';
        }, 3000);
        hasError = true;
    } else {
        nameError.textContent = '';
        document.getElementById('name').classList.remove('error-border')
    }

    const phonePattern = /^\+?[0-9]{10,15}$/
    if (phone === '') {
        phoneError.textContent = 'Phone number is required'
        document.getElementById('phone').classList.add('error-border')
        setTimeout(() => {
            phoneError.textContent = ''
        }, 3000)
        hasError = true;
    } else if (!phonePattern.test(phone)) {
        phoneError.textContent = 'Invalid phone number format'
        document.getElementById('phone').classList.add('error-border')
        setTimeout(() => {
            phoneError.textContent = ''
        }, 3000);
        hasError = true;
    } else {
        phoneError.textContent = ''
        document.getElementById('phone').classList.remove('error-border')
    }

    return hasError;
}

document.querySelectorAll('.active__modal').forEach(button => {
    button.addEventListener('click', openModal);
})
document.querySelector('.frame__exit').addEventListener('click', closeModal)
document.querySelector('.form__contact').addEventListener('click', function (event) {
    event.preventDefault()
    if (!validateForm()) {
        document.getElementById('modalForm').submit()
    }
})