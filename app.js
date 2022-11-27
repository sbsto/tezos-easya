const Server = require("./server/server.js")
const Artwork = require("./artwork/artwork.js")

Server.build()

const artwork = new Artwork("particles", "beff-tezos")
artwork.startMintEvent(0.5)


Server.on("client-connect", (client) => {
	client.send({ info: artwork.getInfo() })

	client.on("message", (message) => {
		if (message["mint-result"])
		{
			artwork.save(message["mint-result"])
		}
	})
})

artwork.on("submission-update", () => {

	Server.broadcast({ info: artwork.getInfo() })

})


Server.on("sign", (submission) => {
	artwork.addSubmission(submission)
})

