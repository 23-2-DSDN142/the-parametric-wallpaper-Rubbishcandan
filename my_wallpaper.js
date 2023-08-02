//your parameter variables go here!
let rect_width = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 50;
}

function wallpaper_background() {
  //background(240, 255, 240); //light honeydew green colour
  background('#5ec6db')
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  drawWindmillBody (0,0)
  drawWindmillRoof (0,0)
  drawleftBlade(0, 0)
  drawBottomBlade(0, 0)
  drawtopBlade(0, 0)
  drawrightBlade(0, 0)
  drawcenter(0, 0)
  drawground (0,0)
  
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
  translate (100,55)
  rotate (270)
  rect (0, 0, 35,15);
  pop()
  line (100,40,100,70)
}

function drawrightBlade(x,y){

  push()
  translate (155,90)
  rotate (180)
  rect (0, 0, 35,15);
  pop()
  line(100, 75, 120, 75)

}

function drawcenter(x, y) {

  ellipse(100, 75, 10, 10);
}

function drawground(x,y) {
  push()
  fill('#16c444')
  arc(100, 200, 200, 40, 180, 360);
  pop()
}

function drawWindmillBody(x,y) {
  push()
  noFill();
  curve( 130,50, 120,80,140,181.5, 140,120)
  curve( 70,50, 80,80, 60,181.5, 60,120)
  line (80,80,120,80)
  pop()
}

function drawWindmillRoof(x,y) {
  arc (100, 83.5, 45, 40, 180, 360, CHORD);


}