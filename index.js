import express from "express"

const app = express()

const port = 8080

app.get("/",(req,res)=>{
    return res.json({
        msg:"hello from server"
    })
})

app.listen(port,()=>{
    console.log("server is running")
})