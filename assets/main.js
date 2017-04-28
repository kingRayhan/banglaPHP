$(document).ready(function(){
    anchors.options = {
        visible: 'always',
        icon: ''
    };
    anchors.add('.article-content-wrapper h1');
    anchors.add('.article-content-wrapper h2');
    anchors.add('.article-content-wrapper h3');
    
    
	// Sticky Menu
	var windows = $(window);

	windows.scroll(function() {

	    var headerHeight = $("#sidebar").height();
	    var MenuWrapper = $('#sidebar');

	    var scrollH = windows.scrollTop();

	    if (scrollH >= headerHeight + 10) {

	        MenuWrapper.addClass("sticky-nav");
	    } else {
	        MenuWrapper.removeClass("sticky-nav");

	    }
	});
    
    
    
});