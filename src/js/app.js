var balance = 0;
var loses = 0;
var profit = 0;
var num = 0;
document.getElementById("totalAmount").innerHTML = balance;

function setBal() {
    balance = document.getElementById("setBal").value;
    document.getElementById("totalAmount").innerHTML = balance;
}

function makeItem() {
    if (document.getElementById('name').value == '' || document.getElementById('description').value == '' || document.getElementById('cost').value == '') {
        alert("Please fill in all inputs");
        return "error";
    }
    var z = document.createElement('div');
    var name = document.getElementById('name').value;
    var desc = document.getElementById('description').value;
    var cost = document.getElementById('cost').value;
    z.innerHTML =
        `<div class="item" id="${num}">
        <hr>
        <div class="f-l">
            <h6 id="name${num}">${name}</h6>
            <p id="desc${num}">${desc}</p>
        </div>
        <div class="f-r">
            <a id="remove${num}" onclick="deleteItem(${num})" class="fas fa-times"></a>
            <p id="cost${num}">$${cost}</p>
        </div>
        <hr>
    </div>`;
    document.getElementById("items").appendChild(z);
    document.getElementById('name').value = '';
    document.getElementById('description').value = '';
    document.getElementById('cost').value = '';
    num++;

    loses = cost - balance;
    console.log(loses);
}

function deleteItem(num) {
    document.getElementById("items").removeChild(num);
}