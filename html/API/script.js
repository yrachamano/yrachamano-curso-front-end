const cep = document.getElementById('cep')
const btnEnviar = document.querySelector('button')

btnEnviar.addEventListener('click',(evento)=>{
    evento.preventDefault()
    
    

fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
.then(response => response.json())
.then(data => {
    l(data)
})

})


function l(mensagem){
    console.log(mensagem)
}
//72641110