document.getElementById("demo1").addEventListener("keyup",display)



async function display(){
    let ans=document.getElementById("demo").value;
    let Table=`<table width="90%" border="1" bgcolor="pink">
              <tr bgcolor="orange">
              <th> Resturant-image</th>
                <th> Resturant-Name </th>
                <th> Location </th>
                <th> Resturant-type</th>
                <th> Contact-number</th>
               </tr> 
           `

           let api = "http://localhost:5000/id";
           const hold = await fetch(api);
           const myData = await hold.json();

           myData.map((key)=>{
            let str=key["Resturant-Name"];
            let myval=str.includes(ans);
            
                    
            if (myval==true)
            {
              Table+=` <tr>
                <td onclick="display()"><img src="${key["Resturant-image"]}" alt="Restaurant Image" width="100" height ="100"></td>
                         <td >${key["Resturant-Name"]}</td>
              
                <td>${key.Location}</td>
                <td>${key["Resturant-type"]}</td>
                <td>${key["Contact-number"]}</td>
                       </tr>  
                   `
            }       
          });

          Table+="</table>"
 document.getElementById("showData").innerHTML=Table;
          
       

    
    
}
