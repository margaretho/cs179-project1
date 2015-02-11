src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"

var url = "api.openweathermap.org/data/2.5/weather?lat=35&lon=139";

function getLocation() {
    $.getJSON(url, function(result){
            $.each(result, function(i, field){
                $("div").append(field + " ");
            });
        });
    }

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