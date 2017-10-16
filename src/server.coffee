user = require('./users.js')
fs = require('fs')

module.exports =

  logic: (req, res) ->
    console.log(req.url)
    if req.url == "/save"
      user.save "testu", "testpwd", () ->
        res.writeHead 200,
          'Content-Type': 'text/plain'
          res.end 'User is saved\n'

    else if req.url == "/get"
      user.get "testu", () ->
        res.writeHead 200,
          'Content-Type': 'text/plain'
          res.end 'got the user\n'

    else if req.url == "/"
      fs.readFile "public/html/index.html", (err, html) ->
        throw err if err
        res.writeHead 200,
          'Content-Type': 'text/plain';
          res.write html
          res.end

    else
      res.writeHead 200,
        'Content-Type': 'text/plain'
      res.end 'Route not found\n'

      port: "4444"
