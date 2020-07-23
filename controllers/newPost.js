// The controller handling the request from the user to create a new blog post
// Only logged in users can create a post

module.exports = (req,res)=>{
    if(req.session.userId) {
        res.render('create')
    }
    res.redirect('/auth/login');
}