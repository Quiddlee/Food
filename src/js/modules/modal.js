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


module.exports = modal;