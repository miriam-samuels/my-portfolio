move()
function move() {
    var elem =Array.from(document.getElementsByClassName("myBar")) ;
    var label = Array.from( document.getElementsByClassName("label"))
    var width = 10;
    var id = setInterval(frame, 20);
    function frame() {
            if (width > 90) {
                clearInterval(id)
            }else {
                width++;
                elem[0].style.width = width + 'px';
               label[0].innerHTML = width + '%';
            }
           if (width > 85) {
                clearInterval(id)
            }else {
                width++;
                elem[1].style.width = width + 'px';
               label[1].innerHTML = width + '%';
            }
           if (width > 50) {
                clearInterval(id)
            }else {
                width++;
                elem[2].style.width = width + 'px';
               label[2].innerHTML = width + '%';
           }
           if (width > 65) {
                clearInterval(id)
            }else {
                width++;
                elem[3].style.width = width + 'px';
               label[3].innerHTML = width + '%';
            }
    }
  }
