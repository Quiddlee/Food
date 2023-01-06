function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, classActive) {
    //                                     Tabs


    const tabs = document.querySelectorAll(tabsSelector);
    const tabsContent = document.querySelectorAll(tabsContentSelector);
    const tabsParent = document.querySelector(tabsParentSelector);


    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });


        tabs.forEach(item => {
            item.classList.remove(classActive);
        });
    }


    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(classActive);
    }
    hideTabContent();
    showTabContent();


    tabsParent.addEventListener('click', (event) => {
        const target = event.target;


        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((element, i) => {
                if (target === element) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}


export default tabs;