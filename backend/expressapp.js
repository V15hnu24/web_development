const express = require('express');
const req = require('express/lib/request');

const app = express();
const port = 80;
const path = require('path');
app.use(express.static(path.join('public')));

app.get("/", (req,res) => {
    res.send('hellowowrd');
    //    res.send("This is my first express app with vishnu");
});

app.get('/hello/:name', (req,res) => {
    res.send("Hello workd from " +  req.params.name);
});
 
app.get("/about", (req,res) => {
    res.send("he;lllow abutgjoabnas");
    //    res.send("This is my first express app with vishnu");
});

app.listen(port, () => {
    console.log(`The app started ${port}`);
})