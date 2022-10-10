var Button = document.getElementById('btn');
Button.addEventListener('click',function(){
    var Out = document.getElementById('Output');
    var Name = document.getElementById('name');
    Out.innerHTML = "Hi! "+Name.value;
    Name.value="";
})