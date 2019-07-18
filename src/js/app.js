let balance = 0;
let loses = 0;
let profit = 0;
let num = 0;
let cost = 0;

const totalAmount = document.getElementById("totalAmount");
const totalLoses = document.getElementById("totalLoses");
const totalProfit = document.getElementById("totalProfit");
const setBalance = document.getElementById("setBal");
const nameId = document.getElementById('name');
const description = document.getElementById('description');
const costId = document.getElementById('cost');
const items = document.getElementById("items");

totalAmount.innerHTML = balance;
totalLoses.innerHTML = 0;
totalProfit.innerHTML = 0;

const setBal = () => {
    balance = setBalance.value;
    totalAmount.innerHTML = balance;
    loses = loses + cost;
    totalLoses.innerHTML = loses;
    profit = balance - loses;
    totalProfit.innerHTML = profit;
}

const makeItem = () => {
    if (nameId.value == '' || description.value == '' || costId.value == '') {
        alert("Please fill in all inputs");
        return "error";
    }
    const z = document.createElement('div');
    let name = nameId.value;
    let desc = description.value;
    let cost = parseInt(costId.value);
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

const deleteItem = (num, cost) => {
    loses = loses - parseInt(cost);
    totalLoses.innerHTML = loses;
    profit = balance - loses;
    totalProfit.innerHTML = profit;

    items.removeChild(document.getElementById('item' + num));
}