$(document).ready(function() {
    var fix_flag = false;
    var pos = $('.inner h3.menu').position().top + 20;
    setInterval(function() {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if ((t >= pos) != fix_flag) {
            fix_flag = (t >= pos);
            if (fix_flag) {
                $('.inner').removeClass('nofix').addClass('fix');
            } else {
                $('.inner').removeClass('fix').addClass('nofix');
            }
        }
    }, 1000 / 60);
});
