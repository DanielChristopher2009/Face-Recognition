Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
})

camera= document.getElementById("Camera")

Webcam.attach(camera)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JT9KTnWpAx/model.json", modelLoaded)

function modelLoaded() {
    console.log("Model is loaded")
}
function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">'
    })
}
function check(){
    img = document.getElementById("captured_image")
    classifier.classify(img, gotResult)
}
function gotResult(error, results){
if (error){
    console.error(error) 
}
else {
    console.log(results)
    document.getElementById("resultObjName").innerHTML = results[0].label
    document.getElementById("resultObjAcccuracy").innerHTML = results[0].confidence.toFixed(3)
}
}