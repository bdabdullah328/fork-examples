$(function(){
    var keyEvent = 'dblclick';
    $('#login').click(function(){
        var password = $('#exampleInputPassword1').val();
        if(!(/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(password))) {
            $('#exampleInputPassword1').parent('.form-group').find('.error-messages').html("Invalid Zip Code");
            $('#exampleInputPassword1').parent('.form-group').addClass('error');
        } else {
           $('#exampleInputPassword1').parent('.form-group').removeClass('error'); 
        }
    });
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
    })
});