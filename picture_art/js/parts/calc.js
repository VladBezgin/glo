function calc() {
    let sizeCalc = document.querySelector('#size'),
        material = document.querySelector('#material'),
        promocode = document.getElementsByClassName('promocode')[0],
        optionsCalc = document.querySelector('#options'),
        calcPrice = document.getElementsByClassName('calc-price')[0],
        sizeSum = 0,
        materialSum = 0,
        optionsSum = 0,
        total = 0,
        promocodeSum = 1;

    sizeCalc.addEventListener('change', () => {
        sizeSum = Number(sizeCalc.value);
        if (sizeSum != 0 && materialSum != 0) {
            total = (sizeSum + materialSum + optionsSum) * promocodeSum;
            calcPrice.innerHTML = total;
        } else {
            calcPrice.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
        };
    });

    material.addEventListener('change', () => {
        materialSum = Number(material.value);
        if (sizeSum != 0 && materialSum != 0) {
            total = (sizeSum + materialSum + optionsSum) * promocodeSum;
            calcPrice.innerHTML = total;
        } else {
            calcPrice.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
        };
    });

    optionsCalc.addEventListener('change', () => {
        optionsSum = Number(optionsCalc.value);
        if (sizeSum != 0 && materialSum != 0) {
            total = (sizeSum + materialSum + optionsSum) * promocodeSum;
            calcPrice.innerHTML = total;
        };
    });

    promocode.addEventListener('change', () => {
        if (promocode.value == 'IWANTPOPART' && sizeSum != 0 && materialSum != 0) {
            promocodeSum = 0.7;
            total = (sizeSum + materialSum + optionsSum) * promocodeSum;
            calcPrice.innerHTML = total;
        } else {
            promocodeSum = 1;
            total = (sizeSum + materialSum + optionsSum) * promocodeSum;
            calcPrice.innerHTML = total;

        };
    });

}

module.exports = calc;