const getServerAddress = () => {
	return document.URL.split("/"[2])
}

const SOCKET_PORT=3000

export default class CommsManager {

	constructor()
	{

		this.socket = io(getServerAddress())

		this.socket.on("connect", () => {

			console.log("Client connected.")


		})

		this.socket.on("/io/message", (message) => {

			this.handle("comms-message", message)

		})

	}

	send(message)
	{
		this.socket.emit("message", message)
	}

	handle(eventName, eventArgs)
	{
		const event = new CustomEvent(eventName, {
		  detail: eventArgs,
		  bubbles: true,
		  cancelable: true,
		  composed: false,
		})

		document.querySelector("body").dispatchEvent(event)
	}

}

