const express = require("express");
const UserModel = require("../model/user.model");
const userRouter = express.Router();

userRouter.post("/userData", async(req,res) => {
    const data = req.body;
    const existingUser = await UserModel.findOne({ email: data.email });
    if (existingUser) {
        return res.status(400).send("User with this email already exists.");
    }
    const user = new UserModel(data);
    await user.save();
    res.status(200).send(`User received ${user}`)
})

userRouter.get("/getUser", async(req,res) => {
    try{
        const filter = req.query;
        const data = await UserModel.find(filter);
        res.status(200).send(data)
    }catch(error){
        res.status(500).send(error.message);
    }
})

userRouter.patch("/updateUser/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const data = req.body;
        const updatedUser = await UserModel.findByIdAndUpdate({_id:id}, data);
        res.status(200).send("User updated.")
    }catch(error){
        res.status(500).send(error.message);
    }
})

userRouter.delete("/deleteUser/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const data = req.body;
        const deletedUser = await UserModel.findByIdAndDelete({_id:id});
        res.status(200).send("User deleted.")
    }catch(error){
        res.status(500).send(error.message);
    }
})

module.exports = userRouter