var catnum = 0;
var webnum = 0;

$(document).ready(function(){
    $("#catmeme").click(function(){
        catnum = (catnum%7)+1;
        $("#pic").attr('src', "img/catmeme/"+catnum+".jpg");
    })
    $("#webmeme").click(function(){
        webnum = (webnum%10)+1;
        $("#pic").attr('src', "img/meme/"+webnum+".jpg");
    })
})