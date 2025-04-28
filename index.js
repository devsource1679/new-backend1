const express = require('express')

const app = express()

app.listen(4001, ()=>{
    console.log('listning to port 4001')
})

app.get("/",(req,res) =>{
    res.status(200).send('welcome to me')
})

