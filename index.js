let searchForm =document.querySelector('.search-form');
document.querySelector('#search-btn').onclick =() =>
{
    searchForm.classList.toggle('active');
}
let shoppingCart =document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick =() =>
{
    shoppingCart.classList.toggle('active');
}
let logIn =document.querySelector('.login-form');
document.querySelector('#login-btn').onclick =() =>
{
    logIn.classList.toggle('active');
}