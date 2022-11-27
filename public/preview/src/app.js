import CommsManager from "./comms.js"
import Visualiser from "./visualiser.js"

const comms = new CommsManager()
const visualiser = new Visualiser()

class Countdown
{
	constructor(title)
	{
		this.title = title
		this.target = document.getElementById("countdown")

		this.timeout = null

		this.done = false
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
			output = this.title + secs.toString() + " second" + (secs > 1 ? "s" : "") + " remaining"
		}
		else
		{
			this.done = true
		}

		this.target.innerHTML = output
	}
}

const countdown = new Countdown()
const submissionsTitle = document.getElementById("submissions-title")
const submissionsDisplay = document.getElementById("submissions-display")

const seedReadout = document.getElementById("seed-readout")

const updateSubmissions = (submissions) => 
{

	visualiser.setSubmissions(submissions)

	submissionsTitle.innerHTML = `public contributions (${submissions.length})`

	let submissionList = ""

	submissions.forEach(submission => {

		const subStr = `${submission.username} | ${submission.mark} | ${submission.tezos} tezos` + "<br/>"
		const colour = `<span style="color:${submission.colour}">${subStr}</span>`
		
		submissionList += colour
	})
	submissionsDisplay.innerHTML = submissionList
}

document.body.addEventListener("comms-message", (event) => {

	const message = event.detail

	if (message.info)
	{
		countdown.title = `'${message.info.name}' by <span style="color:${message.info.artistColour}">${message.info.artist}</span> | `
			
		countdown.setTimeout(message.info.mintTimeout)
		updateSubmissions(message.info.submissions)
		seedReadout.innerHTML = "Seed: " + message.info.seed

		if (!visualiser.started)
		{
			visualiser.start(message.info.mintStart, message.info.artistColour)
		}
		else
		{
			location.reload()
		}
	}
	else
	{
		console.log(message)
	}

})


const update = () => {

	countdown.update()
	visualiser.update()
	
	if (countdown.done)
	{
		visualiser.pause()
	}

	window.requestAnimationFrame( update )

}


window.onload = () => {

	visualiser.build()

	update()
}



