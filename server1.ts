import express,{IncoomingMessage,ServerResponse} from 'express'
import path from 'path'
const port=3000
const app=express()
app.get('/',(req:IncoomingMessage,res:ServerResponse)=>{
    res.send(`this is the base path page`)
})
app.get('/index',(req:IncoomingMessage,res:ServerResponse)=>{
    res.sendFile(path.resolve(__dirname,'public','index.html'))
})
app.listen(port,()=>{
    console.log(`the server is running at the port ${port}`)
})