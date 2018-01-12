const fs= require ('fs')
let values = []
module.exports = {
    init: (file, action, value) => {
        fs.readFile(file, (err, data) => {
            //.split convertie ma chaine de caractere en array
            // \n est un saut de ligne
            values = (data.toString().split('\n'))
            if (action ==='add'){
                add(value, file)
                
            }
            else {
                remove(value, file)
            }
        })
    }
}

const add = (value, file) =>{
    if (!checkValueInList(value)){
        values.push(value)
        save(file)
        console.log(values)
    }
    else{
        console.log('this element is allready in our file')
    }

}
const remove = (value, file) =>{
    // ma facon de faire
    // values.splice(values.indexOf(value),1)
    // save(file)
    // console.log(values)

    //autre maniere
    if (checkValueInList(value)){
        values.splice(values.findIndex(item => item === value),1)
    }
    else{
        console.log('the value doesn t exist in our actual file')
    }
    save(file)

}
const checkValueInList = (value) => {
    return values.filter (item=>item===value).length >0
}
const save = (file) =>{
    let tempStr = values.reduce((prev, current) =>{
        return `${prev}\n${current}`
    })
    fs.writeFile(file, tempStr, (err) =>{
        if(err) console.log(err)
        console.log('file saved')
    })
}