const fs = require ('fs')
module.exports = (req,res)=>{
    fs.readFile(`${process.cwd()}/public/friends.json`, {encoding : 'utf-8'}, (err,json)=>{
        console.log(json)
        if(err){
            //ecrire une entête avec une erreur 500
            res.writeHead(500,{'Content-Type':'text/html'})
            res.end('The server has a problem please try later')
        }
        else{
        //cwd est la ou est executer node ( le dossier dans le quel je fais cela)
            fs.readFile(`${process.cwd()}/template/amis.html`, {encoding : 'utf-8'}, (err,data)=>{
                if(err){
                    res.writeHead(404,{'Content-Type':'text/html'})
                    res.end('File Not Found')
                }
                res.end(generateHtml(data,json))
            
            }) 
        }
        
    })
}

const generateHtml = (tpl, json)=>{

    //explication
    // let values = JSON.parse(json)
    // let tempArr = values.map(item=>item.name)
    // let tempStr = tempArr.join('</li><li>')
    // let htmlStr = tpl.replace('%friends%', tempStr)
    // return htmlStr
    //console.log(tpl)

    //on remplce friends pas tout ce qu'il y a apres
    //donc le JSON( fichier texte) parse le (je prend le fichier et je le convertie en fichier utilisable(array))
    //.map (une bloucle) qui va prendre l'array dans mon fichier json
    //pour chaque element trouver prend le .name, et push les dans un nouvelle array
    //donc array avec que les noms et on join (on joint les élément avec un li)
    return tpl.replace('%friends%', JSON.parse(json).map(item =>item.name).join('</li><li>'))
}