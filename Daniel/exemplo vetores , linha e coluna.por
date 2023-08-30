programa {
  funcao inicio() {
inteiro numero , linha , coluna
cadeia naval[7][7]
naval[3][4] = "barco "
naval[1][5] = "submarino"
naval[2][0] = "afundou"


escreva("informe a linha ")
leia(linha) 
escreva("informe a coluna ")
leia(coluna)

se ( linha == 3 e coluna == 4 ){
  escreva("voce achou o barco"), naval[3][4]
}
senao se ( linha == 1 e coluna == 5 ){
  escreva("voce achou o submarino"), naval[1][5]
}
senao se ( linha == 2 e coluna == 0 ){
  escreva(, naval[2][0])

}
senao{
  escreva(" nao foi dessa vez ")
}

  }
}
