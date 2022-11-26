const express = require("express")
const app = express()
const http = require("http").Server(app)
const io = require("socket.io")(http)


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

      app.get("/", function(req, res) {
         res.redirect("/sign")
      })

      io.on("connection", (socket) => {

         const client = new Client(socket)

         this.emit("client-connect", client)

         client.on("disconnect", () => {
            this.emit("client-disconnect", client)

         })

      })


      http.listen(port, () => {
         console.log(`Server running on port ${port}.`)
      })

   }


}

module.exports = new Server()