// Test file to understand comcepts before applying to project

// Import mongoose
const mongoose = require('mongoose');

// Import BlogPost model we just created 
const BlogPost = require('./models/BlogPost');

// Connect to database
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

// 1st arg we pass the data for blogpost document
// 2nd arg we pass a call back function which is called when CREATE finishes execution.
BlogPost.create({
    title: 'The Mythbuster\'s Guide to Saving Money on Energy Bill',
    body : 'If you have been here a long time, you might remember when I went o ITV tonight...'
}, (error, blogpost) =>{
    console.log(error, blogpost);
})