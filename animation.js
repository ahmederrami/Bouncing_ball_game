window.onload = function(){
    var count = 0;
    var x = 300;
    var y = 400;
    var t = Date.now();
    var speed = 25;

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    document.onkeydown =function(){
        count += 1;
        y -= 25;
        speed = 25;
    }

    document.ontouchstart =function(){
        count += 1;
        y -= 25;
        speed = 25;
    }
    
    function draw(){
        //calculate the time difference between the frames
        var timePassed = (Date.now()-t)/1000;
        t = Date.now();

        ctx.clearRect(0,0,600,400);

        ctx.beginPath();
        ctx.arc(x,y,50,0,2*Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        
        ctx.font = "25px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Count : "+count,20,30);

        //To add the effect of gravity, we need to
        //increase the speed when the ball is falling.
        if(y <= 350) {
            speed += 50*timePassed;
            y += speed*timePassed;
        }

        //reset the score when the ball hits the ground
        if (y > 350){
            count = 0;
        }

        window.requestAnimationFrame(draw);
    }
    draw();
}
