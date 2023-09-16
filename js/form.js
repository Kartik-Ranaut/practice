const express = require("express");
const app=express();




const ram1=()=>{
    app.listen(3000,()=>{
        console.log("hey good, you have created the server")
    }
    )
    
    app.use(express.json());
    
    app.post("/login",(req,res)=>{
        const {email,password}=req.body;
        console.log(email)
        console.log(password)
        console.log(req.body)
    })
    fetch("http://localhost:3000/login", {
    method: "POST",
    body: JSON.stringify({
        email: 1,
        password: "Fix my bugs"
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
}

module.exports={ram1};

