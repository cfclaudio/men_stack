// The controller that renders the home page
// Including rendering the dynamic list of blog posts

const BlogPost = require('../models/BlogPost.js')

module.exports = async (req,res)=>{
    const blogposts = await BlogPost.find({});
    console.log(req.session)
    res.render('index', {
        blogposts
    });
}