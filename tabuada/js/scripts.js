// Seleções de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const operationsContainer = document.querySelector(
  "#multiplication-operations"
);
const multiplicationTable = document.querySelector("#multiplicator-operations");

// Função para criar a tabuada
const createTable = (number, multiplicatorNumber) => {
  operationsContainer.innerHTML = "";

  for (i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i;

    const templete = `<div class="row> 
    <div class="operation">${number} x ${i} =</div>
    <div class="result">${result}</div> 
    </div>`;
  }
};
// Evento de envio do formulário
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;
  const multiplicatorNumber = +multiplicationInput.value;

  console.log("Número base:", multiplicationNumber);
  console.log("Multiplicar até:", multiplicatorNumber);

  if (!multiplicationNumber || !multiplicatorNumber) {
    console.log("Por favor, preencha os dois campos com números válidos.");
    return;
  }

  titleSpan.textContent = multiplicationNumber;
  createTable(multiplicationNumber, multiplicatorNumber);
});
