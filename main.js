var noseX = 0
var noseY = 0
function preload() {
    clownnose= loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function setup() {
    canvas = createCanvas(400, 330)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(400, 330)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function draw() {
    image(video, 0, 0, 400, 330)
    fill(255,0,0)
    image(clownnose, noseX-28, noseY-2, 56,40)
}
function snapit() {
    save('photo.png')
}
function modelLoaded() {
    console.log("its loaded baby");
}
function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        console.log("Nose x:" + result[0].pose.nose.x);
        console.log("Nose y:" + result[0].pose.nose.y);
        noseX = result[0].pose.nose.x
        noseY = result[0].pose.nose.y
    }
}
