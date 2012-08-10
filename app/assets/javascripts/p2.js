/*jQuery.noConflict();*/
jQuery(function($) { 
		
	// Superfish
	$("ul.sf-menu").supersubs({ 
		minWidth:    10,   // minimum width of sub-menus in em units 
		maxWidth:    25,   // maximum width of sub-menus in em units 
		extraWidth:  1     // extra width can ensure lines don't sometimes turn over 
						   // due to slight rounding differences and font-family 
	}).superfish({
		delay:			300,
		dropShadows:    false
	});  // call supersubs first, then superfish, so that subs are 
					 // not display:none when measuring. Call before initialising 
					 // containing tabs for same reason. 
			

	// Full page background
	$.supersized({
		//Background image
		slides	:  [ { image : '/assets/bg3.jpg' } ]
	});
			
	
	// Cufon
	Cufon.replace('.replace,.sidebar-widget h4',{fontFamily: 'Museo 500'} );
	Cufon.replace('.sf-menu a',{fontFamily: 'Museo Sans 500'} );
	
	// ColorBox
	$(".video_modal").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%"});
	$("a[rel='example1']").colorbox();
	$("a[rel='example2']").colorbox({transition:"fade"});
	$("a[rel='example3']").colorbox({transition:"none"});
	$("a[rel='example4']").colorbox({slideshow:true});

	// Scroll to Top
	$('#toTop').click(function() {
		$('#content-wrapper').animate({scrollTop:0},600);
	});	
	
	// Twitter Feed
	$(".pkb-tweet").tweet({
		username: "envato",
		join_text: "auto",
		count: 1,
		auto_join_text_default: "we said,",
		auto_join_text_ed: "we",
		auto_join_text_ing: "we were",
		auto_join_text_reply: "we replied to",
		auto_join_text_url: "we were checking out",
		loading_text: "loading tweets..."
	});

	
	// Google Map
	$("#modalmap").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%", href:"http://maps.google.com/maps?q=58+Sand+Hill+Road,+Vernon,+NJ&hl=en&ll=41.205781,-74.507561&spn=0.043846,0.075531&sll=40.07304,-74.724323&sspn=5.707596,9.667969&oq=58+Sand+Hill+road+Vernon&hnear=58+Sand+Hill+Rd,+Vernon,+Sussex,+New+Jersey+07461&t=m&z=14&iwloc=A&iwloc=A&output=embed" });
});




/*jQuery.noConflict();*/
jQuery(function($) { 
		
	// Superfish
	$("ul.sf-menu").supersubs({ 
		minWidth:    10,   // minimum width of sub-menus in em units 
		maxWidth:    25,   // maximum width of sub-menus in em units 
		extraWidth:  1     // extra width can ensure lines don't sometimes turn over 
						   // due to slight rounding differences and font-family 
	}).superfish({
		delay:			300,
		dropShadows:    false
	});  // call supersubs first, then superfish, so that subs are 
					 // not display:none when measuring. Call before initialising 
					 // containing tabs for same reason. 
			

	// Full page background
	$.supersized({
		//Background image
		slides	:  [ { image : 'assets/bg3.jpg' } ]
	});
			
	
	// Cufon
	Cufon.replace('.replace,.sidebar-widget h4',{fontFamily: 'Museo 500'} );
	Cufon.replace('.sf-menu a',{fontFamily: 'Museo Sans 500'} );
	
	// ColorBox
	$(".video_modal").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%"});
	$("a[rel='example1']").colorbox();
	$("a[rel='example2']").colorbox({transition:"fade"});
	$("a[rel='example3']").colorbox({transition:"none"});
	$("a[rel='example4']").colorbox({slideshow:true});

	// Scroll to Top
	$('#toTop').click(function() {
		$('#content-wrapper').animate({scrollTop:0},600);
	});	
	
	// Twitter Feed
	$(".pkb-tweet").tweet({
		username: "envato",
		join_text: "auto",
		count: 1,
		auto_join_text_default: "we said,",
		auto_join_text_ed: "we",
		auto_join_text_ing: "we were",
		auto_join_text_reply: "we replied to",
		auto_join_text_url: "we were checking out",
		loading_text: "loading tweets..."
	});

	
	// Google Map
	$("#modalmap").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%", href:"http://maps.google.com/maps?q=58+Sand+Hill+Road,+Vernon,+NJ&hl=en&ll=41.205781,-74.507561&spn=0.043846,0.075531&sll=40.07304,-74.724323&sspn=5.707596,9.667969&oq=58+Sand+Hill+road+Vernon&hnear=58+Sand+Hill+Rd,+Vernon,+Sussex,+New+Jersey+07461&t=m&z=14&iwloc=A&iwloc=A&output=embed" });
});




/*jQuery.noConflict();*/
jQuery(function($) { 
		
	// Superfish
	$("ul.sf-menu").supersubs({ 
		minWidth:    10,   // minimum width of sub-menus in em units 
		maxWidth:    25,   // maximum width of sub-menus in em units 
		extraWidth:  1     // extra width can ensure lines don't sometimes turn over 
						   // due to slight rounding differences and font-family 
	}).superfish({
		delay:			300,
		dropShadows:    false
	});  // call supersubs first, then superfish, so that subs are 
					 // not display:none when measuring. Call before initialising 
					 // containing tabs for same reason. 
			

	// Full page background
	$.supersized({
		//Background image
		slides	:  [ { image : 'assets/bg3.jpg' } ]
	});
			
	
	// Cufon
	Cufon.replace('.replace,.sidebar-widget h4',{fontFamily: 'Museo 500'} );
	Cufon.replace('.sf-menu a',{fontFamily: 'Museo Sans 500'} );
	
	// ColorBox
	$(".video_modal").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%"});
	$("a[rel='example1']").colorbox();
	$("a[rel='example2']").colorbox({transition:"fade"});
	$("a[rel='example3']").colorbox({transition:"none"});
	$("a[rel='example4']").colorbox({slideshow:true});

	// Scroll to Top
	$('#toTop').click(function() {
		$('#content-wrapper').animate({scrollTop:0},600);
	});	
	
	// Twitter Feed
	$(".pkb-tweet").tweet({
		username: "envato",
		join_text: "auto",
		count: 1,
		auto_join_text_default: "we said,",
		auto_join_text_ed: "we",
		auto_join_text_ing: "we were",
		auto_join_text_reply: "we replied to",
		auto_join_text_url: "we were checking out",
		loading_text: "loading tweets..."
	});

	
	// Google Map
	$("#modalmap").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%", href:"http://maps.google.com/maps?q=58+Sand+Hill+Road,+Vernon,+NJ&hl=en&ll=41.205781,-74.507561&spn=0.043846,0.075531&sll=40.07304,-74.724323&sspn=5.707596,9.667969&oq=58+Sand+Hill+road+Vernon&hnear=58+Sand+Hill+Rd,+Vernon,+Sussex,+New+Jersey+07461&t=m&z=14&iwloc=A&iwloc=A&output=embed" });
});




/*jQuery.noConflict();*/
jQuery(function($) { 
		
	// Superfish
	$("ul.sf-menu").supersubs({ 
		minWidth:    10,   // minimum width of sub-menus in em units 
		maxWidth:    25,   // maximum width of sub-menus in em units 
		extraWidth:  1     // extra width can ensure lines don't sometimes turn over 
						   // due to slight rounding differences and font-family 
	}).superfish({
		delay:			300,
		dropShadows:    false
	});  // call supersubs first, then superfish, so that subs are 
					 // not display:none when measuring. Call before initialising 
					 // containing tabs for same reason. 
			

	// Full page background
	$.supersized({
		//Background image
		slides	:  [ { image : 'assets/bg3.jpg' } ]
	});
			
	
	// Cufon
	Cufon.replace('.replace,.sidebar-widget h4',{fontFamily: 'Museo 500'} );
	Cufon.replace('.sf-menu a',{fontFamily: 'Museo Sans 500'} );
	
	// ColorBox
	$(".video_modal").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%"});
	$("a[rel='example1']").colorbox();
	$("a[rel='example2']").colorbox({transition:"fade"});
	$("a[rel='example3']").colorbox({transition:"none"});
	$("a[rel='example4']").colorbox({slideshow:true});

	// Scroll to Top
	$('#toTop').click(function() {
		$('#content-wrapper').animate({scrollTop:0},600);
	});	
	
	// Twitter Feed
	$(".pkb-tweet").tweet({
		username: "envato",
		join_text: "auto",
		count: 1,
		auto_join_text_default: "we said,",
		auto_join_text_ed: "we",
		auto_join_text_ing: "we were",
		auto_join_text_reply: "we replied to",
		auto_join_text_url: "we were checking out",
		loading_text: "loading tweets..."
	});

	
	// Google Map
	$("#modalmap").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%", href:"http://maps.google.com/maps?q=58+Sand+Hill+Road,+Vernon,+NJ&hl=en&ll=41.205781,-74.507561&spn=0.043846,0.075531&sll=40.07304,-74.724323&sspn=5.707596,9.667969&oq=58+Sand+Hill+road+Vernon&hnear=58+Sand+Hill+Rd,+Vernon,+Sussex,+New+Jersey+07461&t=m&z=14&iwloc=A&iwloc=A&output=embed" });
});




/*jQuery.noConflict();*/
jQuery(function($) { 
		
	// Superfish
	$("ul.sf-menu").supersubs({ 
		minWidth:    10,   // minimum width of sub-menus in em units 
		maxWidth:    25,   // maximum width of sub-menus in em units 
		extraWidth:  1     // extra width can ensure lines don't sometimes turn over 
						   // due to slight rounding differences and font-family 
	}).superfish({
		delay:			300,
		dropShadows:    false
	});  // call supersubs first, then superfish, so that subs are 
					 // not display:none when measuring. Call before initialising 
					 // containing tabs for same reason. 
			

	// Full page background
	$.supersized({
		//Background image
		slides	:  [ { image : 'assets/bg3.jpg' } ]
	});
			
	
	// Cufon
	Cufon.replace('.replace,.sidebar-widget h4',{fontFamily: 'Museo 500'} );
	Cufon.replace('.sf-menu a',{fontFamily: 'Museo Sans 500'} );
	
	// ColorBox
	$(".video_modal").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%"});
	$("a[rel='example1']").colorbox();
	$("a[rel='example2']").colorbox({transition:"fade"});
	$("a[rel='example3']").colorbox({transition:"none"});
	$("a[rel='example4']").colorbox({slideshow:true});

	// Scroll to Top
	$('#toTop').click(function() {
		$('#content-wrapper').animate({scrollTop:0},600);
	});	
	
	// Twitter Feed
	$(".pkb-tweet").tweet({
		username: "envato",
		join_text: "auto",
		count: 1,
		auto_join_text_default: "we said,",
		auto_join_text_ed: "we",
		auto_join_text_ing: "we were",
		auto_join_text_reply: "we replied to",
		auto_join_text_url: "we were checking out",
		loading_text: "loading tweets..."
	});

	
	// Google Map
	$("#modalmap").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%", href:"http://maps.google.com/maps?q=58+Sand+Hill+Road,+Vernon,+NJ&hl=en&ll=41.205781,-74.507561&spn=0.043846,0.075531&sll=40.07304,-74.724323&sspn=5.707596,9.667969&oq=58+Sand+Hill+road+Vernon&hnear=58+Sand+Hill+Rd,+Vernon,+Sussex,+New+Jersey+07461&t=m&z=14&iwloc=A&iwloc=A&output=embed" });
});




/*jQuery.noConflict();*/
jQuery(function($) { 
		
	// Superfish
	$("ul.sf-menu").supersubs({ 
		minWidth:    10,   // minimum width of sub-menus in em units 
		maxWidth:    25,   // maximum width of sub-menus in em units 
		extraWidth:  1     // extra width can ensure lines don't sometimes turn over 
						   // due to slight rounding differences and font-family 
	}).superfish({
		delay:			300,
		dropShadows:    false
	});  // call supersubs first, then superfish, so that subs are 
					 // not display:none when measuring. Call before initialising 
					 // containing tabs for same reason. 
			

	// Full page background
	$.supersized({
		//Background image
		slides	:  [ { image : 'assets/bg3.jpg' } ]
	});
			
	
	// Cufon
	Cufon.replace('.replace,.sidebar-widget h4',{fontFamily: 'Museo 500'} );
	Cufon.replace('.sf-menu a',{fontFamily: 'Museo Sans 500'} );
	
	// ColorBox
	$(".video_modal").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%"});
	$("a[rel='example1']").colorbox();
	$("a[rel='example2']").colorbox({transition:"fade"});
	$("a[rel='example3']").colorbox({transition:"none"});
	$("a[rel='example4']").colorbox({slideshow:true});

	// Scroll to Top
	$('#toTop').click(function() {
		$('#content-wrapper').animate({scrollTop:0},600);
	});	
	
	// Twitter Feed
	$(".pkb-tweet").tweet({
		username: "envato",
		join_text: "auto",
		count: 1,
		auto_join_text_default: "we said,",
		auto_join_text_ed: "we",
		auto_join_text_ing: "we were",
		auto_join_text_reply: "we replied to",
		auto_join_text_url: "we were checking out",
		loading_text: "loading tweets..."
	});

	
	// Google Map
	$("#modalmap").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%", href:"http://maps.google.com/maps?q=58+Sand+Hill+Road,+Vernon,+NJ&hl=en&ll=41.205781,-74.507561&spn=0.043846,0.075531&sll=40.07304,-74.724323&sspn=5.707596,9.667969&oq=58+Sand+Hill+road+Vernon&hnear=58+Sand+Hill+Rd,+Vernon,+Sussex,+New+Jersey+07461&t=m&z=14&iwloc=A&iwloc=A&output=embed" });
});




/*jQuery.noConflict();*/
jQuery(function($) { 
		
	// Superfish
	$("ul.sf-menu").supersubs({ 
		minWidth:    10,   // minimum width of sub-menus in em units 
		maxWidth:    25,   // maximum width of sub-menus in em units 
		extraWidth:  1     // extra width can ensure lines don't sometimes turn over 
						   // due to slight rounding differences and font-family 
	}).superfish({
		delay:			300,
		dropShadows:    false
	});  // call supersubs first, then superfish, so that subs are 
					 // not display:none when measuring. Call before initialising 
					 // containing tabs for same reason. 
			

	// Full page background
	$.supersized({
		//Background image
		slides	:  [ { image : 'assets/bg3.jpg' } ]
	});
			
	
	// Cufon
	Cufon.replace('.replace,.sidebar-widget h4',{fontFamily: 'Museo 500'} );
	Cufon.replace('.sf-menu a',{fontFamily: 'Museo Sans 500'} );
	
	// ColorBox
	$(".video_modal").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%"});
	$("a[rel='example1']").colorbox();
	$("a[rel='example2']").colorbox({transition:"fade"});
	$("a[rel='example3']").colorbox({transition:"none"});
	$("a[rel='example4']").colorbox({slideshow:true});

	// Scroll to Top
	$('#toTop').click(function() {
		$('#content-wrapper').animate({scrollTop:0},600);
	});	
	
	// Twitter Feed
	$(".pkb-tweet").tweet({
		username: "envato",
		join_text: "auto",
		count: 1,
		auto_join_text_default: "we said,",
		auto_join_text_ed: "we",
		auto_join_text_ing: "we were",
		auto_join_text_reply: "we replied to",
		auto_join_text_url: "we were checking out",
		loading_text: "loading tweets..."
	});

	
	// Google Map
	$("#modalmap").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%", href:"http://maps.google.com/maps?q=58+Sand+Hill+Road,+Vernon,+NJ&hl=en&ll=41.205781,-74.507561&spn=0.043846,0.075531&sll=40.07304,-74.724323&sspn=5.707596,9.667969&oq=58+Sand+Hill+road+Vernon&hnear=58+Sand+Hill+Rd,+Vernon,+Sussex,+New+Jersey+07461&t=m&z=14&iwloc=A&iwloc=A&output=embed" });
});




/*jQuery.noConflict();*/
jQuery(function($) { 
		
	// Superfish
	$("ul.sf-menu").supersubs({ 
		minWidth:    10,   // minimum width of sub-menus in em units 
		maxWidth:    25,   // maximum width of sub-menus in em units 
		extraWidth:  1     // extra width can ensure lines don't sometimes turn over 
						   // due to slight rounding differences and font-family 
	}).superfish({
		delay:			300,
		dropShadows:    false
	});  // call supersubs first, then superfish, so that subs are 
					 // not display:none when measuring. Call before initialising 
					 // containing tabs for same reason. 
			

	// Full page background
	$.supersized({
		//Background image
		slides	:  [ { image : 'assets/bg3.jpg' } ]
	});
			
	
	// Cufon
	Cufon.replace('.replace,.sidebar-widget h4',{fontFamily: 'Museo 500'} );
	Cufon.replace('.sf-menu a',{fontFamily: 'Museo Sans 500'} );
	
	// ColorBox
	$(".video_modal").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%"});
	$("a[rel='example1']").colorbox();
	$("a[rel='example2']").colorbox({transition:"fade"});
	$("a[rel='example3']").colorbox({transition:"none"});
	$("a[rel='example4']").colorbox({slideshow:true});

	// Scroll to Top
	$('#toTop').click(function() {
		$('#content-wrapper').animate({scrollTop:0},600);
	});	
	
	// Twitter Feed
	$(".pkb-tweet").tweet({
		username: "envato",
		join_text: "auto",
		count: 1,
		auto_join_text_default: "we said,",
		auto_join_text_ed: "we",
		auto_join_text_ing: "we were",
		auto_join_text_reply: "we replied to",
		auto_join_text_url: "we were checking out",
		loading_text: "loading tweets..."
	});

	
	// Google Map
	$("#modalmap").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%", href:"http://maps.google.com/maps?q=58+Sand+Hill+Road,+Vernon,+NJ&hl=en&ll=41.205781,-74.507561&spn=0.043846,0.075531&sll=40.07304,-74.724323&sspn=5.707596,9.667969&oq=58+Sand+Hill+road+Vernon&hnear=58+Sand+Hill+Rd,+Vernon,+Sussex,+New+Jersey+07461&t=m&z=14&iwloc=A&iwloc=A&output=embed" });
});




/*jQuery.noConflict();*/
jQuery(function($) { 
		
	// Superfish
	$("ul.sf-menu").supersubs({ 
		minWidth:    10,   // minimum width of sub-menus in em units 
		maxWidth:    25,   // maximum width of sub-menus in em units 
		extraWidth:  1     // extra width can ensure lines don't sometimes turn over 
						   // due to slight rounding differences and font-family 
	}).superfish({
		delay:			300,
		dropShadows:    false
	});  // call supersubs first, then superfish, so that subs are 
					 // not display:none when measuring. Call before initialising 
					 // containing tabs for same reason. 
			

	// Full page background
	$.supersized({
		//Background image
		slides	:  [ { image : 'assets/bg3.jpg' } ]
	});
			
	
	// Cufon
	Cufon.replace('.replace,.sidebar-widget h4',{fontFamily: 'Museo 500'} );
	Cufon.replace('.sf-menu a',{fontFamily: 'Museo Sans 500'} );
	
	// ColorBox
	$(".video_modal").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%"});
	$("a[rel='example1']").colorbox();
	$("a[rel='example2']").colorbox({transition:"fade"});
	$("a[rel='example3']").colorbox({transition:"none"});
	$("a[rel='example4']").colorbox({slideshow:true});

	// Scroll to Top
	$('#toTop').click(function() {
		$('#content-wrapper').animate({scrollTop:0},600);
	});	
	
	// Twitter Feed
	$(".pkb-tweet").tweet({
		username: "envato",
		join_text: "auto",
		count: 1,
		auto_join_text_default: "we said,",
		auto_join_text_ed: "we",
		auto_join_text_ing: "we were",
		auto_join_text_reply: "we replied to",
		auto_join_text_url: "we were checking out",
		loading_text: "loading tweets..."
	});

	
	// Google Map
	$("#modalmap").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%", href:"http://maps.google.com/maps?q=58+Sand+Hill+Road,+Vernon,+NJ&hl=en&ll=41.205781,-74.507561&spn=0.043846,0.075531&sll=40.07304,-74.724323&sspn=5.707596,9.667969&oq=58+Sand+Hill+road+Vernon&hnear=58+Sand+Hill+Rd,+Vernon,+Sussex,+New+Jersey+07461&t=m&z=14&iwloc=A&iwloc=A&output=embed" });
});




/*jQuery.noConflict();*/
jQuery(function($) { 
		
	// Superfish
	$("ul.sf-menu").supersubs({ 
		minWidth:    10,   // minimum width of sub-menus in em units 
		maxWidth:    25,   // maximum width of sub-menus in em units 
		extraWidth:  1     // extra width can ensure lines don't sometimes turn over 
						   // due to slight rounding differences and font-family 
	}).superfish({
		delay:			300,
		dropShadows:    false
	});  // call supersubs first, then superfish, so that subs are 
					 // not display:none when measuring. Call before initialising 
					 // containing tabs for same reason. 
			

	// Full page background
	$.supersized({
		//Background image
		slides	:  [ { image : 'assets/bg3.jpg' } ]
	});
			
	
	// Cufon
	Cufon.replace('.replace,.sidebar-widget h4',{fontFamily: 'Museo 500'} );
	Cufon.replace('.sf-menu a',{fontFamily: 'Museo Sans 500'} );
	
	// ColorBox
	$(".video_modal").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%"});
	$("a[rel='example1']").colorbox();
	$("a[rel='example2']").colorbox({transition:"fade"});
	$("a[rel='example3']").colorbox({transition:"none"});
	$("a[rel='example4']").colorbox({slideshow:true});

	// Scroll to Top
	$('#toTop').click(function() {
		$('#content-wrapper').animate({scrollTop:0},600);
	});	
	
	// Twitter Feed
	$(".pkb-tweet").tweet({
		username: "envato",
		join_text: "auto",
		count: 1,
		auto_join_text_default: "we said,",
		auto_join_text_ed: "we",
		auto_join_text_ing: "we were",
		auto_join_text_reply: "we replied to",
		auto_join_text_url: "we were checking out",
		loading_text: "loading tweets..."
	});

	
	// Google Map
	$("#modalmap").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%", href:"http://maps.google.com/maps?q=58+Sand+Hill+Road,+Vernon,+NJ&hl=en&ll=41.205781,-74.507561&spn=0.043846,0.075531&sll=40.07304,-74.724323&sspn=5.707596,9.667969&oq=58+Sand+Hill+road+Vernon&hnear=58+Sand+Hill+Rd,+Vernon,+Sussex,+New+Jersey+07461&t=m&z=14&iwloc=A&iwloc=A&output=embed" });
});




/*jQuery.noConflict();*/
jQuery(function($) { 
		
	// Superfish
	$("ul.sf-menu").supersubs({ 
		minWidth:    10,   // minimum width of sub-menus in em units 
		maxWidth:    25,   // maximum width of sub-menus in em units 
		extraWidth:  1     // extra width can ensure lines don't sometimes turn over 
						   // due to slight rounding differences and font-family 
	}).superfish({
		delay:			300,
		dropShadows:    false
	});  // call supersubs first, then superfish, so that subs are 
					 // not display:none when measuring. Call before initialising 
					 // containing tabs for same reason. 
			

	// Full page background
	$.supersized({
		//Background image
		slides	:  [ { image : 'assets/bg3.jpg' } ]
	});
			
	
	// Cufon
	Cufon.replace('.replace,.sidebar-widget h4',{fontFamily: 'Museo 500'} );
	Cufon.replace('.sf-menu a',{fontFamily: 'Museo Sans 500'} );
	
	// ColorBox
	$(".video_modal").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%"});
	$("a[rel='example1']").colorbox();
	$("a[rel='example2']").colorbox({transition:"fade"});
	$("a[rel='example3']").colorbox({transition:"none"});
	$("a[rel='example4']").colorbox({slideshow:true});

	// Scroll to Top
	$('#toTop').click(function() {
		$('#content-wrapper').animate({scrollTop:0},600);
	});	
	
	// Twitter Feed
	$(".pkb-tweet").tweet({
		username: "envato",
		join_text: "auto",
		count: 1,
		auto_join_text_default: "we said,",
		auto_join_text_ed: "we",
		auto_join_text_ing: "we were",
		auto_join_text_reply: "we replied to",
		auto_join_text_url: "we were checking out",
		loading_text: "loading tweets..."
	});

	
	// Google Map
	$("#modalmap").colorbox({iframe:true, innerWidth:"50%", innerHeight:"50%", href:"http://maps.google.com/maps?q=58+Sand+Hill+Road,+Vernon,+NJ&hl=en&ll=41.205781,-74.507561&spn=0.043846,0.075531&sll=40.07304,-74.724323&sspn=5.707596,9.667969&oq=58+Sand+Hill+road+Vernon&hnear=58+Sand+Hill+Rd,+Vernon,+Sussex,+New+Jersey+07461&t=m&z=14&iwloc=A&iwloc=A&output=embed" });
	
	// Form Init
	var options = { 
		beforeSubmit:  validate,  // pre-submit callback 
		success:       showResponse,  // post-submit callback 
		resetForm: true        // reset the form after successful submit 
	}; 
					
	$('#contact_form').ajaxForm(options); 
					
	function showResponse(responseText, statusText){
		$('#contact_form').slideUp({ opacity: "hide" }, "normal")
		$('#success').slideDown({ opacity: "show" }, "slow")
		
	}
					
	function validate(formData, jqForm, options) {
		$("p.error").slideUp({ opacity: "hide" }, "fast");
				 
		var nameValue = $('input[name=cform_name]').fieldValue(); 
		var emailValue = $('input[name=cform_email]').fieldValue();
		var messageValue = $('textarea[name=cform_message]').fieldValue(); 
		
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var correct = true;
		
		if (!nameValue[0]) {
			$("p.error.wrong_name").slideDown({ opacity: "show" }, "slow");
			correct = false;
		}
		
		if (!emailValue[0]) {
			$("p.error.wrong_email").slideDown({ opacity: "show" }, "slow");
			correct = false;
		} else if(!emailReg.test(emailValue[0])) {
			$("p.error.wrong_email").slideDown({ opacity: "show" }, "slow");
			correct = false;
		}
		
		if (!messageValue[0]) {
			$("p.error.wrong_message").slideDown({ opacity: "show" }, "slow");
			correct = false;
		}
		
		if (!correct) {return false;}
	}
});




