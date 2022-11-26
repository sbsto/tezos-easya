const express = require('express')
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));



app.use(express.static("public"))

app.get('/', function(req, res) {
   res.redirect("/sign")
});

// receive form data
app.post('/sign', function(req, res) {
  console.log(req.body)
})

http.listen(3001, function() {
   console.log('listening on *:3001')
});
