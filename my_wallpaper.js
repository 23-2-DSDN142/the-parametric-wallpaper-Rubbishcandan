//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  //background(240, 255, 240); //light honeydew green colour
  background ('#5ec6db')
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  drawsnowbird (100,100)
  drawflake (20,20)
  drawflake (20,40)
  }
    //ellipse(100, 100, 45, 45); // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down
  function drawsnowbird(x,y){
  let eyeY = 90;
  let wingtopY = 160;
  let buttonX  = 100;
  stroke(0)
  
  fill(255);
  ellipse (100,100,100,80); //head shape 
  
  fill ('#000000');
  ellipse (80,eyeY,20,20); //Left eye 
  
  fill ('#000000');
  ellipse (120,eyeY,20,20); //Right eye
  
  fill ('#FFA500')
  triangle (90,105,100,130,110,105) //beak
  
  fill(255);
  ellipse (100,185,80,90) //body 
  
  fill (255)
  triangle(66,wingtopY,40,190,53,220) //left wing
  
  triangle(134,wingtopY,160,190,148,220) //right wing 
  
  fill('#000000')
  rect(80,20,40,40);
  line(70,60,130,60); //tophat
  
  fill(0)
  ellipse(buttonX,155,10,10) // buttons
  
  ellipse(buttonX,175,10,10)
  
  ellipse(buttonX,195,10,10)
  
  }
  function drawflake (x,y){
  stroke(255)
  line (10,10,15,15)
  line (15,10,10,15)
  line (12.5,10,12.5,15)
  line (10,12.5,15,12.5) //snowflake
  }
  
  
  
  
  
  
  

