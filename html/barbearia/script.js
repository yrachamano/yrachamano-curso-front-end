const btnSair = document.querySelector("#sair")
const btnCadastro = document.querySelector("#cadastro")
const btnCadastroMobile = document.querySelector("#cadastro-mobile")
const perfil = document.querySelectorAll(".perfil-nav")


btnSair.addEventListener("click", () => {
  localStorage.setItem("isLoggedIn", JSON.stringify(false))
  localStorage.removeItem("loggedAccount")
})

if(localStorage.getItem("isLoggedIn")  == "true") {
  btnCadastro.parentElement.classList.add("inactive")
  btnCadastroMobile.parentElement.classList.add("inactive")
  perfil.forEach(atual => {
    atual.classList.remove("inactive")
    atual.classList.add("active")
  })
}
//comentarios
const btnAdicionar = document.getElementById('adicionar')
let listaTarefas = document.querySelector('ul')
const valorTarefa = document.getElementById('texto-input')

btnAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault()
    
    if (valorTarefa.value == '' ) {
        alert('Digite uma tarefa válida')
    } else {
        escutador()
        const tarefa = criarTarefa(valorTarefa.value)
        redereizarTarefa(tarefa)
        salvadorMemoria()
    }

    valorTarefa.value = ''
})

function criarTarefa (valorTarefa) {
    const li = document.createElement('li')
    li.innerHTML = `<span>
    ${valorTarefa}</span>
    <div>
        <button class="excluir"></button>
        <button class="concluir"></button>
    </div>
    `
    return li
}

function redereizarTarefa (tarefa) {
    const listaTarefas = document.querySelector('ul')
    listaTarefas.appendChild(tarefa)
}

function salvadorMemoria () {
    let itensLista = listaTarefas.innerHTML
    localStorage.setItem('itens', JSON.stringify(itensLista))
}

function escutador () {
    listaTarefas.addEventListener('click', (elemento) => {
        elemento.stopImmediatePropagation()

        const itemclickado = elemento.target;

        if (itemclickado.parentElement.classList.contains('excluir')) {
            itemclickado.parentElement.parentElement.parentElement.remove()
            salvadorMemoria()
        } else if (itemclickado.classList.contains('excluir')) {
            itemclickado.parentElement.parentElement.remove()
        } else if (itemclickado.parentElement.classList.contains('concluir')) {
            if (itemclickado.parentElement.parentElement.parentElement.firstChild.classList.contains('concluido')) {
                itemclickado.parentElement.parentElement.parentElement.firstChild.classList.remove('concluido')
            } else {
                itemclickado.parentElement.parentElement.parentElement.firstChild.classList.add('concluido')
            }
            
            salvadorMemoria()
        } else if (itemclickado.classList.contains('concluir')) {
            itemclickado.parentElement.parentElement.firstChild.classList.toggle('concluido')
            salvadorMemoria()
        }
    })
}

if (localStorage.getItem('itens')) {
    let codeInicio = JSON.parse(localStorage.getItem('itens'))
    listaTarefas.innerHTML = codeInicio
    listaTarefas = document.querySelector('ul')
    escutador()
}
   
   
  
  //promocoes
  const promocionais = document.getElementById('promocionais')
const promocionaisCards = [...promocionais.querySelectorAll('article')]
let continuaCarouselCards = true
let indexCardsPromocionais = 0
rodaPromocionais()

promocionaisCards.forEach((element, index) => {
  const elementFilho = element.querySelector('.front-promocionais')
  const elementNeto = [...elementFilho.children]
  console.log(elementFilho)
  element.addEventListener('mouseenter', () => {
    indexCardsPromocionais = index;
    continuaCarouselCards = false;
    limpaPromocionais()
  })



  elementFilho.addEventListener('mouseenter', () => {
    console.log('ayo')
    continuaCarouselCards = false
  })
  elementNeto.forEach(neto => {
    neto.addEventListener('mouseenter', ()=> {
      continuaCarouselCards = false
    })
  })
  elementFilho.addEventListener('mouseout', () => {
    console.log('eita')
    continuaCarouselCards = true;
  })
})

function limpaPromocionais () {
  promocionaisCards.forEach(element => {
    if (element.classList.contains('active')) element.classList.remove('active');
  })
}

function rodaPromocionais () {
  if (continuaCarouselCards) {
      limpaPromocionais();
      promocionaisCards[indexCardsPromocionais].classList.add('active');
  }
}

setInterval(() => {
  if(continuaCarouselCards) {
    (indexCardsPromocionais == promocionaisCards.length - 1) ? indexCardsPromocionais = 0 : indexCardsPromocionais++;
    rodaPromocionais() 
  }
}, 5000);


