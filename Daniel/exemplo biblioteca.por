 programa {
 inclua biblioteca Matematica --> mat
 
  funcao inicio () {
     inteiro  , numero
     real resultado
    escreva("informe um numero: ")
    leia(numero)

    resultado = mat.raiz(numero, 2)
    escreva(resultado)
  }
}
