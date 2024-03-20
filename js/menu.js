const menu = document.querySelector('.header__menu__container');
const openButtonMenu = document.querySelector('.burger');
const clouseButtonMenu = document.querySelector('.header__menu__clouse');
const menuBlur = document.querySelector('.header__menu__blur');
const menuContainer = document.querySelector('.header__menu__container');
const link = document.querySelectorAll('.header__menu__item');
const body = document.body;



const openOrClouseMenu = () => {
    menu.classList.toggle('menu__active');
    menuBlur.classList.toggle('blur__active');
    body.classList.toggle('hidden');
}

menuContainer.addEventListener('click', (e) => {
    e.stopPropagation()
});

link.forEach(el => {
    if(window.innerWidth <= 991){
        el.addEventListener('click', openOrClouseMenu)
    }

})

menuBlur.addEventListener('click', openOrClouseMenu);
openButtonMenu.addEventListener('click', openOrClouseMenu);
clouseButtonMenu.addEventListener('click', openOrClouseMenu);

