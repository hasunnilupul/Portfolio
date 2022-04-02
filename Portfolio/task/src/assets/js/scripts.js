const mobileNav = document.querySelector('.hamburger');
const mobileNavBtn = document.querySelector('.mobile-menu-icon');
const popupWindow = document.querySelector('.window');
const closeBtn = document.querySelector('.close-window');

mobileNavBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

const openPopUp = () => {
    popupWindow.style.display = 'flex';
};

closeBtn.addEventListener('click', function () {
    popupWindow.style.display = 'none';
});