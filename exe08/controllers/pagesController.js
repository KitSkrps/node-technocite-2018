exports.home = (req, res)=>{
    res.render('home', {title: 'ma home page', test:'ceci est un test'})
}
exports.about = (req, res)=>{
    res.render('about', {title :'about\'s page', test:'teeeeste'})
}