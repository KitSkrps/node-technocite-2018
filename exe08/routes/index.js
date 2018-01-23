const express= require('express')
const router = express.Router()
const pagesController = require (`${process.cwd()}/controllers/pagesController`)
const magasinsController = require (`${process.cwd()}/controllers/magasinsController`)
const userController = require (`${process.cwd()}/controllers/userController`)

router.get('/', pagesController.home)
//aller sur la page
router.get('/magasins/add', magasinsController.addMagasin)
//recuperer les informations
router.get('/login', userController.loginForm)
router.get('/register', userController.registerForm)
router.post('/magasins/add', 
    magasinsController.upload,
    magasinsController.resize,
    magasinsController.creatMagasin)
// pour trouver un objet dynamique on met /: et le nom de l objet 
router.get('/magasins/:slug', magasinsController.getMagasinBySlug)
router.post('/magasins/add/:id',
    magasinsController.upload,
    magasinsController.resize,
    magasinsController.updateMagasin)
router.get('/magasins/:id/edit', magasinsController.editMagasin)
router.get('/about', pagesController.about)

router.post('/register', userController.validateRegister, userController.register)
module.exports = router