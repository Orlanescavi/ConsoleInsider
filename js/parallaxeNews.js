document.addEventListener('DOMContentLoaded', () => {
    const titleContainer = document.querySelector('.titleContainer')
    const textPageContainer = document.querySelector('.textPageContainer');
    const newsContainer = document.querySelector('.newsContainer');

    textPageContainer.style.opacity = '0';
    centerView.style.opacity = '1';

    window.addEventListener('scroll', () => {
        let scrolled = window.scrollY;

        if(scrolled > 5){
            textPageContainer.style.opacity = '1';
        } else {
            textPageContainer.style.opacity = '0';
        }

        let moovedTitle = Math.min(500, scrolled)
        titleContainer.style.transform = `translateX(-${moovedTitle}px)`;

        let scrollednewsContainer = Math.min(700, scrolled)
        newsContainer.style.transform = `translateY(-${scrollednewsContainer}px)`;
    })
})