

$(document).ready(function () {

    // Animations init
new WOW().init();

    $('.navbar-toggler').on('click', function(){
        openNav();
    });
    $('.closeBtn').on('click', function(){
        closeNav();
    });

});

function openNav() {
    $('#myNav').css('width', '100%');
}

function closeNav(){
    $('#myNav').css('width', '0');
}