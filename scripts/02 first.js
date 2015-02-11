window.onload = function(){
    document.getElementById("close").onclick = function(){
        this.parentNode.parentNode.removeChild(this.parentNode);
        return false;
    };

    document.getElementById("new").onclick = function(){
        this.parentNode.parentNode.removeChild(this.parentNode);
        return false;
    };

};