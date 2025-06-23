const atomic = new Audio("i-am-atomic-resound.mp3")
const button1 = document.getElementById("btn1")
const btn = document.getElementById("btn")
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

btn.addEventListener("click", function() {
      window.open("https://pypi.org/project/wispylib/");
      console.log("https://pypi.org/project/wispylib/")
      window.open("https://github.com/Wixp-dc")
      audio.play()
      
})
