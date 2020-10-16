/*let num = [1 ,5 ,8 ]
num[3] = 6
num.push(5)
num.length
num.sort()

console.log(` Nosso vetor é o ${num}`)
let num = [7, 1 ,5 ,8 ]
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)*/

/*let valores = [8,1,7,4,2,9]
for (let pos= 0;  pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    
}
*/
/*let valores = [8,1,7,4,2,9]
for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
/*let num = [8,1,7,4,2,9]
num.sort()
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)*/
let num = [8,1,7,4,2,9]
num.sort()
let pos = num.indexOf(9)
if(pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
}
