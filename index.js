let searchForm =document.querySelector('.search-form');
document.querySelector('#search-btn').onclick =() =>
{
    searchForm.classList.toggle('active');
    
    shoppingCart.classList.remove('active');
    logIn.classList.remove('active');
    navBar.classList.remove('active');
}
let shoppingCart =document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick =() =>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    logIn.classList.remove('active');
    navBar.classList.remove('active');
}
let logIn =document.querySelector('.login-form');
document.querySelector('#login-btn').onclick =() =>
{
    logIn.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navBar.classList.remove('active');
}

let navBar =document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick =() =>
{
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    logIn.classList.remove('active');

}

window.onscroll =() =>
    {
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        logIn.classList.remove('active');
        navBar.classList.remove('active');
    }