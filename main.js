// Hamburger menu:
// mostrare / nascondere il menu principale

$(document).ready(function(){

    $('.header-right i, .close i').click(function(){
        $('.hamburger-menu').toggle();
    });

});
