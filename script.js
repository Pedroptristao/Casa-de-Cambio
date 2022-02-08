const inputCambio = document.querySelector('#cambioInput');
const botaoInput = document.querySelector('#inputBtn');
const listaCambios = document.querySelector('#lista-cambio');

const handleRates = ({ rates }) => {
  const ratesEntries = Object.entries(rates);
  ratesEntries.forEach(([currency, rate]) => {
    renderRates(currency, rate);
  });
};

const renderRates = (currency, rate) => {
  const li = document.createElement('li');
  li.innerText = `${currency}: ${rate.toFixed(3)}`;
  listaCambios.appendChild(li);
}

botaoInput.addEventListener('click', () => {
  while (listaCambios.firstChild) {
    listaCambios.removeChild(listaCambios.lastChild);
  }
  fetchCurrency(inputCambio.value);
});