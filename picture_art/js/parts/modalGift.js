function modalGift() {
    let fixedBtn = document.getElementsByClassName('fixed-gift')[0],
        close1 = document.getElementsByClassName('popup-close')[1],
        popupDialog1 = document.getElementsByClassName('popup-dialog')[1],
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