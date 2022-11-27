const {
	System,
	Alpha,
	Color,
	Emitter,
	Life,
	Mass,
	PointZone,
	Position,
	RandomDrift,
	Repulsion,
	RadialVelocity,
	Radius,
	Rate,
	Scale,
	Span,
	SpriteRenderer,
	Vector3D,
	ease,
} = window.Nebula

let THREE = window.THREE


export default class Visualiser
{

	constructor()
	{
		this.originTime = null

		this.scene = null
		this.camera = null
		this.renderer = null

		this.system = null

		this.emitters = {}

		this.paused = true
		this.started = false

		this.masterPosition = undefined 

	}

	setSubmissions(submissions)
	{
		let max = 0
		submissions.forEach(submission => {
			if (submission.tezos > max)
			{
				max = submission.tezos
			}
		})

		submissions.forEach(submission => {

			if (!(submission.stamp in this.emitters))
			{

				const normalised = new THREE.Vector3(submission.position.x, submission.position.y, 1)
				const planePos = normalised.unproject(this.camera)
				const position = new THREE.Vector3(planePos.x, planePos.y, 0)
				const size = submission.tezos/max

				this.addEmitter(position, submission.stamp, submission.colour, size, this.masterPosition)
			}


		})
	}

	build()
	{

		this.scene = new THREE.Scene()
		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 10, 2000 )

		const canvas = document.getElementById("preview-canvas")

		this.renderer = new THREE.WebGLRenderer({ canvas: canvas })
		this.renderer.setSize( window.innerWidth, window.innerHeight )
		document.body.appendChild( this.renderer.domElement )


		this.camera.position.z = 2000

		this.system = new System()
		this.system.addRenderer(new SpriteRenderer(this.scene, THREE))

	}

	addEmitter(position, time, colour, size, repeller)
	{

		if (Object.keys(this.emitters).length > 8)
		{
			return
		}

		const emitter = new Emitter().setRate(new Rate(new Span(4, 20), new Span(0.01)))
		    .addInitializers([
		      new Position(new PointZone(0, 0)),
		      new Radius(2, 4),
		      new Life(3),
		      new RadialVelocity(450 * size, new Vector3D(0, 1, 1), 150),
		    ])
		    .addBehaviours([
		      new RandomDrift(10, 10, 10, 0.05),
		      new Scale(new Span(2, 6.5), 0),
		      new Color(colour, ["#FF"+colour.slice(2,4) + '99', colour.slice(0,5) + 'ac'], Infinity, ease.easeOutSine),
		      new Repulsion(repeller, 10, 500, 2, ease.easeOutSine)
		    ])
		    .emit()

		emitter.position.set(...position)


		this.system.addEmitter(emitter)
		this.emitters[time] = emitter

		const delta = Date.now() - time

		return emitter
	}

	pause()
	{
		this.paused = true
	}

	play()
	{
		this.paused = false
	}

	start(originTime, colour)
	{
		this.started = true

		this.play()

		this.masterPosition = new THREE.Vector3(-400, 0, 0)
		this.addEmitter(this.masterPosition, originTime, colour, 1, this.masterPosition)


		this.system.update(originTime)
	}

	removeAllEmitters()
	{
		Object.values(this.emitters).forEach(emitter => {
			emitter.destroy()
		})

		this.emitters = {}
	}

	update()
	{
		this.camera.position.z -= 0.35

		if (!this.paused)
		{
			this.system.update()
		}

		this.renderer.render( this.scene, this.camera )
	}

}


