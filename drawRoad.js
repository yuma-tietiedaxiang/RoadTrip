function drawRoad() {
    // 绘制地面
    fill(20, 40, 0); // 填充颜色为深绿色
    triangle(0, 225, 640, 200, 1280, 225); // 绘制三角形地面部分
    rect(0, 225, 1280, 200); // 绘制矩形地面部分，覆盖画布下方

    // 绘制道路
    fill(30); // 填充颜色为深灰色
    triangle(0, 400, 640, 200, 1280, 400); // 绘制三角形道路部分

    // 绘制道路上的线条
    fill(235, 190, 0, 175); // 填充颜色为半透明的黄色
    triangle(590, 400, 640, 200, 620, 400); // 左侧道路线
    triangle(660, 400, 640, 200, 690, 400); // 右侧道路线

    // 绘制天空框架
    stroke(50, 50, 50); // 设置边框颜色为深灰色
    strokeWeight(20); // 边框粗细为20
    noFill(); // 不填充
    rect(0, 0, 1280,400, 25); // 绘制天空部分的框架，圆角半径为25

}
