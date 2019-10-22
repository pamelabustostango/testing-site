// Animations init
new WOW().init();

$(document).ready(function () {

    $('#dismiss, .overlay').on('click', function () {
        closeSidebar();
    });

    $('#sidebarCollapse').on('click', function () {
        openSidebar();
    });

});

function openSidebar() {
    $('#sidebar').addClass('active');
    // fade in the overlay
    $('.overlay').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
}

function closeSidebar(){
    // hide sidebar
    $('#sidebar').removeClass('active');
    // hide overlay
    $('.overlay').removeClass('active');
}