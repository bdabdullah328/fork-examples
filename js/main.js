$(function(){
    var json = {
        name : "Zama khan",
        isTeacher: function() {
            return true;
        }
    }
    $.ajax({
        url: 'http://localhost:3000/posts',
        
        success: function(data) {
            
            data.forEach(function(post){
                console.log("ForEach Loop", post);

                
                var contentOfPost = '<div class="media"><div class="media-left"><a href="#"><img class="media-object" src="https://d13yacurqjgara.cloudfront.net/users/374290/screenshots/2481718/manila_dribbble_meetup.jpg" alt="..." height="100px" width="100px"></a></div><div class="media-body"><span>'+ post.id +'</span><h4 class="media-heading">'+ post.title +'</h4><p>'+ post.author+ '</p></div></div>';
                
                $('.main-section').append(contentOfPost);
                
            })
        },
        complete: function(data){
            console.log("Failure")
        }
    })
});