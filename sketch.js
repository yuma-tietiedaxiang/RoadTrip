let sky;
let buttonArray = [];
let songs = [
  "🎵Michael - Killer Mike",
  "🎵Victoria Monét",
  "🎵Tyla - Water",
  "🎵Lostboy - Padam Padam",
  "🎵What Was I-Billie Eilish",
  "🎵Guy Massey-Padam Padam",
  "🎵Flowers - Miley Cyrus",
  "🎵Bell Bottom-Lainey Wilson"
];
let currentSong = ""; // 用于存储当前显示的歌曲名字
let steeringWheel;  // 用于存储方向盘的对象
let tree1;
let tree2;
let tree3;
let tree4;
let tree5;
let noiseOffset = 0;
let showWaveform = true; // 标志位，控制显示波形或歌曲
let dog;

function setup() {
  // 创建一个宽1280px，高800px的画布
  createCanvas(1280, 800);
  
  sky = new Sky(); // 创建天空对象

  // 使用for循环创建多个Button对象，并将它们添加到buttonArray数组中
  for (let i = 125; i < 500; i = i + 60) { // 循环以指定颜色和小球的位置
    buttonArray.push(new Button(i, 475));
  }

  steeringWheel = new SteeringWheel(1080, 500, 170);  // 创建方向盘对象

  dog = new Dog(200, 530); // Initialize dog at center

  tree1 = new Tree(120,230,20,20,40)
  tree2 = new Tree(220,300,35,36,70)
  tree3 = new Tree(900,220,10,10,20)
  tree4 = new Tree(1200,320,35,36,70)
  tree5 = new Tree(400,250,20,20,50)
}

function draw() {
  // 每次绘制时，将背景颜色设为浅灰色（200），清除之前的内容
  background(200);
	
  // 打印鼠标的x和y坐标（四舍五入）
  print(round(mouseX), round(mouseY));

  sky.render(); // 渲染天空
	
  // 使用噪声函数生成色谱数组
  let spectrum = [];
  for (let i = 0; i < 800; i++) {
    spectrum[i] = noise(i * 0.01 + noiseOffset) * 255;  // 生成噪声值，并将其扩展到0-255范围
  }

  // 增加噪声偏移，使渐变在时间上发生变化
  noiseOffset += 0.01;

  // 绘制道路（自定义函数）
  drawRoad();

	//draw tree
	tree1.draw()
  tree2.draw()
  tree3.draw()
  tree4.draw()
  tree5.draw()

  // 绘制收音机（自定义函数）
  drawRadio();

  //方向盘
  steeringWheel.display();  // 绘制方向盘
  steeringWheel.showAngle();  // 显示当前角度

  // 使用循环显示buttonArray数组中的所有Button对象
  for (let i = 0; i < 6; i = i + 1) { // 循环用于确定小球的数量
    buttonArray[i].show();
  }

  if (showWaveform) {
    // 显示声音波形
    beginShape();
    stroke(50, 50, 0, 175); // 设置线条颜色为半透明的深色
    strokeWeight(1.25); // 设置线条粗细
    noFill(); // 不填充图形内部
    for (let i = 370; i < 370 + 230; i++) {
      // 使用vertex绘制波形的顶点，将spectrum数组中的值映射到适当的高度
      vertex(i + 150, map(spectrum[i] - 2350, 0, 455, 200, 130));
    }
    endShape();
  } else if (currentSong !== "") {
    // 显示当前选中的歌曲名字
    fill(195, 204, 219); // 将字体颜色设置为白色
    textSize(20);
    textAlign(CENTER);
    text(currentSong, width / 2, 555); // 在声音波形位置显示歌曲名字
  }

  dog.drawDog();
}

// 鼠标交互事件
function mousePressed() {
  // 检查方向盘是否被点击
  steeringWheel.checkDragging(mouseX, mouseY);

  // 检测所有按钮是否被点击
  for (let i = 0; i < buttonArray.length; i++) {
      if (buttonArray[i].isClicked(mouseX, mouseY)) {
          currentSong = random(songs); // 从歌曲列表中随机选择一首
          showWaveform = false; // 隐藏波形，显示歌曲
      }
  }

  if (mouseX >= 0 && mouseX <= 1280 && mouseY >= 0 && mouseY <= 400) {
    sky.toggleDayNight(); // 切换白天和黑夜
  }
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
