/*let amigo = []
console.log (typeof amigo)*/
let amigo = {nome: 'jose', 
sexo: 'M',
peso: 80.4,
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log (`${amigo.nome} pesa ${amigo.peso}kg`)