function go() {

}

$(window).ready(function () {
    $('.preloader').animate({
        opacity:0
    }, 1000, function () {
        $('.preloader').remove();
        $('#audio').prop('volume',0.08);
        $('#audio').trigger('play');
        go();
    })
})