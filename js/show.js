function display(){
    alert("fcg")
}

async function displayData() {
    let Table = `
        <table border="2px" cellpadding="3px">
            <tr bgcolor="orange">
                <th>Restaurant image</th>
                <th>Restaurant name</th>
                <th>Location</th>
                <th>Restaurant Type</th>
                <th>Contact Number</th>
            </tr>
    `;

    let api = "http://localhost:5000/id";
    const response = await fetch(api);
    const myData = await response.json();

    myData.map((key) => {
        Table += `
            <tr>
             <td onclick="display()"><img src="${key["Resturant-image"]}" alt="Restaurant Image" width="100" height ="100"></td>
                <td >${key["Resturant-Name"]}</td>
               
                <td>${key.Location}</td>
                <td>${key["Resturant-type"]}</td>
                <td>${key["Contact-number"]}</td>
            </tr>
        `;
    });

    Table += "</table>";
    document.getElementById("demo").innerHTML = Table;
}

displayData();
