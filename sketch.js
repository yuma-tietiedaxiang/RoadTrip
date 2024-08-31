let sky;
let buttonArray = [];
let Counter = 0;
let steeringWheel;  // 用于存储方向盘的对象
let tree;
let noiseOffset = 0;

function setup() {
  // 创建一个宽1280px，高800px的画布
  createCanvas(1280, 800);
  
  // 设置背景颜色为灰色(100)
  background(100);
  
  // 设置填充颜色为黑色，并绘制一个覆盖整个画布的矩形
  fill(0);
  rect(0, 0, width, height);

  // 使用for循环创建多个Button对象，并将它们添加到buttonArray数组中
  for (let i = 125; i < 500; i = i + 60) { // 循环以指定颜色和小球的位置
    buttonArray.push(new Button(i, 475));
  }

  steeringWheel = new SteeringWheel(1080, 500, 170);  // 创建方向盘对象
}

function draw() {
  // 每次绘制时，将背景颜色设为浅灰色（200），清除之前的内容
  background(200);
	
  // 打印鼠标的x和y坐标（四舍五入）
  print(round(mouseX), round(mouseY));
	
  // 使用噪声函数生成色谱数组
  let spectrum = [];
  for (let i = 0; i < 800; i++) {
    spectrum[i] = noise(i * 0.01 + noiseOffset) * 255;  // 生成噪声值，并将其扩展到0-255范围
  }

  // 绘制天空的颜色渐变
  for (let i = 0; i < 800; i++) {
    noStroke();
    fill((spectrum[i] / 5) + 50, (spectrum[i] / 4) + 50, (spectrum[i] / 2) + 100);
    // 使用椭圆绘制天空的渐变
    let ellipseWidth = 1280; // 椭圆的宽度
    let ellipseHeight = 350;  // 椭圆的高度
    ellipse(640, 1 * i, ellipseWidth, ellipseHeight); // 椭圆的x坐标为300, y坐标为0.5 * i
  }

  // 增加噪声偏移，使渐变在时间上发生变化
  noiseOffset += 0.01;

  // 绘制道路（自定义函数）
  drawRoad();

  // 绘制收音机（自定义函数）
  drawRadio();

  //方向盘
  steeringWheel.display();  // 绘制方向盘
  steeringWheel.showAngle();  // 显示当前角度


  // 使用循环显示buttonArray数组中的所有Button对象
  for (let i = 0; i < 6; i = i + 1) { // 循环用于确定小球的数量
    buttonArray[i].show();
  }

  // 绘制声音波形
  beginShape();
  stroke(50, 50, 0, 175); // 设置线条颜色为半透明的深色
  strokeWeight(1.25); // 设置线条粗细
  noFill(); // 不填充图形内部
  for (let i = 370; i < 370+ 230; i++) {
    // 使用vertex绘制波形的顶点，将spectrum数组中的值映射到适当的高度
    vertex(i + 150, map(spectrum[i] - 2350, 0, 455, 200, 130));
  }
  endShape();
}

function mousePressed() {
  steeringWheel.checkDragging(mouseX, mouseY);  // 检查是否开始拖动方向盘
}

function mouseReleased() {
  steeringWheel.stopDragging();  // 停止拖动方向盘
}

function mouseDragged() {
  steeringWheel.drag(mouseX, mouseY);  // 拖动方向盘
}

function keyPressed() {
  steeringWheel.keyControl(keyCode);  // 键盘控制方向盘
}

// 当按下空格键时，将当前画布内容保存为"thumbnail.png"文件
function keyTyped() {
  if (key === " ") {
    saveCanvas("thumbnail.png");
  }
}
