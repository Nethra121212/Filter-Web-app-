noseX= 0;
noseY= 0;


function preload(){
lipstick = loadImage('https://i.postimg.cc/pLkXfM5G/710051.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
}


    function modeLoaded(){

        console.log('PoseNet Is Initialized');
        
        }


function gotPoses(results){
    {
        if(results.length > 0)
    
        console.log(results);
        noseX=results[0].pose.nose.x-27;
        noseY=results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
    
    }
    


function draw(){
    image(video, 0, 0, 300, 300);
    image( lipstick, noseX, noseY, 80, 60)

}


function take_snapshot(){
 save('myfilterImage.png');
}

