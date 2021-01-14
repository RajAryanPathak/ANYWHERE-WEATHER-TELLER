let fun1 =(inp,cityarray) =>
{
    let arr = []
    // console.log(cityarray[0]['name']);
    
    // console.log();
    let oned = cityarray[inp[0]];
    let c =0;
    for (x of oned) {
        // console.log();
        if(inp.toLowerCase() == x.substring(0,inp.length).toLowerCase())
        {
                arr.push(x)
                c = c+1;
                if(c==5)
                {
                    break;
                }
        }
        
      }
    let str = ""
    
    // console.log(c);
    // console.log(typeof(cityarray));
    
    varr = arr
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
    
    let cityarray = accesscitylist();
    fun1(document.getElementById("search").value,cityarray)

    
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

