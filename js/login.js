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

    // console.log(mobileIntConvert,pinIntConvert);

    if (mobileNum === mobileIntConvert && pinNum === pinIntConvert) {
      window.location.href = "./home.html";
    } else {
      alert("Invalid");
    }
  });
