const http=require("http");
const requestAcceptor=function(res,req){
    if(req.method=="POST"){
        res.writeHead(200);
        res.end("Hey I am a past request");
    }
    else if(req.method=="GET"){
        res.writeHead(200);
        res.end("Hey I am a get request");
    }
    
}



const server=http.createServer(requestAcceptor);
server.listen(8080);





