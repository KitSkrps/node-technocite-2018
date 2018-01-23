//chaque fois que je veux changer une structure (une donner) je dois ajouter dans model

const mongoose= require ('mongoose')
const schema = new mongoose.Schema({
    name:{
        type:String,
        require:'Thanks to introduce a name'
    },
    slug:{
        type:String,
        trim:true
    },
    description:{
        type:String
    },
    photo:{
        type:String
    },
    location:{
        type:{
            type:String,
            default:'Point'
        },
        coordinates:[
            {
                type:Number,
                required:'vous devez entrer des coordonnées'
            }
        ],
        address:{
            type:String,
            required:'Vous devez fournir une adresse'
        }
    }
})

module.exports = mongoose.model('Magasin', schema)