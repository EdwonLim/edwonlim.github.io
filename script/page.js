$(document).ready(function() {
    var fix_flag = false;
    setInterval(function() {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if ((t >= 227) != fix_flag) {
            fix_flag = (t >= 227);
            if (fix_flag) {
                $('.inner').removeClass('nofix').addClass('fix');
            } else {
                $('.inner').removeClass('fix').addClass('nofix');
            }
        }
    }, 200);
});
