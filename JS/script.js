const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const jobSelect = document.querySelector('#job')
const messageTextarea = document.querySelector('#message')

console.log(form, nameInput, emailInput)

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // verifica se o nome esta vazio
    if(nameInput.value === '') {
        alert('Por favor, preencha o seu nome!')
        return
    }

    // verifica se o e-mail esta preenchido e se é valido
    if(emailInput.value === '' || !isEmailValide(emailInput.value)) {
        alert('Por favor, preencha o seu email!')
        return
    }

    // verificar se a senha esta preenchida
    if(!validatePassword(passwordInput.value, 8)) {
        alert('A senha precisa ter no minimo 8 digitos')
    }

    // verifica se a situação foi selecionada
    if(jobSelect.value === '') {
        alert('Por favor, selecione a situação')
        return
    }

    // verifica se a situação foi selecionada
    if(messageTextarea.value === '') {
        alert('Por favor, escreva uma mensagem')
        return
    }


    // Se todos os campos estiverem preenchidos
    form.submit()
})

// função que valida o e-mail
function isEmailValide(email) {

    // criar uma regex para validar email
    const emailRegex = new RegExp(
        // usuario12@host.com.br
        /^[zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )
    if(emailRegex.test{email}) {
        return true
    }

    return false
}

// função que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        // senha valida
        return true
    }

    // senha invalida
    return false
}