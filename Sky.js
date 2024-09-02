class Sky {
    constructor() {
      this.isDay = true;
      this.stars = [];
      this.generateStars();
    }
  
    generateStars() {
      // 生成星星的位置
      for (let i = 0; i < 50; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(1, 3);
        this.stars.push({ x: x, y: y, r: r });
      }
    }
  
    drawSun(x, y, r) {
      noStroke();
      fill(255, 204, 0, 150);
      for (let i = r; i < r + 30; i += 10) {
        ellipse(x, y, i * 2);
      }
      fill(255, 204, 0);
      ellipse(x, y, r * 2);
    }
  
    drawMoon(x, y, r) {
      noStroke();
      fill(200, 200, 255, 100);
      for (let i = r; i < r + 30; i += 10) {
        ellipse(x, y, i * 2);
      }
      fill(240, 240, 255);
      ellipse(x, y, r * 2);
    }
  
    drawStars() {
      for (let star of this.stars) {
        fill(255, 255, 255);
        noStroke();
        ellipse(star.x, star.y, star.r * 2);
      }
    }
  
    drawDay() {
      background(135, 206, 235);
      this.drawSun(100, 100, 60);
    }
  
    drawNight() {
      background(20, 24, 82);
      this.drawMoon(1180, 100, 60);
      this.drawStars();
    }
  
    toggleDayNight() {
      this.isDay = !this.isDay;
    }
  
    render() {
      if (this.isDay) {
        this.drawDay();
      } else {
        this.drawNight();
      }
    }
  }
  