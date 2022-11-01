
var div = document.getElementById('ukryty_tekst');

div.style.display = 'none';
document.getElementById('sh').innerHTML = '+';

document.getElementById('sh').onclick = function () {
    if (div.style.display == 'none') {
    div.style.display = 'block';
this.innerHTML ='-';
}
else {
    div.style.display = 'none';
this.innerHTML = '+';
}
};




var div2 = document.getElementById('ukryty_tekst2');

div2.style.display = 'none';
document.getElementById('sh2').innerHTML = '+';

document.getElementById('sh2').onclick = function () {
    if (div2.style.display == 'none') {
    div2.style.display = 'block';
this.innerHTML = '-';
    }
    else {
    div2.style.display = 'none';
this.innerHTML = '+';
    }
};




var div3 = document.getElementById('ukryty_tekst3');

div3.style.display = 'none';
document.getElementById('sh3').innerHTML = '+';

document.getElementById('sh3').onclick = function () {
    if (div3.style.display == 'none') {
    div3.style.display = 'block';
this.innerHTML = '-';
    }
    else {
    div3.style.display = 'none';
this.innerHTML = '+';
    }
};

var div4 = document.getElementById('ukryty_tekst4');

div4.style.display = 'none';
document.getElementById('sh4').innerHTML = '+';

document.getElementById('sh4').onclick = function () {
    if (div4.style.display == 'none') {
    div4.style.display = 'block';
this.innerHTML = '-';
    }
    else {
    div4.style.display = 'none';
this.innerHTML = '+';
    }
};