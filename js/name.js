// var Button = document.getElementById('btn');
// Button.addEventListener('click',function(){
//     var Out = document.getElementById('Output');
//     var Name = document.getElementById('name');
//     Out.innerHTML = "Hi! "+Name.value;
//     Name.value="";
// })

function GetTime(){
    var t = new Date();
    var h = t.getHours();
    var m = t.getMinutes();
    var s = t.getSeconds();
    if(h < 10) h='0'+h;
    if(m < 10) m='0'+m;
    if(s < 10) s='0'+s;
    $("#time").text(h+":"+m+":"+s);
    $("#Day").text(t.toLocaleDateString());
}


$(document).ready(function(){
    $("#btn").click(function(){
        var N = $("#name").val();
        $("#Output").html("Hi !"+ N);
        $("#name").val("");
    })
    GetTime();
    setInterval("GetTime()",1000);
})


