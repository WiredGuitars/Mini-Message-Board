var express = require('express');
var router = express.Router();

/* GET home page. */
const messages = [
  
]

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message Form'})
})

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages});
});
router.post('/new', function(req, res, next) {
  const author = req.body.author
  const messageText = req.body.message
  messages.push({text: messageText, user: author, added: new Date()});
  res.redirect('/')
})
module.exports = router;