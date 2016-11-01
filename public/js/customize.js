

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
        reg_username: "required",
    	  reg_password: {
    			required: true,
    			minlength: 8
    		},
        reg_password_confirm: {
          required: true,
          minlength: 8,
          equalTo : "#reg_password"
        },
    		reg_email: {
    	    required: true,
    			email: true
    		},
      },
  	  errorClass: "form-invalid",
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

          	        }
          		});

//File Upload functions
// $(function () {
//     $('#fileupload').fileupload({
//         dataType: 'csv',
//         done: function (e, data) {
//             $.each(data.result.files, function (index, file) {
//                 $('<p/>').text(file.name).appendTo(document.body);
//             });
//         }
//     });
// });

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

          	        }
          		});

//Done submit action
// $('#done').click(function(){
//
// });

$('#register-btn').click(function(ev) {
    ev.preventDefault(); // to stop the form from submitting
    var values = {};
    $.each($('#register-form').serializeArray(), function(i, field) {
    values[field.name] = field.value;
    });
    $.post("/api/users",values,function(res){
      alert(1);
      window.location.href="http://localhost:3000/login.html";
    });
});

// function doThis(e){
//     var data = new FormData();
//     jQuery.each(jQuery('#file-upload')[0].files, function(i, file) {
//         data.append('campaign-name', text);
//         data.append('csv', file);
//       });
//       //  console.log(data.get('csv'));
//       $.ajax({
//             url: "api/startCampaign",
//             type: 'POST',
//             data: data,
//             async: false,
//             success: function (data) {
//                 alert('done')
//             },
//             cache: false,
//           //  contentType: 'application/json',
//             processData: false
//         });
//         console.log('here');
//
//     return false;
// }

// Create Campaign and Schedule Campaign
function doThis(e){
    if(e.target=='#btnStart'){
      var data = new FormData();
      jQuery.each(jQuery('#file-upload')[0].files, function(i, file) {
          data.append('#campaign-name', text);
          data.append('csv', file);
        });
         console.log(data.get('csv'));
        $.ajax({
              url: "api/scheduleCampaign",
              type: 'POST',
              data: data,
              async: false,
              success: function (data) {
                  alert('done')
              },
              cache: false,
            //  contentType: 'application/json',
              processData: false
          });
          // console.log('here');

    }

    if(e.target=='#btnSchedule'){
        var data = new FormData();
        jQuery.each(jQuery('#file-upload')[0].files, function(i, file) {
            data.append('#campaign-name', text);
            data.append('csv', file);
            data.append('#fromDate', text);
            data.append('#toDate', text);
            data.append('#time', text);
          });
           console.log(data.get('csv'));
          $.ajax({
                url: "api/scheduleCampaign",
                type: 'POST',
                data: data,
                async: false,
                success: function (data) {
                    alert('done')
                },
                cache: false,
              //  contentType: 'application/json',
                processData: false
            });
            // console.log('here');
      }
}

//Fetch values for the campaign list details
function fetchVal(e){
    var data = new FormData();
      //  console.log(data.get('csv'));
      $.ajax({
            url: "api/campaigns",
            type: 'GET',
            async: false,
            success: function (data) {
                var e = "";
                for(i=0; i < data.length; i++){
                  e += '<div class="container bg-grey campaign-block"><div class="col-md-12"><h3 class="no-margin" name="Campaign_name" class="Campaign_name">'+ data[i].Campaign_name +'</h3></div><div class="col-md-12 campaign-info"><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span><span class="FromDate">' + data[i].From_Date + '</span><br/><br/><div class="col-md-3 divider"><span class="glyphicon glyphicon-time" aria-hidden="true"></span><span class="campaign_status">' + data[i].CampaignStatus + '</span></div><div class="col-md-2 col-md-offset-1 stats"><p class="font-bold">Total Calls</p><p class="font-bold"><span class="TotalCalls">' + data[i].TotalCalls + '</span></p></div><div class="col-md-2 stats"><p class="font-bold">Calls Answered</p><p class="font-bold"><span class="AnsweredCalls">' + data[i].AnsweredCalls +'</span></p></div><div class="col-md-2 stats"><p class="font-bold">No Response</p><p class="font-bold"><span class="NoResponse"> ' + data[i].NoResponse +'</span></p></div><div class="col-md-2 stats"><p class="font-bold">Calls Failed</p><p class="font-bold"><span class="FailedCalls">' + data[i].FailedCalls +'</span></p></div></div></div>';
                }
                $('.campaign-block').html(e);
            },
            cache: false,
          //  contentType: 'application/json',
            processData: false
        });
        console.log('here');

    return false;
}
fetchVal();
