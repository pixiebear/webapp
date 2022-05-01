//Hello world ! :D
var coin = document.getElementById("coin");
function flip() {
    var frameNumber = 1;
    var frameSwitch = setInterval(function () {
        if (frameNumber > 8) {
            frameNumber = 1;
            //clearInterval(frameSwitch);
        }
        else {
            coin.className = "coinBoxFrame" + frameNumber;
            frameNumber++;
        }
    }, 100);
}
flip();



