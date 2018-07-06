(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let modalConsult = require('../parts/modalConsult.js');
let modalDesign = require('../parts/modalDesign.js');
let sliderImg = require('../parts/sliderImg.js');
let modalGift = require('../parts/modalGift.js');
let styless = require('../parts/styless.js');
let filters = require('../parts/filters.js');
let slizeBlock = require('../parts/slizeBlock.js');
let consultTimer = require('../parts/consultTimer.js');
let accordion = require('../parts/accordion.js');
let feedbackBl = require('../parts/feedbackBl.js');
let scroll = require('../parts/scroll.js');
let calc = require('../parts/calc.js');
let burgerM = require('../parts/burgerM.js');
let ajax = require('../parts/ajax.js');

modalConsult();
modalDesign();
sliderImg();
modalGift();
styless();
filters();
slizeBlock();
consultTimer();
accordion();
feedbackBl();
scroll();
calc();
burgerM();
ajax();
},{"../parts/accordion.js":2,"../parts/ajax.js":3,"../parts/burgerM.js":4,"../parts/calc.js":5,"../parts/consultTimer.js":6,"../parts/feedbackBl.js":7,"../parts/filters.js":8,"../parts/modalConsult.js":9,"../parts/modalDesign.js":10,"../parts/modalGift.js":11,"../parts/scroll.js":12,"../parts/sliderImg.js":13,"../parts/slizeBlock.js":14,"../parts/styless.js":15}],2:[function(require,module,exports){
function accordion() {
    let accordionBlock = document.querySelectorAll('.accordion-block'),
        accordionHeading = document.querySelectorAll('.accordion-heading');

    for (i = 0; i < accordionBlock.length; i++) {
        accordionBlock[i].style.display = 'none';
    };

    function accordion(e1, e2, num) {
        e1[num].addEventListener('click', () => {
            for (i = 0; i < e1.length; i++) {
                e1[i].classList.remove('ui-accordion-header-active');
                e2[i].classList = 'col-md-8 col-md-offset-2 accordion-block';
                
            };
            for (i = 0; i < e2.length; i++) {
                e2[i].style.display = 'none';
            };
            e2[num].style.display = 'block';
            e2[num].classList = 'col-md-8 col-md-offset-2 accordion-block animated fadeInDown';
            e1[num].classList.add('ui-accordion-header-active');

        });
    };

    accordion(accordionHeading, accordionBlock, 0);
    accordion(accordionHeading, accordionBlock, 1);
    accordion(accordionHeading, accordionBlock, 2);
    accordion(accordionHeading, accordionBlock, 3);

}

module.exports = accordion;
},{}],3:[function(require,module,exports){
function ajax() {

    let message = new Object();
    message.loading = 'Загрузка...';
    message.success = 'Спасибо! Скоро мы с вами свяжемся';
    message.failure = 'Что-то пошло не так...';

    let form1 = document.getElementsByClassName('main-form')[0],
        form2 = document.getElementsByClassName('main-form')[1],
        form3 = document.getElementsByClassName('mainForm')[0],
        input1 = document.querySelectorAll('.inputConsulation'),
        input2 = document.querySelectorAll('.inputDesign'),
        input3 = document.querySelectorAll('.inputConsult'),
        mes = document.querySelectorAll('.message'),
        name = document.querySelectorAll('.name'),
        statusMessage = document.createElement('div');
    statusMessage.classList.add('status');


    function formFunction1(form, input) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php')

            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            let formData = new FormData(form);

            request.send(formData);

            request.onreadystatechange = function() {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                    for (i = 0; i < input.length; i++) {
                        input[i].style.display = 'none';
                    };
                } else if (request.readyState === 4) {
                    if (request.status == 200 && request.status < 300) {
                        statusMessage.innerHTML = message.success;

                    } else {
                        statusMessage.innerHTML = message.failure;
                        for (i = 0; i < input.length; i++) {
                            input[i].style.display = 'none';
                        };
                    };
                };
            }
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            };
        });
    };

    formFunction1(form1, input1);

    formFunction1(form2, input2);

    function formFunction2(form, input) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php')

            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            let formData = new FormData(form);

            request.send(formData);

            request.onreadystatechange = function() {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4) {
                    if (request.status == 200 && request.status < 300) {
                        statusMessage.innerHTML = message.success;
                    } else {
                        statusMessage.innerHTML = message.failure;
                    };
                };
            }
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            };
        });
    };

    formFunction2(form3, input3);
}

module.exports = ajax;
},{}],4:[function(require,module,exports){
function burgerM() {
    let burger = document.getElementsByClassName('burger')[0],
        burgerMenu = document.getElementsByClassName('burger-menu')[0];
    burger.addEventListener('touchend', () => {
        if (document.documentElement.offsetWidth <= 768) {
            burgerMenu.style.display = 'block';
        };
    });


    function widthChange() {
        if (document.documentElement.offsetWidth > 768) {
            burgerMenu.style.display = 'none';
        };
    };
    setInterval(widthChange, 1);
}

module.exports = burgerM;
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
function consultTimer() {
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

    setTimeout(consultTime, 60000);
}

module.exports = consultTimer;
},{}],7:[function(require,module,exports){
function feedbackBl() {
    let feedbackSlider = document.querySelectorAll('.feedback-slider-item'),
        prev = document.getElementsByClassName('main-prev-btn')[0],
        slideIndex = 1,
        next = document.getElementsByClassName('main-next-btn')[0];


    for (i = 1; i < 3; i++) {
        feedbackSlider[i].style.display = 'none';
    };

    function showSlides(n) {
        if (n > feedbackSlider.length) {
            slideIndex = 1
        };
        if (n < 1) {
            slideIndex = feedbackSlider.length;
        };

        for (let i = 0; i < feedbackSlider.length; i++) {
            feedbackSlider[i].style.display = 'none';
        };

        feedbackSlider[slideIndex - 1].style.display = 'block';


    }

    function plusSliders(n) {
        showSlides(slideIndex += n);
        if (slideIndex < 4) {
            for (i = 0; i < 3; i++) {
                feedbackSlider[i].style.display = 'none';
                feedbackSlider[i].classList = 'feedback-slider-item';
            };

            feedbackSlider[slideIndex - 1].style.display = 'block';
            feedbackSlider[slideIndex - 1].classList = 'feedback-slider-item animated fadeInLeft';
        }
    }

    prev.addEventListener('click', function() {
        plusSliders(-1);
    })

    next.addEventListener('click', function() {
        plusSliders(1);
    })

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }


    function nextSlide() {
        if (slideIndex < 4) {
            for (i = 0; i < 3; i++) {
                feedbackSlider[i].style.display = 'none';
                feedbackSlider[i].classList = 'feedback-slider-item';
            };

            feedbackSlider[slideIndex - 1].style.display = 'block';
            feedbackSlider[slideIndex - 1].classList = 'feedback-slider-item animated fadeInLeft';

            slideIndex += 1;
        } else {
            slideIndex = 1;
        };

        setTimeout(nextSlide, 7000);

    };

    nextSlide();
}

module.exports = feedbackBl;
},{}],8:[function(require,module,exports){
function filters() {
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
}

module.exports = filters;
},{}],9:[function(require,module,exports){
function modalConsult() {
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

        close0.addEventListener('click', () => {
            popupConsult.style.display = 'none';
            document.body.style.overflow = '';
        });



    }
    for (n = 0; n < consultBtn.length; n++) {
        mdalOpenConsult(consultBtn[n]);
    };
}

module.exports = modalConsult;
},{}],10:[function(require,module,exports){
function modalDesign() {
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
}

module.exports = modalDesign;
},{}],11:[function(require,module,exports){
function modalGift() {
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
}

module.exports = modalGift;
},{}],12:[function(require,module,exports){
function scroll() {

    let buttons = document.querySelectorAll('.button'),
        close1 = document.getElementsByClassName('popup-close')[0],
        fixedBtn = document.getElementsByClassName('fixed-gift')[0],
        popupDialog1 = document.getElementsByClassName('popup-dialog')[0],
        popupGift = document.getElementsByClassName('popup-gift')[0],
        isMouseLeft1 = true;
        a = true;

    function btnFalse() {
        for (i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                a = false;
            });
        };
        close1.addEventListener('click', () => {
            a = false;
        });
        fixedBtn.addEventListener('click', () => {
            a = false;
        });

    };

    btnFalse();

    function scrolling() {

        if (document.documentElement.scrollHeight == document.documentElement.clientHeight + document.documentElement.scrollTop && a) {
            popupDialog1.addEventListener('mouseenter', () => isMouseLeft1 = false);
            popupDialog1.addEventListener('mouseleave', () => isMouseLeft1 = true);


            popupGift.style.display = 'block';
            fixedBtn.style.display = 'none';
            document.body.style.overflow = 'hidden';



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

            return
        } else if (document.documentElement.scrollHeight != document.documentElement.clientHeight + document.documentElement.scrollTop && a) {
            setTimeout(scrolling, 1);
        } else {
            return
        }

    };

    scrolling();

}

module.exports = scroll;
},{}],13:[function(require,module,exports){
function sliderImg() {
    let index = 0,
        slides = document.getElementsByClassName('main-slider-item');

    slides[1].style.display = 'none';

    function nextImg() {
        if (index < 2) {
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
                slides[i].classList = 'main-slider-item';
            };
            slides[index].style.display = 'block';
            slides[index].classList = 'main-slider-item animated fadeInDown';

            index += 1;

        } else {
            index = 0;
        };
        setTimeout(nextImg, 5000);
    };

    nextImg();

}

module.exports = sliderImg;
},{}],14:[function(require,module,exports){
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
},{}],15:[function(require,module,exports){
function styless() {
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

}

module.exports = styless;
},{}]},{},[1]);
