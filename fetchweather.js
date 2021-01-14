

function fun4(data)
{
    // console.log(data) // Prints result from `response.json()` in getRequest
      document.getElementById("val").innerHTML=data['main']['temp']+ ' C';
      document.getElementById("wt").innerHTML=data['weather'][0]['description'];
      let placev = document.getElementById("placev").innerHTML=data['name'];
      let srv = utixtime(data['sys']['sunrise'],data['timezone']);
      let ssv = utixtime(data['sys']['sunset'],data['timezone']);
    //   console.log('dsf'+srv['formattedTime']);
      
      document.getElementById("srv").innerHTML= srv['formattedTime'];
      document.getElementById("ssv").innerHTML= ssv['formattedTime'];
    //   console.log(data['timezone'],'gfd');
}
function fun2(a)
{
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+a.innerHTML+'&units=metric&appid=177c9476aefac49c90be072266533e42')
    .then(response => response.json())
    .then(data => {
      fun4(data);
      fun3(data);
      
    })
    .catch(error => console.error(error))
}





