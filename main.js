var mouseevent="empty";
var last_x,last_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=2;
canvas.addEventListener("mousedown", MyMouseDown);

function MyMouseDown(e){
    mouseevent="mouseDown";
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
}
canvas.addEventListener("mouseup", MyMouseUp);

function MyMouseUp(e){
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave", MyMouseLeave);

function MyMouseLeave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mousemove", MyMouseMove);

function MyMouseMove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
 if (mouseevent=="mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;

    console.log("last position of x and y");
    console.log("x= " + last_x + "y= " + last_y);
    ctx.moveTo(last_x, last_y);
    console.log("current position of x and y");
    console.log("x= " + current_x + "y= " + current_y);
    ctx.lineTo(current_x, current_y);
    ctx.stroke();
 }
 last_x=current_x;
 last_y=current_y;
}
function clearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}