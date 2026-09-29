const http = require('http')
const fs = require('fs')
const path = require('path')
const PORT = 3000

const app = http.createServer((req, res)=>{


    if(req.url === '/'){
        fs.readFile("public/index.html", (err, data) =>{
            if(err){
                res.writeHead(500)
                return res.end("Error! loading file");
            }
            res.writeHead(200, {"Content-Type" : "text/html"});
            res.end(data)
        })
    }

    else if(req.url === '/contact'){
        fs.readFile("public/contact.html", (err, data) =>{
            if(err){
                res.writeHead(500);
                return res.end("Error! loading file");
            }
            res.writeHead(200, {"Content-Type" : "text/html"})
            res.end(data)
        })
    }
    else if(req.url === '/gallery'){
        fs.readFile("public/gallery.html", (err, data) =>{
            if(err){
                res.writeHead(500);
                return res.end("Error! loading file")
            }
            res.writeHead(200, {"Content-Type" : "text/html"})
            res.end(data)
        })
    }

   else if (req.url.startsWith('/Images')) {

     const filePath = path.join(__dirname, "public", req.url);

     fs.readFile(filePath, (err, data) => {

     if (err) {
      res.writeHead(404);
      return res.end("Image not found");
     }

     const ext = path.extname(filePath);

     let contentType = "image/jpeg";
     if (ext === ".png") contentType = "image/png";

     res.writeHead(200, { "Content-Type": contentType });
     res.end(data);

  });

}
})



app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: http://localhost:${PORT}`)
})