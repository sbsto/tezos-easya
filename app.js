const Server = require("./server/server.js")
const Artwork = require("./artwork/artwork.js")

Server.build()


const artwork = new Artwork("cat-dog")
artwork.startMintEvent(2)



Server.on("client-connect", (client) => {
	client.send({ info: artwork.getInfo() })
})
