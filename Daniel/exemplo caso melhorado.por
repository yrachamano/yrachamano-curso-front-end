programa {
  funcao inicio() {  
    inteiro voto , i , quantidade_lula , quantinade_bolsonaro , quantidade_branco, quantidade_nulo
     
     quantidade_lula = 0
      quantinade_bolsonaro = 0
       quantidade_branco = 0
       quantidade_nulo = 0

     para (i = 1; i <=10; i++){

       escreva("13 - lula \n ")
       escreva("22 - bolsonaro \n ")
       escreva("99 - branco \n ")
       leia(voto)
       limpa()

    escolha(voto){
      caso  13:
        
        quantidade_lula = quantidade_lula + 1
       pare 
       caso 22 :
       
       quantinade_bolsonaro = quantinade_bolsonaro + 1
       pare
       caso 99 :
       
       quantidade_branco = quantidade_branco + 1
       pare

       caso contrario :
       quantidade_nulo = quantidade_nulo + 1
       
       
    }
   escreva(" votos branco" ,quantidade_branco, "\n ")
   escreva("votos lula" ,quantidade_lula ,"\n" )
    escreva(" votos bolsonaro" ,quantinade_bolsonaro, "\n ")
    escreva("voto nulo " , quantidade_nulo, "\n")
  }
    
}
