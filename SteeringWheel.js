class SteeringWheel {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.angle = 0;
    this.isDragging = false;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);

    // 绘制方向盘的外圈
    fill(50);
    stroke(15);
    strokeWeight(40);
    ellipse(0, 0, this.radius * 2, this.radius * 2);

    // 绘制方向盘的轮辐
    stroke(10);
    strokeWeight(20);
    line(-this.radius + 20, 0, this.radius - 20, 0);  // 水平轮辐
    line(0, this.radius - 20, 0, 0);  // 下轮辐

    // 绘制方向盘中央部分
    fill(100);
    stroke(0);
    strokeWeight(5);
    ellipse(0, 0, 100, 100);

    // 绘制方向盘中央的装饰
    fill(255, 204, 0);
    pop();
  }

  showAngle() {
    fill(0);
    textSize(20);
    textAlign(CENTER);
    // text("hold & drag " + degrees(this.angle).toFixed(2) + "°", this.x, this.y + this.radius + 50);
  }

  checkDragging(mx, my) {
    let d = dist(mx, my, this.x, this.y);
    if (d < this.radius) {
      this.isDragging = true;
    }
  }

  stopDragging() {
    this.isDragging = false;
  }

  drag(mx, my) {
    if (this.isDragging) {
      let dx = mx - this.x;
      let dy = my - this.y;
      this.angle = atan2(dy, dx);
    }
  }

}


