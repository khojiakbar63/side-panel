const toggleMenu = document.querySelector('#toggle-menu')
const mainPage = document.querySelector('#main-page')
const menuIcon = document.querySelector('#menu-icon')
const crossIcon = document.querySelector('#cross-icon')


const toggleWidth = () => {
    mainPage.classList.toggle('full-width')
    crossIcon.classList.toggle('block')
    menuIcon.classList.toggle('hide')
}


toggleMenu.addEventListener('click', toggleWidth)