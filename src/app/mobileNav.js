const menuBtn = document.querySelector('.header__nav-button');
let menuState;
const toggleMenu = () => {
  if (menuState) {
    menuBtn.classList.remove('close');
    menuState = false;
  } else if (!menuState) {
    menuBtn.classList.add('close');
    menuState = true;
  }
};

const mobileNav = () => {
  const menuMobileButton = document.querySelector('.header__nav-button');
  menuMobileButton.addEventListener('click', e => {
    console.log('nani');
    const menu = document.querySelector('.nav--mobile');
    const menuActiveClass = 'nav--mobile--active';
    const overFlowTarget = document.children[0];
    if (menuState) {
      overFlowTarget.style.overflowY = 'auto';
    } else if (!menuState) {
      overFlowTarget.style.overflowY = 'hidden';
    }
    toggleMenu();
    menu.classList.toggle(menuActiveClass);
  });
};
export default mobileNav;
