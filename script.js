//your JS code here. If required.
let musicButtons = document.querySelectorAll(".btn")
let audioEle = document.getElementById("audio-element")

musicButtons.forEach((item)=>{
  item.addEventListener("click", ()=>{
    let audioFile = item.textContent;
    let audio = new Audio(`sounds/${audioFile}.mp3`)
	audioEle.src=`sounds/${audioFile}.mp3`;
    audio.play();

    document.querySelector(".stop").addEventListener("click", ()=>{
      audio.pause();
	  audioEle.pause();
    })
  })
})

