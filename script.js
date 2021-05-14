'use strict'
 let menuButton = document.querySelector(".menu_header_button"),
     menuList = document.querySelector(".menu-list");

function open() {
    menuList.classList.toggle("menu-list-open");
    }    
 menuButton.onclick = function() {
    open();
};
  
 