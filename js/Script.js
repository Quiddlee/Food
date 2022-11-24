window.addEventListener('DOMContentLoaded', () => {
    //Tabs

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

    //Timer

    const deadLine = '2022-12-4';

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

    function getZero(num) {                     //добавляем нолик, если число меньше 10
        if (num >= 0 && num >= 10) return num;
        
        if (num >= 0 && num < 10) {
            return `0${num}`;
        }
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
            
            if (timerData.total <= 0) {            //как только таймер дойдет до 0 мы его останавливаем 
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadLine);
});