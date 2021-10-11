/*
   Condições:
      function comerPizza() {
         comerPedaço()
         comerPedaço()
         comerPedaço()
         comerPedaço()
         ...
      }

      function comerPizza() {
         while (temFatia()) {
            comerPedaço()
         }
      }
*/

var c = 1
while (c <= 6) {
   console.log('tudo bem?')
   c++
}

/*
   do{

   } while (condição)
*/

var d = 1
do {
   console.log('não to bem')
   d++
} while (d <= 6)

// Em si são a mesma coisa, um testa de começo e otro testa no final
// Em alguns casos um vai ser bom e outro não mas enfim, opção tem...

/*
Estrutura de repetição com variavel de controle:
   for (inicio; teste; incremento){
      ######
   } 
*/

for (var e = 1 ; e <= 5 ; e++) {
   console.log('n ta bem?')
}
