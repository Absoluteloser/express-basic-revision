import express,{IncomingMessage,ServerResponse} from 'express'
import path from 'path'
const app=express()
const port=8000
app.use(express.static(path.join(__dirname,'public')))
app.get('/',(req:IncomingMessage,res:ServerResponse)=>{
    res.send(`this is the base path  page`)
})
app.get('/index',(req:IncomingMessage,res:ServerResponse)=>{
    res.sendFile(path.resolve(__dirname,'public','index.html'))
})
app.listen(port,()=>{
    console.log(`the server is running at the port ${port}`)
})