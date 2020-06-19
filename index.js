const express = require('express');
const path = require('path');
const ejs = require('ejs');
const { appendFileSync } = require('fs');

const app = new express();

// Tell Express to use EJS as our templating engine,
// and that any file ending in .ejs should be rendered with the EJS package
app.set('view engine', 'ejs');  

// Register a public folder for static files
app.use(express.static('public'));

app.listen(4000, ()=>{
    console.log('App is listening on port 4000...');
})

app.get('/', (req,res)=>{
    // res.sendFile(path.resolve(__dirname, 'pages/index.html'));
    res.render('index');
})

app.get('/about', (req,res)=>{
    res.render('about');
})

app.get('/contact', (req,res)=>{
    res.render('contact');
})

app.get('/post', (req,res)=>{
    res.render('post');
});