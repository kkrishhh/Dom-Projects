var main = document.querySelector('#main');
var cursor = document.querySelector('#cursor');
main.addEventListener('mousemove', function(dets){
   cursor.style.left = (dets.x - 10) + 'px';
   cursor.style.top = (dets.y -10) + 'px';
   
  
})