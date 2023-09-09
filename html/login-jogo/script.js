
const botaoLogin = document.getElementById('loginButton')
const login = document.getElementById('login')
const senha = document.getElementById('password')

audio.volume = 0.1
setTimeout(() => {
    audio.volume = 0
}, 2);

function options() {
    console.log(optionMenu)
    optionMenu.classList.toggle('active')
}

function volume(elemento) {
    console.log(elemento.value)
    audio.volume = elemento.value
}

botaoLogin.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(login.value, senha.value)
    if (login.value == '' ) {
        alert('login inválido')
    } else {
        alert(`seu login é ${login.value}`)
    }
    if (senha.value == '' ) {
        alert('senha inválida')
    } else {
        alert(`sua senha é ${senha.value}`)
    }
})