const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.burger-close')
const navUl = document.querySelector('.nav-ul');


burger.addEventListener('click', show);
burgerClose.addEventListener('click',close)

function show(){
    navUl.style.display = 'flex'
  burger.style.display = 'none';
  burgerClose.style.display = 'block'

}

function close(){
    navUl.style.display = 'none'
    burger.style.display = 'block'
}