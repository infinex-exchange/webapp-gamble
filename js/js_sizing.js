function doJsSizing() {
    document.body.style.setProperty('--emulated-100vh', window.innerHeight + 'px');
    document.body.style.setProperty('--height-mobile-nav', $('.navbar-mobile').first().outerHeight() + 'px');
    document.body.style.setProperty('--height-module-nav', $('.navbar-gamble').first().outerHeight() + 'px');
	document.body.style.setProperty('--height-main-nav', $('.navbar-master').first().outerHeight() + 'px');
    
    ['game'].forEach(function(i) {
        if($('#' + i).length == 0) return;
        
        var footerH = 0;
        if($('#' + i + '-footer').length) footerH = $('#' + i + '-footer').outerHeight();
        var remainH = $('#' + i).height() - $('#' + i + '-header').outerHeight() - footerH;
        document.body.style.setProperty('--target-height-' + i + '-data', remainH + 'px');
    });
}

$(document).ready(function() {
    $(document).on('renderingComplete', function() {
        doJsSizing();
    });

    $(window).resize(function() {
    	doJsSizing();
    });
});