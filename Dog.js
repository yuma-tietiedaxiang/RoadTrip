class Dog {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  drawDog() {

    //body
    fill(61, 42, 8)
    ellipse(195, 800, 300, 400);


    fill(255); // 文字颜色为白色
    textSize(16); // 文字大小
    textAlign(LEFT, BOTTOM); // 左下角对齐
    text("(1)pet dog using mouse and arrow key (2)try radio button (3)drag steeringwheel (4)check the sky ❤️  ", 70, height - 10); // 在左下角绘制提示文字
    
  

    // Back of ears 1
    fill(61, 42, 8);
    triangle(this.x - 76, this.y - 160, this.x - 77, this.y + 25, this.x + 50, this.y - 50);
    triangle(this.x + 75, this.y - 160, this.x - 125, this.y + 25, this.x + 110, this.y - 50);

    // Tongue 4
    strokeWeight(2);
    stroke(237, 81, 130);
    fill(237, 185, 208);
    if (mouseY < this.y) {
      ellipse(this.x, this.y + 50, 75, 150);
    } else if (mouseY > this.y + 175) {
      ellipse(this.x, this.y + 50, 75, 150);
    } else if (mouseIsPressed) {
      ellipse(this.x, mouseY, 75, 150);
    }

    noStroke();

    // Head 2
    fill(128, 89, 22);
    ellipse(this.x, this.y, 300, 300);

    // Eyes 3
    if (keyIsPressed && keyCode === DOWN_ARROW) {
      fill(128, 89, 22);
      ellipse(this.x - 70, this.y - 20, 60, 60);
      ellipse(this.x + 70, this.y - 20, 60, 60);
      fill(127, 79, 21);
      arc(this.x - 70, this.y - 20, 60, 60, TWO_PI, TWO_PI + PI, CHORD);
      arc(this.x + 70, this.y - 20, 60, 60, TWO_PI, TWO_PI + PI, CHORD);
    } else {
      fill(255, 255, 255);
      ellipse(this.x - 70, this.y - 20, 60, 60);
      ellipse(this.x + 70, this.y - 20, 60, 60);
      fill(10, 7, 1);
      ellipse(this.x - 70 + (mouseX / 225), this.y - 20 + (mouseY / 225), 55, 60);
      ellipse(this.x + 70 + (mouseX / 225), this.y - 20 + (mouseY / 225), 55, 60);
      if (mouseY < this.y) {
        fill(255, 255, 255);
        ellipse(this.x - 60 + (mouseX / 100), this.y - 40 + (mouseY / 100), 10, 10);
        ellipse(this.x + 60 + (mouseX / 100), this.y - 40 + (mouseY / 100), 10, 10);
      } else {
        fill(255, 255, 255);
        ellipse(this.x - 60 + (mouseX / 100), this.y - 20 - (mouseY / 100), 10, 10);
        ellipse(this.x + 60 + (mouseX / 100), this.y - 20 - (mouseY / 100), 10, 10);
      }
    }

    // Muzzle 5
    fill(255, 255, 255);
    triangle(this.x, this.y - 100, this.x - 50, this.y + 75, this.x + 50, this.y + 75);
    arc(this.x + 50, this.y + 100, 150, 150, PI + QUARTER_PI, TWO_PI + HALF_PI + QUARTER_PI, OPEN);
    arc(this.x - 55, this.y + 100, 150, 150, QUARTER_PI, PI + HALF_PI + QUARTER_PI, OPEN);
    fill(10, 7, 1);
    triangle(this.x - 2, this.y + 150, this.x - 30, this.y + 100, this.x + 30, this.y + 100);

    // Nose
    fill(20, 15, 2);
    ellipse(this.x, this.y + 75, 90, 70);

    // Ears 7
    if (keyIsPressed) {
      if (keyCode === LEFT_ARROW) {
        fill(74, 59, 19);
        quad(this.x - 80, this.y - 190, this.x - 54, this.y - 140, this.x - 125, this.y - 80, this.x - 150, this.y - 230);
        rect(this.x + 75, this.y - 160, 110, 135, 0, 10, 20, 20);
        fill(128, 89, 22);
        quad(this.x - 90, this.y - 110, this.x - 90, this.y - 110, this.x - 125, this.y - 80, this.x - 150, this.y - 230);
      } else if (keyCode === RIGHT_ARROW) {
        fill(74, 59, 19);
        quad(this.x + 124, this.y - 80, this.x + 150, this.y - 230, this.x + 79, this.y - 190, this.x + 54, this.y - 140);
        rect(this.x - 175, this.y - 160, 110, 135, 10, 0, 20, 20);
        fill(128, 89, 22);
        quad(this.x + 124, this.y - 80, this.x + 150, this.y - 230, this.x + 150, this.y - 230, this.x + 94, this.y - 106);
      } else {
        fill(74, 59, 19);
        rect(this.x - 175, this.y - 160, 110, 135, 10, 0, 20, 20);
        rect(this.x + 75, this.y - 160, 110, 135, 0, 10, 20, 20);
      }
    } else {
      fill(74, 59, 19);
      rect(this.x - 175, this.y - 160, 110, 135, 10, 0, 20, 20);
      rect(this.x + 75, this.y - 160, 110, 135, 0, 10, 20, 20);
    }
  }
}
  
  