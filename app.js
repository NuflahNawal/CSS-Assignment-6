function changeMode(e) {
    document.body.classList.toggle("dark");

    var para = document.getElementsByTagName("p");
    for(var i = 0; i < para.length; i++) {
        para[i].classList.toggle("fontLight");
    }
}