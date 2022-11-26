class Artwork
{

	constructor(name)
	{
		this.name = name

		this.mintTimeout = null
	}

	startMintEvent(durationMins)
	{

		if (this.mintTimeout === null)
		{
			const millis = Math.max(0, durationMins) * 60000

			this.mintTimeout = Date.now() + millis
		}
	}

	getInfo()
	{
		return { name: this.name, mintTimeout: this.mintTimeout }
	}
}


module.exports = Artwork