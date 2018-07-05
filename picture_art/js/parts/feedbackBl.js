function feedbackBl() {
    let feedbackBlock = document.querySelectorAll('.feedback-block'),
        feedbackHeading = document.querySelectorAll('.feedback-heading'),
        feedbackText = document.querySelectorAll('.feedback-text'),
        feedbackSignature = document.querySelectorAll('.feedback-signature'),
        prev = document.getElementsByClassName('main-prev-btn')[0],
        slideIndex = 1,
        next = document.getElementsByClassName('main-next-btn')[0];


    for (i = 1; i < 3; i++) {
        feedbackSignature[i].style.display = 'none';
        feedbackText[i].style.display = 'none';
        feedbackHeading[i].style.display = 'none';
        feedbackBlock[i].style.display = 'none';
    };

    function showSlides(n) {
        if (n > feedbackSignature.length) {
            slideIndex = 1
        };
        if (n < 1) {
            slideIndex = feedbackSignature.length;
        };

        for (let i = 0; i < feedbackSignature.length; i++) {
            feedbackSignature[i].style.display = 'none';
            feedbackText[i].style.display = 'none';
            feedbackHeading[i].style.display = 'none';
            feedbackBlock[i].style.display = 'none';

        };

        feedbackBlock[slideIndex - 1].style.display = 'block';
        feedbackSignature[slideIndex - 1].style.display = 'block';
        feedbackHeading[slideIndex - 1].style.display = 'block';
        feedbackText[slideIndex - 1].style.display = 'block';


    }

    function plusSliders(n) {
        showSlides(slideIndex += n);
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
                feedbackSignature[i].style.display = 'none';
                feedbackText[i].style.display = 'none';
                feedbackHeading[i].style.display = 'none';
                feedbackBlock[i].style.display = 'none';
                feedbackBlock[i].classList = 'feedback-block';
                feedbackSignature[i].classList = 'feedback-signature';
                feedbackHeading[i].classList = 'feedback-heading';
                feedbackText[i].classList = 'feedback-text';
            };

            feedbackBlock[slideIndex - 1].style.display = 'block';
            feedbackSignature[slideIndex - 1].style.display = 'block';
            feedbackHeading[slideIndex - 1].style.display = 'block';
            feedbackText[slideIndex - 1].style.display = 'block';
            feedbackBlock[slideIndex - 1].classList = 'feedback-block animated fadeInLeft';
            feedbackSignature[slideIndex - 1].classList = 'feedback-signature animated fadeInLeft';
            feedbackHeading[slideIndex - 1].classList = 'feedback-heading animated fadeInLeft';
            feedbackText[slideIndex - 1].classList = 'feedback-text animated fadeInLeft';

            slideIndex += 1;
        } else {
            slideIndex = 1;
        };

        setTimeout(nextSlide, 7000);

    };

    nextSlide();
}

module.exports = feedbackBl;