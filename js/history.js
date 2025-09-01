const cardBtns = document.getElementsByClassName("card-btn");
for (let cardBtn of cardBtns) {
  cardBtn.addEventListener("click", function () {
    const cardContainer = document.getElementById("transactions-Container");
    const newDev = document.createElement("div");
    // images
    const imgCard =
      cardBtn.parentNode.parentNode.parentNode.parentNode.children[0]
        .children[1].children[2].children[0].children[0].src;
    // Title Money
    const titleMoney = cardBtn.parentNode.parentNode.children[0].innerText;

    // console.log(imgCard)
    // Local Time
    const newTime = new Date();
    const localTime = newTime.toLocaleTimeString("en-US", {
      timeZone: "Asia/Dhaka",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

    newDev.innerHTML = `
              
              <div class="bg-white mx-auto my-3 rounded-2xl p-3 max-w-[400px]">

            <div class="flex justify-between items-center">
              
              <!-- 1 -->
               <div class="flex justify-center items-center">
                <img
                  class="p-4 mr-3 bg-[#0808080d] rounded-full"
                  src="${imgCard}"
                  alt=""
                />
                <div>
                  <h1 class="text-[#080808b3] text-lg font-bold">
                    ${titleMoney}
                  </h1>
                  <p class="text-[#080808b3]">${localTime}</p>
                </div>
              </div>
              <img src="./assets/Frame.png" alt="">

            </div>
          </div>

            
    `;
    cardContainer.appendChild(newDev);
  });
}
