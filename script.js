// --- 1. Seleção de Elementos ---
// Botão e Inputs
const convertButton = document.querySelector('#converter');
const inputToConvert = document.querySelector('#input-convert-1');
const selectFrom = document.querySelector('.valores-moedas-1'); // Select "De"
const selectTo = document.querySelector('.valores-moedas-2');   // Select "Para"

// Elementos da Caixa "DE" (FROM)
const fromImage = document.querySelector('.money-img-1');
const fromName = document.getElementById('money-name-1');
const fromValue = document.querySelector('.moeda-valor');

// Elementos da Caixa "PARA" (TO)
const toImage = document.querySelector('.moeda-img');
const toName = document.getElementById('moeda-name');
const toValue = document.querySelector('.moeda-valor-convertido');


// --- 2. Taxas de Câmbio ---
// Todas as taxas são baseadas em quanto 1 unidade da moeda vale em Reais (BRL)
const rates = {
    real: 1,
    dolar: 5.36,
    euro: 6.2,
    libra: 7.05,
    bitcoin: 572680
};

// --- 3. Funções ---

/**
 * Função principal que realiza a conversão.
 * Chamada pelo botão ou pela troca dos selects.
 */
function convertCurrency() {
    const inputValue = parseFloat(inputToConvert.value) || 0;
    const fromCurrency = selectFrom.value; // Ex: 'real'
    const toCurrency = selectTo.value;     // Ex: 'dolar'

    // Pega as taxas do objeto 'rates'
    const fromRate = rates[fromCurrency]; // Ex: 1
    const toRate = rates[toCurrency];     // Ex: 5.36

    // Lógica da Conversão:
    // 1. Transforma o valor de entrada em Reais (BRL)
    const valueInBRL = inputValue * fromRate;
    // 2. Transforma o valor em Reais (BRL) para a moeda de destino
    const convertedValue = valueInBRL / toRate;

    // Atualiza os valores formatados nas caixas
    fromValue.innerHTML = formatCurrency(inputValue, fromCurrency);
    toValue.innerHTML = formatCurrency(convertedValue, toCurrency);
}

/**
 * Atualiza a interface (imagem e nome) da caixa "DE" (FROM).
 * Esta era a função que estava faltando ser chamada no seu código.
 */
function updateFromUI() {
    const currency = selectFrom.value;

    if (currency === "real") {
        fromName.innerHTML = "Real";
        fromImage.src = "assets/img/brasil 2.png";
    }
    if (currency === "dolar") {
        fromName.innerHTML = "Dólar Americano";
        fromImage.src = "assets/img/Dolar.png";
    }
    if (currency === "euro") {
        fromName.innerHTML = "Euro";
        fromImage.src = "assets/img/euro.png";
    }
    if (currency === "libra") {
        fromName.innerHTML = "Libra";
        fromImage.src = "assets/img/libra.png";
    }
    if (currency === "bitcoin") {
        fromName.innerHTML = "Bitcoin";
        fromImage.src = "assets/img/bitcoin.png";
    }

    convertCurrency(); // Recalcula ao mudar a moeda de origem
}

/**
 * Atualiza a interface (imagem e nome) da caixa "PARA" (TO).
 */
function updateToUI() {
    const currency = selectTo.value;

    if (currency === 'real') {
        toName.innerHTML = 'Real';
        toImage.src = './assets/img/brasil 2.png';
    }

    if (currency === 'dolar') {
        toName.innerHTML = 'Dólar Americano';
        toImage.src = './assets/img/Dolar.png';
    }
    if (currency === 'euro') {
        toName.innerHTML = 'Euro';
        toImage.src = './assets/img/Euro.png';
    }
    if (currency === 'libra') {
        toName.innerHTML = 'Libra';
        toImage.src = './assets/img/Libra.png';
    }
    if (currency === 'bitcoin') {
        toName.innerHTML = 'Bitcoin';
        toImage.src = './assets/img/Bitcoin.png';
    }

    convertCurrency(); // Recalcula ao mudar a moeda de destino
}

/**
 * Função auxiliar para formatar o valor na moeda correta.
 */
function formatCurrency(value, currency) {
    let locale = "pt-BR";
    let currencyCode = "BRL";

    // Ajusta o 'locale' para formatar moedas estrangeiras corretamente
    if (currency === "dolar") locale = "en-US";
    if (currency === "euro") locale = "de-DE";
    if (currency === "libra") locale = "en-GB";
    if (currency === "bitcoin") {
        locale = "en-US";
        currencyCode = "BTC";
    }
    
    // Bitcoin precisa de mais casas decimais
    const options = {
        style: "currency",
        currency: currencyCode,
        maximumFractionDigits: currency === 'bitcoin' ? 8 : 2,
    };

    return new Intl.NumberFormat(locale, options).format(value);
}


// --- 4. Event Listeners ---
// Aqui está a correção principal: passamos a REFERÊNCIA da função (ex: convertCurrency)
// e não a EXECUÇÃO dela (ex: convertCurrency()).

convertButton.addEventListener('click', convertCurrency);
selectFrom.addEventListener('change', updateFromUI); // <-- Esta linha corrige o seu problema
selectTo.addEventListener('change', updateToUI);

// Chama as funções de UI uma vez no início para garantir
// que a tela carregue com as informações corretas (Real -> Dólar)
updateFromUI();
updateToUI();