//your parameter variables go here!
let rect_width = 20;
let rect_height = 20;

let flowercolour = ['#ed1b0c','#800080','#FFA500', '#ffffff','#FFFF00','#FFC0CB']

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
  background(255)
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  drawFlagTop(0,0)
  drawFlagBottom(0,0)
  drawWindmillBody(0, 0)
  drawWindmillRoof(0, 0)
  drawleftBlade(0, 0)
  drawBottomBlade(0, 0)
  drawtopBlade(0, 0)
  drawrightBlade(0, 0)
  drawcenter(0, 0)
  drawground(0, 0)
  drawFlowers(0, 0)
}

//ellipse(100, 100, 45, 45); // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down


function drawleftBlade(x, y) {

  push()
  translate(45, 60)
  rotate(0)
  rect(0, 0, 35, 15);
  pop()
  line(65, 75, 100, 75)
}

function drawBottomBlade(x, y) {

  push()
  translate(100, 95)
  rotate(90)
  rect(0, 0, 35, 15);
  pop()
  line(100, 100, 100, 80)
}

function drawtopBlade(x, y) {

  push()
  translate(100, 55)
  rotate(270)
  rect(0, 0, 35, 15);
  pop()
  line(100, 40, 100, 70)
}

function drawrightBlade(x, y) {

  push()
  translate(155, 90)
  rotate(180)
  rect(0, 0, 35, 15);
  pop()
  line(100, 75, 120, 75)

}

function drawcenter(x, y) {

  ellipse(100, 75, 10, 10);
}

function drawground(x, y) {
  push()
  fill('#16c444')
  arc(100, 200, 200, 40, 180, 360);
  pop()
}

function drawWindmillBody(x, y) {

  beginShape()
  vertex(60, 185)
  bezierVertex(65, 170, 75, 120, 80, 80)
  vertex(120, 80)
  bezierVertex(125, 120, 135, 170, 140, 181.5)
  vertex(60, 185)
  endShape();
}

function drawWindmillRoof(x, y) {
  arc(100, 83.5, 45, 40, 180, 360, CHORD);


}

function drawFlowers(x, y) {
  push()
  fill(random(flowercolour))
  ellipse(30, 190, 2.5, 5)
  line (30,193,30,195)
  fill(random(flowercolour))
  ellipse(40, 192, 2.5, 5)
  line (40,195,40,197)
  fill(random(flowercolour))
  ellipse(50, 187, 2.5, 5)
  line (50,190,50,192)
  fill(random(flowercolour))
  ellipse(60, 191, 2.5, 5)
  line (60,194,60,196)
  fill(random(flowercolour))
  ellipse(70, 185, 2.5, 5)
  line (70,188,70, 190)
  fill(random(flowercolour))
  ellipse(80, 186, 2.5, 5)
  line (80,189,80,191)
  fill(random(flowercolour))
  ellipse(90, 190, 2.5, 5)
  line (90,193,90,195)
  fill(random(flowercolour))
  ellipse(100, 187.5, 2.5, 5)
  line (100,190.5,100,192.5)
  fill(random(flowercolour))
  ellipse(110, 192, 2.5, 5)
  line (110,195,110,197)
  fill(random(flowercolour))
  ellipse(120, 187, 2.5, 5)
  line (120, 190,120, 192)
  fill(random(flowercolour))
  ellipse(130, 191, 2.5, 5)
  line (130,194,130, 196)
  fill(random(flowercolour))
  ellipse(140, 186, 2.5, 5)
  line (140, 189,140,191)
  fill(random(flowercolour))
  ellipse(150, 194, 2.5, 5)
  line (150,197,150,199)
  fill(random(flowercolour))
  ellipse(160, 190, 2.5, 5)
  line (160,193,160,195)
  fill(random(flowercolour))
  ellipse (170,192,2.5,5)
  line (170, 195,170,197)
  pop()
}
function drawFlagTop (x,y){
  push()
  noStroke()
  fill('#AD1D25')
  rect (0,0, 200,66.6)
  pop()
}
function drawFlagBottom (x,y){
  push()
  noStroke()
  fill('#1E4785')
  rect (0,200,200,-66.6)
  pop()
  
}
 
  
