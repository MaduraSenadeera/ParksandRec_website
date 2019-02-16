var Latitude = 0;
var Longitude = 0;

function getLocation() {
    var x = document.getElementById("demo");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        document.getElementById("geolocation").style.visibility = "visible";
        document.getElementById("suburbs").style.visibility = "hidden";
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    Latitude = position.coords.latitude
    Longitude = position.coords.longitude
}