import {closeModal, openModal} from "./modal";
import {postData} from "../services/cervices";


function forms(formSelector, modalTimerId) {
    //                                      Forms


    const forms = document.querySelectorAll(formSelector);


    const message = {
        loading: 'img/form/spinner.svg',       // что бы использовать изображения в js нужно просто написать путь к нему
        success: 'Спасибо! Мы с Вами скоро свяжемся',
        failure: 'Что-то пошло не так...'
    };


    forms.forEach(item => {
        bindPostData(item);
    });



    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();                 // отменяем перезагрузку страницы, при отправке формы


            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage); //добавляем спиннер под формой,
                                                                                //чтобы он не сдвигал верстку


            // объект FormData - автоматически формирует объект из формы, которую мы передали в скобочках
            const formData = new FormData(form);  // formData - это специальный объект, он имеет метод ForEach
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            // .entries() - формирует из объектов матрицу с данными
            // метод fromEntries конвертирует из матрицы обратно в объект


            // когда мы используем связку XMLHttpRequest + FormData - заголовок устанавливать не нужно,
            // он устанавливается автоматически


            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();


                })
                .catch(() => showThanksModal(message.failure))
                .finally(() => form.reset());   // Чтобы инпуты работали корректно, обязательно в верстке
        });                                     // у каждого инпута должен быть задан атрибут name
    }


    function showThanksModal (message) {
        const prevModalDialog = document.querySelector('.modal__dialog');


        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);


        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content fade">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;


        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }
}


export default forms;