
const clap = new Audio('sounds/clap.wav');
const hihat = new Audio('sounds/hihat.wav');
const kick = new Audio('sounds/kick.wav');
const openHat = new Audio('sounds/openhat.wav');
const boom = new Audio('sounds/boom.wav');
const ride = new Audio('sounds/ride.wav');
const snare = new Audio('sounds/snare.wav');
const tom = new Audio('sounds/tom.wav');
const tink = new Audio('sounds/tink.wav');
// Play drum by keyboard press

// Play music by mouse click
const clapA = document.getElementById("clapA");

clapA.addEventListener('click', ()=>{
    clap.play();
})

const clapAKey = document.body

clapAKey.addEventListener('keypress', () => {
    if (event.code =="KeyA") {
        clap.play()
    } else if (event.code =="KeyS") {
        hihat.play()
    } else if (event.code =="KeyD") {
        kick.play()
    } else if (event.code =="KeyF") {
        openHat.play()
    } else if (event.code =="KeyG") {
        boom.play()
    } else if (event.code =="KeyH") {
        ride.play()
    } else if (event.code =="KeyJ") {
        snare.play()
    } else if (event.code =="KeyK") {
        tom.play()
    } else if (event.code =="KeyL"){
        tink.play()
    } else {
        return false
    }
})





const hihatS = document.getElementById('hiHatS');

hihatS.addEventListener('click', ()=>{
    hihat.play();
})


const kickD = document.getElementById("kickD");

kickD.addEventListener('click', ()=>{
    kick.play();
})


const openHatF = document.getElementById("openHatF");

openHatF.addEventListener('click', ()=>{
    openHat.play();
})


const boomG = document.getElementById("boomG");

boomG.addEventListener('click', ()=>{
    boom.play();
})


const rideH = document.getElementById("rideH");

rideH.addEventListener('click', ()=>{
    ride.play();
})


const snareJ = document.getElementById("snareJ");

snareJ.addEventListener('click', ()=>{
    snare.play();
})


const tomK = document.getElementById("tomK");

tomK.addEventListener('click', ()=>{
    tom.play();
})


const tinkL = document.getElementById("tinkL");

tinkL.addEventListener('click', ()=>{
    tink.play();
})