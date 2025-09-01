document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const mobileNum = 12345678910;
    const pinNum = 1234;

    const inputValue = document.getElementById("input-num").value;
    const mobileIntConvert = parseInt(inputValue);

    const pinValue = document.getElementById("input-pin").value;
    const pinIntConvert = parseInt(pinValue);

    //   console.log(mobileIntConvert,pinIntConvert);

    if (mobileNum === mobileIntConvert && pinNum === pinIntConvert) {
      window.location.href = "./home.html";
    }

    // Custom Alert Message
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

    if (mobileIntConvert !== mobileNum) {
      setAlert("Warning: Mobile number invalid");
      return;
    }
    if (pinIntConvert !== pinNum) {
      setAlert("Warning: Pin number invalid");
      return;
    }
  });
