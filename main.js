var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
var up = 10
var ball = CreateBall(canvas.width/2,canvas.height/2,3,10,"red",1,1,10, 0.1)


function Animate(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    DrawBall(ball)
    MoveBall(ball,up)
    requestAnimationFrame(Animate);
}
Animate();