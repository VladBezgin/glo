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