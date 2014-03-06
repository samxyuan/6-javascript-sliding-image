var howOften = 5; //number often in seconds to rotate
var current = 0; //start the counter at 0
var ns6 = document.getElementById&&!document.all; //detect netscape 6

// place your images, text, etc in the array elements here
var items = new Array();
    items[0]="<a href='link.htm' ><img alt='image0 (9K)' src='http://wallpapergrab.com/wp-content/uploads/2013/12/cute-animal-wallpapers-cat.jpg' height=auto width='100%' border='0' /></a>"; //a linked image
    items[1]="<a href='link.htm'><img alt='image1 (9K)' src='http://shechive.files.wordpress.com/2011/01/a-cute-animals-10.jpg' height=auto width='100%' border='0' /></a>"; //a linked image
    items[2]="<a href='link.htm'><img alt='image2 (9K)' src='http://www.iquomi.com/wp-content/uploads/2013/10/free-quality-cute-little-cat-high-resolution-wallpaper-for-desktop-and-tablet-915x571.jpg' height=auto width='100%' border='0' /></a>"; //a linked image
    items[3]="<a href='link.htm'><img alt='image3 (9K)' src='http://hdwallpaper-s.com/wallpapers/14/Cute_little_face_cat_High_definition_wallpaper.jpg' height=auto width='100%' border='0' /></a>"; //a linked image
function rotater() {
    document.getElementById("placeholder").innerHTML = items[current];
    current = (current==items.length-1) ? 0 : current + 1;
    setTimeout("rotater()",howOften*5000);
}

function rotater() {
    if(document.layers) {
        document.placeholderlayer.document.write(items[current]);
        document.placeholderlayer.document.close();
    }
    if(ns6)document.getElementById("placeholderdiv").innerHTML=items[current]
        if(document.all)
            placeholderdiv.innerHTML=items[current];

    current = (current==items.length-1) ? 0 : current + 1; //increment or reset
    setTimeout("rotater()",howOften*1000);
}
window.onload=rotater;
//-->