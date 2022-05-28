





const FetchAllConversionRates = async () => {
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/codes`);
        if (response.status != 200) {
            throw new Error("API - wrong link");
        } else {
            // console.log("response", response);
            let data = await response.json();
            let allCodes = data.supported_codes;
            // console.log("data", allCodes);
            allCodes.forEach(e=> CreateSelectsConversionRates(e));
        }
    } catch (err) {
        console.log(err);
    }
}

const FetchConvertionCalculation = async (from, to, amount) => {
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/pair/${from}/${to}/${amount}`);
        if (response.status != 200) {
            throw new Error("API - wrong link");
        } else {
            // console.log("response", response);
            let data = await response.json();
            let conversion = data.conversion_rate;
            let result = data.conversion_result;
            console.log(data);
            CreateNewConversion(conversion, result, to);
        }
    } catch (err) {
        console.log(err);
    }
}

// FetchConvertionCalculation('EUR', 'GBP', 5);

let selectOne = document.querySelector('#conversion1');
let selectTwo = document.querySelector('#conversion2');
let amount = document.querySelector('#amount');
let resultDiv = document.querySelector('.result');
let convertionButton = document.querySelector('#convert');
let switchButton = document.querySelector('#switch');

convertionButton.addEventListener('click', () => {
    FetchConvertionCalculation(selectOne.value, selectTwo.value, amount.value);
});

switchButton.addEventListener('click', () => {
    let helper = selectOne.value;
    selectOne.value = selectTwo.value;
    selectTwo.value = helper;
    FetchConvertionCalculation(selectOne.value, selectTwo.value, amount.value);
});


class ConversionTransaccion {
    constructor(rate, result, currency) {
        this.rate = rate;
        this.result = result;
        this.currency = currency;
    }

    createConversionResult() {
        resultDiv.innerHTML = '';
        this.conversionResult = document.createElement('div');//parent div
        this.conversionResult.className = 'conversion-div';
        this.resultParagraph = document.createElement('p');
        this.resultParagraph.textContent = `Total Convertion: ${this.result}${this.currency}`;
        this.conversionResult.appendChild(this.resultParagraph);
        this.conversionRate = document.createElement('p');
        this.conversionRate.textContent = `Conversion Rate: ${this.rate}`;
        this.conversionResult.appendChild(this.conversionRate);
        resultDiv.appendChild(this.conversionResult);
    };
}


class ConversionType {
    constructor(code,name) {
        this.code = code;
        this.name = name;
    }
    // delete(e) {
    //     let wheaterCard = e.target.parentElement;
    //     wheaterCard.parentElement.removeChild(wheaterCard);
    // }
    createConversionSelect() {
        this.ConversionOption = document.createElement('option');//parent div
        this.ConversionOption.value = this.code;
        this.ConversionOption.textContent = `${this.code}, ${this.name}`;
        selectOne.append(this.ConversionOption);
        this.ConversionOption2 = document.createElement('option');//parent div
        this.ConversionOption2.value = this.code;
        this.ConversionOption2.textContent = `${this.code}, ${this.name}`;
        selectOne.append(this.ConversionOption);
        selectTwo.append(this.ConversionOption2);
    };
}


function CreateSelectsConversionRates(data) {
        let currentCard = new ConversionType(
            data[0],
            data[1],
        );
        currentCard.createConversionSelect();
    ;
}

function CreateNewConversion(rate, result, currency) {
    let currentCard = new ConversionTransaccion(
        rate,
        result,
        currency,
    );
    currentCard.createConversionResult();
;
}

FetchAllConversionRates();