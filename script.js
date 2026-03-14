const play = document.getElementById("play")
const musica = document.getElementById("musica")
const barra = document.getElementById("barra")
const texto = document.getElementById("texto")

play.addEventListener("click", () => {

if(musica.paused){

musica.play()
play.innerHTML="⏸"

texto.style.display="block"

}else{

musica.pause()
play.innerHTML="▶"

}

})

musica.addEventListener("timeupdate",()=>{

const progresso=(musica.currentTime/musica.duration)*100

barra.value=progresso

})

barra.addEventListener("input",()=>{

musica.currentTime=(barra.value/100)*musica.duration

})
