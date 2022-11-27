const Server = require("./server/server.js")
const Artwork = require("./artwork/artwork.js")

Server.build()

const artwork = new Artwork("particles", "frank")
artwork.startMintEvent(0.6)


Server.on("client-connect", (client) => {
	client.send({ info: artwork.getInfo() })
})

artwork.on("submission-update", () => {

	Server.broadcast({ info: artwork.getInfo() })

})


Server.on("sign", (submission) => {
	artwork.addSubmission(submission)
})

