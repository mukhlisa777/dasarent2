const headerBtn = document.querySelectorAll('.header__nav-btn, .nav__btn');
const headerNav = document.querySelectorAll('.header__nav-media, .nav-content');

headerBtn.forEach((nav,i)=> {
  nav.addEventListener('click', function () {
    headerNav[i].classList.toggle('active')
    headerBtn[i].classList.toggle('active')
  })
})




