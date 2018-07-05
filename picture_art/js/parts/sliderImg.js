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