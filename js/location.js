
// alert("1st serch by location!! then by resturant name!!")

document.getElementById("demo1").addEventListener("keyup",city)
document.getElementById("demo2").addEventListener("keyup",name12)

async function city(){

  let output = "";
    let ans=document.getElementById("demo1").value.toLowerCase();
    

           let api = "http://localhost:5000/id";
           const hold = await fetch(api);
           const myData = await hold.json();

           myData.map((key)=>{
            let str=key.Location.toLowerCase();
            let myval=str.includes(ans);
            
            
            if (myval==true)
            {
              output += `
    <div class="restaurant-card">
        <div class="restaurant-image-container">
            <img src="${key["Resturant-image"]}" alt="${key["Resturant-Name"]} Image" class="restaurant-image">
        </div>
        <div class="restaurant-details">
            <h3 class="restaurant-name">${key["Resturant-Name"]}</h3>
            <p class="restaurant-location"><i class="fas fa-map-marker-alt"></i> ${key.Location}</p>
            <p class="restaurant-type"><i class="fas fa-utensils"></i> ${key["Resturant-type"]}</p>
           <div class="button">
                <a href="../html/showmenu.html">Show menu</a>
            </div>
        </div>
    </div>

                
                   `
            }       
          });

        
 document.getElementById("show12").innerHTML=output;
          
       

    
    
}





async function name12(){

  let output = "";
    let ans=document.getElementById("demo2").value.toLowerCase();
    

           let api = "http://localhost:5000/id";
           const hold = await fetch(api);
           const myData = await hold.json();

           myData.map((key)=>{
            let str = key["Resturant-Name"].toLowerCase(); 
            let myval=str.includes(ans);
            
            
            if (myval==true)
            {
              output += `
    <div class="restaurant-card">
        <div class="restaurant-image-container">
            <img src="${key["Resturant-image"]}" alt="${key["Resturant-Name"]} Image" class="restaurant-image">
        </div>
        <div class="restaurant-details">
            <h3 class="restaurant-name">${key["Resturant-Name"]}</h3>
            <p class="restaurant-location"><i class="fas fa-map-marker-alt"></i> ${key.Location}</p>
            <p class="restaurant-type"><i class="fas fa-utensils"></i> ${key["Resturant-type"]}</p>
            <p class="restaurant-contact"><i class="fas fa-phone"></i> ${key["Contact-number"]}</p>
            <p class="button" ><a href="../html/showmenu.html">Show menu</a></p>
           
             
        </div> 
    </div>

                
                   `
            }       
          });

        
 document.getElementById("show12").innerHTML=output;
          
       

    
    
}







