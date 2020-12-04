function show(){
    const nav_item = document.querySelector('header #nav-item');
     if(nav_item.style.display === "none") {  
        nav_item.style.display = "block";  
     } else {  
        nav_item.style.display = "none";  
     }  
    }