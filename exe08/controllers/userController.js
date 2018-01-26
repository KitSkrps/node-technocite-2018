const mongoose = require ('mongoose')
const User = mongoose.model('User')
const promisify = require('es6-promisify')

exports.loginForm=(req,res,next)=>{
    res.render('login')
}
exports.registerForm=(req,res,next)=>{
    res.render('register')
}
exports.validateRegister =(req,res,next)=>{
    req.sanitizeBody('name')
    req.checkBody('name', 'Vous devez entrez un nom').notEmpty()
    req.checkBody('email','Veuillez entrer un email').isEmail()
    req.checkBody('password','Le password est vide').notEmpty()
    req.checkBody('password-confirm', 'La confimation n est pas correct').notEmpty()
    req.checkBody('password-confirm', 'La confimation n est pas identique').equals(req.body.password)
    const errors= req.validationErrors()
    if(errors){
        res.render({'user':req.body, 'errors':errors})
    }
    next()
}
exports.register = async (req,res,next)=>{
    const user = await new User({email: req.body.email, name:req.body.name})
    const register = promisify(User.register, User)
   
    try{
        await register(user, req.body.password)
    }catch(e){
        console.log(e)
    }
    next()
}