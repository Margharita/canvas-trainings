let canvas = document.querySelector('.cl'); 
let ctx = canvas.getContext('2d'); 

let y = 100;
let x = 200;
let stepCount = 0; //к-во шагов в одном направлении
let direction; //направление движения
let coordinateX =  Math.floor(x*Math.random());
let coordinateY =  Math.floor(y*Math.random());

function drawDot() {
    ctx.clearRect(0,0,400,200);
    if(stepCount==0){
        //генерируем к-во шагов в неком направлении(math.floor - округляет, math.random - от 0 до 1 (итого 14))
        stepCount = Math.floor(60*Math.random());
        //собственно само направление
        direction = Math.floor(8*Math.random()); 

    } else {
        stepCount--; //возвращаем на место точку
    }
    switch (direction) { //задаем направление точки, если равно такому-то числу, то смещаем координаты
        case 0:
        //вверх
            y = y-1;
        break;
        case 1:
        //вправо
            x = x + 1;
        break;
        case 2:
        //вниз
            y = y+1;
        break;
        case 3:
        //влево
            x = x-1;
        break;
        case 4:
        //вправо вверх
            y = y-1;
            x = x+1;
        break;
        case 5:
        //влево вниз
            y = y+1;
            x = x-1;
        break;
        case 7:
        //влево вверх
            y = y-1;
            x = x-1;
        break;
        case 6:
        //вправо вниз
            y = y+1;
            x = x+1;
        break;
       
    }
    if (x<0 || x>400 || y<0 || y>200) stepCount = 0; //если выходит за пределы - обнуляем
    ctx.fillRect(x, y, 6, 6); //рисуем точку
    timer = setTimeout(drawDot, 5);
}

drawDot();

