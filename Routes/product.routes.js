const express = require("express");
const ProductModel = require("../model/product.model");
const productRouter = express.Router();

productRouter.post("/productData", async(req,res) => {
    const data = req.body;
    const product = new ProductModel(data);
    await product.save();
    res.status(200).send(`Product received ${product}`)
})

productRouter.get("/getProduct", async(req,res) => {
    try{
        const filter = req.query;
        const data = await ProductModel.find(filter);
        res.status(200).send(data)
    }catch(error){
        res.status(500).send(error.message);
    }
})

productRouter.patch("/updateProduct/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const data = req.body;
        const updatedProduct = await ProductModel.findByIdAndUpdate({_id:id}, data);
        res.status(200).send("Product updated.")
    }catch(error){
        res.status(500).send(error.message);
    }
})

productRouter.delete("/deleteProduct/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const data = req.body;
        const deletedProduct = await ProductModel.findByIdAndDelete({_id:id});
        res.status(200).send("Product deleted.")
    }catch(error){
        res.status(500).send(error.message);
    }
})

module.exports = productRouter