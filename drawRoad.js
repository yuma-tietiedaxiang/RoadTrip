function drawRoad() {
	//ground
	fill(20, 40, 0)
	triangle(0, 225, 300, 200, 600, 225)
	rect(0, 225, 600, 400)


	
	
// 	image(tree, 320, 188, 0.025 * tree.width, 0.025 * tree.height)
	
// 	image(tree, 185, 175, 0.05 * tree.width, 0.05 * tree.height)
// 	image(tree, 350, 175, 0.05 * tree.width, 0.05 * tree.height)

// 	image(tree, 65, 150, 0.1 * tree.width, 0.1 * tree.height)
// 	image(tree, 405, 150, 0.1 * tree.width, 0.1 * tree.height)

// 	image(tree, -120, 100, 0.2 * tree.width, 0.2 * tree.height)
// 	image(tree, 445, 100, 0.2 * tree.width, 0.2 * tree.height)

	// road
	fill(30)
	triangle(0, 325, 300, 200, 600, 325)

	// road lines
	fill(235, 190, 0, 175)
	triangle(275, 325, 300, 200, 290, 325)
	triangle(310, 325, 300, 200, 325, 325)

	// sky frame
	stroke(50, 50, 50)
	strokeWeight(20)
	noFill()
	rect(0, 0, 600, 325, 25);

		// trees
	push();
	
	// movement 
	translate(375 + (Counter), 200 + (Counter * 0.43)); //movement
	
	// alters the size
	scale(Counter / 20); //speed 
	
	// tree image
	image(tree, 0, 0, 0.025 * tree.width, 0.025 * tree.height);

	// closes
	pop();
	
	Counter++
}