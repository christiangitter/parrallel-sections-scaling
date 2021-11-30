var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var button1 = document.getElementById('button-plus-1')
var button2 = document.getElementById('button-plus-2')

$('.button-plus-1').click(function(){
 div1.style.width = '80%'
 div2.style.width = '20%'
 button1.style.display = 'none'
 button2.style.display = 'block'
})
$('.button-plus-2').click(function(){
    div1.style.width = '20%'
    div2.style.width = '80%'
    button1.style.display = 'block'
    button2.style.display = 'none'
   })