const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    body: String,
    username: String,
    datePosted: {
        type: Date,
        default: new Date()
    }
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
module.exports = BlogPost;


// we export the BlogPost variable so that when other files require this file, they 
// know to grab BlogPost. Note that you can only export one variable.



// Models are defind through the Schema interface 
// Collection represents an entity in our app, eg user, products, blogposts
// A schema represents how a collection looks like
// Each document in the collection would have the fields specified in the schema