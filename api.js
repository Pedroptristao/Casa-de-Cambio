const fetchCurrency = async (currency) => {
    const result = await fetch(`https://api.exchangerate.host/latest?base=${currency}`);
    const data = await result.json();
    clearList();
    handleRates(data);
    renderBase(data);
  };
  