//your parameter variables go here!
let rect_width = 20;
let rect_height = 20;

let flowercolour = ['#ed1b0c', '#800080', '#FFA500', '#ffffff', '#FFFF00', '#FFC0CB']
let setflag = true
let flowerwidth = 2.5
let flowerheight = 5
let bladewidth = 35
let setflowers = true

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 50;
}

function wallpaper_background() {
  //background(240, 255, 240); //light honeydew green colour
  background(0)
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  if (setflag) {
    drawFlagTop(0, 0)
    drawFlagMiddle(0, 0)
    drawFlagBottom(0, 0)
  }
  drawWindmillBars(0, 0)
  drawWindmillBody(0, 0)
  drawWindmillRoof(0, 0)
  drawleftBlade(0, 0)
  drawBottomBlade(0, 0)
  drawtopBlade(0, 0)
  drawrightBlade(0, 0)
  drawWindmillDoor(0, 0)
  drawWindmillWindow(0, 0)
  drawcenter(0, 0)
  drawground(0, 0)
  if (setflowers){
    drawFlowers(0, 0)
  }

}

//ellipse(100, 100, 45, 45); // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down


function drawleftBlade(x, y) {

  push()
  fill('#faf7be')
  translate(45, 60)
  rotate(0)
  rect(0, 0, bladewidth, 15);
  pop()
  line(65, 75, 100, 75)
}

function drawBottomBlade(x, y) {

  push()
  fill('#faf7be')
  translate(100, 95)
  rotate(90)
  rect(0, 0, bladewidth, 15);
  pop()
  line(100, 100, 100, 75)
}

function drawtopBlade(x, y) {

  push()
  fill('#faf7be')
  translate(100, 55)
  rotate(270)
  rect(0, 0, bladewidth, 15);
  pop()
  line(100, 40, 100, 75)
}

function drawrightBlade(x, y) {

  push()
  fill('#faf7be')
  translate(155, 90)
  rotate(180)
  rect(0, 0, bladewidth, 15);
  pop()
  line(100, 75, 120, 75)

}

function drawcenter(x, y) {
  push()
  fill(0)
  ellipse(100, 75, 7.5, 7.5);
  pop()
}

function drawground(x, y) {
  push()
  fill('#16c444')
  arc(100, 200, 200, 40, 180, 360);
  pop()
}

function drawWindmillBody(x, y) {
  push()
  fill('#c47d3b')
  beginShape()
  vertex(60, 185)
  bezierVertex(65, 170, 75, 120, 80, 80)
  vertex(120, 80)
  bezierVertex(125, 120, 135, 170, 140, 181.5)
  vertex(60, 185)
  endShape();
  pop()
}

function drawWindmillRoof(x, y) {
  push()
  fill('#755454')
  arc(100, 83.5, 45, 40, 180, 360, CHORD);
  pop()

}

function drawFlowers(x, y) {
  push()
  fill(random(flowercolour))
  ellipse(30, 190, flowerwidth, flowerheight)
  line(30, 193, 30, 195)
  fill(random(flowercolour))
  ellipse(40, 192, flowerwidth, flowerheight)
  line(40, 195, 40, 197)
  fill(random(flowercolour))
  ellipse(50, 187, flowerwidth, flowerheight)
  line(50, 190, 50, 192)
  fill(random(flowercolour))
  ellipse(60, 191, flowerwidth, flowerheight)
  line(60, 194, 60, 196)
  fill(random(flowercolour))
  ellipse(70, 185, flowerwidth, flowerheight)
  line(70, 188, 70, 190)
  fill(random(flowercolour))
  ellipse(80, 186, flowerwidth, flowerheight)
  line(80, 189, 80, 191)
  fill(random(flowercolour))
  ellipse(90, 190, flowerwidth, flowerheight)
  line(90, 193, 90, 195)
  fill(random(flowercolour))
  ellipse(100, 187.5, flowerwidth, flowerheight)
  line(100, 190.5, 100, 192.5)
  fill(random(flowercolour))
  ellipse(110, 192, flowerwidth, flowerheight)
  line(110, 195, 110, 197)
  fill(random(flowercolour))
  ellipse(120, 187, flowerwidth, flowerheight)
  line(120, 190, 120, 192)
  fill(random(flowercolour))
  ellipse(130, 191, flowerwidth, flowerheight)
  line(130, 194, 130, 196)
  fill(random(flowercolour))
  ellipse(140, 186, flowerwidth, flowerheight)
  line(140, 189, 140, 191)
  fill(random(flowercolour))
  ellipse(150, 194, flowerwidth, flowerheight)
  line(150, 197, 150, 199)
  fill(random(flowercolour))
  ellipse(160, 190, flowerwidth, flowerheight)
  line(160, 193, 160, 195)
  fill(random(flowercolour))
  ellipse(170, 192, flowerwidth, flowerheight)
  line(170, 195, 170, 197)
  pop()
}

function drawFlagTop(x, y) {
  push()
  noStroke()
  fill('#AD1D25')
  rect(0, 0, 200, 66.6)
  pop()
}

function drawFlagMiddle(x, y) {
  push()
  noStroke()
  fill(255)
  rect(0, 66.6, 200, 66.7)
  pop()

}

function drawFlagBottom(x, y) {
  push()
  noStroke()
  fill('#1E4785')
  rect(0, 200, 200, -66.6)
  pop()

}

function drawWindmillDoor(x, y) {
  push()
  fill('#856e42')
  beginShape()
  vertex(90, 180)
  vertex(90, 160)
  bezierVertex(90, 160, 100, 150, 110, 160)
  vertex(110, 180)
  vertex(90, 180)
  endShape(close)
  line(100, 180, 100, 156)
  pop()
}

function drawWindmillBars(x, y) {
  push()
  strokeWeight(1.2)
  line(123, 100, 140, 77.5)
  line(77, 100, 60, 77.5)
  stroke('brown')
  strokeWeight(1.5)
  line(77.5, 80, 57.5, 80)
  line(122.5, 80, 142.5, 80)
  pop()
}

function drawWindmillWindow(x, y) {
  rect(91.5, 134, 17, 17)
  push()
  fill('#966232')
  stroke(255)
  rect(92.5, 135, 15, 15)
  strokeWeight(0.7)
  line(100, 135, 100, 150)
  line(92.5, 142.5, 107.5, 142.5)
  pop()
}