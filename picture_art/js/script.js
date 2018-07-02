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
    popupGift = document.getElementsByClassName('popup-consultation')[0],
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
	for(i = 0; i < styles2.length; i++){
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

			for(i = 1; i < all.length; i++) {
				all[i].style.display = 'none';
			};
			for(i = 1; i < e.length; i++) {
				e[i].style.display = 'block';
			};

		}) ;
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
			for(i = 1; i < all.length; i++) {
				all[i].style.display = 'none';
			};

			portfolioNo.style.display = 'block';
		});
	};

	portNo(granddad);
	portNo(grandmother);

