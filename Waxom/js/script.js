$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


function scrolling() {
    if ($(window).scrollTop() > $('.navbar').height()) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
}

$(window).on('scroll', scrolling);

var links = ('.header .nav-link');

$(links).on('click', function (e) {
    e.preventDefault();

    $(links).parent().removeClass('active');
    $(this).parent().addClass('active');
    var id = $(this).attr('href');
    var target = $(id).offset().top;


    $('html, body').animate({
        scrollTop: target,
    }, 1000);
});


$('.navbar-nav .nav-item').on('click', function () {
    if ($('.navbar-toggler').hasClass('collapsed')) {
        scrolling();
    } else {
        $('.navbar-toggler').addClass('collapsed');
        scrolling();
        if ($('#navbarSupportedContent').hasClass('show')) {
            $('#navbarSupportedContent').slideUp(function () {
                $(this).removeClass('show');
                $(this).css('display', '');
            })
        };
    };
});



var j = 0; //количество прокручивания счетчика при скролле 
$(document).on('scroll', function () {
    if (j < 1) {
        if ($(window).scrollTop() >= $('.facts').offset().top - 200) {
            count('.clients', 3400, 3587, '');
            count('.coffee', 100, 207, '');
            count('.blog', 2300, 2500, '');
            count('.likes', 700, 873, '');
            count('.launched', 750, 900, '');
            j++;

        }
    }
});
//счетчик крутится один раз и не реагирует на скролл

function count(selector, min, max, sign) {
    let i = min;
    setInterval(function () {
        if (i < max) {
            i++;
            document.querySelector(selector).innerHTML = i + sign;
        };
    }, 10);
};