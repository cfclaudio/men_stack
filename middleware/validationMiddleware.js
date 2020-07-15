
module.exports = (req,res,next)=> {
    if(req.files == null || req.body.title == '' || req.body.body == '') {
        console.log(req.body);
        return res.redirect('/posts/new'); // redirect to form page
    }
    next()
}