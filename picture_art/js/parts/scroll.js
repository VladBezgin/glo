function scroll() {

    let buttons = document.querySelectorAll('.button'),
        close0 = document.getElementsByClassName('popup-close')[0],
        close1 = document.getElementsByClassName('popup-close')[1],
        fixedBtn = document.getElementsByClassName('fixed-gift')[0],
        popupDialog1 = document.getElementsByClassName('popup-dialog')[1],
        popupGift = document.getElementsByClassName('popup-gift')[0],
        isMouseLeft1 = true,
        a = true;

    function btnFalse() {
        for (i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                a = false;
            });
        };
        close0.addEventListener('click', () => {
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
                };
            });

            close0.addEventListener('click', function() {
                popupGift.style.display = 'none';
                document.body.style.overflow = '';
            });

            return
        } else if (document.documentElement.scrollHeight != document.documentElement.clientHeight + document.documentElement.scrollTop && a) {
            setTimeout(scrolling, 1);
        } else {
            return
        };

    };

    scrolling();

}

module.exports = scroll;