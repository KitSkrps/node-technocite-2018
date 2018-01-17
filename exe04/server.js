const http = require ('http')

//crée un server http
//puis cherche les requet et  resultat et execute la function
const routes = [
    { url :'/', controller : 'home'},
    { url :'/about', controller : 'about'},
    { url :'/amis', controller : 'amis'}
]
const router = (req, res)=>{
    //item.url est égal à req.url ? Si oui renvoi moi l'index
    let indexRoute = routes.findIndex(item => item.url === req.url)
    //va chercher celui qui correspond à l'index et ce qui se trouve dans controller
    if (indexRoute !==-1){
        require(`./routes/${routes[indexRoute].controller}`)(req,res)
    }
    else{
        require('./routes/error')(req,res)
    }
}

//evenement listen
http.createServer(router).listen(8000,()=>{
    console.log('server running and listening port 8000')
    
})