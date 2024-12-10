document.getElementById("save").addEventListener("click",show)

async function show(){
  
    let rest=document.getElementById("res").value
    let image=document.getElementById("img").value
    let loca=document.getElementById("loc").value
    let ty=document.getElementById("type").value
    let con=document.getElementById("num").value

    let api= "http://localhost:5000/id"

    const response= await fetch(api, {
        method: "POST",
        body: JSON.stringify({
            "Resturant-image":image, 
          "Resturant-Name":rest,
          "Location":loca,
          "Resturant-type":ty,
          "Contact-number" :con,
         }),
         headers: {
            "Content-Type": "application/json",
          }
    });

    console.log(response);
    alert("data save!!!");
        

    }

    


