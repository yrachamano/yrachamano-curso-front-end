const username = document.getElementById("#login")
const senha = document.getElementById("#senha")
const btnEnviar = document.getElementById("#enviar")

let logins = []
if (localStorage.getItem("logins")) {
    logins = [...JSON.parse(localStorage.getItem("logins"))]
}

btnEnviar.addEventListener("click", (evento) => {
    evento.preventDefault()
    console.log(username.value)
    if(username.value == "" ||  senha.value == "") {
        alert("Ainda há campos a serem preenchidos")
    }
    else {
        const index = logins.findIndex( (object) => {
            return object.email == username.value
        })
        if (logins[index].senha == senha.value && index != -1) {
            localStorage.setItem("isLoggedIn", true)
            localStorage.setItem("loggedAccount", JSON.stringify(logins[index]))
            window.location.href = "../index.html"
        } else if (logins[index].senha != senha.value){
            alert("Senha incorreta")
        } else {
            alert("login não encontrado")
        }
    }
})