const hamburgerBtn = document.querySelector('.header__hamburger');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const navLinks = document.querySelector('nav')

const closeMenu = () => {
    menuClose.style.display = "none";
    menuOpen.style.display = "";
    navLinks.style.display = "none";
}
const openMenu = () => {
    menuClose.style.display = "";
    menuOpen.style.display = "none";
    navLinks.style.display = "block";

}

hamburgerBtn.addEventListener('click', () => {


    if (hamburgerBtn.classList.contains("active")) {
        hamburgerBtn.classList.toggle('active')
        openMenu()
        return
    }

    hamburgerBtn.classList.toggle('active')
    closeMenu()


})