const EventEmitter = require("events")

class Client extends EventEmitter
{
	constructor(socket)
	{
		super()

		this.socket = socket

		this.socket.on("message", (message) => {
            this.emit("message", message)
        })

		this.socket.on("disconnect", () => {
            this.emit("disconnect")
        })
	}

	send(message)
	{
		this.socket.emit("/io/message", message)
	}
	
}

module.exports = Client