const inputCambio = document.querySelector('#cambioInput');
const listaCambios = document.querySelector('#lista-cambio');
const botaoInput = document.querySelector('#inputBtn');


const handleRates = ({ rates }) => {
  const ratesEntries = Object.entries(rates);
  ratesEntries.forEach(([currency, rate]) => {
    renderRates(currency, rate);
  });
};

botaoInput.addEventListener('click', () => {
  clearList();
  fetchCurrency(inputCambio.value);
})

const renderBase = ({ base: currency }) => {
  const currencyTitle = document.querySelector('#base');
  currencyTitle.innerText = `Valores referentes a 1${currency}`;
};

const renderRates = (currency, rate) => {
  const li = document.createElement('li');
  li.innerText = `${currency}: ${rate.toFixed(3)}`;
  listaCambios.appendChild(li);
};

const clearList = () => {
  while (listaCambios.firstChild) {
    listaCambios.removeChild(listaCambios.lastChild);
  };
};