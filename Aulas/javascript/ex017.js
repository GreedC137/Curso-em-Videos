/*
   FUNÇÕES:
São ações executadas assm que são chamadas pu em decorrência de algum evento.

Uma função pode receber parametros e retornar um resultado

                  /> parâmetro
function ação(parâmetro formal) {
   *ação da função*
   return res
     \> retorno
}

ação(parâmetro real)
  \> chamada
*/

function parimp(n) {
   if (n % 2 == 0) {
      return 'par'
   } else {
      return 'ímpar'   // só é possivel apenas um 'return' e logo após ele nada mais acontece
   }
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numero = Math.floor(Math.random() * numeros.length);

// (numeros[numero]); resultado aleatório 

console.log(`------------------
O numero ${numeros[numero]} é ${parimp(numeros[numero])}
------------------`)

function soma(n1=0, n2=0) { // caso for passado apenas um valor, o outro fica indefinido
   return n1 + n2           // resultando em undefined, a sona de um numero mais undefined gera NaN
}                           // mas o n1=0 faz com que caso seja indefinido ele seja 0
                            // assim o numero + 0 = numero
console.log(soma(numeros[numero]))

let v = function(x) {       // da pra enfia uma function dentro de uma variavel
   return x*2
}

console.log(`O dobro seria ${v(numeros[numero])}`)

// 5! = 5 x 4 x 3 x 2 x 1
// fatorial q eu n lembro...

function fatorial(n) {
   let fat = 1
   for(let c = n; c > 1; c--) {
      fat*= c
   }
   return fat
}

console.log(`O fatorial de ${numeros[numero]} seria: ${fatorial(numeros[numero])}`)

// RECURSIVIDADE:

function lambida(m) {
   if (m == 1) {
      return 1
   } else {
      return m * lambida(m - 1)
   }
}

console.log(`O fatorial do dobro seria: ${lambida(v(numeros[numero]))}`) 

/*

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n - 1)!
1! = 1

*/