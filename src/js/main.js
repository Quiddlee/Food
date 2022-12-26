    require('es6-promise').polyfill();
    import 'nodelist-foreach-polyfill';



    import modal, {openModal} from './modules/modal';
    import calculator  from './modules/calculator';
    import slider  from './modules/slider';
    import timer  from './modules/timer';
    import cards  from './modules/cards';
    import forms  from './modules/forms';
    import tabs  from './modules/tabs';


window.addEventListener('DOMContentLoaded', () => {
                                            //открываем модальное окно, после 30 секунд, как пользователь зашёл на сайт
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 30000);


    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', new Date(Date.parse(new Date()) * 1.000361708));
    modal('[data-modal]', '.modal', modalTimerId);
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    calculator();
    cards();
});

