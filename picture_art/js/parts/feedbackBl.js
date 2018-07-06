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