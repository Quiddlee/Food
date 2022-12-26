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


export default slider;