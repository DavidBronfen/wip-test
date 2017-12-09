const express = require('express');
const cors = require('cors');
const Twitter = require('twitter');

const app = express();

var client = new Twitter({
  consumer_key: '9YFmrKGmYJXVc4FOKQRXWRb12',
  consumer_secret: 'n3MU1agGWn3WxKIMiYnhF0O5qmts0kaftdWkPduq87yYVcZ2HK',
  access_token_key: '886946526618157056-tQOGwoq7d5b6qFSlr5gWxEaAfMiecxd',
  access_token_secret: 'O8bQ8Fj93TPzs89Wz4Gt9SGvGtXKREz7Z5TEUzWhlY7jr'
});


// setup the app middlware
app.use(cors());

// setup the api
app.get('/search-users/:userName', (req, res) => {
  client.get(`users/search.json?q=${req.params.userName}&page=1&count=20`, (error, users, response) => {
    if (error) {
      console.log('Something went wrong!');
    }

    res.json(users);
  });
});

app.get('/get-user-tweets/:id', (req, res) => {
  client.get(`/statuses/user_timeline.json?user_id=${req.params.id}&count=50`, (error, tweets, response) => {
    if (error) {
      console.log('Something went wrong!');
    }

    res.json(tweets);
  });
});

app.get('/get-more-tweets/:userId/:lastTweetId', (req, res) => {
  client.get(`/statuses/user_timeline.json?user_id=${req.params.userId}&since_id=${req.params.lastTweetId}&count=50`, (error, tweets, response) => {
    if (error) {
      console.log('Something went wrong!');
    }

    res.json(tweets);
  });
});

app.listen(3000, () => {
  console.log('listening on http://localhost:3000')
});
