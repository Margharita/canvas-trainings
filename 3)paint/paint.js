let canvas = document.querySelector('.cl');
let ctx = canvas.getContext('2d'); 
let myColor = '#000000';
let myWeight = '5';
let inputColor = document.querySelector('.my-color'); 

function changeColor() {
    inputColor.oninput = function(){
        ctx.globalCompositeOperation = "source-over"; //default - новое изображение рисуется поверх старого
        myColor = this.value;
        ctx.beginPath();
    }
}
changeColor();

document.getElementById('weight').oninput = function(){
    myWeight = this.value;
    ctx.beginPath();
}
document.getElementById('clearing').onfocus = function(){
    ctx.globalCompositeOperation = 'destination-out';  //отображается только та часть предшествующего изображения, которая не пересекается с другими фигурами
    myColor = "rgba(255,255,255, 1)";
    ctx.beginPath();
}

document.getElementById('clearing').onblur = function(){
    changeColor();   
    ctx.beginPath();
}
   
//когда в канвасе нажата мышь, я считываю движение мыши и по нему рисую 
canvas.onmousedown = function(e) { 
    let x = e.offsetX;
    let y = e.offsetY;
    ctx.strokeStyle = myColor;
    ctx.lineCap = "round";
    ctx.lineWidth = myWeight;
    ctx.moveTo(x, y);
    
    canvas.onmousemove = function(e){   //также рисуем, когда мышь двигается
        let x = e.offsetX;
        let y = e.offsetY;
        ctx.lineTo(x, y);
        ctx.stroke(); 
    }
    canvas.onmouseup = function() {
        canvas.onmousemove = null; //обнулим рисование, когда мышь не нажата
    }
}