var dragObj = document.getElementById('e-drag');
dragObj.style.top = "0px";
dragObj.style.left="0px";
var mouseX,mouseY,objX,objY;
var dragging = false;

dragObj.onmousedown = function(event){
    var event = event || window.event;
    dragging = true;
    dragObj.style.position = "relative";

    mouseX = event.clientX;
    mouseY = event.clientY;
    objX = parseInt(dragObj.style.left);
    objY = parseInt(dragObj.style.top);
}

document.onmousemove = function(event){
    var event = event || window.event;
    if(dragging){
        dragObj.style.left = (event.clientX - mouseX+objX)+"px";
        dragObj.style.top = (event.clientY - mouseY+objY)+"px";
    }

}

document.onmouseup =function(evnet) {
    var event = event || window.evnet;
    dragging = false;
}