// add money event handler

// step 1 = add event handler + prevent page reload


document.getElementById("btn-add-money").addEventListener("click", function (event) {
  // prevent reload
  event.preventDefault();

  // step2 = get money to be added to the current balance
  const addMoneyInput = document.getElementById("input-add-money").value;

  // step 3 = check if the pin is right
  const pinNumberInput = document.getElementById("pin-number").value;

  // wrong way to check but I am just a beginner
  if (pinNumberInput === "1234") {
    // step 4 = get the current balance
    const currentBalance = document.getElementById("current-balance").innerText;

    // step 5 = add money
    const newBalance = parseFloat(currentBalance) + parseFloat(addMoneyInput);

    // step 6 = update balance
    document.getElementById("current-balance").innerText = newBalance;
  }

  else {
    console.log("wrong pin");

  }

});