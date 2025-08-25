//  function money Toggling feature

function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// function to toggle buttons
function handleButtonToggle(id) {
  const btnHoverToggle = document.getElementsByClassName("btn-hover");
  for (const btnHover of btnHoverToggle) {
    // btnHover.classList.remove("border-[#0874f2]");
    // btnHover.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    // el.removeAttribute("style"); ( on line e);
    btnHover.style.border = "";
    btnHover.style.backgroundColor = "";
  }
  // document.getElementById(id).classList.add("border-[#0874f2]");
  const el = document.getElementById(id);
  el.style.border = "1px solid #0874f2";
  el.style.backgroundColor = "#0874f20d";

  // document
  //   .getElementById(id)
  //   .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// Add Money Toggling
document.getElementById("btn-addMoney").addEventListener("click", function () {
  handleToggle("addMoney");
  handleButtonToggle("btn-addMoney");
});

// Cash Out Toggling
document.getElementById("btn-cashOut").addEventListener("click", function () {
  handleToggle("cashOut");
  handleButtonToggle("btn-cashOut");
});

// Transfer Money Toggling
document.getElementById("btn-transfer").addEventListener("click", function () {
  handleToggle("transfer");
  handleButtonToggle("btn-transfer");
});

// Get Bonus Toggling
document.getElementById("btn-getBonus").addEventListener("click", function () {
  handleToggle("getBonus");
  handleButtonToggle("btn-getBonus");
});
// Pay Bill Toggling
document.getElementById("btn-payBill").addEventListener("click", function () {
  handleToggle("payBill");
  handleButtonToggle("btn-payBill");
});
// Transactions Toggling
document
  .getElementById("btn-transactions")
  .addEventListener("click", function () {
    handleToggle("transactions");
    handleButtonToggle("btn-transactions");
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
