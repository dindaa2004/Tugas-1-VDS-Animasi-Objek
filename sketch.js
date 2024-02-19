let k;
function setup() {
    createCanvas(400,400);
    background(154, 205, 49);
    k = 0;
}

function draw() {
    strokeWeight(1);
    stroke(0,0,0);
    line(200,399,200,0);

    fill(19,134,0);
    stroke(154, 205, 49);
    strokeWeight(2);
    line(19,100,95,98);
    rect(93,245,10,180);
    stroke(154, 205, 49);
    strokeWeight(2);
    fill(249, 19, 147);
    ellipse(100,150,60,60);
    ellipse(150,180,60,60);
    ellipse(127,233,60,60);
    ellipse(50,180,60,60);
    ellipse(70,233,60,60);
    fill(214, 52, 132);
    stroke(154, 205, 49);
    ellipse(100,194,60,40);
    fill(112, 128, 145);
    rect(55,333,80,80);
    
    
    fill(19,134,0);
    stroke(154, 205, 49);
    strokeWeight(2);
    rect(293,245,10,180);

    fill(249, 19, 147);
    var x = 300 + 10* Math.sin(PI/200*k)
    k += 1;
    ellipse(x,150,60,60);

    var x = 350 + 10* Math.sin(PI/200*k)
    k += 1;
    ellipse(x,180,60,60);

    var x = 325 + 10* Math.sin(PI/200*k)
    k += 1;
    ellipse(x,233,60,60);

    var x = 250 + 10* Math.sin(PI/200*k)
    k += 1;
    ellipse(x,180,60,60);

    var x = 270 + 10* Math.sin(PI/200*k)
    k += 1;
    ellipse(x,233,60,60);

    var x = 300 + 10* Math.sin(PI/200*k)
    k += 1;
    fill(214, 52, 132);
    stroke(154, 205, 49);
    ellipse(x,194,60,40);

    fill(112, 128, 145);
    rect(258,333,80,80);
}