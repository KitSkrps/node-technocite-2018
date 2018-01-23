exports.loginForm=(req,res,next)=>{
    res.render('login')
}
exports.registerForm=(req,res,next)=>{
    res.render('register')
}
exports.validateRegister =(req,res,next)=>{
    req.sanitizeBody('name')
    req.checkBody('name', 'Vous devez entrez un nom').notEmpty()
    req.checkBody('email','Veuillez entrer un email').isEMail()
    req.checkBody('password','Le password est vide').notEmpty()
    req.checkBody('password-confirm', 'La confimation n est pas correct').notEmpty()
    req.checkBody('password-confirm', 'La confimation n est pas identique').equals(req.body.password)
    const errors= req.validationErrors()
    if(errors){
        res.render('register', {errors:errors})
    }
    next()
}
exports.register =(req,res,next)=>{
    
}