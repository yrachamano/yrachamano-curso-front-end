programa {
  funcao inicio() {
    inteiro idade[3], contador , coluna , linha
    cadeia nome[3],matrix[4][4] 
    
     
     para(linha = 0; linha <= 3; linha++ ){
          para(coluna = 0; coluna <= 3; coluna++ ){
              
          matrix[linha][coluna] = " a "   
          }

     }
     para(linha = 0; linha <= 3; linha++ ){
          para(coluna = 0; coluna <= 3; coluna++ ){
              
          escreva(matrix[linha][coluna] )   
          }
        escreva("\n")
     }


  }
}
