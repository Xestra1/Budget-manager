var balance = 0;
var loses = 0;
var profit = 0;
var num = 0;
var cost = 0;
document.getElementById("totalAmount").innerHTML = balance;
document.getElementById("totalLoses").innerHTML = 0;
document.getElementById("totalProfit").innerHTML = 0;

function setBal() {
    balance = document.getElementById("setBal").value;
    document.getElementById("totalAmount").innerHTML = balance;

    loses = loses + cost;
    document.getElementById('totalLoses').innerHTML = loses;

    profit = balance - loses;
    document.getElementById('totalProfit').innerHTML = profit;
}

function makeItem() {
    if (document.getElementById('name').value == '' || document.getElementById('description').value == '' || document.getElementById('cost').value == '') {
        alert("Please fill in all inputs");
        return "error";
    }
    var z = document.createElement('div');
    var name = document.getElementById('name').value;
    var desc = document.getElementById('description').value;
    var cost = parseInt(document.getElementById('cost').value);
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
    document.getElementById('totalLoses').innerHTML = loses;

    profit = balance - loses;
    document.getElementById('totalProfit').innerHTML = profit;
    document.getElementById("items").appendChild(z.firstChild);
    document.getElementById('name').value = '';
    document.getElementById('description').value = '';
    document.getElementById('cost').value = '';
    num++;

}

function deleteItem(num, cost) {
    loses = loses - parseInt(cost);
    document.getElementById('totalLoses').innerHTML = loses;

    profit = balance - loses;
    document.getElementById('totalProfit').innerHTML = profit;

    document.getElementById("items").removeChild(document.getElementById('item' + num));
}