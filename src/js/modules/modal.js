function openModal (modalSelector, modalTimerId, showModalByScroll) {
    const modal = document.querySelector(modalSelector);


    modal.classList.add('show');
    modal.classList.add('fade');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';  //убираем возможность скролла страницы, когда модальное окно открыто


    console.log(modalTimerId);
    if (modalTimerId) clearInterval(modalTimerId);
    window.removeEventListener('scroll', showModalByScroll);
}


function closeModal (modalSelector) {
    const modal = document.querySelector(modalSelector);


    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}   //чтобы вернуть дефолтное значение, можно оставить просто кавычки, браузер сам установит нужное значение


function modal(triggerSelector, modalSelector, modalTimerId) {
    //                                      Modals


    const modalBtns = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);


    modalBtns.forEach(element => {
        element.addEventListener('click', () => openModal(modalSelector, modalTimerId, showModalByScroll));
    }); // если нам нужно передать в call back функцию аргумент, оборачиваем её в анонимную функцию () => openModal(arg)


    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute('data-close') === '') {
            closeModal(modalSelector);
        }
    });


    document.addEventListener('keydown', (event) => {       //скрываем модальное окно по нажатию клавиши ESC
        if (event.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });


    // мы складываем прокрутку и контент, который видит пользователь,
    // если эти значения совпадают с полной высотой страницы - то пользователь до листал до конца
    function showModalByScroll() { //ставим -1px для уверенности, чтобы скрипт отработал на 1 пиксель раньше и не бажил
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
            openModal(modalSelector, modalTimerId, showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);


    // есть ещё возможность задать настройка обработчику событий: .addeventlistener('click', () => {

    //                                                          },{once: true});  //обработчик сработает только один раз
}


export default modal;
export {closeModal, openModal};
