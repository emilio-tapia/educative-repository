
// View Object Constructor
function View(canvas){
    this.canvas = canvas;
    this.clicks = [];
    this.frameRate = 1000/30; //33fps 
    this.maxRadius = 80;
    this.loopRate = 4000;
}

// Tracking clicks + display click circleIndex
View.prototype.handleClick = function() {
    let view = this;
    let x = event.offsetX;
    let y = event.offsetY;

    let loopRandom = view.loopRate*Math.random()*4;
    

    let circleIndex = view.clicks.push({
        x: x,
        y: y,
        radius: 0
    })

    Audio.play(x%10);

    // animation repeat
    setInterval(function(){
        view.clicks[circleIndex-1].radius = 0; 
        Audio.play(x%10);
    }, loopRandom);

}

// updateDisplay maneja toda la animacion dentro del canvas
View.prototype.updateDisplay = function(){
    // this == View Object
    let view = this;
    let context = view.canvas.getContext('2d');
    context.clearRect(0, 0, view.canvas.width, view.canvas.height);
	context.fillStyle = '#ddd';
	context.fillRect(0, 0, view.canvas.width, view.canvas.height);
    let alpha = 0;

    for (let i=0; i < view.clicks.length; i++){
        let circle = view.clicks[i];
        if (circle.radius > view.maxRadius){
            console.log(circle)

            continue
        } else {
            //cuando el radius llega al 80 == maxRadius
            // alpha se ejecuta
            alpha = Math.abs(view.maxRadius - circle.radius)/10;
        }
        // este codigo de abajo hace que el loop incremente el radius, como animacion
        circle.radius += 1;

        view.drawCircle(context, circle.x, circle.y, circle.radius, alpha);
    }
    
}

View.prototype.drawCircle = function(context, x, y, radius, alpha){
    let startAngle = 0;
    let endAngle = 2*Math.PI;
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle)
    context.fillStyle = "rgba(" + x%256 + ", " + y%256  + ", " + (x * y % 256)+ " ," + alpha + ")";
    context.fill();
    context.shadowColor = "rgba(0,0,0,0.5)";
    context.shadowBlur = 10;

}








// console.log("+ 3%256 +");