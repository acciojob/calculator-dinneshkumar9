const input = document.querySelector("#input");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", e => {
    const value = e.target.innerText;
    if (value === "Clear") {
      input.value = "";
    } else if (value === "=") {
      input.value = eval(input.value);
      if (input.value === "Infinity") {
        input.value = "Infinity";
      } else if (input.value === "NaN") {
        input.value = "NaN";
      }
    } else {
      input.value += value;
    }
  });
});
