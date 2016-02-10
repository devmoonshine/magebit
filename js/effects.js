$(document).ready(function () {
    // shifts white form to the left, when clicking sign-up button
    // white login form changes to sign up form
    // changes form action link to register.php
    $('.sign-up').on('click', function () {
        $('.form-panel').css('position', 'relative').animate({
                left: '-=420'
            },
            1000,
            function () {

                // white sign-up form changes to log in form
                // changes for action link to login.php
                $('.log-in').on('click', function () {
                    // white form shifts to right, when clicking log-in button
                    $('form-panel').animate({
                        left: '+=420'
                    })
                })
            })
        $('.panel-right').css('visibility', 'visible')
    })
})