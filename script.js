(function () {
  const CheckOddOrEven = () => {
    let InputNumber = document.getElementById("Number");

    if (InputNumber.value % 2 == 0) {
      let OutPut = document.getElementById("OutPut");
      OutPut.innerHTML = "The Number Is Even";
    } else {
      let OutPut = document.getElementById("OutPut");
      OutPut.innerHTML = "The Number Is Odd";
    }
  };

  document.querySelector(".Button").addEventListener("click", CheckOddOrEven);
})();
