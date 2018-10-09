let canvas = document.querySelector('.cl'); 
let ctx = canvas.getContext('2d'); 
let x = 0;
let timer;

function drawSin() {
    let y = Math.imul(x);
    x = x + 16;
    ctx.fillRect(x, y+20, 19, 2);
    timer = setTimeout(drawSin, 200);
}

drawSin();