//your JS code here. If required.
let musicButtons = document.querySelectorAll(".btn")
let audio = null;

document.querySelector(".stop").addEventListener("click", ()=>{
    if(audio){
      audio.pause();
      audio.currentTime = 0;
	  }
    })

musicButtons.forEach((item)=>{
    item.addEventListener("click", ()=>{
    if(audio){
      audio.pause();
      audio.remove();
    }
    const audioFile = item.dataset.sound;
    audio = document.createElement("audio");
    audio.src = `sounds/${audioFile}.mp3`;
    document.body.appendChild(audio);
    audio.play();
  })
})

