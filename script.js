//your JS code here. If required.
let musicButtons = document.querySelectorAll(".btn")
let audio = null;

document.querySelector(".stop").addEventListener("click", ()=>{
      if(audio){
		audio.pause();
		audio.currentTime = 0;
		audio = null;
	  }
    })

musicButtons.forEach((item)=>{
  item.addEventListener("click", ()=>{
	if(audio){
		audio.pause();
		audio.currentTime=0;
	  }
    let audioFile = item.textContent.toLowerCase();
    audio = new Audio(`sounds/${audioFile}.mp3`)
    audio.play();
  })
})

