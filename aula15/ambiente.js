let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()

console.log(num)
console.log(`o vetor tem ${num.length} Posições`)
console.log(`o primeiro vetor na possição é ${num[0]}`) // 
let pos = num.indexOf(8)


if (pos == -1){
    console.log(`esse valor não existe`)
}else{
    console.log(`o valor esta na possição ${pos}`)
}
