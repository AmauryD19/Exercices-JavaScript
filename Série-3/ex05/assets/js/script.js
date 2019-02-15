img = document.querySelectorAll('img');

for (let i=0; i<img.length; i++) {
    img[i].addEventListener('mouseover', change);

    function change() {
        img[i].setAttribute("src", `assets/img/image${i+1}_2.jpg`);
    }

    img[i].addEventListener('mouseout', rechange);

    function rechange() {
        img[i].setAttribute("src", `assets/img/image${i+1}.jpg`);
    }
}