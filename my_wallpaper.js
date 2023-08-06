//your parameter variables go here!
let rect_width = 20;
let rect_height = 20;

let flowercolour = ['#ed1b0c', '#800080', '#FFA500', '#ffffff', '#FFFF00', '#FFC0CB'] //Colour range for flowers, red, purple, orange, white, yellow, pink
let setflag = true //variable to turn flag backround on or off
let flowerwidth = 2.5 //width of flowers, 2.5 default 
let flowerheight = 5 //height of flowers, 5 default 
let bladewidth = 35 //width of windmillblade, 35 works best 
let setflowers = true //variable to turn flowers on or off 
let bladecolour = '#faf7be' //default cream colour #faf7be 
let bladeheight = 15 //height of windmill blades, 15 works best 
let windmillbodycolour = '#c47d3b' //colour of windmill body, #c47d3b default, reddish brown 
let backgroundcolour = '#1c7ad9' //colour of the backround, #1c7ad9 default 

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 50;
}


function wallpaper_background() {
  background(backgroundcolour) //set the backround colour 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  if (setflag) { //toggle flag on or off 
    drawFlagTop(0, 0) //draws top of flag  
    drawFlagMiddle(0, 0) //draws centre of flag 
    drawFlagBottom(0, 0) //draws bottom of flag 
  }
  drawWindmillBars(0, 0) //draws the side bars 
  drawWindmillBody(0, 0) //draws the body of windmill 
  drawWindmillRoof(0, 0) //draws the roof of windmill 
  drawleftBlade(0, 0) //draws the left blade 
  drawBottomBlade(0, 0) //draws the bottom blade 
  drawtopBlade(0, 0) //draws the top blade 
  drawrightBlade(0, 0) //draws the right blade 
  drawWindmillDoor(0, 0) //draws the windmill door 
  drawWindmillWindow(0, 0) //draws the windmill window 
  drawcenter(0, 0) //draws the centre blade connecter 
  drawground(0, 0) //draws the flowers 
  if (setflowers) { //if statement to toggle flowers on or off 
    drawFlowers(0, 0) //draws the flowers
  }

}

function drawleftBlade(x, y) {

  line(65, 75, 100, 75)
  push()
  stroke(0)
  fill(bladecolour) //colours the windmill blades 
  translate(45, 60)
  rotate(0)
  rect(0, 0, bladewidth, bladeheight);
  pop()

}

function drawBottomBlade(x, y) {

  line(100, 100, 100, 75)
  push()
  stroke(0)
  fill(bladecolour) //colours the windmill blades 
  translate(100, 95)
  rotate(90)
  rect(0, 0, bladewidth, bladeheight);
  pop()

}

function drawtopBlade(x, y) {
  line(100, 40, 100, 75)
  push()
  stroke(0)
  fill(bladecolour) //colours the windmill blades 
  translate(100, 55)
  rotate(270)
  rect(0, 0, bladewidth, bladeheight);
  pop()

}

function drawrightBlade(x, y) {

  line(100, 75, 140, 75)
  push()
  stroke(0)
  fill(bladecolour) //colours the windmill blades 
  translate(155, 90)
  rotate(180)
  rect(0, 0, bladewidth, bladeheight);
  pop()


}

function drawcenter(x, y) {
  push()
  fill(0) //black 
  ellipse(100, 75, 7.5, 7.5);
  pop()
}

function drawground(x, y) {
  push()
  fill('#16c444') //green 
  arc(100, 200, 200, 40, 180, 360);
  pop()
}

function drawWindmillBody(x, y) {
  push()
  fill(windmillbodycolour)
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
  fill('#755454') //dark grey 
  arc(100, 83.5, 45, 40, 180, 360, CHORD); //semi circle roof 
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
  noStroke() //disable stroke 
  fill('#AD1D25') //bright vermillion 
  rect(0, 0, 201, 66.6)
  pop()
}

function drawFlagMiddle(x, y) {
  push()
  noStroke() //disable stroke
  fill(255)
  rect(0, 66.6, 201, 66.7)
  pop()

}

function drawFlagBottom(x, y) {
  push()
  noStroke() //disable stroke
  fill('#1E4785') //dark blue 
  rect(0, 200, 201, -66.6)
  pop()

}

function drawWindmillDoor(x, y) {
  push()
  fill('#856e42') //brown 
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
  strokeWeight(1.2) //1.2x stroke weight 
  line(123, 100, 140, 77.5)
  line(77, 100, 60, 77.5)
  stroke('brown') //brown stroke colour 
  strokeWeight(1.5) //1.5x stroke weight 
  line(77.5, 80, 57.5, 80)
  line(122.5, 80, 142.5, 80)
  pop()
}

function drawWindmillWindow(x, y) {
  rect(91.5, 134, 17, 17)
  push()
  fill('#966232') //lighter brown 
  stroke(255) //white stroke colour 
  rect(92.5, 135, 15, 15)
  strokeWeight(0.7) //0.7x stroke weight 
  line(100, 135, 100, 150)
  line(92.5, 142.5, 107.5, 142.5)
  pop()
}