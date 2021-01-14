


getloc = () =>
{

if (navigator.geolocation) 
{
  navigator.geolocation.getCurrentPosition(showPosition);
} 
else 
{ 
    // console.log('a');
    document.getElementById("wt").innerHTML="Sorry Cant Get Your Location  ☹ <br> Search for a place";
}


function showPosition(position) {
    // http://api.openweathermap.org/data/2.5/weather?lat=26.8467088&lon=80.9461592&appid=177c9476aefac49c90be072266533e42
    fetch('http://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&units=metric&appid=177c9476aefac49c90be072266533e42')
    .then(response => response.json())
    .then(data => {
      fun4(data);
      
      fun3(data);
      
    })
    .catch(error => console.error(error))
// console.log('Latitude: ' + position.coords.latitude + '<br>Longitude: ' + position.coords.longitude);
}
}

window.addEventListener("load",getloc);



