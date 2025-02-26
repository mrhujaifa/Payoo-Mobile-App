let addMoney = document.getElementById("addMoney-form");

let cashOut = document.getElementById("cashOut-form");

let addMoneyCard = document.getElementById('addMoney-card')
let cashOutCard = document.getElementById('cashOut-card')
addMoney.style.display = "block";
cashOut.style.display = "none";

addMoneyCard.addEventListener("click", function () {
  cashOut.style.display = "none";
  addMoney.style.display = "block";
});

cashOutCard.addEventListener("click", function () {
  addMoney.style.display = "none";
  cashOut.style.display = "block";
});
