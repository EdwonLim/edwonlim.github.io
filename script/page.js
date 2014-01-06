window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var fix_div = document.getElementById( "inner" );
    if( t >= 227 ) {
        fix_div.className = "inner fix";
    } else {
        fix_div.className = "inner nofix";
    }
}