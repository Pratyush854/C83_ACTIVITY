var lastpositionofX, lastpositionofY;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
widthoftheline=1;
var widthofscreen=screen.width-70;
var heightofscreen=screen.height-300;
if (width < 992) {
    document.getElementById("myCanvas").width=widthofscreen;
    document.getElementById("myCanvas").height=heightofscreen;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {
    color=document.getElementById("color").value;
    widthoftheline=document.getElementById("widthoftheline1").value;
    lastpositionofX=e.touches[0].clientX-canvas.offsetLeft;
    lastpositionofY=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    currentPositionOfX=e.touches[0].clientX-canvas.offsetLeft;
    currentPositionOfY=e.touches[0].clientY-canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.linewidth=widthoftheline;
        console.log("X = " + lastpositionofX + ", Y = " + lastpositionofY);
        ctx.moveTo(lastpositionofX, lastpositionofY);
        console.log("X = " + currentPositionOfX + ", Y = " + currentPositionOfY);
        ctx.lineTo(currentPositionOfX, currentPositionOfY);
    ctx.stroke();
    lastpositionofX=currentPositionOfX;
    lastpositionofY=currentPositionOfY;
}
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}