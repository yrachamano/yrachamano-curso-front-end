programa {
  
  inclua biblioteca Matematica --> mat
    
   funcao menu(){
    escreva("informe o que deseja realizar \n")
    escreva("01 - soma \n")
    escreva("02 - subtração \n")
    escreva("03 - multiplicação \n")
    escreva("04 - divisão \n")
    escreva("05 - raiz quadrada \n")
    escreva("06 - porcentagem \n")
    escreva("07 - valor de pi \n")
    escreva("99 - sair \n")
   }

    funcao multiplicao(real numero , numero2){
      retorne numero * numero2
    
    funcao divisao(real numero , numero2){
      retorne numero / numero2
    }

   funcao calcular_porcentagem(real numeroP , real porcentagem){
   retorne (numeroP * porcentagem) / 100
   }

   funcao raiz_quadrada (inteiro numero ){
      retorne mat.raiz(numero, 2)
   }

   funcao valor_de_pi (){
       retorne mat.PI
   } 

  funcao inicio() {
    inteiro opcao , raiz
     real numeroP , porcentagem , numero , numero2 , numeroSomado = 0
     enquanto (opcao!= 00)
    menu()
     leia (opcao)   
    se (opcao == 01){
       limpa()
      enquanto (numero != 00 ){
        
       escreva("informe o numero a ser somado: ")
       leia(numero)
       numeroSomado += numero
       
       escreva(numeroSomado, "\n")
       
       }
      senao se (opcao == 02){
       limpa()
      enquanto (numero != 00 ){
        
       escreva("informe o numero a ser subtraido: ")
       leia(numero)
       numeroSomado -= numero
       
       escreva(numeroSomado, "\n")


       
    }

    senao se (opcao == 03){
      limpa()
      escreva("informe o numero a ser mutiplicado:  ")
      leia(numero)
       escreva("informe o multiplicador: ")
       leia(numero2)
       limpa()
       escreva(multiplicao(numero , numero2)
      
    }
       senao se (opcao == 04){
        limpa()
      escreva("informe o numero a serdividido:  ")
      leia(numero)
       escreva("informe o divisor: ")
       leia(numero2)
       limpa()
         se (numero == 0 ou numero2 == 0){
         escreva("não e possivel divisoes por zero")}
          senao{
       escreva(divisao(numero , numero2))}
       }


      senao se (opcao == 05){
      escreva("informe o valor que deseja saber a raiz:    ")
      limpa()
      leia(raiz)
      limpa()
      escreva (raiz_quadrada(raiz))
      }
       senao se(opcao == 06){
        limpa()
        escreva("informe o numero desejado: ")
         leia(numeroP)
         escreva("qual a porcentagem deseja saber:  \n")
          leia(porcentagem)
          limpa()
          escreva(calcula_porcentagem(numeroP, porcentagem))
       }
       senao se (opcao == 07){
    limpa()
    escreva(valor_de_pi ())
    }
    senao{
      escreva("informe uma opcao valida \n")
      menu()
    }
          

       
    

  }
}
