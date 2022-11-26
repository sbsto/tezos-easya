import CommsManager from "./comms.js"

const comms = new CommsManager()


class Countdown
{
	constructor()
	{
		this.target = document.getElementById("countdown")

		this.timeout = null
	}

	setTimeout(timeout)
	{
		this.timeout = new Date(timeout)
	}

	update()
	{
		if (this.timeout === null)
		{
			return
		}

		const delta = this.timeout - Date.now() 
		let output = "minted!"

		const secs = Math.round(delta/1000)

		if (secs > 0)
		{
			output = secs.toString() + " second" + (secs > 1 ? "s" : "") + " remaining"
		}

		this.target.innerHTML = output
	}
}

const countdown = new Countdown
let artworkInfo = null

document.body.addEventListener("comms-message", (event) => {

	const message = event.detail

	if (message.info)
	{
		artworkInfo = message.info
		countdown.setTimeout(artworkInfo.mintTimeout)
	}

})


const update = () => {

	countdown.update()

	window.requestAnimationFrame( update )

}

update()