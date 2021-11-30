var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var button1 = document.getElementById('button-plus-1')
var button2 = document.getElementById('button-plus-2')
var contentLeft = document.getElementById('content-left')
var contentRight = document.getElementById('content-right')

$('.button-plus-1').click(function(){
 div1.style.width = '80%'
 div2.style.width = '20%'
 button1.style.opacity = '0'
 button1.style.transition = 'opacity 100ms ease-out'
 button2.style.opacity = '1'
 contentLeft.style.opacity ='1'
 contentLeft.style.transition = 'opacity 1.5s ease'
 contentRight.style.opacity = '0'
 contentLeft.style.marginTop = '-50px'
 contentLeft.style.position = 'relative'
 contentLeft.style.zIndex = '1'
 contentRight.style.opacity = '0'
 contentRight.style.position = 'relative'
 contentRight.style.zIndex = '-1'

})
$('.button-plus-2').click(function(){
    div1.style.width = '20%'
    div2.style.width = '80%'
   button2.style.opacity = '0'
   button2.style.transition = 'opacity 100ms ease-out'
   button1.style.opacity = '1'
   contentRight.style.opacity ='1'
   contentRight.style.transition = 'opacity 1.5s ease'
   contentLeft.style.opacity = '0'
   contentLeft.style.position = 'relative'
   contentLeft.style.zIndex = '-1'
   contentRight.style.marginTop = '-50px'
   contentRight.style.position = 'relative'
   contentRight.style.zIndex = '1'
   })