const express = require('express');
const app = new express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileUpload');
const { copyFile } = require('fs');
const validateMiddleWare = require('./middleware/validationMiddleware');
const newPostController = require('./controllers/newPost');
const homeController = require('./controllers/home');
const storePostController = require('./controllers/storePost');
const getPostController = require('./controllers/getPost');
const searchController = require('./controllers/search');
const newUserController = require('./controllers/newUser');
const storeUserController = require('./controllers/storeUser');
const loginController = require('./controllers/login');
const loginUserController = require('./controllers/loginUser');

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('successfully connected to database');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/posts/store', validateMiddleWare);

app.listen(4000, ()=>{
    console.log('App is listening on port 4000...');
})

// ---- Page Routing ----------------------------
app.get('/', homeController);

app.get('/post/:id', getPostController);
app.get('/posts/new', newPostController);
app.get('/posts/search', searchController);
app.post('/posts/store', storePostController);

app.get('/auth/register', newUserController);
app.post('/users/register', storeUserController);

app.get('/auth/login', loginController);
app.post('/users/login', loginUserController);