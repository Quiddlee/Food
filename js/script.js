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
/*! no static exports found */
/***/ (function(module, exports) {

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
  function showTabContent() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }
  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', event => {
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

  const deadLine = '2023-2-4';
  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const total = Date.parse(endtime) - Date.parse(new Date()); //вычисляем разницу между дедлайном и датой пользователя

    if (total <= 0) {
      //если к нам приходят отрицательные значения, заменяем всё нулями
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    }
    if (total > 0) {
      days = Math.floor(total / (1000 * 60 * 60 * 24)); //1000 - кол-во миллисекунд в одной секунде
      hours = Math.floor(total / (1000 * 60 * 60) % 24);
      minutes = Math.floor(total / 1000 / 60 % 60);
      seconds = Math.floor(total / 1000 % 60);
    }
    return {
      'total': total,
      //есть возможность записать такой объект короче, вместо 'ключ: значение'
      'days': days,
      //использовать просто названия переменных - {total, days, hours, minutes, seconds}
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  function getZero(num) {
    //добавляем нолик, если число меньше 10
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
    const timeInterval = setInterval(updateClock, 1000); //устанавливем таймеру интервал, чтобы он обновлялся каждую секунду

    updateClock(); //вызываем функцию, чтобы при обновлении страницы, таймер не прыгал

    function updateClock() {
      //мы прописали фнукцию внутри вышестоящей фнукции, чтобы использовать один и тот же параметр endtime, + используем уже полученые элементы со страницы (days, houre, etc)
      const timerData = getTimeRemaining(endtime); //мы получаем из функции getTimeRemainig() объект с кол-вом миллисикунд в часах, минутах и секундах

      days.innerHTML = getZero(timerData.days);
      hours.innerHTML = getZero(timerData.hours); //через точечную запись обращаемся к значениям возвращаемого объекта 
      minutes.innerHTML = getZero(timerData.minutes);
      seconds.innerHTML = getZero(timerData.seconds);
      if (timerData.total <= 0) {
        //как только таймер дойдет до 0 мы его останавливаем 
        clearInterval(timeInterval);
      }
    }
  }
  setClock('.timer', deadLine);

  //Modals

  const modalBtns = document.querySelectorAll('[data-modal]');
  const modal = document.querySelector('.modal');
  function openModal() {
    modal.classList.add('show');
    modal.classList.add('fade');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'; //убираем возможность скролла страницы, когда модальное окно открыто
    clearInterval(modalTimerId);
    window.removeEventListener('scroll', showModalByScroll);
  }
  modalBtns.forEach(element => {
    element.addEventListener('click', openModal); //когда вставляем call back функцию, скобочки не ставим
  });

  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = ''; //чтобы вернуть деффолтное значение, можно оставить просто кавычки, браузер сам установит нужное значение
  }

  modal.addEventListener('click', event => {
    const target = event.target;
    if (target && target.classList.contains('modal') || target.classList.contains('modal__close')) {
      closeModal();
    }
  });
  document.addEventListener('keydown', event => {
    //скрываем модальное окно по нажатию клавиши ESC
    if (event.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });
  const modalTimerId = setTimeout(openModal, 30000); //открываем модальное окно, после 30 секунд, как пользователь зашёл на сайт

  function showModalByScroll() {
    //мы складываем прокрутку и котент, который видит пользователь, если эти значения совпадают с полной высотой страницы - то пользователь долистал до конца
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      //ставим -1px для уверености, чтобы скрипт отработал на 1 пиксель раньше и не бажил
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll); //есть ещё возможность задать настройка обработчику событий: .addeventlistener('click', () => {

  //},{once: true});         //тоесть обработчик сработает только один раз
  //Используем классы для карточек

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      for (var _len = arguments.length, classes = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        classes[_key - 6] = arguments[_key];
      }
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }
    changeToUAH() {
      this.price = this.price * this.transfer;
    }
    render() {
      const element = document.createElement('div'); //установили деффолтное значение рест опреатору

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
            `; //создаём такуюже верстку, но с динамическими значениями

      this.parent.append(element);
    }
  }
  new MenuCard('img/tabs/vegy.jpg', 'vegy', 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 9, '.menu .container', 'menu__item', 'big').render(); //можем создать объект в таком виде, если он используется только один раз

  new MenuCard('img/tabs/elite.jpg', 'elite', 'Меню "Премиум"', 'меню "Премиум" мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 14, '.menu .container', 'menu__item').render();
  new MenuCard('img/tabs/post.jpg', 'post', 'Меню "Постное"', 'Меню "Постное" - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.!', 21, '.menu .container', 'menu__item').render();
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map