// const noakhaliDonateBtn = document.getElementById("noakhali-donate-btn");
const noakhaliAmount = document.getElementById("noakhali-amount");

// Input common function by id
function getInputValueById(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
}

// text common function by id
function getTextValueById(id) {
  const textValue = parseFloat(document.getElementById(id).innerText);
  return textValue;
}
//Noakhali Donate function
document
  .getElementById("noakhali-donate-btn")
  .addEventListener("click", function () {
    let emptyAmount = document.getElementById("noakhali-donate-amount");
    const noakhaliDonateAmount = getInputValueById("noakhali-donate-amount");
    const amount = getTextValueById("noakhali-amount");
    if (isNaN(noakhaliDonateAmount) || noakhaliDonateAmount <= 0) {
      alert("Invalid Donation amount");
      return;
    }
    document.getElementById("noakhali-amount").innerText =
      amount + noakhaliDonateAmount;
    const myAmountBalance = getTextValueById("my-amount");
    document.getElementById("my-amount").innerText =
      myAmountBalance - noakhaliDonateAmount;

    emptyAmount.value = "";
  });

//Feni Donate function
