// add money event handler

// step 1 = add event handler + prevent page reload


document.getElementById("btn-add-money").addEventListener("click", function(event){
  // prevent reload
  event.preventDefault();

  // step2 = get money to be added to the current balance
  const addMoneyInput = document.getElementById("input-add-money").value;

  // step 3 = check if the pin is right
  const pinNumberInput = document.getElementById("pin-number").value;
});