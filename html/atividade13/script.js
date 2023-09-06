const login = document.getElementById('login')
const senha = document.getElementById( 'senha')

const enviar = document.getElementById('entrar')

enviar.addEventListener('click',(event)=> {
    event.preventDefault();
    if(senha.value ==''){
    alert('senha não pode ser vazio')
    senha.classList = "erro"
    }
if(login.value ==''){
alert('login não pode ser vazio')
login.classList = "erro"
})

}

    

