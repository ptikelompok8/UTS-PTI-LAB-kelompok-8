document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    var username = document.getElementById("usernameInput").value.trim();
    var password = document.getElementById("passwordInput").value.trim();

    if (username !== "" && password !== "") {

        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("mainContent").style.display = "block";

        loadMainContent(username);
    } else {
        alert("Please enter username and password.");
    }
});

function loadMainContent(username) {
var welcomeMessage = document.createElement("h3");
welcomeMessage.textContent = "Hello, " + username + "! Welcome to Money Tracker.";
welcomeMessage.style.color = "#2ecc71"; 
welcomeMessage.style.textAlign = "center"; 
welcomeMessage.style.marginBottom = "20px"; 
document.getElementById("mainContent").appendChild(welcomeMessage);
var helloMessage = "Hello, " + username + "!";
document.getElementById("hello").textContent = helloMessage;
}


function addTransaction(name, amount, category, type) {
var table = document.getElementById('transactionsTable');
var row = table.insertRow();
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
cell1.innerHTML = name;
cell2.innerHTML = amount;
cell3.innerHTML = category;
if (type === 'income') {
row.classList.add('income');
} else {
row.classList.add('outcome');
}
}

document.addEventListener('DOMContentLoaded', function() {
loadTransactionsFromLocalStorage();

document.getElementById('incomeForm').addEventListener('submit', function(event) {
event.preventDefault();
var name = document.getElementById('incomeName').value;
var amount = parseFloat(document.getElementById('incomeAmount').value);
var category = document.getElementById('incomeCategory').value;
if (name.trim() !== '' && !isNaN(amount) && amount > 0 && category !== '') {
    addTransaction(name, amount, category, 'income');
    document.getElementById('incomeForm').reset();
    saveDataToLocalStorage();
    updateBalance();
} else {
    alert('Please fill all fields correctly.');
}
});

document.getElementById('outcomeForm').addEventListener('submit', function(event) {
event.preventDefault();
var name = document.getElementById('outcomeName').value;
var amount = parseFloat(document.getElementById('outcomeAmount').value);
var category = document.getElementById('outcomeCategory').value;
if (name.trim() !== '' && !isNaN(amount) && amount > 0 && category !== '') {
    addTransaction(name, amount, category, 'outcome');
    document.getElementById('outcomeForm').reset();
    saveDataToLocalStorage();
    updateBalance();
} else {
    alert('Please fill all fields correctly.');
}
});

window.addEventListener('beforeunload', function() {
saveDataToLocalStorage();
});

document.querySelectorAll('.nav-link').forEach(item => {
item.addEventListener('click', function(event) {
    changePage(event.target.getAttribute('id') + 'Page');
});
});
});

function addTransaction(name, amount, category, type) {
var table = document.getElementById('transactionsTable');
var row = table.insertRow();
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
cell1.innerHTML = name;
cell2.innerHTML = amount.toFixed(2); 
cell3.innerHTML = category;
if (type === 'income') {
row.classList.add('income');
} else {
row.classList.add('outcome');
}
}

function updateBalance() {
var totalIncome = 0;
var totalOutcome = 0;
var tableRows = document.getElementById('transactionsTable').rows;
for (var i = 0; i < tableRows.length; i++) {
var amount = parseFloat(tableRows[i].cells[1].innerText);
if (tableRows[i].classList.contains('income')) {
    totalIncome += amount;
} else {
    totalOutcome += amount;
}   
}
var balance = totalIncome - totalOutcome;
document.getElementById('balance').innerText = 'Balance: $' + balance.toFixed(2);
document.getElementById('totalIncome').innerText = 'Total Income: $' + totalIncome.toFixed(2);
document.getElementById('totalOutcome').innerText = 'Total Outcome: $' + totalOutcome.toFixed(2);
}

function saveDataToLocalStorage() {
var transactions = [];
var tableRows = document.getElementById('transactionsTable').rows;
for (var i = 0; i < tableRows.length; i++) {
var transaction = {
    name: tableRows[i].cells[0].innerText,
    amount: parseFloat(tableRows[i].cells[1].innerText),
    category: tableRows[i].cells[2].innerText,
    type: tableRows[i].classList.contains('income') ? 'income' : 'outcome'
};
transactions.push(transaction);
}
localStorage.setItem('transactions', JSON.stringify(transactions));
}

function loadTransactionsFromLocalStorage() {
var transactions = JSON.parse(localStorage.getItem('transactions'));
if (transactions) {
transactions.forEach(function(transaction) {
    addTransaction(transaction.name, transaction.amount, transaction.category, transaction.type);
});
updateBalance();
}
}

function changePage(pageId) {
var pages = ['mainPage', 'incomePage', 'outcomePage', 'aboutPage'];
pages.forEach(function(page) {
document.getElementById(page).style.display = page === pageId ? 'block' : 'none';
});
}
function resetTransactions() {
if (confirm('Are you sure you want to reset all transactions?')) {
localStorage.removeItem('transactions'); 
document.getElementById('transactionsTable').innerHTML = ''; 
updateBalance();
}
}
const elems = document.querySelectorAll('.laya-please');
const layer2 = document.querySelector('.layer-2');
const layer3 = document.querySelector('.layer-3');
const layer4 = document.querySelector('.layer-4');
const layer5 = document.querySelector('.layer-5');
const layer6 = document.querySelector('.layer-6');
const layer7 = document.querySelector('.layer-7');
const layer8 = document.querySelector('.layer-8');


setTimeout(function () {
elems.forEach(function (elem, index) {
elem.style.animation = "none";
});
}, 1500);



document.body.addEventListener('mousemove', function (e) {
if (!e.currentTarget.dataset.triggered) {
elems.forEach(function (elem, index) {
    if (elem.getAttribute('style')) {
        elem.style.transition = "all .5s";
        elem.style.transform = "none";
    }
});
}
e.currentTarget.dataset.triggered = true;

let width = window.innerWidth / 2;
let mouseMoved2 = ((width - e.pageX) / 50);
let mouseMoved3 = ((width - e.pageX) / 40);
let mouseMoved4 = ((width - e.pageX) / 30);
let mouseMoved5 = ((width - e.pageX) / 20);
let mouseMoved6 = ((width - e.pageX) / 10);
let mouseMoved7 = ((width - e.pageX) / 5);

layer3.style.transform = "translateX(" + mouseMoved2 + "px)";
layer4.style.transform = "translateX(" + mouseMoved3 + "px)";
layer5.style.transform = "translateX(" + mouseMoved4 + "px)";
layer6.style.transform = "translateX(" + mouseMoved5 + "px)";
layer7.style.transform = "translateX(" + mouseMoved6 + "px)";
layer8.style.transform = "translateX(" + mouseMoved7 + "px)";
});

document.body.addEventListener('mouseleave', function (e) {
elems.forEach(function (elem, index) {
elem.style.transition = "all .5s";
elem.style.transform = "none";
});
});

document.body.addEventListener('mouseenter', function (e) {
elems.forEach(function (elem, index) {
setTimeout(function () {
    elem.style.transition = "none";
}, 500);
});
});