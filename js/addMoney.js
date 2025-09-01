//  Log Out
document.getElementById("btn-logOut").addEventListener("click", function () {
  window.location.href = "./index.html";
});

//

const account = "12345678910";
const validPin = "1234";
const banks = "Islami Bank";
const transactionData = [];

//  function to get input value
function getInputValue(id) {
  // const inputValue = document.getElementById(id).value;
  const input = document.getElementById(id);
  const inputValues = input.value;
  // input.value = "";
  return inputValues;
}

// function set innerText amount value
function setInnerText(value) {
  const availableBalanceElement = document.getElementById("avaible-blance");
  availableBalanceElement.innerText = value;
}

document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // const bank = getInputValue("select-bank");
    const bank = document.getElementById("select-bank").value;
    // const accountNumber = document.getElementById("account-number").value;
    const accountNumber = getInputValue("account-number");
    const addAmount = parseInt(document.getElementById("add-amount").value);
    // const pin = document.getElementById("pin-number").value;
    const pin = getInputValue("pin-number");

    // avaible-blance
    const availableBalance = parseInt(
      document.getElementById("avaible-blance").innerText
    );

    // //  Custom Alert Message
    function setAlert(message) {
      const customAlert = document.getElementById("customAlert");
      const alertMgs = document.getElementById("alertMgs");

      customAlert.classList.remove("hidden");
      alertMgs.innerText = message;

      // 3 second hidden
      setTimeout(() => {
        customAlert.classList.add("hidden");
      }, 3000);
    }

    if (bank !== banks) {
      // setAlert("Warning: Select Bank");
      // alert(setAlert("Warning: Select Bank"));
      // alert("Select Bank");
      return;
    }
    if (accountNumber !== account) {
      setAlert("Warning: Mobile number invalid");
      // alert("Please provide valid account number");
      return;
    }
    if (pin !== validPin) {
      setAlert("Warning: Pin number invalid");
      // alert("Please provide valid pin number");
      return;
    }

    const totalBalance = addAmount + availableBalance;
    // document.getElementById("avaible-blance").innerText = totalBalance;
    setInnerText(totalBalance);

    //
    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
  });

//  // Cash Out  Money feature
const accountNmbr = "12345678910";
const validPinNmbr = "1234";

document
  .getElementById("withdraw-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const agentNumber = document.getElementById("agent-number").value;
    const pinNumber = document.getElementById("pin-numbers").value;

    // //  Custom Alert Message
    function setAlert(message) {
      const customAlert = document.getElementById("customAlert");
      const alertMgs = document.getElementById("alertMgs");

      customAlert.classList.remove("hidden");
      alertMgs.innerText = message;

      // 3 second hidden
      setTimeout(() => {
        customAlert.classList.add("hidden");
      }, 3000);
    }

    if (agentNumber !== accountNmbr) {
      setAlert("Warning: Mobile number invalid");
      // alert("Please provide valid account number");
      return;
    }
    if (pinNumber !== validPinNmbr) {
      setAlert("Warning: Pin number invalid");
      // alert("Please provide valid pin number");
      return;
    }

    const withdrawAmount = parseInt(
      document.getElementById("withdraw-amount").value
    );

    const availableBalance = parseInt(
      document.getElementById("avaible-blance").innerText
    );

    const totalWithdraw = availableBalance - withdrawAmount;
    // document.getElementById("avaible-blance").innerText = totalWithdraw;
    setInnerText(totalWithdraw);

    const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
    // console.log(transactionData);
  });
