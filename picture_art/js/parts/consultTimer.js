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