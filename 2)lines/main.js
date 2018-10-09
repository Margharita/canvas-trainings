let canvas = document.querySelector('.cl'); 
let ctx = canvas.getContext('2d'); 

ctx.beginPath();
//color of line
ctx.strokeStyle = "violet";
//width of line
ctx.lineWidth = "5";

//start coordinate for line
ctx.moveTo(100, 50);
//end coordinate for line
ctx.lineTo(150, 150);

ctx.stroke(); // обвести линию

//begin new line
ctx.beginPath();
ctx.strokeStyle = "crimson";
ctx.lineWidth = "20";
ctx.lineCap = "round";
// ctx.lineCap = "butt";// - по умолчанию
// ctx.lineCap = "square";// - наращивает квадратик
ctx.moveTo(200, 50);
ctx.lineTo(300, 50);
ctx.lineTo(300, 100);
ctx.stroke();

ctx.clearRect(0, 0 , 400, 200);

//triangle
ctx.beginPath();
ctx.moveTo(50, 150);
ctx.lineTo(150, 50);
ctx.lineTo(200, 150);
// ctx.lineTo(50, 150);
ctx.lineWidth = "10";
ctx.lineCap = "butt";
ctx.closePath(); //автоматически соединяет конец и начало линии в фигуру
ctx.stroke();//отрисовка
ctx.fill();//заполняет фигуру цветом