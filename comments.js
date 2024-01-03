// Create web server
const express = require('express');
const app = express();

// Importing comments
const comments = require('./comments');

// Setting up the public directory
app.use('/static', express.static('public'));

// Setting up the template engine
app.set('view engine', 'pug');

// Setting up the comments
app.get('/', (req, res) => {
  res.render('index', { comments: comments.latest });
});

// Setting up the comments
app.get('/comments', (req, res) => {
  res.render('comments', { comments: comments.latest });
});

// Setting up the comments
app.get('/comments/:id', (req, res) => {
  res.render('comment', { comment: comments.find(req.params.id) });
});

// Starting the server
app.listen(3000, () => {
  console.log('Listening on port 3000!');
});