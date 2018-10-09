let canvas = document.querySelector('.cl'); //get our canvas
let ctx = canvas.getContext('2d'); //get context of canvas

//цвет заливки, first - закрасить, second - нарисовать
ctx.fillStyle = 'red';
// прямоугольник ctx.fillRect(x, y, width, height)
ctx.fillRect(100, 50, 150, 75);

//clear canvas
ctx.clearRect(0, 0, 400, 200);

ctx.strokeStyle = "green";
ctx.lineWidth = "10";
ctx.rect(50, 10, 100, 100); //обозначает где рисовать
ctx.stroke(); //рисует
ctx.fill();

