let canvas = document.querySelector('.cl'); 
let ctx = canvas.getContext('2d'); 
let pi = Math.PI;

ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "lime";
ctx.fillStyle = "black";
ctx.arc(150, 100, 70, 0, pi/2, true); 
//центр круга (x,y);радиус(z);нач.угол(а),конеч.угол(b); 
//false - по часовой, true - против часовой
//ctx.art(x, y, z, a, b )
//pi*2 - круг; pi/2 - дуга; pi - 180deg; 3pi/2 - 270deg

ctx.stroke(); // обвести
ctx.fill(); //зарисовывает 

ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "blue";
ctx.fillStyle = "violet";
ctx.arc(150, 100, 70, 0, pi/2, false);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.lineWidth = "9";
ctx.strokeStyle = "gray";
ctx.fillStyle = "crimson";
ctx.arc(300, 100, 70, 0, pi*2, false);
ctx.stroke();
ctx.fill();

// canvas.onmousedown = function(e) { 
//     let x = e.offsetX;
//     let y = e.offsetY;
//     // ctx.clearRect(0,0,900,500);
//     ctx.beginPath();

//     canvas.onmousemove = function(e){
//         let x = e.offsetX;
//         let y = e.offsetY;
      
//         var radius = Math.pow(Math.pow(x-200, 2)+Math.pow(y-200, 2), 0.5);
//         ctx.arc(x, y, 60, 0, 2*pi, false);
//         ctx.stroke();
//     }
   
   
//     ctx.fill(); 
//     // ctx.arc(x, y, 56, 0, 2*pi, false);
//     // ctx.stroke();
//     // ctx.fill();   
// }

//анимированный круг - рисуем движением мыши (перен. в паинт)
// canvas.onmousemove = function (e) {
//     let x = e.offsetX;
//     let y = e.offsetY;
//     // ctx.clearRect(0,0,900,500);
//     // ctx.beginPath();
//     // var radius = Math.pow(Math.pow(x-200, 2)+Math.pow(y-200, 2), 0.5);
//     // ctx.arc(x, y, radius, 0, 2*pi, false);
//     // ctx.stroke();
//     // ctx.fill();    
// }

// canvas.onmouseup = function() {
//     canvas.onmousemove = null; //обнулим рисование, когда мышь не нажата
// }
