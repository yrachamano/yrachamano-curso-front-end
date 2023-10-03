const usernameCadastro = document.querySelector("#login")
const senhaCadastro = document.querySelector("#senha")
const dataNascimento = document.querySelector("#data_nascimento")
const email = document.querySelector("#email")


const btnCadastro = document.querySelector("#entrar")

btnCadastro.addEventListener("click", (evento) => {
    evento.preventDefault()
    if ( usernameCadastro.value == "" || senhaCadastro.value == "" || dataNascimento.value == "" || email.value == "") {
        alert("Existem campos há serem completados")
    } else {

        let logins = []
        if (localStorage.getItem("logins")) {
            logins = [...JSON.parse(localStorage.getItem("logins"))]
        }
        if ((!logins) || procuraLocal(logins, email.value) == -1) {
            let login =
                {
                    email: email.value,
                    nome: usernameCadastro.value,
                    senha: senhaCadastro.value,
                    dataDeNascimento: dataNascimento.value,
                    comentarios:''
                }
            logins[logins.length] = login
            localStorage.setItem("logins", JSON.stringify(logins))
            window.location.href = "./login.html"
        }
        else {
            alert("Email já cadastrado")
        }

    }
})

function procuraLocal(elemento, procura) {
    let resultado = elemento.findIndex(object => {
        return object.email == procura
    })
    return resultado
}