var status1=""
var result1=[]

function preload(){
video=createVideo("video.mp4")
video.hide()


}
function setup(){
canvas=createCanvas(300,300)
canvas.center()
}
function start(){
object=ml5.objectDetector("cocossd",modelLoaded)
document.getElementById("status").innerHTML="Object Detection Started"
}
function modelLoaded(){
status1=true
console.log("Model is Loaded")
video.loop()
video.volume(0)
video.speed(1)
}
function draw(){
image(video,0,0,300,300)
object.detect(video,gotResult)

if(status1 != ""){
      for(i=0;i<result1.length;i++){
      document.getElementById("status").innerHTML="Object Detected"
      document.getElementById("objects").innerHTML="Number Of Objects Detected"+result1.length
      percent=floor(result1[i].confidence*100)
      fill("yellow")
      text(result1[i].label +""+percent+'%',result1[i].x , result1[i].y)
      noFill()
      stroke("red")
      rect(result1[i].x,result1[i].y,result1[i].width,result1[i].height)




      
      }
}
}
function gotResult(error,result){
console.log(result)
result1=result
}
