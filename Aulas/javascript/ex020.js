// Para coisas simples o array é muito funfional e bom
// Mas para coisas avançadas ele acaba ficando limitado

// obs: o array e o object são da mesma classe de 'object' , tem a msm origem

// array:

let num = [5, 8, 4]

/*
 num: _____________
      | 5 | 8 | 4 |
      -------------
        0   1   2
*/

//object:

let amigo = {
   nome:'josé',
   sexo:'M',
   peso:84.4,
   engordar(p=0){
      console.log('Engordou')
      this.peso += p
   }}

/*
 amigo: __________________________________
        | josé |  M  | 84.4 | [function] |
        ----------------------------------
          nome   sexo  peso   engordar()
*/

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

// E com isso chega ao fim das aulas de Curso em Video de JavaScript...