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
    const myAmountBalance = getTextValueById("my-amount");
    if (
      isNaN(noakhaliDonateAmount) ||
      noakhaliDonateAmount <= 0 ||
      noakhaliDonateAmount > myAmountBalance
    ) {
      alert("Invalid Donation amount");
      return;
    }
    document.getElementById("noakhali-amount").innerText =
      amount + noakhaliDonateAmount;
    document.getElementById("my-amount").innerText =
      myAmountBalance - noakhaliDonateAmount;
    my_modal.showModal();
    emptyAmount.value = "";
  });

//Feni Donate function
document
  .getElementById("feni-donate-btn")
  .addEventListener("click", function () {
    let emptyAmount = document.getElementById("feni-donate-amount");
    const feniDonateAmount = getInputValueById("feni-donate-amount");
    const amount = getTextValueById("feni-amount");
    const myAmountBalance = getTextValueById("my-amount");

    if (
      isNaN(feniDonateAmount) ||
      feniDonateAmount <= 0 ||
      feniDonateAmount > myAmountBalance
    ) {
      alert("Invalid Donation amount");
      return;
    }

    document.getElementById("feni-amount").innerText =
      amount + feniDonateAmount;
    document.getElementById("my-amount").innerText =
      myAmountBalance - feniDonateAmount;

    my_modal.showModal();
    emptyAmount.value = "";
  });

// Quota Movement function
document
  .getElementById("quota-movement-btn")
  .addEventListener("click", function () {
    let emptyAmount = document.getElementById("quoto-movement-donate");
    const quotoMovementDonate = getInputValueById("quoto-movement-donate");
    const amount = getTextValueById("quota-amount");
    const myAmountBalance = getTextValueById("my-amount");

    if (
      isNaN(quotoMovementDonate) ||
      quotoMovementDonate <= 0 ||
      quotoMovementDonate > myAmountBalance
    ) {
      alert("Invalid Donation amount");
      return;
    }

    document.getElementById("quota-amount").innerText =
      amount + quotoMovementDonate;
    document.getElementById("my-amount").innerText =
      myAmountBalance - quotoMovementDonate;

    my_modal.showModal();
    emptyAmount.value = "";
  });

//Toggle Button

document.getElementById("history-btn").addEventListener("click", function () {
  let historyBtn = document.getElementById("history-btn");
  let donationBtn = document.getElementById("donation-btn");
  historyBtn.classList.add("bg-primary", "font-semibold", "text-dark1");
  historyBtn.classList.remove(
    "border-2",
    "border-[rgba(17,17,17,0.3)]",
    "text-dark2"
  );
  donationBtn.classList.remove("bg-primary", "font-semibold", "text-dark1");
  donationBtn.classList.add(
    "border-2",
    "border-[rgba(17,17,17,0.3)]",
    "text-dark2"
  );
});

document.getElementById("donation-btn").addEventListener("click", function () {
  let donationBtn = document.getElementById("donation-btn");
  let historyBtn = document.getElementById("history-btn");
  donationBtn.classList.add("bg-primary", "font-semibold", "text-dark1");
  historyBtn.classList.remove("bg-primary", "font-semibold", "text-dark1");
  historyBtn.classList.add(
    "border-2",
    "border-[rgba(17,17,17,0.3)]",
    "text-dark2"
  );
  donationBtn.classList.remove(
    "border-2",
    "border-[rgba(17,17,17,0.3)]",
    "text-dark2"
  );
});
