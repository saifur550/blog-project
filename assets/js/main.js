const menu = document.querySelector('#mobile__menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLog = document.querySelector('#nav__logo')
const body = document.querySelector('body')


// display mobile menu
const mobileMenu = () => {
     menu.classList.toggle('is__active')
     menuLinks.classList.toggle('active')
     body.classList.toggle('active')
}


 menu.addEventListener('click', mobileMenu)


