src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"

$(document).ready(function(){
    $("button#new").click(function(){
        var text = $('#new-sticky').val();
        $( ".container" ).append('<div class="sticky"> <button id="close">x</button><p>' + text + '</p></div>');
        $("button#close").click(function(){
        this.parentNode.parentNode.removeChild(this.parentNode);
    });
    });
    
    $("button#close").click(function(){
        this.parentNode.parentNode.removeChild(this.parentNode);
    });
    
    $("button#clear").click(function(){
        document.getElementById("new-sticky").value="";
    });
});