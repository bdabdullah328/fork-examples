"use strict";

$(function(){
    var nameOfPerson = 'Zama'; 
    /* Sign in event */
    var keyEvent = 'dblclick';
    $('#login').click(function(){
        var password = $('#exampleInputPassword1').val();
        if(!(/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(password))) {
            $('#exampleInputPassword1').parent('.form-group').find('.error-messages').html("Invalid Zip Code");
            $('#exampleInputPassword1').parent('.form-group').addClass('error');
            return false;
        } else {
           $('#exampleInputPassword1').parent('.form-group').removeClass('error'); 
        }
        return false;
    });    
    
    

    $('#exampleInputPassword1').on('keyup',function(){
        var zipcode = $('#exampleInputPassword1').val();
        if(!(/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipcode))) {
            $('#exampleInputPassword1').parent('.form-group').find('.error-messages').html("Invalid Zip Code");
            $('#exampleInputPassword1').parent('.form-group').addClass('error');
        } else {
           $('#exampleInputPassword1').parent('.form-group').removeClass('error'); 
        }
    });

    /* End Sign in event */

    /* Sign Up event */
    $('#signup').click(function(){
        var password = $('#exampleInputPassword2').val();
        var confirm_pass = $('#confirmInputPassword2').val();
        if(password!==confirm_pass) {
            $('#confirmInputPassword2').parent('.form-group').removeClass('valid');
            $('#confirmInputPassword2').parent('.form-group').find('.error-messages').html("Password don't Match");
            $('#confirmInputPassword2').parent('.form-group').addClass('error');
            return false;
        } else {
           $('#confirmInputPassword2').parent('.form-group').removeClass('error'); 
        }
    });

    $('#confirmInputPassword2').on('keyup', function(){
        var password = $('#exampleInputPassword2').val();
        var confirm_pass = $('#confirmInputPassword2').val();
        if(password===confirm_pass) {
            //$('#confirmInputPassword2').parent('.form-group').find('.error-messages').html("Password Match"); 
            $('#confirmInputPassword2').parent('.form-group').removeClass('error');
            $('#confirmInputPassword2').parent('.form-group').addClass('valid');
        } else if (password!==confirm_pass){
           //$('#confirmInputPassword2').parent('.form-group').removeClass('error'); 
            $('#confirmInputPassword2').parent('.form-group').find('.error-messages').html("Password don't Match");
            $('#confirmInputPassword2').parent('.form-group').addClass('error');
        }
    });
    
    /* End Sign Up event */

    var json = {
        name : "Zama khan",
        isTeacher: function() {
            return true;
        }
    }
    $.ajax({
        url: 'http://localhost:3000/posts',
        
        success: function(data) {
            
                var htmlContent = $("#entry-template").html();
                //got the content of the script block
                
                var template = Handlebars.compile(htmlContent);
                
                var html = template({
                    posts: data
                });
                
               
                
                $('.main-section').html(html);
                
                $('.media').on('click', function(){
                    var postId = $(this).data('post');
                    $.ajax({
                        url: 'http://localhost:3000/posts/' + postId,
                        success: function(data) {
                            var htmlContent = $("#post-template").html();
                            //got the content of the script block

                            var template = Handlebars.compile(htmlContent);

                            var html = template(data);
                            $('.main-section').html(html);
                        }
                    })
                });
                
        },
        complete: function(data){
            console.log("Failure")
        }
    }); */
});