const mongoose = require("mongoose")

// DEFINE SCHEMA
// SCHEMA names must match the STATE in our front end(create.jsx)
const ProductSchema = new mongoose.Schema({
    title:{
        type:String
    },
    price:{
        type:String
    },
    description:{
        type:String
    },
    checkbox:{
        type:Boolean
    }

    // TIMESTAMP HANDLES THE CREATED & UPDATED AT
} , {timestamps:true});

// REGISTER SCHEMA
const Product = mongoose.model('Product' , ProductSchema)

// EXPORT MODEL
module.exports = Product;