const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    Title: {type:String, required:true},
    Size: {type:Number, required:true},
    Price: {type:Number, required:true},
    Brand: {type:String, required:true}},
    {
        versionKey: false
})

const ProductModel = mongoose.model("product",productSchema);

module.exports = ProductModel