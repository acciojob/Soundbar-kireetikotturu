//your JS code here. If required.
let musicButtons = document.querySelectorAll(".btn")
let audioEle = document.getElementById("audio-element")
let audio = null;

document.querySelector(".stop").addEventListener("click", ()=>{
      if(audio){
		audio.pause();
	  }
	  audioEle.pause();
    })

musicButtons.forEach((item)=>{
  item.addEventListener("click", ()=>{
	if(audio){
		audio.pause();
	  }
    let audioFile = item.textContent;
    audio = new Audio(`sounds/${audioFile}.mp3`)
	audioEle.src=`sounds/${audioFile}.mp3`;
    audio.play();
  })
})

