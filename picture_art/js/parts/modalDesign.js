function modalDesign() {
    let designBtn = document.querySelectorAll('.button-design'),
                close2 = document.getElementsByClassName('popup-close')[2],
                popupDialog2 = document.getElementsByClassName('popup-dialog')[2],
                popupDesign = document.getElementsByClassName('popup-design')[0],
                isMouseLeft2 = true,
                inputDesign = document.querySelectorAll('.inputDesign'),
                inputConsulation = document.querySelector('.inputConsulation'),
                inputConsult = document.querySelectorAll('.inputConsult');

function rusInput(input) {
input.addEventListener('input', function(e) {
  let res = /[^а-яёЪА-ЯЁЪ]/g.exec(this.value);
  this.value = this.value.replace(res, '');
});
};

rusInput(inputDesign[0]);
rusInput(inputDesign[3]);
rusInput(inputConsulation[0]);
rusInput(inputConsult[0]);
rusInput(inputConsult[3]);



    function mdalOpenDesign(btn) {

        popupDialog2.addEventListener('mouseenter', () => isMouseLeft2 = false);
        popupDialog2.addEventListener('mouseleave', () => isMouseLeft2 = true);

        btn.addEventListener('click', () => {
            popupDesign.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });


        popupDesign.addEventListener('click', () => {
            if (isMouseLeft2) {
                popupDesign.style.display = 'none';
                document.body.style.overflow = '';
            }
        });

        close2.addEventListener('click', function() {
            popupDesign.style.display = 'none';
            document.body.style.overflow = '';
        });



    }
    for (n = 0; n < designBtn.length; n++) {
        mdalOpenDesign(designBtn[n]);
    };
}

module.exports = modalDesign;