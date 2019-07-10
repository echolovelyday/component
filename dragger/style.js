(function(window,undefined){
    var dom = {
        on: function(node, eventName,handler){
            if(node.addEventListener){
                node.addEventListener(eventName,handler);
            }else{
                node.attachEvent("on"+eventName, handler);
            }
        },
        getStyle : function(node,styleName) {
            var realStyle = null;
            if(window.getComputedStyle){
                realStyle = window.getComputedStyle(node,null)[styleName];
            }
            else if(node.currentStyle){
                realStyle = node.currentStyle[styleName];
            }
            return realStyle;
        },
        setCss: function(node, css){
            for(var key in css){
                node.style[key] = css[key];
            }

        }
    }

})