window.addEventListener('DOMContentLoaded', () => {
    const calculator = require('./modules/calculator');
    const slider = require('./modules/slider');
    const modal = require('./modules/modal');
    const timer = require('./modules/timer');
    const cards = require('./modules/cards');
    const forms = require('./modules/forms');
    const tabs = require('./modules/tabs');


    calculator();
    slider();
    modal();
    timer();
    cards();
    forms();
    tabs();
});

