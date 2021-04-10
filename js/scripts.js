'use strict';

const menu = document.querySelector('#menu');
const menuBar = document.querySelector('#menu-bar');

menuBar.addEventListener('click', ()=>{
    menu.classList.toggle('menu-toggle');
});