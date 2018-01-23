const express = require('express')
const app = express()
const routes = require(`${process.cwd()}/routes`)
const hbs = require('express-hbs')
const bodyParser = require ('body-parser')
const helpers = require ('./helpers')
const expressValidator = require('express-validator')
//views egine setup
app.engine('hbs', hbs.express4({
    partialsDir : [`${__dirname}/views/partials`],
    defaultLayout: `${__dirname}/views/layouts/main.hbs`
}))
app.set ('view engine', 'hbs')
app.set('views', `${__dirname}/views`)

helpers.registerHelpers(hbs)
//setup static folder for static rendering on my server size
app.use(express.static(`${__dirname}/public`))

//setup express to manage the raw requests and turn them into usable propreties of req body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//validator
app.use(expressValidator())
app.use('/', routes)

module.exports = app