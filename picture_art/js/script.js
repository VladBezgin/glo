let slideIndex = 1,
    slides = document.getElementsByClassName('main-slider-item');

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 0;
    };
    if (n < 1) {
        slideIndex = slides.length - 1;
    };

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    };
    slides[slideIndex - 1].style.display = 'block';
}



function autoSlider() {

    function sliderDown(n) {
        if (n == 1) {
            showSlides(slideIndex = 0);
        } else {
            showSlides(slideIndex = 1);
        };

    }

    sliderDown(1)

    let timeInterval = setInterval(sliderDown, 3000);
}

autoSlider()

let designBtn = document.querySelectorAll('.button-design'),
    close2 = document.getElementsByClassName('popup-close')[2],
    popupDialog2 = document.getElementsByClassName('popup-dialog')[2],
    popupDesign = document.getElementsByClassName('popup-design')[0],
    isMouseLeft2 = true;

function mdalOpenDesign(btn) {

    popupDialog2.addEventListener('mouseenter', () => isMouseLeft2 = false);
    popupDialog2.addEventListener('mouseleave', () => isMouseLeft2 = true);

    btn.addEventListener('click', () => {
        popupDesign.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });


    popupDesign.addEventListener('click', () => {
        if (isMouseLeft2) {
            popupDesign.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    close2.addEventListener('click', function() {
        popupDesign.style.display = 'none';
        document.body.style.overflow = '';
    });



}
for (n = 0; n < designBtn.length; n++) {
    mdalOpenDesign(designBtn[n]);
};



let consultBtn = document.querySelectorAll('.button-consultation'),
    close0 = document.getElementsByClassName('popup-close')[0],
    popupDialog0 = document.getElementsByClassName('popup-dialog')[0],
    popupConsult = document.getElementsByClassName('popup-consultation')[0],
    isMouseLeft0 = true;

function mdalOpenConsult(btn) {

    popupDialog0.addEventListener('mouseenter', () => isMouseLeft0 = false);
    popupDialog0.addEventListener('mouseleave', () => isMouseLeft0 = true);

    btn.addEventListener('click', () => {
        popupConsult.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });


    popupConsult.addEventListener('click', () => {
        if (isMouseLeft0) {
            popupConsult.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    close0.addEventListener('click', function() {
        popupConsult.style.display = 'none';
        document.body.style.overflow = '';
    });



}
for (n = 0; n < consultBtn.length; n++) {
    mdalOpenConsult(consultBtn[n]);
};




let fixedBtn = document.getElementsByClassName('fixed-gift')[0],
    close1 = document.getElementsByClassName('popup-close')[0],
    popupDialog1 = document.getElementsByClassName('popup-dialog')[0],
    popupGift = document.getElementsByClassName('popup-gift')[0],
    isMouseLeft1 = true;

function mdalOpenGift(btn) {

    popupDialog1.addEventListener('mouseenter', () => isMouseLeft1 = false);
    popupDialog1.addEventListener('mouseleave', () => isMouseLeft1 = true);

    btn.addEventListener('click', () => {
        popupGift.style.display = 'block';
        btn.style.display = 'none';
        document.body.style.overflow = 'hidden';
    });


    popupGift.addEventListener('click', () => {
        if (isMouseLeft1) {
            popupGift.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    close1.addEventListener('click', function() {
        popupGift.style.display = 'none';
        document.body.style.overflow = '';
    });



}

mdalOpenGift(fixedBtn);



let stylesBtn = document.getElementsByClassName('button-styles')[0],
    styles2 = document.querySelectorAll('.styles-2');

stylesBtn.addEventListener('click', () => {
    for (i = 0; i < styles2.length; i++) {
        styles2[i].classList.remove('hidden-lg');
        styles2[i].classList.remove('hidden-md');
        styles2[i].classList.remove('hidden-sm');
        styles2[i].classList.remove('hidden-xs');
        styles2[i].classList.add('col-sm-3');
        styles2[i].classList.add('col-sm-offset-0');
        styles2[i].classList.add('col-xs-10');
        styles2[i].classList.add('col-xs-offset-1');

    }
    stylesBtn.style.display = 'none';
});



let lovers = document.querySelectorAll('.lovers'),
    chef = document.querySelectorAll('.chef'),
    girl = document.querySelectorAll('.girl'),
    guy = document.querySelectorAll('.guy'),
    grandmother = document.getElementsByClassName('grandmother')[0],
    granddad = document.getElementsByClassName('granddad')[0],
    all = document.querySelectorAll('.all'),
    portfolioNo = document.getElementsByClassName('portfolio-no')[0];

function filter(e) {
    e[0].addEventListener('click', () => {
        lovers[0].classList.remove('active');
        chef[0].classList.remove('active');
        girl[0].classList.remove('active');
        guy[0].classList.remove('active');
        grandmother.classList.remove('active');
        granddad.classList.remove('active');
        all[0].classList.remove('active');
        e[0].classList.add('active');
        portfolioNo.style.display = 'none';

        for (i = 1; i < all.length; i++) {
            all[i].style.display = 'none';
        };
        for (i = 1; i < e.length; i++) {
            e[i].style.display = 'block';
        };

    });
};

filter(lovers);
filter(chef);
filter(girl);
filter(guy);
filter(all);

function portNo(e) {
    e.addEventListener('click', () => {
        lovers[0].classList.remove('active');
        chef[0].classList.remove('active');
        girl[0].classList.remove('active');
        guy[0].classList.remove('active');
        grandmother.classList.remove('active');
        granddad.classList.remove('active');
        all[0].classList.remove('active');
        e.classList.add('active');
        for (i = 1; i < all.length; i++) {
            all[i].style.display = 'none';
        };

        portfolioNo.style.display = 'block';
    });
};

portNo(granddad);
portNo(grandmother);

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



function consultTime() {
    
        


if (popupDesign.style.display != 'block' && popupGift.style.display != 'block') {
        popupConsult.style.display = 'block';
        document.body.style.overflow = 'hidden';
};


        popupDialog0.addEventListener('mouseenter', () => isMouseLeft0 = false);
        popupDialog0.addEventListener('mouseleave', () => isMouseLeft0 = true);

        popupConsult.addEventListener('click', () => {
            if (isMouseLeft0) {
                popupConsult.style.display = 'none';
                document.body.style.overflow = '';
            }
        });

        close0.addEventListener('click', function() {
            popupConsult.style.display = 'none';
            document.body.style.overflow = '';
        });
    
};

setTimeout(consultTime, 6000);


let accordionBlock = document.querySelectorAll('.accordion-block'),
    accordionHeading = document.querySelectorAll('.accordion-heading');

for (i = 0; i < accordionBlock.length; i++) {
            accordionBlock[i].style.display = 'none';
        };

function accordion(e1, e2, num) {
    e1[num].addEventListener('click', () => {
    	for(i = 0; i < e1.length; i++) {
    		e1[i].classList.remove('ui-accordion-header-active');
    	};
        for (i = 0; i < e2.length; i++) {
            e2[i].style.display = 'none';
        };
        e2[num].style.display = 'block';
        e1[num].classList.add('ui-accordion-header-active')
    });
};

accordion(accordionHeading, accordionBlock, 0);
accordion(accordionHeading, accordionBlock, 1);
accordion(accordionHeading, accordionBlock, 2);
accordion(accordionHeading, accordionBlock, 3);
