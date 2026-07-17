const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use((req,res,next)=>{
    console.log('middleware executed')
    next()
})
app.post('/signup',(req,res)=>{

    console.log(req.body)
    res.send('data recieved succssfully')
})


app.listen(3000,()=>{
    console.log('server running')
})