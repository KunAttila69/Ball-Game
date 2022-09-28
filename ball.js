class Ball{
    constructor(x,y,speed,size,color,dirX,dirY,gravity,velocity){
        this.x = x,
        this.y = y,
        this.speed = speed,
        this.size = size,
        this.color = color,
        this.dirX = dirX,
        this.dirY = dirY
        this.gravity = gravity
        this.velocity = velocity
    }
}

function CreateBall(ballX,ballY,ballSpeed,ballSize,ballColor,ballDirX,ballDirY,gravity,velocity){
    return new Ball(ballX,ballY,ballSpeed,ballSize,ballColor,ballDirX,ballDirY,gravity,velocity)
}

function DrawBall(ball){
    console.log(ball)
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, 2 * Math.PI);
    ctx.fillStyle = ball.color
    ctx.fill();
    ctx.stroke();
}

function MoveBall(ball, up){
    if(ball.x >= canvas.width){
        ball.dirX *= -1;
    }
    else if(ball.x < 0){
        ball.dirX *= -1;
    }
    ball.x += ball.speed*ball.dirX;
    
    if(ball.y > canvas.height){
        ball.dirY *= -1;
        ball.velocity *= -0.1 
    }
    else if(ball.y < 0){
        ball.dirY *= -1;
    }
    ball.y += up+ball.velocity*ball.dirY;
  }