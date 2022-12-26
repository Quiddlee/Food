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


export default timer;