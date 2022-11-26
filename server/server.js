const express = require("express")
const app = express()
const http = require("http").Server(app)
const io = require("socket.io")(http)
const bodyParser = require('body-parser')

const EventEmitter = require("events")
const Client = require("./client.js")



const port = 3000

class Server extends EventEmitter
{


   constructor()
   {
      super()
   }

   build()
   {
      app.use(express.static("public"))
      app.use(bodyParser.urlencoded({ extended: true }));

      io.on("connection", (socket) => {

         const client = new Client(socket)

         this.emit("client-connect", client)

         client.on("disconnect", () => {
            this.emit("client-disconnect", client)

         })

      })


      app.get("/", function(req, res) {
         res.redirect("/sign")
      })

      app.post('/sign', function(req, res) {
         console.log(req.body)
      })



      http.listen(port, () => {
         console.log(`Server running on port ${port}.`)
      })

   }


}

module.exports = new Server()