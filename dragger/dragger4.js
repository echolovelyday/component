window.onload = function(){
    var drag = document.getElementById("drag");
    drag.onmousedown = function(event){
        var event = event || window.event;
        var diffX = event.clientX - drag.offsetLeft;
        var diffY = event.clientY - drag.offsetTop;
        if(typeof drag.setCaptrue !=="undefined"){
            drag.setCaptrue();
        }
        document.onmousemove = function(event){
            var event = event || window.event;
            var moveX = event.clientX -diffX;
            var moveY = event.clientY -diffY;
            if(moveX<0){
                moveX = 0;
            }else if( moveX> window.innerWidth - drag.offsetWidth){
                moveX = window.innerWidth - drag.offsetWidth
            }
            if(moveY<0){
                moveY = 0;
            }else if( moveY> window.innerHeight - drag.offsetHeight){
                moveY = window.innerHeight - drag.offsetHeight
            }

            drag.style.left = moveX + "px";
            drag.style.top = moveY + "px";
        }

        document.onmouseup = function(event){
            this.onmousemove = null;
            this.onmouseup= null;
            if(typeof drag.releaseCapture!=="undefined"){
                drag.releaseCapture();
            }
        }
    }
}