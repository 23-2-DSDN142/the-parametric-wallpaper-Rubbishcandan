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
  drawtopleftBlade (0,0)
  drawtoprightBlade (0,0)
  drawcenter (0,0)
}
  
  //ellipse(100, 100, 45, 45); // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down


  function drawtopleftBlade (x,y){


    push()
    rotate(0)
    translate (25,0)
    rect(0,15,45,15);
    pop()
    
  }

  function drawtoprightBlade (x,y){
    
    push ()
    rect(100,100,45,15);
    rotate(90)
   // translate (75,-122.5)
   
    pop ()
  }

  function drawcenter (x,y){

   ellipse (100,75,30,30)   
  }


