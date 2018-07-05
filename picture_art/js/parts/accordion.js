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