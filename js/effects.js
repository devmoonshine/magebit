$(document).ready(function () {
    $('.fullname').hide()

    $('button.sign-up-switch').on('click', function () {

        if (animationFinished == 1) {
            $('h3.with-logo').fadeOut(500)
            $('hr').fadeOut(500)
            $('a.forget').fadeOut(500)
            $('form').fadeOut(500, function () {
                $('form').fadeIn(500)
                $('.fullname').fadeIn(500)
                $('h3.with-logo').fadeIn(500)
                $('hr').fadeIn(500)
                $('button.in-form').html('Sign Up')
                $('h3.with-logo').html('Sign Up')
            })

            $('form').attr('action', 'register.php')
        }

        var currentLeftPos = 0;
        var element = document.getElementById("panel-element");
        currentLeftPos = (element.offsetLeft - element.scrollLeft + element.clientLeft);

        if (currentLeftPos >= initialLeftPos && animationFinished == 1) {
            animationFinished = 0
            $('.form-panel').css('position', 'relative').animate({
                    left: '-=420px'
                },
                1000,
                function () {
                    animationFinished = 1
                })
        }
    })

    $('button.log-in-switch').on('click', function () {

        if (animationFinished == 1) {
            $('h3.with-logo').fadeOut(500)
            $('hr').fadeOut(500)
            $('.fullname').fadeOut(500)
            $('form').fadeOut(500, function () {
                $('form').fadeIn(500)
                $('h3.with-logo').fadeIn(500)
                $('hr').fadeIn(500)
                $('button.in-form').html('Log In')
                $('h3.with-logo').html('Log In')
                $('a.forget').fadeIn(500)
            })

            $('form').attr('action', 'login.php')
        }

        var currentLeftPos = 0;
        var element = document.getElementById("panel-element");
        currentLeftPos = (element.offsetLeft - element.scrollLeft + element.clientLeft);

        if (currentLeftPos <= initialLeftPos - 420 && animationFinished == 1) {
            animationFinished = 0
            $('.form-panel').css('position', 'relative').animate({
                left: '+=420px'
            }, 1000, function () {
                animationFinished = 1

            })
        }
    })

    var initialLeftPos = 0;
    var animationFinished = 1;
    $(
        function setupPos() {
            var element = document.getElementById("panel-element");
            initialLeftPos = (element.offsetLeft - element.scrollLeft + element.clientLeft);
        }
    )

})