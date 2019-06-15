var balance = 0;
var loses = 0;
var profit = 0;
var num = 0;
var cost = 0;

var totalAmount = document.getElementById("totalAmount");
var totalLoses = document.getElementById("totalLoses");
var totalProfit = document.getElementById("totalProfit");
var setBalance = document.getElementById("setBal");
var nameId = document.getElementById('name');
var description = document.getElementById('description');
var costId = document.getElementById('cost');
var items = document.getElementById("items");

totalAmount.innerHTML = balance;
totalLoses.innerHTML = 0;
totalProfit.innerHTML = 0;

function setBal() {
    balance = setBalance.value;
    totalAmount.innerHTML = balance;

    loses = loses + cost;
    totalLoses.innerHTML = loses;
    profit = balance - loses;
    totalProfit.innerHTML = profit;
}

function makeItem() {
    if (nameId.value == '' || description.value == '' || costId.value == '') {
        alert("Please fill in all inputs");
        return "error";
    }

    var z = document.createElement('div');
    var name = nameId.value;
    var desc = description.value;
    var cost = parseInt(costId.value);
    z.innerHTML =
        `<div class="item" id="item${num}">
        <hr>
        <div class="f-l">
            <h6 id="name${num}">${name}</h6>
            <p id="desc${num}">${desc}</p>
        </div>
        <div class="f-r">
            <a id="remove${num}" onclick="deleteItem(${num}, ${cost})" class="fas fa-times"></a>
            <p id="cost${num}">$${cost}</p>
        </div>
        <hr>
    </div>`;

    loses = loses + cost;
    totalLoses.innerHTML = loses;
    profit = balance - loses;
    totalProfit.innerHTML = profit;
    items.appendChild(z.firstChild);
    nameId.value = '';
    description.value = '';
    costId.value = '';
    num++;

}

function deleteItem(num, cost) {
    loses = loses - parseInt(cost);
    totalLoses.innerHTML = loses;
    profit = balance - loses;
    totalProfit.innerHTML = profit;

    items.removeChild(document.getElementById('item' + num));
}