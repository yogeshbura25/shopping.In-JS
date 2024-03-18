function fecthData() {
    fetch("https://api.escuelajs.co/api/v1/products")
    .then(response => {
        return response.json();
    })
    .then(data => {
        displayData(data);
    });
}

fecthData();

function displayData(data) {
    var fecthDatafromURL = document.getElementById("fecthDatafromURL");
    data.forEach(info => {
        const div = document.createElement("div");
        div.classList.add("css-box");
        div.innerHTML = `
        <img src="${info.images}" alt="${info.title}"/>
        <h2>${info.title}</h2>
        <p>${info.description}</p>
        <div class="foot">
        <p class="price">Price: ${info.price}$</p>
        <button onclick="confirmOrder()">Place Order</button>
        </div>`;
        fecthDatafromURL.appendChild(div);
    });
}


function confirmOrder() {
    if(true){
        alert("Your Order is Confirmed!")
    } else {
        alert("Your Order is Canceled")
    }
}


