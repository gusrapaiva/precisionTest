let clicks = 0
let time = 0
let btn = document.getElementById('btn');
let audio = new Audio('assets/betove.mp3');
let count = document.getElementById('counter');
let crono = document.getElementById('crono');

let timer = () => {
    time++
    crono.innerHTML = "Tempo: " + time + 's';
}

setTimeout(timer, 1000)

if (clicks == 3)
{
    document.body.style.backgroundColor = 'red';
}

btn.onclick = () => {
    let pLeft = Math.floor(Math.random() * 90);
    let pTop = Math.floor(Math.random() * 90);

    btn.style.left = pLeft+'%';
    btn.style.top = pTop+'%';
        
    count.innerHTML = 'Clicks: ' + clicks;
    clicks == 20? doido() : clicks++
}

let doido = () => {
    document.body.style.backgroundImage = "url(assets/medo.jpg)" ;
    audio.play();
    btn.style.display = "none"
    count.innerHTML = ""
}