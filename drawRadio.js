function drawRadio() {
	// radio background
	noStroke()
	fill(100, 100, 100)
	rect(0, 325, 600, 350);

	// cd slot
	stroke(75, 75, 75)
	strokeWeight(3)
	fill(50, 50, 50)
	rect(125, 350, 350, 7, 10)

	// frame
	stroke(75, 75, 75)
	strokeWeight(5)
	noFill()
	rect(50, 370, 500, 200, 10)
	
	// mirror
	noStroke()
	fill(50, 50, 50)
	rect(275, 0, 50, 50)

	stroke(50, 50, 50)
	strokeWeight(7)
	fill(180, 200, 255)
	rect(175, 30, 250, 80, 40)

	// screen
	stroke(75, 75, 75)
	strokeWeight(5)
	fill(95, 145, 70)
	rect(125, 390, 350, 75, 10)
	
	// more buttons
	stroke(75, 75, 75)
	strokeWeight(3)
	fill(55, 55, 55)
	ellipse(88,425,50,50)
	ellipse(512,425,50,50)
	
	// caset
	stroke(75, 75, 75)
	strokeWeight(3)
	fill(50, 50, 50)
	rect(200, 510, 200, 20, 7)
}