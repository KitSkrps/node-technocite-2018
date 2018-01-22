const express= require('express')
const router = express.Router()
const pagesController = require (`${process.cwd()}/controllers/pagesController`)
const magasinsController = require (`${process.cwd()}/controllers/magasinsController`)

router.get('/', pagesController.home)
//aller sur la page
router.get('/magasins/add', magasinsController.addMagasin)
//recuperer les informations
router.post('/magasins/add', 
    magasinsController.upload,
    magasinsController.resize,
    magasinsController.creatMagasin)
// pour trouver un objet dynamique on met /: et le nom de l objet 
router.get('/magasins/:slug', magasinsController.getMagasinBySlug)

router.get('/about', pagesController.about)

module.exports = router