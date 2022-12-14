const express = require("express")
const app = express()
const http = require("http").Server(app)
const io = require("socket.io")(http)
const bodyParser = require('body-parser')

const EventEmitter = require("events")
const Client = require("./client.js")

const port = process.env.PORT || 3001

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

      app.post('/sign', (req, res) => {
         this.emit("sign", req.body)
         res.redirect("/preview")
      })



      http.listen(port, () => {
         console.log(`Server running on port ${port}.`)
      })

   }

   broadcast(message)
   {
      io.emit("/io/message", message)
   }


}

module.exports = new Server()