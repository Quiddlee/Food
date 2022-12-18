window.addEventListener('DOMContentLoaded', () => {


    //                                     Tabs


    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');


    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });


        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }


    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();
    

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;


        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((element, i) => {
                if (target === element) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    //                                      Timer


    const now = Date.parse(new Date()) * 1.000361946;
    const deadLine = new Date(now);


    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const total = Date.parse(endtime) - Date.parse(new Date()); //вычисляем разницу между дедлайном и датой пользователя


        if (total <= 0) {        //если к нам приходят отрицательные значения, заменяем всё нулями
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        }


        if (total > 0) {
            days = Math.floor(total / (1000 * 60 * 60 * 24));     //1000 - кол-во миллисекунд в одной секунде
            hours = Math.floor((total / (1000 * 60 * 60) % 24));
            minutes = Math.floor((total / 1000 / 60) % 60);
            seconds = Math.floor((total / 1000) % 60);
        }
        

        return {
            'total': total,      //есть возможность записать такой объект короче, вместо 'ключ: значение'
            'days': days,        //использовать просто названия переменных - {total, days, hours, minutes, seconds}
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }


    function getZero(num) {                     
        if (num >= 0 && num >= 10) {return num;}
        if (num >= 0 && num < 10) {return `0${num}`;}   //добавляем нолик, если число меньше 10
    }
    

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);    //устанавливем таймеру интервал, чтобы он обновлялся каждую секунду
        updateClock();           //вызываем функцию, чтобы при обновлении страницы, таймер не прыгал


        function updateClock() {                            //мы прописали фнукцию внутри вышестоящей фнукции, чтобы использовать один и тот же параметр endtime, + используем уже полученые элементы со страницы (days, houre, etc)
            const timerData = getTimeRemaining(endtime);    //мы получаем из функции getTimeRemainig() объект с кол-вом миллисикунд в часах, минутах и секундах


            days.innerHTML = getZero(timerData.days);                
            hours.innerHTML = getZero(timerData.hours);     //через точечную запись обращаемся к значениям возвращаемого объекта 
            minutes.innerHTML = getZero(timerData.minutes);
            seconds.innerHTML = getZero(timerData.seconds);
            

            if (timerData.total <= 0) {clearInterval(timeInterval);}  //как только таймер дойдет до 0 мы его останавливаем 
        }
    }
    setClock('.timer', deadLine);


    //                                      Modals


    const modalBtns = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');


    function openModal () {
        modal.classList.add('show');
        modal.classList.add('fade');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';            //убираем возможность скролла страницы, когда модальное окно открыто
        clearInterval(modalTimerId);
        window.removeEventListener('scroll', showModalByScroll);
    } 
    

    modalBtns.forEach(element => {
        element.addEventListener('click', openModal);       //когда вставляем call back функцию, скобочки не ставим
    });


    function closeModal () {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';       //чтобы вернуть деффолтное значение, можно оставить просто кавычки, браузер сам установит нужное значение
    }


    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute('data-close') === '') {closeModal();} 
    });


    document.addEventListener('keydown', (event) => {       //скрываем модальное окно по нажатию клавиши ESC
        if (event.code === 'Escape' && modal.classList.contains('show')) {closeModal();}
    });


    const modalTimerId = setTimeout(openModal, 30000);      //открываем модальное окно, после 30 секунд, как пользователь зашёл на сайт


    function showModalByScroll () {                                                                                   //мы складываем прокрутку и котент, который видит пользователь, если эти значения совпадают с полной высотой страницы - то пользователь долистал до конца
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) { //ставим -1px для уверености, чтобы скрипт отработал на 1 пиксель раньше и не бажил
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }


    window.addEventListener('scroll', showModalByScroll);    //есть ещё возможность задать настройка обработчику событий: .addeventlistener('click', () => {

    //                                                                                                                     },{once: true});         //тоесть обработчик сработает только один раз
    //                          Используем классы для карточек

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }


        changeToUAH() {
            this.price = this.price * this.transfer;
        }


        render() {
            const element = document.createElement('div');  //установили деффолтное значение рест опреатору
            

            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            }
            

            if (this.classes.length > 0) {
                this.classes.forEach(className => element.classList.add(className));
            }


            element.innerHTML = `   
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>      
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;                                                                              //создаём такуюже верстку, но с динамическими значениями
            this.parent.append(element);
        }
    }


    new MenuCard(
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
        'menu__item',
        'big'
    ).render();                     //можем создать объект в таком виде, если он используется только один раз


    new MenuCard(
        'img/tabs/elite.jpg',
        'elite',
        'Меню "Премиум"',
        'меню "Премиум" мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        '.menu .container',
        'menu__item'
    ).render();


    new MenuCard(
        'img/tabs/post.jpg',
        'post',
        'Меню "Постное"',
        'Меню "Постное" - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.!',
        21,
        '.menu .container',
        'menu__item'
    ).render();


    //                                      Forms


    const forms = document.querySelectorAll('form');


    const message = {
        loading: 'img/form/spinner.svg',            // что бы использовать изображения в js нужно просто написать путь к нему
        success: 'Спасибо! Мы с Вами скоро свяжемся',
        failure: 'Что-то пошло не так...'
    };


    forms.forEach(item => {
        postData(item);
    });


    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();                 // отменяем перезагрузку страницы, при отправке формы


            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage); //добавляем спиннер под формой, чтобы он не сдвигал верстку
            

            const formData = new FormData(form);   // объект FormData - автоматически формирует объект из формы, которую мы передали в скобочках                                                                 //когда мы используем связку XMLHttpRequest + FormData - заголовок устанавливать не нужно, он устанавливается автоматически
            const object = {};
            formData.forEach((value, key) => { // formData - это специальный объект, он имеет метод ForEach 
                object[key] = value;
            });


            fetch('serve1r.php', {          // у fetch() есть особенность, в случае когда у нас ошибка от сервера, не сработает reject, у нас просто поменяется статус на false
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(object)


            })
            .then(data => data.text())                    // метод fetch(), дату превращает в текст 
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();

                
            })
            .catch(() => showThanksModal(message.failure))
            .finally(() => form.reset());                                     // Чтобы инпуты работали корректно, обязательно в верстке у каждого инпута должен быть задан атрибут name
        });
    }


    function showThanksModal (message) {
        const prevModalDialog = document.querySelector('.modal__dialog');


        prevModalDialog.classList.add('hide');
        openModal();


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
            closeModal();
        }, 4000);
    }


    fetch('http://localhost:3000/menu')
    .then(data => data.json())
    .then(res => console.log(res));
}); 