class Tree {
    constructor(x, y, trunkWidth, trunkHeight, leafSize) {
      this.x = x;
      this.y = y;
      this.trunkWidth = trunkWidth;
      this.trunkHeight = trunkHeight;
      this.leafSize = leafSize;
    }
  
    drawTrunk() {
      fill(97, 62, 33);
      noStroke();
      rect(this.x - this.trunkWidth / 2, this.y - this.trunkHeight / 2, this.trunkWidth, this.trunkHeight);
      rect(this.x - this.trunkWidth / 2, this.y - this.trunkHeight * 1.5, this.trunkWidth, this.trunkHeight);
    }
  
    drawLeaves() {
      fill(40, 87, 39);
      circle(this.x, this.y - this.trunkHeight * 2, this.leafSize);
      circle(this.x + this.trunkWidth, this.y - this.trunkHeight, this.leafSize);
      circle(this.x - this.trunkWidth, this.y - this.trunkHeight, this.leafSize);
    }
  
    draw() {
      this.drawTrunk();
      this.drawLeaves();
    }
  }