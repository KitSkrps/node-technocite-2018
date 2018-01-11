//sconst arr = []
//arr.push('test')
// let a = 4
// {
//     let a=3
// }
// console.log(a)

// (function(msg){
//     console.log(msg)
// })('a')

// var obj ={
//     name:'gilles',
//     job:'student',
//     toString : function(){
//         return `name is ${this.name} job is ${this.job}`
//     }
// }
// console.log(obj.toString())
//const [a,b]=['gilles', 'bertrand']
// console.log(b)
// console.log(a)
// const numbers = [1,2,3,4,5,6,7,8]
// function dblNumbers(arr){
//     const arrDbl = []
//     for (let i=0, length = arr.length; i<length; i++){//defini length pour la calculer qu'un fois
//         arrDbl.push(arr[i]*2)//on push dans arrDbl, arr dans le quel je suis fois 2
//     }
//     return arrDbl
// }

// console.log(dblNumbers(numbers))

// autre facon d ecrire

//map boucler dans l array et renvoi un nouelle array
// const numbers = [1,2,3,4,5,6,7,8]
// function dblNumbers(arr){
//     //return arr.map(item=>item*2)
//     return arr.map(function(item){
//         return item*2
//     })
// }
// console.log(dblNumbers(numbers))

const numbers = [1,2,3,4,5,6,7,8]

//reduce manipuler un array pour renvoyer ce que je veux
// console.log(numbers.reduce((prev,current)=>{
//     return prev+current
// },0))// le 0 défini le type de chose que je veux renvoyer
//commence a 0, donc prev = 0 et current = 1, on addition puis recommence
//prev=1 et current = 2

//filter c'est pour chercher dans l'array sous une condition
console.log(numbers.filter(item=>item%2 === 0))