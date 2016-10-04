

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//Login form Validation
$("#login-form").validate({
  	rules: {
      // reg_username: "required",
  	  // reg_password: "required",
    },
  	//errorClass: "form-invalid"
  });

	// Form Submission
  $("#login-form").submit(function() {
  	remove_loading($(this));
  });

  //Sign up form Validation
    $("#register-form").validate({
    	rules: {
        // reg_username: "required",
    	  // reg_password: {
    		// 	required: true,
    		// 	minlength: 8
    		// },
    		// reg_email: {
    	  //   required: true,
    		// 	email: true
    		// },
      },
  	  //errorClass: "form-invalid",
    });
    // Form Submission
    $("#register-form").submit(function() {
    	remove_loading($(this));
    });

$(function(){
    //Show start campaign section when clicked on Create a campaign button
    $("#startCampaign").click(function(){
        $("#createCampaign").collapse('show');
        $("#startCampaign").hide();
    });
    //Hide start campaign section when clicked on Done button
    $("#done").click(function(){
        $("#createCampaign").collapse('hide');
        $("#startCampaign").show();
    });
});

//Scroll to top when clicked on Done button
$("#done").on("click", function() {
    $("body").scrollTop(10);
});
$.validator.methods.email = function( value, element ) {
    return this.optional( element ) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm.test( value );
}


//DateTimePicker functions
$(function () {
  $('#datetimepicker1').datetimepicker({
    format: 'DD/MM/YYYY'    //excludes time
  });

  $('#datetimepicker2').datetimepicker({
      format: 'DD/MM/YYYY',     //excludes time
      useCurrent: false //Important! See issue #1075
  });
  //linked date picker
  $("#datetimepicker1").on("dp.change", function (e) {
      $('#datetimepicker2').data("DateTimePicker").minDate(e.date);
  });
  $("#datetimepicker2").on("dp.change", function (e) {
      $('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
  });
  $('#timepicker1').datetimepicker({
    format: 'LT'
  });
});

//Campaign name validation
$('#campaign-name').on("keyup",function () {
  if($('#campaign-name-form #campaign-name').val().length > 3){
      $('.tick1').show();
  }
  else if ($('#campaign-name-form #campaign-name').val().length <= 3){
      $('.tick1').hide();
  }
});

$('#campaign-name-form').validate({
          errorPlacement: function(error, element) {
              error.insertBefore(element);
          },
          			rules: {
          				campaign_name: {
                      required: true
          				}
          			},
          			messages: {
          				campaign_name: "Please enter valid name"
          			},
          			submitHandler: function(form) {
          	            $.post(
          	                //$templateDir + "/snippets/form-submit.php",  //Create a snippet tot include all submit actions - Gandharva
          	                //$('#campaign-name-form').serialize(),
          	            );
          	            //$('.landing-enquiry-form')[0].reset();
          	        }
          		});

//File Upload functions
$(function () {
    $('#fileupload').fileupload({
        dataType: 'csv',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                $('<p/>').text(file.name).appendTo(document.body);
            });
        }
    });
});

//Contact list upload form
$('#contact-list-upload').validate({
          errorPlacement: function(error, element) {
              error.insertBefore(element);
          },
          			rules: {

          			},
          			messages: {
          				files: "Please enter a valid file"
          			},
          			submitHandler: function(form) {
          	            $.post(
          	                //$templateDir + "/snippets/form-submit.php",  //Create a snippet tot include all submit actions - Gandharva
          	                //$('#campaign-name-form').serialize(),
          	            );
          	            //$('#campaign-name-form')[0].reset();
          	        }
          		});


  //Voice upload form
              $('#voice-upload').validate({
                        errorPlacement: function(error, element) {
                            error.insertBefore(element);
                        },
                        			rules: {

                        			},
                        			messages: {
                        				files: "Please enter a valid file"
                        			},
                        			submitHandler: function(form) {
                        	            $.post(
                        	                //$templateDir + "/snippets/form-submit.php",  //Create a snippet tot include all submit actions - Gandharva
                        	                //$('#voice-upload').serialize(),
                        	            );
                        	            //$('#voice-upload')[0].reset();
                        	        }
                        		});

//date-time-form
$('#date-time-form').validate({
          errorPlacement: function(error, element) {
              error.insertBefore(element);
          },
          			rules: {

          			},
          			messages: {

          			},
          			submitHandler: function(form) {
          	            $.post(
          	                //$templateDir + "/snippets/form-submit.php",  //Create a snippet tot include all submit actions - Gandharva
          	                //$('#date-time-form').serialize(),
          	            );
          	            //$('#date-time-form')[0].reset();
          	        }
          		});

//Done submit action
$('#done').click(function(){

});
