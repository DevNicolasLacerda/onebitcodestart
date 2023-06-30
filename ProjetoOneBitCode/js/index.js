function calculateTip(event) {
  event.preventDefault();
  let bill = document.getElementById('bill').value;
  let serviceQual = document.getElementById('serviceQual').value;
  let numPeople = document.getElementById('people').value;

  if (bill == '' | serviceQual == 0) {
    alert("Por favor, preencha os campos!")
    return;
  }

  if (numPeople == '' | numPeople <= 1) {
    numPeople = 1;
    document.getElementById('each').style.display = "none"
  } else {
    document.getElementById('each').style.display = "block"
  }

  let total = (bill * serviceQual) / numPeople;
  total = total.toFixed(2); // Funcao que formata o numero para duas casas
  document.getElementById("tip").innerHTML = total;
  document.getElementById('totalTips').style.display = "block"
}

function reset() {
  document.getElementById('totalTips').style.display = "none"
}

document.getElementById('totalTips').style.display = "none"
document.getElementById('each').style.display = "none"

document.getElementById('tipsForm').addEventListener('submit', calculateTip);
document.getElementById('btnReset').addEventListener('click', reset);