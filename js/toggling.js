//    Toggling feature

function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// Add Money Toggling
document.getElementById("btn-addMoney").addEventListener("click", function () {
  handleToggle("addMoney");
});

// Cash Out Toggling
document.getElementById("btn-cashOut").addEventListener("click", function () {
  handleToggle("cashOut");
});

// Transfer Money Toggling
document.getElementById("btn-transfer").addEventListener("click", function () {
  handleToggle("transfer");
});

// Get Bonus Toggling
document.getElementById("btn-getBonus").addEventListener("click", function () {
  handleToggle("getBonus");
});
// Pay Bill Toggling
document.getElementById("btn-payBill").addEventListener("click", function () {
  handleToggle("payBill");
});
// Transactions Toggling
document
  .getElementById("btn-transactions")
  .addEventListener("click", function () {
    handleToggle("transactions");
  });

// document.getElementById("btn-addMoney").addEventListener("click", function () {
//   const btnColor = document.getElementById("btn-addMoney");

// btnColor.style.backgroundColor = "#0874f20d";
// btnColor.style.borderWidth = "1px";
// btnColor.style.borderStyle = "solid";
// btnColor.style.borderColor = "rgba(8, 116, 242, 1)";

//   document.getElementById("cashOut").style.display = "none";
//   document.getElementById("addMoney").style.display = "block";
// });

// document.getElementById("btn-cashOut").addEventListener("click", function () {
//   const btnColor = document.getElementById("btn-cashOut");

// btnColor.style.backgroundColor = "#0874f20d";
// btnColor.style.borderWidth = "1px";
// btnColor.style.borderStyle = "solid";
// btnColor.style.borderColor = "rgba(8, 116, 242, 1)";

//   document.getElementById("addMoney").style.display = "none";
//   document.getElementById("cashOut").style.display = "block";
// });
