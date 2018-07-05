function filters() {
    let lovers = document.querySelectorAll('.lovers'),
        chef = document.querySelectorAll('.chef'),
        girl = document.querySelectorAll('.girl'),
        guy = document.querySelectorAll('.guy'),
        grandmother = document.getElementsByClassName('grandmother')[0],
        granddad = document.getElementsByClassName('granddad')[0],
        all = document.querySelectorAll('.all'),
        portfolioNo = document.getElementsByClassName('portfolio-no')[0];

    function filter(e) {
        e[0].addEventListener('click', () => {
            lovers[0].classList.remove('active');
            chef[0].classList.remove('active');
            girl[0].classList.remove('active');
            guy[0].classList.remove('active');
            grandmother.classList.remove('active');
            granddad.classList.remove('active');
            all[0].classList.remove('active');
            e[0].classList.add('active');
            portfolioNo.style.display = 'none';

            for (i = 1; i < all.length; i++) {
                all[i].style.display = 'none';
            };
            for (i = 1; i < e.length; i++) {
                e[i].style.display = 'block';
            };

        });
    };

    filter(lovers);
    filter(chef);
    filter(girl);
    filter(guy);
    filter(all);

    function portNo(e) {
        e.addEventListener('click', () => {
            lovers[0].classList.remove('active');
            chef[0].classList.remove('active');
            girl[0].classList.remove('active');
            guy[0].classList.remove('active');
            grandmother.classList.remove('active');
            granddad.classList.remove('active');
            all[0].classList.remove('active');
            e.classList.add('active');
            for (i = 1; i < all.length; i++) {
                all[i].style.display = 'none';
            };

            portfolioNo.style.display = 'block';
        });
    };

    portNo(granddad);
    portNo(grandmother);
}

module.exports = filters;