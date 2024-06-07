const express = require("express");
const connection = require("./configuration/db");
const userRouter = require("./Routes/user.routes")
const productRouter = require("./Routes/product.routes");

const server = express()
server.use(express.json());
server.use("/user",userRouter)
server.use("/product",productRouter)

server.listen(3000,async() => {
    try{
        await connection;
        console.log("Server is running on 3000 and db is connected");
    }catch(err){
        console.log(err);
    }
})





