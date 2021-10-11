var agr = new Date()
var hora = agr.getHours()
var min = agr.getMinutes()
var seg = agr.getSeconds()
console.log(`Agora são ${hora}:${min}:${seg}`)
if (hora < 6){
    console.log('Boa Madrugada')
} else if (hora < 12) {
    console.log('Bom dia')
} else if (hora < 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}