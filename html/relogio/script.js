const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const body = document.querySelector('body')

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr= dateToday.getHours();
    let min= dateToday.getMinutes();
    let seg= dateToday.getSeconds();

    if(hr < 10 ) hr= '0'+ hr;
    if(min < 10 ) min= '0'+ min;
    if(seg < 10 ) seg= '0'+ seg;

    
    Horas.textContent= hr;
    Minutos.textContent= min;
    Segundos.textContent= seg;
})

if (hora >= 0 && hora < 6) {
    h1.innerText = "boa madrugada"
    body.style.backgroundImage = "var(--madruga)"
}

if (hora > 6 && hora < 12) {
    h1.innerText = "bom dia"
    body.stylecss.backgroundImage = "var(--manha)"
}

if (hora >= 12 && hora < 18) {
    h1.innerText = "Boa Tarde"
    body.stylecss.backgroundImage = "var(--tarde)"
}

if (hora => 18 && hora < 24) {
    h1.innerText = "Boa Noite"
    body.stylecss.backgroundImage = 'var(--noite)'
}