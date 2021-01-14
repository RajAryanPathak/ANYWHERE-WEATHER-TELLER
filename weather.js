
function fun3(data)
{
    let val = document.getElementById("val").innerHTML;
let m = document.getElementById("m");
let cmntv = document.getElementById("cmntval");
let wcond = document.getElementById("wcond");

// console.log(5);
val = val.split(" ")[0];
// console.log(val);
if(val<10)
{
    cmntv.innerHTML = "Its too chilled 🥶 ❄️ "
    document.body.style.backgroundImage="url('ice.jpg')";
    m.style.backgroundColor="rgba(62, 65, 28, 0.6)";
    

    
 
}
else if(val<15)
{
    cmntv.innerHTML = "Its Cold Here     ❄️   "
    document.body.style.backgroundImage="url('ice.jpg')";
    m.style.backgroundColor="rgba(62, 65, 28, 0.6)";
    



}
else if(val<20)
{
    cmntv.innerHTML = "Its Little Cold Here     ❄️   "
    document.body.style.backgroundImage="url('ice.jpg')";
    m.style.backgroundColor="rgba(62, 65, 28, 0.6)";
    



}
else if(val<25)
{
    cmntv.innerHTML = "Weather seems to be Pretty Good 🌾 "
    document.body.style.backgroundImage="url('nicew.webp')";
    m.style.backgroundColor="rgba(62, 65, 28, 0.6)";
  
}
else if(val<35)
{
    cmntv.innerHTML = "Sun quite High ☀️  ";
    document.body.style.backgroundImage="url('sunny.jpg')";
    // m.style.backgroundColor="rgba(62, 65, 28, 0.6)";
    
}
else
{

    cmntv.innerHTML = "Its too Hot to Hande  🔥 ☀️"
    

    


}
// console.log(data['weather'][0]['main']);
if(data['weather'][0]['main']=='Rain')
{
    let temp = wcond.getAttribute('class');
    wcond.classList.remove(temp);
    wcond.classList.add('rain');
}
else if(data['weather'][0]['main']=='Thunderstorm')
{
    let temp = wcond.getAttribute('class');
    wcond.classList.remove(temp);
    wcond.classList.add('tstorms');
}
else if(data['weather'][0]['main']=='Drizzle')
{
    let temp = wcond.getAttribute('class');
    wcond.classList.remove(temp);
    wcond.classList.add('rain');
}
else if(data['weather'][0]['main']=='Snow')
{
    let temp = wcond.getAttribute('class');
    wcond.classList.remove(temp);
    if(data['weather'][0]['description']=='Sleet')
    {
        wcond.classList.add('sleet');
    }
    else
    {
        wcond.classList.add('snow');
    }
}
else if(data['weather'][0]['main']=='Fog' | data['weather'][0]['main']=='Mist')
{
    //fog
    let temp = wcond.getAttribute('class');
    wcond.classList.remove(temp);
    wcond.classList.add('fog');
}
else if(data['weather'][0]['main']=='Clear')
{
    let temp = wcond.getAttribute('class');
    wcond.classList.remove(temp);
    wcond.classList.add('sunny');
}
else
{
    let temp = wcond.getAttribute('class');
    wcond.classList.remove(temp);
    wcond.classList.add('cloudy');
}



}


// let temp = wcond.getAttribute('class');
//     wcond.classList.remove(temp);
//     wcond.classList.add('sunny');






// -----------------
// 


// add suggestion of countries


