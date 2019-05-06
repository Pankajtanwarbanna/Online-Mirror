let video = document.querySelector('#webcamVideo');

if(navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia( { video : true })
    
        .then(function (stream) {
            video.srcObject = stream;
        })
    
        .catch(function (error) {
            console.log(error);
        });
}