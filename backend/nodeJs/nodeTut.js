var http = require('http')
var self = require('./module_tut.js')
var fs = require("fs")

http.createServer(function(req,res){

    res.write("Welcome Vishnu!!!!!!!!!!" + self.add(100,50))
    res.end()

}).listen(2020)