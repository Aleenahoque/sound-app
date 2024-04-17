https://teachablemachine.withgoogle.com/models/fa9NMfWWo/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/fa9NMfWWo/model.jason',modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
}