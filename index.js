// Import http package from node js
const http = require('http');

// Import fs package, and store html in variables
const fs = require('fs');
const homePage = fs.readFileSync('index.html');
const aboutPage = fs.readFileSync('about.html');
const contactPage = fs.readFileSync('contact.html');
const notFoundPage = fs.readFileSync('notFound.html');

// Create and start simple server
const server = http.createServer((req, res) => {
    if(req.url === '/') 
        res.end(homePage);
    else if(req.url === '/about')
        res.end(aboutPage);
    else if(req.url === '/contact')
        res.end(contactPage);
    else {
        res.writeHead(404);
        res.end(notFoundPage);
    }
});

// Listen at port 4000
server.listen(4000);
