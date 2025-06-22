const atomic = new Audio("i-am-atomic-resound.mp3")
const button1 = document.getElementById("btn1")
let isPlaying = false;
button1.addEventListener("click", function(clicked) {
if (!isPlaying) {
      atomic.currentTime = 0;
      atomic.play();
      isPlaying = true;
    } else {
      atomic.pause();
      isPlaying = false;
    }
})
