const http = require('http');
const filesystem = require('fs');
const port = process.env.PORT || 5000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    if(req.url == '/vishnu'){
        res.setHeader('Content-Type','text/html');
        res.end('<h1> This is vishnu!!! How are you??? </h1> <p> lorem23 suvbaib vslhdvba lvbasdlva</p>')
    }
    else if(req.url == '/about'){
        const data = filesystem.readFileSync('./index.html');
        // res.setHeader('Content-Type', 'text/html');
        res.end(data.toString());
    }
    else{
        res.setHeader('Content-Type','text/html');
        res.end('<h1> This is ELSE!!! How are you??? </h1> <p> lorem23 suvbaib vslhdvba lvbasdlva</p>')
    }
});
server.listen(5000);