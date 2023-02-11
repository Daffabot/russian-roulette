# Russian-Roulette Javascript
Game russian roulette HTML and Javascript created and developed by Daffa Ahmad Ibrahim

![revolver](https://daffabot.github.io/russian-roulette.github.io/image/roulette.jpg)

## Demo
You can <a href="https://daffabot.github.io/russian-roulette.github.io">Click here</a> for demo.

## How to install
1. Clone repository
```bash
git clone https://github.com/Daffabot/russian-roulette.github.io.git
```
2. Open russian-roulette/index.html file in your browser

## Example Usage
```javascript
function fireit(){
var theone=Math.floor(Math.random()*6)

if (theone<=document.fire.bullets.value-1)
setTimeout(() => {
  document.getElementById('fireit()').play();
}, 100)
if (theone<=document.fire.bullets.value-1)
setTimeout(() => {
alert("Dor!!!. Kamu mati!").play();
}, 500)
else{
document.fire.message.value="Whew. Selamat!"
setTimeout("document.fire.message.value='Play Roulette'",600)
setTimeout(() => {
  document.getElementById('fail()').play();
}, 1)
}
}
```

## Collaborators
Feel free to contribute! You can collaborate with us.
