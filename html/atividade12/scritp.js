//onmouseenter="Azul()"
//   onmouseout="Vermelho()"
//   onmousedown="clicou()"
//   onmouseup="soltou()"//
//
//
//

//const div = document.getElementById('quadrado')//

//div.addEventListener('mouseenter',Azul)
//div.addEventListener('mouseout', Vermelho)
//div.addEventListener('mousedown',clicou)
//div.addEventListener('mouseup',soltou)//
//

//function Azul(){
//    div.style.backgroundColor = 'blue'
// }
// function Vermelho(){
//    
//    div.style.backgroundColor = 'red'
// }
// function clicou(){
//    div.innerHTML= `<ul>
//    <li>item 1 </li>
//    <li>item 2 </li>
//    <li>item 3 </li>
//    </ul>`
//    
//           
//    
//     
//        
//    
// }
// function soltou(){
// div.innerText = ' '
// }//

const soma = document.getElementById('soma')
const div = document.getElementById('resposta')

soma.addEventListener('click', soma)


function soma(){
var valor1 = document.getElementById('n1').value
var valor2 = document.getElementById('n2').value
var resposta = number(valor1) + number(valor2)
div.innerText = resposta
}










