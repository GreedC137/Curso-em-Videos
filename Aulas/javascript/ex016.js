/*
Variáveis simples só conseguem armazenar um valor por vez.

Variáveis compostas devem ser capazes de armazenar vários valores em uma mesma estrutura.
*/

// ARRAYS

/*
O array(vetor, variável composta) é composto por elementos
cada elemento tem seu valor(conteudo) e uma chave(indice, key) de identificação
*/

let num = [5, 8, 4]

/*
Array:

   var:  key:    valor:
   num    0    =  5        \
   num    1    =  8         >  elementos  
   num    2    =  4        /
*/

console.log(num)

console.log(`Nosso vetor é ${num}`)

console.log(`O primeiro numero é ${num[0]} e ele se encontra na key ${num.indexOf(5)}`)

// num.indexOf(valor) procura o numero dentro do () e mostra a key dele

num[3] = 6

// Adiciona o numero 6(valor) na casa(elemento) 3(key) especificamente

num.push(7)

// Adiciona o numero 7 na ultima casa, ele cria uma...

console.log(`Agora nosso vetor é ${num}`)

console.log(`O vetor tem ${num.length} elementos`)

// num.length mostra a quantidade de elementos

num.sort()

// Muda a ordem dos elementos para a ordem crescente

console.log(`Na ordem crescente fica ${num}`)

for (let pos = 0; pos < num.length; pos++) {
   console.log(num[pos])
}

// Percurso pra exibição dos elementos de um vetor

console.log('De novo!!!')
// Mas tem um metodo mais simples de fazer a msm coisa

for(let sop in num) {
   console.log(num[sop])
}

console.log('FIM')