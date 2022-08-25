const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name : {
        type : String
    },
    info : {
        type : String
    },
    image : {
        type : String
    },
    cost : {
        type : Number
    }
})

const Product = mongoose.model('Product',ProductSchema)

module.exports = Product