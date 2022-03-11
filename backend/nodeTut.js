var http = require('http')
var temp = require('./module_tut.js')

http.createServer(function(req,res){

    res.write("Welcome Vishnu!!!!!!!!!!" + temp.add(100,50))
    res.end()
}).listen(2020)