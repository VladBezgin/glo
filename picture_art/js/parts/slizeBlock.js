function slizeBlock() {
    let slize1 = document.querySelector('.slize-1'),
        slize2 = document.querySelector('.slize-2'),
        slize3 = document.querySelector('.slize-3'),
        slize4 = document.querySelector('.slize-4'),
        slizesBlock = document.querySelectorAll('.sizes-block'),
        size = document.querySelectorAll('.size'),
        startingPrice = document.querySelectorAll('.starting-price'),
        finalPrice = document.querySelectorAll('.final-price');

    slizesBlock[0].addEventListener('mouseenter', () => {
        slize1.src = 'img/sizes-1-1.png';
        size[0] = size[0].innerHTML = '';
        startingPrice[0] = startingPrice[0].innerHTML = '';
        finalPrice[0] = finalPrice[0].innerHTML = '';

    });
    slizesBlock[0].addEventListener('mouseleave', () => {
        slize1.src = 'img/sizes-1.png';
        size[0] = size[0].innerHTML = '40x50';
        startingPrice[0] = startingPrice[0].innerHTML = '5 290 руб.';
        finalPrice[0] = finalPrice[0].innerHTML = '3 670 руб.';
    });

    slizesBlock[1].addEventListener('mouseenter', () => {
        slize2.src = 'img/sizes-2-1.png';
        size[1] = size[1].innerHTML = '';
        startingPrice[1] = startingPrice[1].innerHTML = '';
        finalPrice[1] = finalPrice[1].innerHTML = '';

    });
    slizesBlock[1].addEventListener('mouseleave', () => {
        slize2.src = 'img/sizes-2.png';
        size[1] = size[1].innerHTML = '50x70';
        startingPrice[1] = startingPrice[1].innerHTML = '5 290 руб.';
        finalPrice[1] = finalPrice[1].innerHTML = '3 670 руб.';
    });
    slizesBlock[2].addEventListener('mouseenter', () => {
        slize3.src = 'img/sizes-3-1.png';
        size[2] = size[2].innerHTML = '';
        startingPrice[2] = startingPrice[2].innerHTML = '';
        finalPrice[2] = finalPrice[2].innerHTML = '';

    });
    slizesBlock[2].addEventListener('mouseleave', () => {
        slize3.src = 'img/sizes-3.png';
        size[2] = size[2].innerHTML = '70x70';
        startingPrice[2] = startingPrice[2].innerHTML = '5 290 руб.';
        finalPrice[2] = finalPrice[2].innerHTML = '3 670 руб.';
    });
    slizesBlock[3].addEventListener('mouseenter', () => {
        slize4.src = 'img/sizes-4-1.png';
        size[3] = size[3].innerHTML = '';
        startingPrice[3] = startingPrice[3].innerHTML = '';
        finalPrice[3] = finalPrice[3].innerHTML = '';

    });
    slizesBlock[3].addEventListener('mouseleave', () => {
        slize4.src = 'img/sizes-4.png';
        size[3] = size[3].innerHTML = '70x100';
        startingPrice[3] = startingPrice[3].innerHTML = '5 290 руб.';
        finalPrice[3] = finalPrice[3].innerHTML = '3 670 руб.';
    });
}

module.exports = slizeBlock;