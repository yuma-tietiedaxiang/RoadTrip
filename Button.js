class Button {
    constructor(X, Y) {
      // 构造函数，初始化按钮的x和y坐标
      this.x = X;
      this.y = Y;
    }
  
    // 显示按钮的方法
    show() {
      // 设置按钮的边框颜色为灰色，并设置边框粗细为3
      stroke(75, 75, 75);
      strokeWeight(3);
      
      // 设置按钮的填充颜色为深灰色，并绘制一个带有圆角的矩形按钮
      fill(55, 55, 55);
      rect(this.x, this.y, 50, 20, 5); // 宽50，高20，圆角半径为5
      
      // 设置线条的粗细为2，并在按钮上绘制一条水平线
      strokeWeight(2);
      line(this.x + 10, this.y + 13, this.x + 40, this.y + 13); // 从按钮左侧10像素处画到右侧10像素处
    }
  }
  