//const KEY_OPENAI = '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'//

//let mensagem = 'quais são as girias do rio de janeiro?'//

//fetch('https://api.openai.com/v1/completions',{
//    method:'POST',
//    headers:{
//        Acecept:"application/json",
//        "content-type":"application/json",
//        Authorization: `Bearer ${KEY_OPENAI}`
//    },
//    body: JSON.stringify({
//        model:"text-davinci-002",
//        prompt: mensagem,
//        max_tokens: 2048,
//        temperature: 0.5,//

//    })
//})
//.then(response => response.json() )
//.then(data => {
//    console.log(data)
//})
//.catch(erro =>{
//    console.log(erro)
//})

const secao = document.querySelector("section")

fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                let coisas = json
                criarCoisas(coisas)
            })


function criarCoisas (cositas) {
    cositas.forEach(element => {
        let objeto = `<div class="card">
        <img src="${element.image}">
        <h4>${element.title}</h4>
        <span class="description">${element.description}</span>
        <span class="nota-container">nota : <span class="nota">${element.rating.rate}</span></span>
        <span class="valor">${element.price}</span> 
        <button>comprar</button>
        </div>`

        secao.innerHTML += objeto
    });
}