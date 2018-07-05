function burgerM() {
    let burger = document.getElementsByClassName('burger')[0],
        burgerMenu = document.getElementsByClassName('burger-menu')[0];
    burger.addEventListener('touchend', () => {
        if (document.documentElement.offsetWidth <= 768) {
            burgerMenu.style.display = 'block';
        };
    });


    function widthChange() {
        if (document.documentElement.offsetWidth > 768) {
            burgerMenu.style.display = 'none';
        };
    };
    setInterval(widthChange, 1);
}

module.exports = burgerM;