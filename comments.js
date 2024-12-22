// Create Web Server
// npm install express
var express = require('express');
var app = express();
app.use(express.static('public'));
app.listen(3000, function() {
    console.log('Server is running at 3000');
});

// Create Router
var router = express.Router();
app.use('/api', router);

// Create Comments
var comments = [];
comments.push({ author: 'John', content: 'Hello' });
comments.push({ author: 'Tom', content: 'Hi' });

// Get Comments
router.get('/comments', function(req, res) {
    res.json(comments);
});

// Add Comment
router.post('/comments', function(req, res) {
    var author = req.body.author;
    var content = req.body.content;
    var comment = { author: author, content: content };
    comments.push(comment);
    res.json(comment);
});

// Add Comment with Curl
// curl -X POST -d "author=Mike&content=Good" http://localhost:3000/api/comments

// Read Comment with Curl
// curl http://localhost:3000/api/comments