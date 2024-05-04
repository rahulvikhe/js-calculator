let displayValue = "";
const history = [];

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
    history.push({ expression: displayValue, result: result });
    renderHistory();
  } catch (error) {
    clearDisplay();
    alert("Invalid expression");
  }
}

function renderHistory() {
  const historyList = document.getElementById("historyList");
  historyList.innerHTML = "";
  history.forEach((entry, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${entry.expression} = ${entry.result}`;
    historyList.appendChild(li);
  });
}