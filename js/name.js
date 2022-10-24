// var Button = document.getElementById('btn');
// Button.addEventListener('click',function(){
//     var Out = document.getElementById('Output');
//     var Name = document.getElementById('name');
//     Out.innerHTML = "Hi! "+Name.value;
//     Name.value="";
// })
$(document).ready(function(){
    $("#btn").click(function(){
        var N = $("#name").val();
        $("#Output").text("Hi!"+ N);
        $("#name").val("");
    })
})