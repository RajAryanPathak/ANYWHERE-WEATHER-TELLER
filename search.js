let fun1 =(inp,cityarray) =>
{
    let arr = []
    // console.log(cityarray[0]['name']);
    
    // console.log();
    for (x in cityarray) {
        // console.log();
        if(inp.toLowerCase() == cityarray[x]['name'].substring(0,inp.length).toLowerCase())
        {
                arr.push(cityarray[x]['name'])
        }
        
      }
    let str = ""
    
    // console.log(c);
    // console.log(typeof(cityarray));
    
    varr = arr.slice(0,5);
    // console.log(varr);
    for (cn in varr)
    {
        
        str = str + "<p onclick='fun2(this)' id='sugval' >"+varr[cn]+"</p>"
    }
    // console.log(str);
    document.getElementById("showsug").innerHTML=str;
    // let se = document.getElementById("showsug");
    // let t = document.createTextNode(str);
    // se.appendChild(t);
    

}

let sug = () =>
{
    
    fetch("city.list.json")
    .then(x => x.json())
    .then(cityarray => {fun1(document.getElementById("search").value,cityarray)})

    
}
function myFunction()
{
    let actele = document.activeElement.id;
    // let acteleval =  document.getElementById(actele).innerHTML;
    // console.log(acteleval);
    if(actele!="search")
    {
        // document.getElementById("showsug").innerHTML="";
        document.getElementById("showsug").style.visibility="hidden";
        

    }
    else{
        
        document.getElementById("showsug").style.visibility="visible";
        
        

    }
  
}  



window.addEventListener('click',myFunction);

