// Create web server
// Load the express module
var express = require('express');
var app = express();
var fs = require('fs');

// Load the body-parser module
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Load the comments.json file
var comments = require('./comments.json');

// Create a GET route that sends the comments data
app.get('/comments', function(req, res) {
  res.send(comments);
});

// Create a POST route that adds a comment to the comments data
app.post('/comments', function(req, res) {
  comments.push(req.body);
  fs.writeFile('./comments.json', JSON.stringify(comments), function(err) {
    if (err) {
      console.error(err);
      return;
    }
    res.send(comments);
  });
});

// Create a DELETE route that removes a comment from the comments data
app.delete('/comments/:id', function(req, res) {
  comments.splice(req.params.id, 1);
  fs.writeFile('./comments.json', JSON.stringify(comments), function(err) {
    if (err) {
      console.error(err);
      return;
    }
    res.send(comments);
  });
});

// Create a PUT route that updates a comment in the comments data
app.put('/comments/:id', function(req, res) {
  comments[req.params.id] = req.body;
  fs.writeFile('./comments.json', JSON.stringify(comments), function(err) {
    if (err) {
      console.error(err);
      return;
    }
    res.send(comments);
  });
});

// Create a DELETE route that removes all comments from the comments data
app.delete('/comments', function(req, res) {
  comments.splice(0, comments.length);
  fs.writeFile('./comments.json', JSON.stringify(comments), function(err) {
    if (err) {
      console.error(err);
      return;
    }
    res.send(comments);
  });
});

// Start the server
app.listen(3000, function() {
  console.log('Listening on port 3000');
});