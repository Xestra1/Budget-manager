var balance = 0;
var loses = 0;
var profit = 0;
var num = 0;

function setBal() {
    balance = document.getElementById("setBal").value;
    document.getElementById("totalAmount").innerHTML = balance;
    console.log(balance);
}

function makeItem() {
    var z = document.createElement('div');
    z.innerHTML =
        `<div class="item" id="${num}">
        <hr>
        <div class="f-l">
            <h6 id="name${num}">Name</h6>
            <p id="desc${num}">Desc</p>
        </div>
        <div class="f-r">
            <i id="remove${num}" class="fas fa-times"></i>
            <p id="cost${num}">cost</p>
        </div>
        <hr>
    </div>`;
    document.getElementById("items").appendChild(z);
    num++;
}

makeItem();
makeItem();
makeItem();