/*jQuery.noConflict();*/
jQuery(function($) {

  $('a.slideshow').colorbox({
    rel: "slideshow",
    transition: "fade"
  });

  // Google Map
  $("#modalmap").colorbox({
    iframe: true,
    innerWidth: "50%",
    innerHeight: "50%",
    href: "http://maps.google.com/maps?q=58+Sand+Hill+Road,+Vernon,+NJ&hl=en&ll=41.205781,-74.507561&spn=0.043846,0.075531&sll=40.07304,-74.724323&sspn=5.707596,9.667969&oq=58+Sand+Hill+road+Vernon&hnear=58+Sand+Hill+Rd,+Vernon,+Sussex,+New+Jersey+07461&t=m&z=14&iwloc=A&iwloc=A&output=embed"
  });
});
