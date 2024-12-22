// Create Web Server
const express = require('express');
const app = express();

// Create a route
app.get('/comments', (req, res) => {
    res.send('Here are the comments');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})