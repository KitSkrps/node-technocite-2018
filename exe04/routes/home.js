const fs = require ('fs')
module.exports = (req,res)=>{
    //cwd est la ou est executer node ( le dossier dans le quel je fais cela)
    fs.readFile(`${process.cwd()}/template/index.html`, {encording : 'utf-8'}, (err,data)=>{
        res.end(data)
    })
}