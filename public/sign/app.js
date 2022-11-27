class Vector2
{
	constructor(x, y)
	{
		this.x = x
		this.y = y
	}

	add(other)
	{
		return new Vector2(this.x + other.x, this.y + other.y)
	}

	sub(other)
	{
		return new Vector2(this.x - other.x, this.y - other.y)
	}

	divide(other)
	{
		return new Vector2(this.x / other.x, this.y / other.y)
	}
}

class Vector3
{
	constructor(x, y, z)
	{
		this.x = x
		this.y = y
		this.z = z
	}

	add(other)
	{
		return new Vector3(this.x + other.x, this.y + other.y, this.z + other.z)
	}

	sub(other)
	{
		return new Vector3(this.x - other.x, this.y - other.y, this.z - other.z)
	}

	divide(other)
	{
		return new Vector3(this.x / other.x, this.y / other.y, this.z / other.z)
	}
}

const dot = (context, point) => {

	context.beginPath()
	context.fillStyle = "#000000"
	context.arc(point.x, point.y,1,0,Math.PI*2,true)
	context.fill()
	context.stroke()
	context.closePath()

}

const line = (context, start, end) => {
	context.beginPath();
	context.moveTo(start.x, start.y);
	context.lineTo(end.x, end.y);
	context.stroke();
	context.closePath();
}


function clear(context) {
	context.fillStyle = "#ffffff";
	context.rect(0, 0, 300, 300);
	context.fill();
}


window.onload = function() {

	document.ontouchmove = function(e){ e.preventDefault() }

	const signature = []
	const startTime = Date.now()

	const canvas  = document.getElementById('signature-canvas')
	const context = canvas.getContext("2d")

	const markLabel = document.getElementById("mark-label")
	const markValue = document.getElementById("mark-value")

	const markForm = document.getElementById("mark-form")

	markForm.reset()

	const calculateMarkValue = () =>
	{
		let total = new Vector3(0, 0, 0)

		signature.forEach(point => {
			total = total.add(point) 
		})

		const mark = total.x * total.y * total.z

		return mark.toString(16)
	}  

	const updateMarkValue = () => {

		markLabel.hidden = signature.length === 0
		markValue.type = signature.length === 0 ? "hidden" : "text" 

		markValue.value = calculateMarkValue()
	}

	updateMarkValue()

	let lastPoint = null
	let pressing = false

	context.strokeStyle = "#000000";
	context.lineCap = 'round';
	context.lineJoin = 'round';
	context.lineWidth = 5;

	const drawPoint = (point) => {

		lastPoint = point
		dot(context, lastPoint)


	}

	const drawLine = (newPoint) => {

		line(context, lastPoint, newPoint)
		lastPoint = newPoint

		updateSignature()


	}

	const updateSignature = () => {

		const centre = new Vector2(canvas.width / 2, canvas.height / 2)
		const offset = centre.sub(lastPoint).divide(centre).add(new Vector2(0.5, 0.5))

		const elapsed = Math.round((Date.now() - startTime)/1000)

		signature.push(new Vector3(Math.round(offset.x), Math.round(offset.y), elapsed))

		updateMarkValue()

	}


	canvas.ontouchstart = (event) => {         

		event.preventDefault()                 

		drawPoint(new Vector2(event.touches[0].clientX, event.touches[0].offsetY - canvas.offsetTop))

	}

	canvas.ontouchmove = function(event){ 

		event.preventDefault();                 

		const newPoint = new Vector2(event.touches[0].clientX, event.touches[0].clientY - canvas.offsetTop)

		drawLine(newPoint)

		lastPoint = newPoint	

	}


	canvas.onmousedown = function(event){   

		pressing = true

		drawPoint(new Vector2(event.offsetX, event.offsetY))

	}


	canvas.onmouseup = function(event){   

		pressing = false

	}

	canvas.onmouseleave = function(event){   

		pressing = false
		lastPoint = null
		
	}

	window.onmouseleave = function(event){   

		pressing = false
		lastPoint = null
		
	}

	canvas.onmousemove = function(event){  

		if (pressing)
		{

			const newPoint = new Vector2(event.offsetX, event.offsetY)

			drawLine(newPoint)

		}


	}
	 
	clear(context)

}




