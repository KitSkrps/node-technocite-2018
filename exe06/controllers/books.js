const fs = require('fs')
const promisify = require('es6-promisify')
const read = promisify(fs.readFile)
const write = promisify(fs.writeFile)
module.exports = (req,res) =>{
    if (req.method === 'GET'){
        let templatePromise = read(`${process.cwd()}/models/books.json`)
        templatePromise.then(json=>{
            res.setHeader('Content-type', 'application/json')
            res.end(json)
        }).catch(e =>{
            console.log(e)
        })
    } else if(req.method === 'POST'){
        let formData = ''
        req.on('data', ((data)=>{
            formData += data
        }))
        req.on('end', () =>{
            console.log('write to file', formData)
            read(`${process.cwd()}/models/books?json`)
                .then(data =>{
                    let tempArr = JSON.parse(data).push(JSON.parse(formData))
                    console.log(tempArr)
                })
        })
    }
}