const convertButton = document.querySelector('#converter');
const convertSelect = document.querySelector('.valores-moedas');


function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-convert').value;
    const moedaValor = document.querySelector('.moeda-valor'); // Valor em real
    const moedaValorConvertido = document.querySelector('.moeda-valor-convertido'); //Dolar outras moedas




    const realValue = 1;
    const dolarValue = 5.36;
    const euroValue = 6.2;
    const libraValue = 7.05;
    const bitcoinValue = 572680;




    moedaValor.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);






    if (convertSelect.value === "real") { // SE 0 select estiver selecionado o valor de real, ele vai pegar o valor de real para converter.
        moedaValorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realValue);
    }



    if (convertSelect.value === "dolar") { // SE 0 select estiver selecionado o valor de dolar, ele vai pegar o valor de dolar para converter.
        moedaValorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarValue);

    }


    if (convertSelect.value === "euro") { // SE 0 select estiver selecionado o valor de euro, ele vai pegar o valor de euro para converter.
        moedaValorConvertido.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroValue);

    }


    if (convertSelect.value === "libra") { // SE 0 select estiver selecionado o valor de libra, ele vai pegar o valor de libra para converter.
        moedaValorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraValue);

    }


    if (convertSelect.value === "bitcoin") { // SE 0 select estiver selecionado o valor de bitcoin, ele vai pegar o valor de bitcoin para converter.
        moedaValorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinValue);

    }


}


function changeCurrency() {
    const moedaName = document.getElementById('moeda-name');
    const moedaImg = document.querySelector('.moeda-img');


    if (convertSelect.value === 'dolar') {
        moedaName.innerHTML = 'Dólar Americano';
        moedaImg.src = './assets/img/Dolar.png'
    }


    if (convertSelect.value === 'euro') {
        moedaName.innerHTML = 'Euro';
        moedaImg.src = './assets/img/Euro.png'
    }

    if (convertSelect.value === 'libra') {
        moedaName.innerHTML = 'Libra';
        moedaImg.src = './assets/img/Libra.png'
    }

    if (convertSelect.value === 'bitcoin') {
        moedaName.innerHTML = 'Bitcoin';
        moedaImg.src = './assets/img/Bitcoin.png'
    }

    convertValues();

}




convertSelect.addEventListener('change', changeCurrency);

convertButton.addEventListener('click', convertValues)