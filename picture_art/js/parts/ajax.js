function ajax() {

    let message = new Object();
    message.loading = 'Загрузка...';
    message.success = 'Спасибо! Скоро мы с вами свяжемся';
    message.failure = 'Что-то пошло не так...';

    let form1 = document.getElementsByClassName('main-form')[0],
        form2 = document.getElementsByClassName('main-form')[1],
        form3 = document.getElementsByClassName('mainForm')[0],
        input1 = document.querySelectorAll('.inputConsulation'),
        input2 = document.querySelectorAll('.inputDesign'),
        input3 = document.querySelectorAll('.inputConsult'),
        mes = document.querySelectorAll('.message'),
        name = document.querySelectorAll('.name'),
        statusMessage = document.createElement('div');
    statusMessage.classList.add('status');


    function formFunction1(form, input) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php')

            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            let formData = new FormData(form);

            request.send(formData);

            request.onreadystatechange = function() {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                    for (i = 0; i < input.length; i++) {
                        input[i].style.display = 'none';
                    };
                } else if (request.readyState === 4) {
                    if (request.status == 200 && request.status < 300) {
                        statusMessage.innerHTML = message.success;

                    } else {
                        statusMessage.innerHTML = message.failure;
                        for (i = 0; i < input.length; i++) {
                            input[i].style.display = 'none';
                        };
                    };
                };
            }
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            };
        });
    };

    formFunction1(form1, input1);

    formFunction1(form2, input2);

    function formFunction2(form, input) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php')

            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            let formData = new FormData(form);

            request.send(formData);

            request.onreadystatechange = function() {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4) {
                    if (request.status == 200 && request.status < 300) {
                        statusMessage.innerHTML = message.success;
                    } else {
                        statusMessage.innerHTML = message.failure;
                    };
                };
            }
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            };
        });
    };

    formFunction2(form3, input3);
}

module.exports = ajax;