//const procurar = document.querySelector('#procurar')
const logradouro = document.getElementById('logradouro')
const bairro = document.getElementById('bairro')
const complemento = document.getElementById('complemento')
const inputCep =  document.getElementById('input-cep')



inputCep.addEventListener('blur', (evento)=>{
evento.preventDefault()

let cep = inputCep.value


cep= cep.replace("-","")


if (cep.length != 8){
alert('CEP invalido')
}

else{
    
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(response => response.json())
.then(data => {
    logradouro.value = data.logradouro
    bairro.value = data.bairro
    complemento.value = data.complemento
})
//.catch(err => {
//    console.log(err)
//})
}

})