class Button {
    constructor(X, Y) {
        this.x = X + 340; // 调整x坐标
        this.y = Y + 160; // 调整y坐标
        this.width = 50;  // 按钮的宽度
        this.height = 20; // 按钮的高度
    }

    // 显示按钮的方法
    show() {
        // 设置按钮的边框颜色为灰色，并设置边框粗细为3
        stroke(75, 75, 75);
        strokeWeight(3);
        
        // 设置按钮的填充颜色为深灰色，并绘制一个带有圆角的矩形按钮
        fill(55, 55, 55);
        rect(this.x, this.y, this.width, this.height, 5); // 宽50，高20，圆角半径为5
        
        // 设置线条的粗细为2，并在按钮上绘制一条水平线
        strokeWeight(2);
        line(this.x + 10, this.y + 13, this.x + 40, this.y + 13); // 从按钮左侧10像素处画到右侧10像素处
    }

    // 检测是否点击了按钮的方法
    isClicked(mx, my) {
        // 检查鼠标点击位置是否在按钮范围内
        return (mx > this.x && mx < this.x + this.width && my > this.y && my < this.y + this.height);
    }
}