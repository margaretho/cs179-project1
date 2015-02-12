src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"
        var message = document.getElementById("error");

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(getWeather);
            } else {
                message.innerHTML = "Geolocation is not supported by this browser.";
            }
        }

        function getWeather(position) {
            var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude;
            var ajax = $.ajax({url: url, dataType: "JSON",});
            var parsed = $.parseJSON(ajax.responseText);
            console.log(ajax.responseText);
        }

$(document).ready(function(){

    $("button#new").click(function(){
        var text = $('#new-sticky').val();
        $( ".container" ).append('<div class="sticky"> <button id="close">x</button><p>' + text + '</p></div>');
        $("button#close").click(function(){
        this.parentNode.parentNode.removeChild(this.parentNode);
    });
    });

    $("button#weather").click(function(){
        getLocation();

        var text = $('#new-sticky').val();
        $( ".container" ).append('<div class="sticky"> <button id="close">x</button><p>' + text + parsed + '</p></div>');
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
