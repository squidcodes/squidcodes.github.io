let button;

function preload(){
    img = loadImage('assets/button.png');
    img = loadImage('assets/buttonPressed.png');
    soundFormats('mp3');
    mySound = loadSound('assets/bruh.mp3')
}

function setup() {
    createCanvas(450, 450);
    resetSketch();
  }
  
  function draw() {
    background(220);
  }

  function bruhButton() {

    if (mouseIsPressed) {
        button = createImg('assets/buttonPressed.png');
        button.position(0,0);
        mySound.setVolume(0.2);
        mySound.play();
        setTimeout(resetSketch, 100);
    }
}

    function resetSketch(){
        button = createImg('assets/button.png');
        button.position(0,0);
        button.mousePressed(bruhButton);
    }