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
    const name = prompt("Enter your name:");
    const mobileNumber = prompt("Enter your mobile number:")
    const address = prompt("Enter your address:");
    if (name && address && mobileNumber) {
        alert("Your order has been successfully placed!");
    } else {
        alert("Please provide both name and address to place the order.");
    }
}

function submit() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "username" && password === "password") {
        document.getElementById("shop-list").style.display = "block";
        document.getElementById("login-page").style.display = "none";
        document.getElementById("back-button").style.display = "block";
    } else {
        alert("Please Enter Correct Details");
    }
}


function back() {
    document.getElementById("shop-list").style.display = "none";
    document.getElementById("login-page").style.display = "flex";
    document.getElementById("back-button").style.display = "none";
    document.getElementById("login-box").style.visibility = "visible";

}

