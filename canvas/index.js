 var canvas=document.querySelector('canvas');
 canvas.width=window.innerWidth;
 canvas.height=window.innerHeight;
// var c=canvas.getContext('2d');
// var c=canvas.getContext('2d');
// c.fillStyle="red";
// c.fillRect(100,100,300,100);
// c.fillStyle="green";
// c.fillRect(400,100,100,100);
// c.fillStyle="blue";
// c.fillRect(300,300,100,100);

// //Line code
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle= "red";
// c.stroke();

//arc/
// for(var i=0;i<3;i++)
// {

//     var x=Math.random()*window.innerWidth;
//     var y=Math.random()*window.innerHeight;
// c.beginPath();
// c.strokeStyle="blue";
// c.arc(x,y,30,0,Math.PI*2,false);
// c.stroke();
// }


// var x=Math.random() * window.innerWidth;
// var dx=Math.random()-0.5 * 7;
// var y=Math.random() * window.innerHeight;
// var dy=Math.random()-0.5 * 7;;
// var radius=30;

var c=canvas.getContext('2d');

function getRndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function Circle(x,y,dx,dy,radius)
{
this.x=x;
this.y=y;
this.dx=dx;
this.dy=dy;
this.radius=radius;

this.draw=function(){
    c.beginPath();
    // c.fillStyle=getRndColor();
      c.fillStyle="RED";
    c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
    c.stroke();
c.fill()

}
this.update=function(){
    if(this.x+this.radius>window.innerWidth||this.x-this.radius<0)
    {
        this.dx=-this.dx;
    
    }
    if(this.y+this.radius>window.innerHeight||this.y-this.radius<0)
    {
        this.dy=-this.dy;
    }
    
    
    this.x+=this.dx;
    this.y+=this.dy;
    this.draw()

}
}

var circleArray=[];
for(var i=0;i<10;i++)
{
    var radius=30;
var x=Math.random() * (window.innerWidth-radius*2);
var dx=Math.random()-0.5 * 7;
var y=Math.random() * (window.innerHeight-radius);
var dy=Math.random()-0.5 * 7;

circleArray.push(new Circle(x,y,dx,dx,radius));
}
console.log(circleArray);
function animate()
{
    requestAnimationFrame(animate);
   c.clearRect(0,0,innerWidth,innerHeight);
for(var i=0;i<circleArray.length;i++)
{
    circleArray[i].update();
}


}
animate();