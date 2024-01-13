var mainimg = document.getElementById('mainimg');
var smallimg = document.getElementsByClassName('small-img');

smallimg[0].onclick = () => {
    mainimg.src = smallimg[0].src;
}

smallimg[1].onclick = () => {
    mainimg.src = smallimg[1].src;
}

smallimg[2].onclick = () => {
    mainimg.src = smallimg[2].src;
}

smallimg[3].onclick = () => {
    mainimg.src = smallimg[3].src;
}