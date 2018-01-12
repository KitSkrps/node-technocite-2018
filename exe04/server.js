const http = require ('http')

//crée un server http
//puis cherche les requet et  resultat et execute la function
const routes = [
    { url :'/', controller : 'home'},
    { url :'/about', controller : 'about'},
    { url :'/amis', controller : 'amis'}
]
const router = (req, res)=>{
    let route = routes.findIndex(item => item.url === req.url)
    if (route !==-1){
        require(`./routes/${routes[route].controller}`)(req,res)
    }
    else{
        require('./routes/error')(req,res)
    }
}

//evenement listen
http.createServer(router).listen(8000,()=>{
    console.log('server running and listening port 8000')
    
})