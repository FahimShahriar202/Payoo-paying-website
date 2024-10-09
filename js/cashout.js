// input-cashout  


document.getElementById("btn-cashout").addEventListener("click", function (event) {
  // prevent reload
  event.preventDefault();

  // step2 = get money to be added to the current balance
  const cashoutMoneyInput = document.getElementById("input-cashout").value;

  // step 3 = check if the pin is right
  const pinNumberInput = document.getElementById("pin-number").value;

  // wrong way to check but I am just a beginner
  if (pinNumberInput === "1234") {
    // step 4 = get the current balance
    const currentBalance = document.getElementById("current-balance").innerText;

    // step 5 = add money
    const newBalance = parseFloat(currentBalance) - parseFloat(cashoutMoneyInput);

    // step 6 = update balance
    document.getElementById("current-balance").innerText = cashoutMoneyInput;
  }

  else {
    console.log("wrong pin");

  }

});