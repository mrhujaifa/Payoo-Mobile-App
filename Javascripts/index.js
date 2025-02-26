let loginBtn = document.getElementById("login-Btn");

loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let accoutNumber = document.getElementById("account-Number").value;

  let PinNumber = document.getElementById("PIN-number").value;

  let convartedPIN = parseInt(PinNumber);

  let convartedAccountNum = parseInt(accoutNumber);

  if (accoutNumber.length === 11 && convartedAccountNum === 01608215377) {
    if (convartedPIN === 2343 && PinNumber.length === 4) {
      window.location.href = "/html/main.html";
    } else {
      alert("Incorrect your PIN number. Please try again later!");
    }
  } else {
    alert("Incorrect your Account Number. Please try again later!");
  }
});
