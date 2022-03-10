const express = require("express")
const app = express()

app.get("/", (req,res)=>{
    console.log("In the root Path")
    res.send("<h1>WELCOME TO NODE APP</h1>")
})

app.get("/about", (req,res)=>{
    console.log("In the /about Path")
    res.send("<h1>ABOUT NODE APP</h1>")
})


app.listen(3000)