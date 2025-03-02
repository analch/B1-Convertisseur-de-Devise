//taux de change :
const converterValues = [
    {name: 'EUR', value: 0.95, symbol: '€'},
    {name: 'USD', value: 1.00, symbol: '$'},
    {name: 'GBP', value: 0.79, symbol: '£'},
    {name: 'JPY', value: 151.44, symbol: '¥'},
]

//convertisseur de devises :
const converterForm = document.getElementById('currenciesConverter');
const currencyIn = document.getElementById("currencyIn");
const currencyOut = document.getElementById("currencyOut");
const inputInValue = document.getElementById("valueIn");
const inputOutValue = document.getElementById("valueOut");

function convertCurrencies(value, changeRateIn, changeRateOut) {
    return (value * changeRateOut) / changeRateIn;
}

function getChangeRate(changeName) {
    return converterValues.find((value) => changeName === value.name);
}

//swap de devise :
function swapCurrencies() {
    [currencyIn.value, currencyOut.value] = [currencyOut.value, currencyIn.value]
}

converterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const valueIn = Number(inputInValue.value);
    const changeRateValueIn = getChangeRate(currencyIn.value)
    const changeRateValueOut = getChangeRate(currencyOut.value);
    const conversionResult = convertCurrencies(valueIn, changeRateValueIn.value, changeRateValueOut.value)

    inputOutValue.textContent = `Résultat : ${conversionResult.toFixed(2)} ${currencyOut.value}`;


});
