move()
function move() {
    var elem =Array.from(document.getElementsByClassName("myBar")) ;
    var label = Array.from( document.getElementsByClassName("label"))
    var width = 10;
    var id = setInterval(frame, 20);
    function frame() {
            if (width > 89) {
                clearInterval(id)
            }else {
                width++;
                elem[0].style.width = width + 'px';
               label[0].innerHTML = width * 1 + '%';
            }
           if (width > 84) {
                clearInterval(id)
            }else {
                width++;
                elem[1].style.width = width + 'px';
               label[1].innerHTML = width * 1 + '%';
            }
           if (width > 64) {
                clearInterval(id)
            }else {
                width++;
                elem[2].style.width = width + 'px';
               label[2].innerHTML = width * 1 + '%';
           }
           if (width > 49) {
                clearInterval(id)
            }else {
                width++;
                elem[3].style.width = width + 'px';
               label[3].innerHTML = width * 1 + '%';
            }
    }
  }
