let email = document.querySelector('#email')
let password = document.querySelector('#password')
let email_error = document.querySelector('.email-error')
let pass_error = document.querySelector('.pass-error')

const f_email = "john@gmail.com"
const f_pass = "123456"

function check() {
    email_error.style.color = 'red'
    email_error.textContent = ''
    pass_error.style.color = 'red'
    pass_error.textContent = ''


    if ((email.value != '') ? email.value != f_email : '')
        email_error.textContent = "Email Not Found"

    if ((email.value != '') ? (!email.value.includes('@') && !email.value.includes('.')) : '')
        email_error.textContent = "Email is Not Valid"

    if (email.value === f_email) {
        email_error.style.color = 'green'
        email_error.textContent = "Email is Valid"
    }

    if ((password.value != '') ? password.value != f_pass : '')
        pass_error.textContent = "Password Not Found"

    if ((password.value != '') ? password.value === f_pass : '') {
        pass_error.style.color = 'green'
        pass_error.textContent = "Password is Valid"
    }

}