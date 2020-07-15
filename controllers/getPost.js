// The controller that reads the data from the database
// and displays it on the view of the user to see

const BlogPost = require('../models/BlogPost.js');

module.exports = async (req,res)=>{
    const blogpost = await BlogPost.findById(req.params.id);
    console.log(blogpost);
    res.render('post', { 
        blogpost 
    });
}