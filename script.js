const play = document.getElementById("play")
const musica = document.getElementById("musica")
const barra = document.getElementById("barra")

const atual = document.getElementById("atual")
const duracao = document.getElementById("duracao")

const texto = document.getElementById("texto")
const capa = document.querySelector(".capa")

play.addEventListener("click",()=>{

if(musica.paused){

musica.play()

play.innerHTML="⏸"

texto.style.display="block"

capa.classList.add("girando")

corações()

}else{

musica.pause()

play.innerHTML="▶"

capa.classList.remove("girando")

}

})

musica.addEventListener("loadedmetadata",()=>{

duracao.innerHTML=tempo(musica.duration)

})

musica.addEventListener("timeupdate",()=>{

barra.value=(musica.currentTime/musica.duration)*100

atual.innerHTML=tempo(musica.currentTime)

})

barra.addEventListener("input",()=>{

musica.currentTime=(barra.value/100)*musica.duration

})

function tempo(seg){

let m=Math.floor(seg/60)
let s=Math.floor(seg%60)

if(s<10){s="0"+s}

return m+":"+s

}

function corações(){

setInterval(()=>{

let heart=document.createElement("div")

heart.className="heart"

heart.innerHTML="💙"

heart.style.left=Math.random()*100+"vw"

document.body.appendChild(heart)

setTimeout(()=>{

heart.remove()

},3000)

},300)

}
