$(document).ready(function () {
    $('.fullname').hide()
    $('button.sign-up-switch').on('click', function () {
        $('.form-panel').css('position', 'relative').animate({
                left: '-=420px'
            },
            1000)
    })

    $('button.log-in-switch').on('click', function () {
        $('.form-panel').css('position', 'relative').animate({
            left: '+=420px'
        }, 1000)
    })

    $('button.sign-up-switch').on('click', function () {
        $('form').attr('action', 'register.php')
        $('h3.with-logo').html('Sign Up')
        $('.fullname').show()
        $('button.in-form').html('Sign Up')
        $('a.forget').hide()
    })

    $('button.log-in-switch').on('click', function () {
        $('form').attr('action', 'login.php')
        $('h3.with-logo').html('Log In')
        $('.fullname').hide()
        $('button.in-form').html('Log In')
        $('a.forget').show()
    })
})