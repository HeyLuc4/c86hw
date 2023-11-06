var canvas = new fabric.Canvas('myCanvas');
var audio = document.getElementById("myAudio");

function newImage() {
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
        blockImgObj = Img;
        blockImgObj.scaleToWidth(750);
        blockImgObj.scaleToHeight(510);
        blockImgObj.set({
            top: 0,
            left: 0
        })
        canvas.add(blockImgObj);
    });
}

document.getElementById("btAudio").addEventListener("click",tocarAudio)

function tocarAudio(){
    audio.play();
}
audio.loop = false;
