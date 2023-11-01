const buttonsElement = document.querySelectorAll('button');

const inputFieldElement = document.getElementById('result');

for (let i = 0; i < buttonsElement.length; i++) {
  buttonsElement[i].addEventListener("click", () => {
    // console.log(buttonsElement[i].textContent);
    const buttonValue = buttonsElement[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  })
}

function clearResult() {
  inputFieldElement.value = "";
}

function calculateResult() {
  inputFieldElement.value = eval(inputFieldElement.value);
}

function appendValue(buttonValue) {
  inputFieldElement.value += buttonValue;
}


// console.log(buttonsElement);