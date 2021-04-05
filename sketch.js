function setup(){
    createCanvas(500,500); 
    angleMode(DEGREES);   
}

function draw(){
    background(0);
  
    textFont("ALGERIAN");
    textSize(50);
   fill("white");
   text("Tick Tock Clock",50,450);
    
   translate(200,200)
    rotate(-90)

    
    h = hour();
    m = minute();
    s = second();


    sAngle = map(s, 0, 60, 0, 360);
    mAngle = map(m,0,60,0,360);
    hAngle = map(h % 12,0,12,0,360);

    
   push();
   rotate(sAngle); 
   stroke(255,0,0);
   strokeWeight(2);
   line(0,0,100,0);
    pop()

    
    push();
    rotate(mAngle);
    stroke(0,255,0);
    strokeWeight(5);
    line(0,0,80,0);
    pop()

    
    push();
    rotate(hAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    
    noFill();
    
   
   strokeWeight(2);
    stroke(250,0,0);
    arc(0,0,300,300,0,sAngle);
    
    strokeWeight(5);
    stroke(0,250,0);
    arc(0,0,280,280,0,mAngle);
    
    strokeWeight(7);
    stroke(0,0,250);
    arc(0,0,260,260,0,hAngle);

    drawSprites();
  
}
