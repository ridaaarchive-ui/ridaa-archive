window.addEventListener('load', () => {
    const overlay = document.getElementById('intro-overlay');
    const homePage = document.getElementById('home-page');

    setTimeout(() => {
        overlay.querySelector('.curtain.left').style.transform = 'translateX(-100%)';
        overlay.querySelector('.curtain.right').style.transform = 'translateX(100%)';
    }, 1000);

    setTimeout(() => {
        overlay.style.display = 'none';
        homePage.classList.remove('hidden');
    }, 3000);
});
