   /*
   	code for the localScroll and scrollTo plug-in/method
   */
   $(document).ready(function() {
		// Scroll the whole document 
		$('#links').localScroll({
		   target:'body'
		});

       $('ul.nav li a').click(function() {
            $(this).css('color', 'white')        
       });		
});


/*//Planet Rotation animation
	$(function() {

    var $rota = $('#saturn'),
        degree = 0,
        timer;

    function rotate() {    
        $rota.css({ transform: 'rotate(' + degree + 'deg)'});
        // timeout increase degrees:
        timer = setTimeout(function() {
            ++degree;
            rotate(); // loop it
        },60);
    }

    rotate();    // run it!

});	*/




//------------------Pending For User Form Validation --------------///   
//TODO: Build a form for users to get in contact with 
//Build with proper validation



 