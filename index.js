
score = 0;
cross = true;
let btnup = document.getElementById('btnup');
let btnRight = document.getElementById('btnRight');
let btnLeft = document.getElementById('btnLeft');
let start = document.getElementById('start');
console.log(start);
audiobg = new Audio('music1.mp3');
audiogo = new Audio('mariodie.mp3');
setTimeout(() => {
    audiobg.play();
}, 500);

window.addEventListener('keydown', CheckKey, false)

function CheckKey(key) {
    if (key.keyCode == '87') {
        mario = document.getElementById('mario');
        mario.classList.add('MovemarioUp');
        setTimeout(() => {
            mario.classList.remove('MovemarioUp');
        }, 800);
        changeimage()
    }
    else if (key.keyCode == '39') {
        mario = document.getElementById('mario');
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = marioX + 112 + "px";
    }
    else if (key.keyCode == '37') {
        mario = document.getElementById('mario');
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = (marioX - 112) + "px";
    }
}

function changeimage() {
    mario = document.getElementById('mario');
    if (mario.src != 'mario.png') {
        mario.src = 'mario.png';
    }
    setTimeout(() => {
        mario.src = 'mariorun.png';
    }, 500);
}
setInterval(() => {
    mario = document.getElementById('mario');
    gameover = document.getElementById('Gameover');
    marioenemy = document.getElementById('marioenemy');

    dx = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(mario, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(marioenemy, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(marioenemy, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX,offsetY);


    if (offsetX < 93 && offsetY < 52) {
        // if (dx==ox && dy == oy) {
        gameover.innerHTML = "<h1><b><i>!!!!Gameover!!!!<b><i></h1>";
        gameover.style.left = "38%";
        // gameover.style.color = "#5d2fde";
        gameover.style.color = "white";

        marioenemy.classList.remove('marioenemyani');
        start.style.display = 'block';
        mario.classList.add('Movemariotoearth');
        // mario.style.left = '8%';
        audiogo.play();
        audiobg.pause();
        // setTimeout(() => {
        //     // audiogo.pause();
        // }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 100;
        updatescore(score);
        cross = false;

        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(marioenemy, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            marioenemy.style.animationDuration = newDur + 's';
        }, 500);
    }
}, 10);

function updatescore(score) {
    scorecont = document.getElementById('scorecont');
    scorecont.innerHTML = "your score is: " + score;
}