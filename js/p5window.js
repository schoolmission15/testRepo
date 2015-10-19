function setup() {
    //create the Canvas
    createCanvas(windowWidth, windowHeight);

  //top box
  strokeWeight(1);
  stroke('red');
  fill('green');
  rect(50,50,125,20);

  //inside black box
  strokeWeight(1);
  stroke('red');
  fill('yellow');
  rect(50,70,125,150);

  //bottom box
  strokeWeight(1);
  stroke('red');
  fill('green');
  rect(50,70+150,125,40);

  strokeWeight(4);
  stroke('grey');
  line(50,70,50,70+150);
  var x = 65+(125-30)/2;
  line(x,70,x,70+150);
  x = 65+(125-30);
  line(x+15,70,x+15,70+150);

  line(50,70,x+15,70);
  line(50,70+150/2,x+15,70+150/2);
  line(50,70+150,x+15,70+150);


  } //end setup
