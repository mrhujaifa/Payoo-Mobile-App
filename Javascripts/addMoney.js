let addMoneybtn = document.getElementById("addMoneyBtn");

addMoneybtn.addEventListener("click", function (event) {
  event.preventDefault();
  let amount = document.getElementById("Amount").value;
  let convertedAmount = parseFloat(amount);

  let PIN = document.getElementById("pin").value;
  let convertedPin = parseInt(PIN);

  let mainBalance = document.getElementById("mainBalance").innerText;
  let convertedmainBalance = parseFloat(mainBalance);

  if (isNaN(convertedAmount)) {
    alert("Please enter just a number for the amount!");
    return
  }

  if (amount && PIN) {
    if (convertedPin === 2343) {
      const totalAmount = convertedmainBalance + convertedAmount;
      document.getElementById("mainBalance").innerText = totalAmount;
    } else {
      alert("invlid pin number ");
    }
  } else {
    alert("Enter your amouont!!!");
  }
});
