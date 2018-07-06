function consultTimer() {
    let close0 = document.getElementsByClassName('popup-close')[0],
        popupDialog0 = document.getElementsByClassName('popup-dialog')[0],
        popupConsult = document.getElementsByClassName('popup-consultation')[0],
        popupGift = document.getElementsByClassName('popup-gift')[0],
        popupDesign = document.getElementsByClassName('popup-design')[0],
        isMouseLeft0 = true;
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