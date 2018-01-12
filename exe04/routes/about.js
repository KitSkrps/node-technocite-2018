const fs = require ('fs')
module.exports = (req,res)=>{
    fs.readFile(`${process.cwd()}/template/about.js`, {encording : 'utf-8'}, (err,data)=>{
        res.end(data)
    })
}