Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_photo(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">';
    });
}
console.log('ml5 version: ',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Y6XDXPw3t/model.json',modelloaded);
function modelloaded(){
    console.log('modelloaded');
};
 
function check(){
    img=document.getElementById("capture_image");
    classifier.classify(img,got_result);
    
}
function got_result(error,results){
if (error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("object").innerHTML=results[0].label;
    document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}


