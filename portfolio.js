move()
function move() {
    var elem =Array.from(document.getElementsByClassName("myBar")) ;
    var label = Array.from( document.getElementsByClassName("label"))
    var width = 10;
    elem[1].style.background = brown;
    elem[2].style.background = blue;
    elem[3].style.background = yellow;
    var id = setInterval(frame, 20);
    var id2 = setInterval(frame2, 20);
    var id3 = setInterval(frame3, 20);
    var id4 = setInterval(frame4, 20);
    function frame() {
            if (width > 90) {
                clearInterval(id)
            }else {
                width++;
                elem[0].style.width = width + 'px';
               label[0].innerHTML = width + '%';
            }
         }
    function frame2() {
           if (width > 85) {
                clearInterval(id2)
            }else {
                width++;
                elem[1].style.width = width + 'px';
               label[1].innerHTML = width + '%';
            }
          }
     function frame3() {
           if (width > 50) {
                clearInterval(id3)
            }else {
                width++;
                elem[2].style.width = width + 'px';
               label[2].innerHTML = width + '%';
           }
           }
     
       function frame4() {
           if (width > 65) {
                clearInterval(id4)
            }else {
                width++;
                elem[3].style.width = width + 'px';
               label[3].innerHTML = width + '%';
            }
    }
  }
