function calcul(valeurEntre){
    let devise_source = document.getElementById("devise-source");
    let devise_cible = document.getElementById("devise-cible");
    console.log(`Devise source : ${devise_source.value}`);
    console.log(`Devise cible : ${devise_cible.value}`);

    const conversion = {
        "EUR": {"EUR": 1, "USD": 1.09, "GBP": 0.85, "JPY": 158.42},
        "USD": {"EUR": 0.92, "USD": 1, "GBP": 0.78, "JPY": 145.90},
        "GBP": {"EUR": 1.17, "USD": 1.28, "GBP": 1, "JPY": 186.73},
        "JPY": {"EUR": 0.0063, "USD": 0.0069, "GBP": 0.0054, "JPY": 1}
    }
    let output =  ;
    let result = valeurEntre * conversion[devise_source.value][devise_cible.value];
    if (result === 0){
        output.textContent = `Résultat : 0 ${devise_cible.value}`;
    } else {
        output.textContent = `Résultat : ${result} ${devise_cible.value}`;
    }
}

const buttonCalculateConversion = document.getElementById('');
const inputInValue = document.getElementById('');

buttonCalculateConversion.addEventListener("click", () => {
    let valeurEntre = parseFloat(inputDeviceInfo.value);
    console.log(valeurEntre);
    calcul(valeurEntre);
});

