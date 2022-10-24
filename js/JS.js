var catnum = 1
function CreateDiv(x, y, text){
    var textcolor = ['#a7a8a7','#8db5f0','#f5b3d7', '#bed4a7','#fae37f','#453eab','#f5a6cc','#8db5f0','#bed4a7','#fae37f','#453eab','#8ccfb1','#c2ad8d']
    var Index = Math.floor((Math.random()*textcolor.length));
    var Color = textcolor[Index];
    // $("#Tittle").css({
    //     'color': Color
    // })
    $("#Tittle").text(text);
    newDiv = $("<div></div>");
    newDiv.css({
        // 'background-color': 'red',
        'position': 'absolute',
        'width': '100px',
        'height': '50px',
        'text-align': 'center',
        'left': x+'px',
        'top':+y+'px',
        'font-size': '50px',
        'color': Color,
        'z-index': '1'
    })
    newDiv.addClass('newDiv');
    $(".Main").html(newDiv);
    $(".newDiv").html("<img src='img/"+catnum+".jpg'><br>"+text);
    $(".newDiv").animate({top:+y-35+'px'});
    catnum = catnum%16+1;
}

$(document).ready(function(){
    $(".Main").mousedown(function(e){
        var arr = ["HaHa", "Hello", "Hi", "Meow", "? ? ?", "QAQ", "OwO","! ! !", "QwQ","OAO", "?!?!?!"]
        if(e.which == 1){
            var now = $(".Main")
            var x = e.pageX - now.offset().left;
            var y = e.pageY - now.offset().top;
            var Index = Math.floor((Math.random()*arr.length));
            var text = arr[Index];
            CreateDiv(x, y, text);
            $(".newdiv").delay(600).hide(0);
            console.log(x+','+y+','+text);

        }
    })
})