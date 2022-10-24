// var webbtn = document.getElementById("webmeme");
// var webnum = 0;
// webbtn.addEventListener('click', function(){
//     var Pic = document.getElementById('pic');
//     webnum = (webnum%7)+1;
//     Pic.src = "img/gif/"+webnum+".gif";
// })
var webnum = 0;
$(document).ready(function(){
    $("#webmeme").click(function(){
        webnum = (webnum%7)+1;
        $("#pic").attr('src', "img/gif/"+webnum+".gif");
    })
})