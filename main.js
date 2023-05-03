//import express : create server ( backend )
const express=require ("express");

const App=express()
//parser request body fi blaset el body parser
App.use(express.json())

App.get("/",(req,res)=>{
    console.log("this is a console log")
    return res.status(200).json("hello")
})

App.get("/name",(req,res)=>{
    console.log(req.body)
    //  console.log("this is a console log")
    return res.status(200).json("hello3")

})

App.get("/:id",(req,res)=>{
    const {id} = req.params
    console.log("this is a console log")
    return res.status(200).json(id)
})


App.listen(8000)
