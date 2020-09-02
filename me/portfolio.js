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
               label[0].innerHTML = width * 1 + '%';
            }
    }
  }