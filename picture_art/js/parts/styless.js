function styless() {
    let stylesBtn = document.getElementsByClassName('button-styles')[0],
        styles2 = document.querySelectorAll('.styles-2');

    stylesBtn.addEventListener('click', () => {
        for (i = 0; i < styles2.length; i++) {
            styles2[i].classList.remove('hidden-lg');
            styles2[i].classList.remove('hidden-md');
            styles2[i].classList.remove('hidden-sm');
            styles2[i].classList.remove('hidden-xs');
            styles2[i].classList.add('col-sm-3');
            styles2[i].classList.add('col-sm-offset-0');
            styles2[i].classList.add('col-xs-10');
            styles2[i].classList.add('col-xs-offset-1');

        }
        stylesBtn.style.display = 'none';
    });

}

module.exports = styless;