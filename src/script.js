let displayValue = "";

function addToDisplay(value) {
  displayValue += value;
  document.getElementById("result").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("result").value = "";
}

function deleteLastDigit() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById("result").value = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    document.getElementById("result").value = displayValue;
  } catch (error) {
    clearDisplay();
    alert("Invalid expression");
  }
}