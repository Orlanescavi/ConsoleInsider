document.addEventListener('DOMContentLoaded', () => {
    const titleContent = document.querySelector('.titleContent');
    const aboutContent = document.querySelector('.aboutContent');
    const textAboutContainer = document.querySelector('.textAboutContainer');
    const moonCenter = document.querySelector('.moonCenter');

    window.addEventListener('scroll', () => {
        let scrolled = window.scrollY;

        let scrollMoon = Math.max(100, scrolled);
        moonCenter.style.transform = `translateY(${scrollMoon}px)`;
        moonCenter.style.opacity = 0.5;

        let movementTextAbout = Math.max(200, scrolled);
        textAboutContainer.style.transform = `translateY(-${movementTextAbout}px)`;

        let movementAbout = Math.min(800, scrolled);
        let percentScrolled = (scrolled / 800) * 100;

        aboutContent.style.transform = `translateX(${percentScrolled}%)`;

        let movement = Math.min(800, scrolled);
        titleContent.style.transform = `translateX(-${movement}px)`;
    });
});
