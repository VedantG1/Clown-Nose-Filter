noseX = 0
noseY = 0

function preload(){
    img = loadImage("https://i.postimg.cc/v8vrLt3z/clown-nose.png")
}

function setup(){
    canvas = createCanvas(300, 300)
    canvas.position(615, 300)
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()    

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', getPoses)
}
function modelLoaded(){
    console.log("PoseNet Initialized")
}
function draw(){
    image(video, 0, 0, 300, 300)
    image(img, noseX - 20, noseY - 20, 50, 50)
}

function takeSnap(){
    save("photo.png")
}
function getPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("nose x - " + noseX)
        console.log("nose y - " + noseY)
    }
}
