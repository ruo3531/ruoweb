var catbtn = document.getElementById("catmeme");
var webbtn = document.getElementById("webmeme");
var catnum = 0;
var webnum = 0;
catbtn.addEventListener('click', function(){
    var Pic = document.getElementById('pic');
    catnum = (catnum%7)+1;
    Pic.src = "img/catmeme/"+catnum+".jpg";
})

webbtn.addEventListener('click', function(){
    var Pic = document.getElementById('pic');
    webnum = (webnum%10)+1;
    Pic.src = "img/meme/"+webnum+".jpg";
})