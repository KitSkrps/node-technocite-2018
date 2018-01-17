//fs = file system
const fs = require ('fs')
module.exports = (req,res)=>{
    //file system j'utilise readFile 
    // cwd = command working directory
    fs.readFile(`${process.cwd()}/template/about.js`, {encording : 'utf-8'}, (err,data)=>{
        res.end(data)
    })
}