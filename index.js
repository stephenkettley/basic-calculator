const buttonsEl = document.querySelectorAll("button");
const inputField = document.getElementById("result");

Array.from(buttonsEl).forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;

    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
});

function clearResult() {
  inputField.value = "";
}

function calculateResult() {
  inputField.value = eval(inputField.value);
}

function appendValue(buttonValue) {
  inputField.value += buttonValue;
}
