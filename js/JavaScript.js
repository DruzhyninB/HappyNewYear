function go() {
    document.body.addEventListener('click', apearGift, true);
    function apearGift(event) {
            var newGift = document.createElement('div');
        newGift.className = 'gift gBg' +Math.floor(Math.random()*(4-1)+1) ;
        newGift.style.top = event.clientY - 25 + 'px';
        newGift.style.left = event.clientX - 25 + 'px';
        $('.gift_area').append(newGift);
    }
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

