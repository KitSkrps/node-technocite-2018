const [major, minor]=process.versions.node.split('.').map(parseFloat)
if(major <7 || major ===7 && minor <=5){
    console.log('The node version of the server is too low for node programming')
    throw('The node version of the server is too low for node programming')
    
}

//initalize env variables
require('dotenv').config({path:'.variables.env'})

//Launch Mongo Connection

const mongoose = require ('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_HOST, (err) =>{
    if(err) console.log('WTF there is a problem with the database connection')
    console.log('Mongo is now connected to our system please request away')

})

//import all models
require(`${process.cwd()}/models/Magasin`)


//Start our app if everything is allright and initialized

const app= require ('./app')
app.set('port',process.env.PORT || 8000)
const server = app.listen(app.get('port'),()=>{
    console.log(`express running - PORT ${server.address().port}`)
})
