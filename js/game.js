//Russian Roulette Game- by Daffa Ahmad Ibrahim (https://github.com/Daffabot)
//Visit Daffabot (https://github.com/Daffabot) for script in github
//Credit must stay intact for use

function fireit(){
var spin = Math.floor(Math.random()*6);
var base = document.getElementById("base");

if (spin<=document.fire.bullets.value-1) {
setTimeout(() => {
document.getElementById("fireit()").play();
base.classList.remove("idle");
base.classList.add("shoot");
}, 100)
setTimeout(() => {
base.classList.remove("shoot");
base.classList.add("idle");
}, 900)
setTimeout(() => {
alert("Dor!!!. Kamu mati!");
}, 1000)
}
else {
setTimeout(() => {
document.getElementById("fail()").play();
base.classList.remove("idle");
base.classList.add("break");
}, 1)
setTimeout(() => {
base.classList.remove("break");
base.classList.add("idle");
}, 1000)
document.fire.message.value="Whew. Selamat!"
setTimeout("document.fire.message.value='Play Roulette'",600)
}
}
