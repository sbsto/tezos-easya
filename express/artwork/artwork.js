const EventEmitter = require("events")
const fs = require("fs")
const imageDataURI = require("image-data-uri")

class Artwork extends EventEmitter
{

	constructor(name, artist)
	{
		super()

		this.name = name
		this.artist = artist

		this.artistColour = this.getRandomColour()

		this.seed = Date.now()

		this.mintStart = Date.now()
		this.mintTimeout = null

		this.submissions = []
	}

	startMintEvent(durationMins)
	{

		if (this.mintTimeout === null)
		{
			const millis = Math.max(0, durationMins) * 60000

			this.mintTimeout = Date.now() + millis
		}
	}

	getRandomColour()
	{

		const randomHex = () =>
		{
			const base = 120
			return Math.round(base + Math.random() * (255-base)).toString(16)
		}

		return "#" + randomHex() + randomHex() + randomHex()
	}

	addSubmission(submission)
	{
		submission.stamp = Date.now()
		if (submission.stamp >= this.mintTimeout)
		{
			return
		}

		submission.colour = this.getRandomColour()

		submission.position = { x: Math.random()*1.4-1, y: Math.random()*1.8-1 }
		
		this.submissions.push(submission)

		const tezP = Math.min(10, Math.max(0.002, submission.tezos)) 
		const markP = Math.max(1, Math.min(100000, parseInt(submission.mark)))

		this.seed /= tezP 
		this.seed *= markP

		if (Math.round(this.seed).toString(16) === "NaN")
		{
			this.seed = submission.stamp
		}

		this.emit("submission-update")
	}

	save(mintURI)
	{
		const result = imageDataURI.decode(mintURI)

		fs.writeFileSync("artwork.jpg", result.dataBuffer)
	}

	getInfo()
	{
		return { name: this.name, artist: this.artist, artistColour:this.artistColour, mintStart: this.mintStart, mintTimeout: this.mintTimeout, seed: Math.round(this.seed).toString(16), submissions: this.submissions }
	}
}


module.exports = Artwork