noseX=0;
noseY=0;

function preload() {
  nariz=loadImage('clownnose.png'); 
}

function setup() {
    canvas=createCanvas(300,300);
    canvas.position(600,300); 
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function draw()
{
    image(video, 0, 0, 300, 300); 
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY, 20);

    image(nariz,noseX,noseY,50,50);
}
function modelLoaded() {
    console.log('PoseNet está inicializado');
  }
  
function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);

      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;

      console.log("nariz x = " + noseX);
      console.log("nariz y = " + noseY);

    }
}

function take_snapshot(){    
  save('myFilterImage.png');
}
