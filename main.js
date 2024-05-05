https://teachablemachine.withgoogle.com/models/MrGm6fZVb/

Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 100
});
camera=document.getElementById("camera")
Webcam.attach("#camera")

function takeSnapshot(){
    Webcam.snap(function(datauri){
        document.getElementById("result").innerHTML='<img id="data" src="'+datauri+'">'
});
}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/MrGm6fZVb/model.json",modelloaded)
function modelloaded(){
    console.log("modelisloaded")
}

function Check(){
    img=document.getElementById('data')
    classifier.classify(img,gotresult)

}
function gotresult(error,result){
    if(error){
        console.log(error)
         
    }
    else{
        console.log(result)
        document.getElementById('friendsName').innerHTML=result[0].label
        document.getElementById('Accuracy').innerHTML=result[0].confidence.toFixed(2)
    }
}