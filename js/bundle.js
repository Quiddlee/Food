/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calculator */ "./src/js/modules/calculator.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");









window.addEventListener('DOMContentLoaded', () => {
    Object(_modules_calculator__WEBPACK_IMPORTED_MODULE_0__["default"])();
    Object(_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])();
    Object(_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])();
    Object(_modules_timer__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(_modules_cards__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_modules_forms__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_6__["default"])();
});



/***/ }),

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calculator() {
    //                                          Calculator


    const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ratio;


    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    }
    else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }


    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    }
    else {
        ratio = '1.375';
        localStorage.setItem('ratio', '1.375');
    }


    const initLocalSettings = (selector, classActive) => {
        const elements = document.querySelectorAll(selector);


        elements.forEach(element => {
            element.classList.remove(classActive);


            if (element.getAttribute('id') === localStorage.getItem('sex')) {
                element.classList.add(classActive);
            }


            if (element.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                element.classList.add(classActive);
            }
        });
    }
    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');


    const calcTotal = () => {
        if (!sex || !height || !weight || !age || !ratio) return result.textContent = '____';


        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        }


        if (sex === 'male') {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }
    calcTotal();


    const getStaticInformation = (selector, classActive) => {
        const elements = document.querySelectorAll(selector);


        elements.forEach(element => {
            element.addEventListener('click', (event) => {
                if (event.target.getAttribute('data-ratio')) {
                    ratio = +event.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +event.target.getAttribute('data-ratio'));
                }
                else {
                    sex = event.target.getAttribute('id');
                    localStorage.setItem('sex', event.target.getAttribute('id'));
                }


                elements.forEach(element => {
                    element.classList.remove(classActive);
                });


                event.target.classList.add(classActive);
                calcTotal();
            });
        });
    }
    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');


    const getDynamicInformation = selector => {
        const input = document.querySelector(selector);


        input.addEventListener('input', () => {
            if (input.value.match(/\D/g)) input.style.border = '1px solid red';
            else input.style.border = 'none';


            switch(input.getAttribute('id')) {
                case 'height': height = +input.value; break;
                case 'weight': weight = +input.value; break;
                case 'age': age = +input.value; break;
            }


            calcTotal();
        });
    }
    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');
}


/* harmony default export */ __webpack_exports__["default"] = (calculator);

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function cards() {
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
            `;                                                  //создаём такуюже верстку, но с динамическими значениями
            this.parent.append(element);
        }
    }


    // const getResource = async (url) => {
    //     const res = await fetch(url);
    //     const errorMessage = `Could not fetch ${url}, status: ${res.status}`;
    //
    //
    //     if (!res.ok) {throw new Error(errorMessage);}
    //     return await res.json();
    // };


    // getResource('http://localhost:3000/menu')
    // .then(data => {                 // мы берём каждый элемент массива - объект, и деструктуризируем его на свойства
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //     });
    // });


    axios.get('http://localhost:3000/menu')
        .then(data => {                // мы берём каждый элемент массива - объект, и деструктуризируем его на свойства
            data.data.forEach(({img, altimg, title, descr, price}) => {
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
}


/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function forms() {
    //                                      Forms


    const forms = document.querySelectorAll('form');


    const message = {
        loading: 'img/form/spinner.svg',       // что бы использовать изображения в js нужно просто написать путь к нему
        success: 'Спасибо! Мы с Вами скоро свяжемся',
        failure: 'Что-то пошло не так...'
    };


    forms.forEach(item => {
        bindPostData(item);
    });


    // async/await - синтаксический сахар, для работы с асинхронным кодом, условно говоря - js ждет,
    const postData = async (url, data) => { // там где установлен оператор await, пока асинхронный код не выполнится
        const res = await fetch(url, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: data                      // у fetch() есть особенность, в случае когда у нас ошибка
        });                                 // от сервера, не сработает reject, у нас просто поменяется статус на false

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
}


/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function modal() {
    //                                      Modals


    const modalBtns = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');


    function openModal () {
        modal.classList.add('show');
        modal.classList.add('fade');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';  //убираем возможность скролла страницы, когда модальное окно открыто
        clearInterval(modalTimerId);
        window.removeEventListener('scroll', showModalByScroll);
    }


    modalBtns.forEach(element => {
        element.addEventListener('click', openModal); //когда вставляем call back функцию, скобочки не ставим
    });


    function closeModal () {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }   //чтобы вернуть деффолтное значение, можно оставить просто кавычки, браузер сам установит нужное значение


    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute('data-close') === '') {closeModal();}
    });


    document.addEventListener('keydown', (event) => {       //скрываем модальное окно по нажатию клавиши ESC
        if (event.code === 'Escape' && modal.classList.contains('show')) {closeModal();}
    });
                                            //открываем модальное окно, после 30 секунд, как пользователь зашёл на сайт
    const modalTimerId = setTimeout(openModal, 30000);


    // мы складываем прокрутку и котент, который видит пользователь,
    // если эти значения совпадают с полной высотой страницы - то пользователь долистал до конца
    function showModalByScroll () {  //ставим -1px для уверености, чтобы скрипт отработал на 1 пиксель раньше и не бажил
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }


    window.addEventListener('scroll', showModalByScroll);


    // есть ещё возможность задать настройка обработчику событий: .addeventlistener('click', () => {

    //                                                          },{once: true});  //обработчик сработает только один раз
}


/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider() {
    //                                          Slider
    //                                         self task


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


    //                               slider lecture rework


    const slides = document.querySelectorAll('.offer__slide');
    const slider = document.querySelector('.offer__slider');
    const prev = document.querySelector('.offer__slider-prev');
    const next = document.querySelector('.offer__slider-next');
    const totalSlides = document.querySelector('#total');
    const current = document.querySelector('#current');
    const slidesWrapper = document.querySelector('.offer__slider-wrapper');
    const slidesField = document .querySelector('.offer__slider-inner');
    const width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1;
    let offset = 0;


    // showSlides(slideIndex);
    // if (slides.length < 10) totalSlides.textContent = `0${slides.length}`;
    // if (slides.length >= 10) totalSlides.textContent = slides.length;
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


    //                                  carousel slider


    const showCurrentSlideIndex = () => {
        if (slideIndex < 10) current.textContent = `0${slideIndex}`;
        if (slideIndex >= 10) current.textContent = slideIndex;
    };


    const showActiveDot = () => {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    };


    const createNumberFromString = (string) => {
        return +string.replace(/\D/g, '');
    };


    if (slides.length < 10) totalSlides.textContent = `0${slides.length}`;
    else totalSlides.textContent = slides.length;
    showCurrentSlideIndex();


    slidesField.style.width = `${100 * slides.length}%`;
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';// overflow hidden - скрывает все элементы, которые не помещаются в родителя
    slides.forEach(slide => slide.style.width = width);
    slider.style.position = 'relative';


    const indicators = document.createElement('ol');
    const dots = [];


    indicators.classList.add('carousel-indicators');
    slider.append(indicators);


    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');


        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if (i === 0) dot.style.opacity = 1  ;


        indicators.append(dot);
        dots.push(dot);
    }


    const slidesWidth = createNumberFromString(width);
    const slidesNumber = slides.length - 1;
    next.addEventListener('click', () => {
        if (offset === slidesWidth * slidesNumber) offset = 0;
        else offset += slidesWidth;
        slidesField.style.transform = `translateX(-${offset}px)`;


        if (slideIndex === slides.length) slideIndex = 1;
        else slideIndex++;
        showCurrentSlideIndex();


        showActiveDot();
        // toggleSliderDots(slideIndex - 1);
    });


    prev.addEventListener('click', () => {
        if (offset === 0) offset = slidesWidth * slidesNumber;
        else offset -= slidesWidth;
        slidesField.style.transform = `translateX(-${offset}px)`;


        if (slideIndex === 1) slideIndex = slides.length;
        else slideIndex--;
        showCurrentSlideIndex();


        showActiveDot();
        // toggleSliderDots(slideIndex - 1);
    });


    //                                  slider dots
    //                                   self task


    // const slider = document.querySelector('.offer__slider');
    // const dotsWrapper = document.createElement('div');
    //
    //
    // dotsWrapper.classList.add('carousel-indicators');
    // slider.style.position = 'relative';
    // slider.append(dotsWrapper);
    //
    //
    // function toggleSliderDots(whichDot) {
    //     dotsWrapper.getElementsByClassName('active')[0].classList.remove('active');
    //     dotsWrapper.children[whichDot].classList.add('active');
    // }
    //
    //
    // function toggleSlidesWithDots(whichDot) {
    //     offset = 650;
    //     offset *= whichDot;
    //     slidesField.style.transform = `translateX(-${offset}px)`;
    // }
    //
    //
    // for (let i = 0; i < slides.length; i++) {
    //     dotsWrapper.append(document.createElement('ol'));
    // }
    // const dots = dotsWrapper.querySelectorAll('ol');
    //
    //
    // dots.forEach((dot, iter) => {
    //     if (iter === 0) dot.classList.add('active');
    //     dot.classList.add('dot')
    //
    //
    //     dot.addEventListener('click', () => {
    //         if (iter + 1 < 10) current.textContent = `0${iter + 1}`;
    //         if (iter + 1 >= 10) current.textContent = iter + 1;
    //
    //
    //         toggleSliderDots(iter);
    //         toggleSlidesWithDots(iter);
    //         slideIndex = iter + 1;
    //     })
    // });


    //                               slider dots
    //                              lecture rework


    dots.forEach(dot => {
        dot.addEventListener('click', (event) => {
            const slideTo = event.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset =  slidesWidth * (slideTo - 1);
            showCurrentSlideIndex();


            slidesField.style.transform = `translateX(-${offset}px)`;
            showActiveDot();
        });
    });
}


/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs() {
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
}


/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer() {
    //                                      Timer


    const now = Date.parse(new Date()) * 1.000361946;
    const deadLine = new Date(now);


    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;                      // вычисляем разницу между дедлайном и датой пользователя
        const total = Date.parse(endtime) - Date.parse(new Date());


        if (total <= 0) {        // если к нам приходят отрицательные значения, заменяем всё нулями
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        }


        if (total > 0) {
            days = Math.floor(total / (1000 * 60 * 60 * 24));     // 1000 - кол-во миллисекунд в одной секунде
            hours = Math.floor((total / (1000 * 60 * 60) % 24));
            minutes = Math.floor((total / 1000 / 60) % 60);
            seconds = Math.floor((total / 1000) % 60);
        }


        return {
            'total': total,      // есть возможность записать такой объект короче, вместо 'ключ: значение'
            'days': days,        // использовать просто названия переменных - {total, days, hours, minutes, seconds}
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }


    function getZero(num) {
        if (num >= 0 && num >= 10) {return num;}
        if (num >= 0 && num < 10) {return `0${num}`;}   // добавляем нолик, если число меньше 10
    }


    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');                           // устанавливем таймеру интервал,
        const timeInterval = setInterval(updateClock, 1000);            // чтобы он обновлялся каждую секунду
        updateClock();           // вызываем функцию, чтобы при обновлении страницы, таймер не прыгал


                // мы прописали фнукцию внутри вышестоящей фнукции, чтобы использовать один и тот же параметр endtime,
        function updateClock() {                   // + используем уже полученые элементы со страницы (days, houre, etc)
            const timerData = getTimeRemaining(endtime);     // мы получаем из функции getTimeRemainig() объект
                                                                    // с кол-вом миллисикунд в часах, минутах и секундах

            days.innerHTML = getZero(timerData.days);
            hours.innerHTML = getZero(timerData.hours);     // через точечную запись обращаемся
            minutes.innerHTML = getZero(timerData.minutes); // к значениям возвращаемого объекта
            seconds.innerHTML = getZero(timerData.seconds);


            if (timerData.total <= 0) {clearInterval(timeInterval);}    // как только таймер дойдет до 0
        }                                                                       // мы его останавливаем
    }
    setClock('.timer', deadLine);
}


/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map