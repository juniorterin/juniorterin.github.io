jQuery(document).ready(function($) {
   $('.popup').click(function() {
     var NWin = window.open($(this).prop('href'), '', 'scrollbars=1,height=400,width=400');
     if (window.focus)
     {
       NWin.focus();
     }
     return false;
    });
});