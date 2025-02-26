let cashOutBtn = document.getElementById("cashOutBtn");

cashOutBtn.addEventListener("click", function () {
  let cashOutAccoutNum = document.getElementById("cashOutAccoutNum").value;

  let cashOutPin = document.getElementById("cashOutPin").value;
  let convartedCashOutPin = parseInt(cashOutPin);

  let cashOutAmount = document.getElementById("cashOutAmount").value;
  let convartedCashOutAmount = parseFloat(cashOutAmount);

  let mainBalance = document.getElementById("mainBalance").innerText;
  let convertedmainBalance = parseFloat(mainBalance);

  if (isNaN(cashOutAmount)) {
    alert("Please enter just a number for the amount!");
    return;
  }

  if(cashOutAmount.length === 0){
    alert('please enter your amount')
  }

  if(cashOutAccoutNum.length === 11){
    if (convartedCashOutPin === 2343) {
        const totalAmount = convertedmainBalance - convartedCashOutAmount;
        document.getElementById("mainBalance").innerText = totalAmount;
        alert('cash Out susccessful')
      } else {
        alert("invlid pin number ");
      }
  }else{
    alert("Invlaid account number. Please try again later! ")
  }
});
