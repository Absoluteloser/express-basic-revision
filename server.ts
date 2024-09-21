import http from 'http'
import fs from 'fs'
const { IncomingMessage, ServerResponse } = http;
const port=9000
const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log(req.url);
    if(req.url==='/index'){
        res.end(`this is the home page`)
    }
    if(req.url==='/about'){
        res.end(`this is the about page of the server`)
    }
    res.end(`this is the index page of the server`)
});
server.listen(port,()=>{
    console.log(`the server is running at the port ${port}`)
})
