const express = require('express');
const path = require('path');

const app = new express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const BlogPost = require('./models/BlogPost');
const fileUpload = require('express-fileUpload');


mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

// Test connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('successfully connected to database');
});

// Body parser set up
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(fileUpload());

// Tell Express to use EJS as our templating engine,
// and that any file ending in .ejs should be rendered with the EJS package
app.set('view engine', 'ejs');

// Register a public folder for static files
app.use(express.static('public'));

app.listen(4000, ()=>{
    console.log('App is listening on port 4000...');
})


// ---- Page Routing ----------------------------

app.get('/', async (req,res)=>{
    const blogposts = await BlogPost.find({});
        res.render('index', {blogposts});
})

app.get('/about', (req,res)=>{
    res.render('about');
})

app.get('/contact', (req,res)=>{
    res.render('contact');
})

app.get('/post/:id', async (req,res)=>{
    const blogpost = await BlogPost.findById(req.params.id);
    res.render('post', { blogpost });
})

app.get('/posts/new', (req,res)=>{
    res.render('create');
})

app.get('/posts/search', (req,res)=>{
    console.log('searching...');
})

app.post('/posts/store', (req,res)=>{
    let image = req.files.image;
    image.mv(path.resolve(__dirname, 'public/img', image.name),
        async (error)=>{
            await BlogPost.create({
            ...req.body,
            image: '/img/' + image.name
        })
        res.redirect('/');
    });
})