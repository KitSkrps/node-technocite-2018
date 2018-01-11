const fs = require('fs')
// fs.readFile('list.txt',{encoding:'utf8'}, function(err,data){
//     console.log(data)
// })
// fs.readFile('list.txt',{encoding:'utf8'},(err,data)=>{
//     if (err) throw err
//     console.log(data)
// })

//autre maniere d ecrire
// console.log(process.argv[3])//recupere dans le terminal le 4eme element
// fs.readFile(`${process.cwd()}/list.txt`,{encoding:'utf8'},(err,data)=>{
//     if (err) throw err//si tu rencontre une erreur, tu lance une erreur
//     console.log(data)
// })
//console.log(__dirname)//dossier ou se trouve le fichier
//console.log(process.cwd())//le dossier dans lequel s'execute node


const [action, value] = [process.argv[2], process.argv[3]]
const possibleActions = ['add', 'remove']
const checkActions = (action) =>{
    // let tempArr = possibleValues.filter((item)=>{
    //     item===action
    // })
    // let l = tempArr.length
    // let returnValue = false
    // if(l>0){
    //     returnValue = true
    // }
    // return returnValue
    return possibleActions.filter(item => item ===action).length >0
}
const checkValue = (value) => (value) ? true : false
const init = () =>{
    if (!checkActions(action)){
        console.log(`Error : the possible actions are : 
                                    -add
                                    -remove`)
    }
    else if (!checkValue(value)){
        console.log('Error : You need to give value for insertion !!!')
    }
}
init()
