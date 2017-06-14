const express = require('express');

const bodyParser = require('body-parser');

const app =  express();
app.use(express.static('assets'))
app.use(bodyParser.json())

app.listen(3000, function() {
    console.log('listening to port 3000')
});


let messages = ['Testing']

app.get('/messages', function (req, res, next) {
  res.status(200).json({ messages: messages });
});

app.post('/messages', function(req, res, next) {
    // console.log(req.body);
    messages.push({ message: req.body.message, username: req.body.username, time: new Date() });

    res.status(200).json({ messages: messages })
});

