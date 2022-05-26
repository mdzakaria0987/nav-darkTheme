document.querySelector('.showmenu').addEventListener('click' , fmenuslide);
function fmenuslide(){
    document.querySelector('.submenu').classList.toggle('xyz');
}

document.querySelector('.showmenu2').addEventListener('click' , smenuslide);
function smenuslide(){
    document.querySelector('.submenu2').classList.toggle('abc');
}

document.querySelector('.showmenu3').addEventListener('click' , slidecontact);
function slidecontact(){
    document.querySelector('.submenu3').classList.toggle('efg');
}
document.querySelector('#button').addEventListener('click' , buttonEffect);

function buttonEffect(){
    document.querySelector('.movebtn').classList.toggle('slidebutton');
    document.querySelector('#theme').classList.toggle('themechange');
};