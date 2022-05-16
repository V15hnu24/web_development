const {Console} = require('console');
const http = require('http');

const port = process.env.PORT || 2000;

const server = http.createServer((req,res) => {
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1> This is vishnu!!! How are you??? </h1> <p> lorem23 suvbaib vslhdvba lvbasdlva</p>')
});

server.listen(port, ()=> {
    console.log('Server is ON!!');
});