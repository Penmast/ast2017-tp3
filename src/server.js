var user = require('./users.js')

module.exports =  {

  logic: function(req, res) {

  console.log(req.url)
  if (req.url == "/save") {
    user.save("testu", "testpwd", function() {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('User is saved\n');
    })
  }
  else if (req.url == "/get") {
    user.get("testu", function() {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('got the user\n');
    })
  }
  else if (req.url == "/") {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
  }
  else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Route not found\n');
  }
},
port: "4444"
}
