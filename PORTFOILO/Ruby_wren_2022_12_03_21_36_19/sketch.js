function setup() {
  createCanvas(400, 400);
  radio= createRadio();
  radio.option('rectangle')
  radio.option('circle')
  radio.option('rounded rectangle')
  radio.position(100,305)
  radio.style('width,60px')
  textAlign(CENTER)
  
  fill(255,70,60)




}

function draw() {
  let val = radio.value();
  background(220);
  
  if (val =='rectangle')
    {
      rect (50,50,100,100)
    }
  else if (val =='circle')
  {
          circle (70,150,100)
  }
  else if (val =='rounded rectangle')
     {
          rect (50,50,100,100,10)
  }
}