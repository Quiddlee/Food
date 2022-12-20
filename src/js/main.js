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


    const getResource = async (url) => { 
        const res = await fetch(url);
        const errorMessage = `Could not fetch ${url}, status: ${res.status}`;


        if (!res.ok) {throw new Error(errorMessage);}
        return await res.json();
    };


    // getResource('http://localhost:3000/menu')
    // .then(data => {
    //     data.forEach(({img, altimg, title, descr, price}) => {  // мы берём каждый элемент массива - объект, и деструктуризируем его на свойства
    //         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //     });
    // });


    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({img, altimg, title, descr, price}) => {  // мы берём каждый элемент массива - объект, и деструктуризируем его на свойства
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });


    //                  альтернативный способ добавить карточки на сайт


    // getResource('http://localhost:3000/menu')
    //     .then(data => createCard(data));

    // function createCard(data) {
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //         const element = document.createElement('div');
    //         element.classList.add('menu__item');


    //         element.innerHTML = `
    //             <img src=${img} alt=${altimg}>
    //             <h3 class="menu__item-subtitle">${title}</h3>      
    //             <div class="menu__item-descr">${descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //             </div>
    //         `;


    //         document.querySelector('.menu .container').append(element);
    //     });
    // }


    //                                      Forms


    const forms = document.querySelectorAll('form');


    const message = {
        loading: 'img/form/spinner.svg',            // что бы использовать изображения в js нужно просто написать путь к нему
        success: 'Спасибо! Мы с Вами скоро свяжемся',
        failure: 'Что-то пошло не так...'
    };


    forms.forEach(item => {
        bindPostData(item);
    });


    const postData = async (url, data) => { // async/await - синтаксический сахар, для работы с асинхронным кодом, условно говоря - js ждет, там где установлен оператор await, пока асинхронный код не выполнится
        const res = await fetch(url, {      // у fetch() есть особенность, в случае когда у нас ошибка от сервера, не сработает reject, у нас просто поменяется статус на false
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: data
        });

        return await res.json();
    };


    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();                 // отменяем перезагрузку страницы, при отправке формы


            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage); //добавляем спиннер под формой, чтобы он не сдвигал верстку


            // объект FormData - автоматически формирует объект из формы, которую мы передали в скобочках
            const formData = new FormData(form);  //formData - это специальный объект, он имеет метод ForEach            //когда мы используем связку XMLHttpRequest + FormData - заголовок устанавливать не нужно, он устанавливается автоматически
            const json = JSON.stringify(Object.fromEntries(formData.entries())); // .entries() - формирует из объектов матрицу с данными / метод fromEntries конвертирует из матрицы обратно в объект


            postData('http://localhost:3000/requests', json)
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


    //                                          Slider


    //                                          homework


    // const slides = document.querySelectorAll('.offer__slide');
    // const totalSlides = document.querySelector('#total');
    // const currentSlide = document.querySelector('#current');
    // const sliderNext = document.querySelector('.offer__slider-next');
    // const sliderPrev = document.querySelector('.offer__slider-prev');
    // const totalSlidesNumber = slides.length;
    // let slideNumber = 1;
    //
    //
    //
    // currentSlide.innerHTML = `0${slideNumber}`;
    // totalSlides.innerHTML = totalSlidesNumber < 10 ? `0${totalSlidesNumber}` : totalSlidesNumber;
    //
    //
    // const hideSlide = () => {
    //     slides.forEach((slide) => {
    //         slide.classList.remove('show', 'fade');
    //         slide.classList.add('hide');
    //     });
    // };
    // hideSlide();
    //
    //
    // const showSlide = (whichSlide = 0) => {
    //     slides.forEach((slide, iter) => {
    //         if (iter === whichSlide) {
    //             slide.classList.remove('hide');
    //             slide.classList.add('show', 'fade');
    //         }
    //     })
    // };
    // showSlide();
    //
    //
    // const sliderCountAndToggle = (whichSlide) => {
    //     hideSlide();
    //     showSlide(whichSlide - 1);
    //
    //
    //     if (whichSlide < 10) currentSlide.innerHTML = `0${whichSlide}`;
    //     if (whichSlide >= 10) currentSlide.innerHTML = whichSlide;
    // };
    //
    //
    // sliderNext.addEventListener('click', () => {
    //     if (slideNumber === totalSlidesNumber) return sliderCountAndToggle(slideNumber = 1);
    //     sliderCountAndToggle(slideNumber += 1);
    // });
    //
    //
    // sliderPrev.addEventListener('click', () => {
    //     if (slideNumber === 1) return sliderCountAndToggle(slideNumber = totalSlidesNumber);
    //     sliderCountAndToggle(slideNumber -= 1);
    // });


    //                               slider lesson rework


    const slides = document.querySelectorAll('.offer__slide');
    const prev = document.querySelector('.offer__slider-prev');
    const next = document.querySelector('.offer__slider-next');
    const total = document.querySelector('#total');
    const current = document.querySelector('#current');
    const slidesWrapper = document.querySelector('.offer__slider-wrapper');
    const slidesField = document .querySelector('.offer__slider-inner');
    const width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1;
    let offset = 0;




    // showSlides(slideIndex);
    // if (slides.length < 10) total.textContent = `0${slides.length}`;
    // if (slides.length >= 10) total.textContent = slides.length;
    //
    //
    // function showSlides(whichSlide) {
    //     if (whichSlide > slides.length) slideIndex = 1;
    //     if (whichSlide < 1) slideIndex = slides.length;
    //
    //
    //     slides.forEach(item => item.style.display = 'none');
    //     slides[slideIndex - 1].style.display = 'block';
    //
    //
    //     if (slides.length < 10) current.textContent = `0${slideIndex}`;
    //     if (slides.length >= 10) current.textContent = slideIndex;
    // }
    //
    //
    // function plusSlides (whichSlide) {
    //     showSlides(slideIndex += whichSlide);
    // }
    //
    //
    // prev.addEventListener('click', () => plusSlides(-1));
    // next.addEventListener('click', () => plusSlides(1));


    //                           carousel slider


    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    }
    if (slides.length >= 10) {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }


    slidesField.style.width = `${100 * slides.length}%`;
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';            // overflow hidden - скрывает все элементы, которые не помещаются в родителя
    slides.forEach(slide => slide.style.width = width);


    next.addEventListener('click', () => {
        const slidesWidth = +width.slice(0, width.length - 2);
        const slidesNumber = slides.length - 1;


        if (offset === slidesWidth * slidesNumber) offset = 0;
        else offset += slidesWidth;


        slidesField.style.transform = `translateX(-${offset}px)`;


        if (slideIndex === slides.length) slideIndex = 1;
        else slideIndex++;


        if (slides.length < 10) current.textContent = `0${slideIndex}`;
        if (slides.length >= 10) current.textContent = slideIndex;
    });


    prev.addEventListener('click', () => {
        const slidesWidth = +width.slice(0, width.length - 2);
        const slidesNumber = slides.length - 1;


        if (offset === 0) offset = slidesWidth * slidesNumber;
        else offset -= slidesWidth;


        slidesField.style.transform = `translateX(-${offset}px)`;


        if (slideIndex === 1) slideIndex = slides.length;
        else slideIndex--;


        if (slides.length < 10) current.textContent = `0${slideIndex}`;
        if (slides.length >= 10) current.textContent = slideIndex;
    });
});
