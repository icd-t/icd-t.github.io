var randomChange = document.getElementById('header')
var randomChange2 = document.getElementById('footer'),
images = ['imgs/clouds.png', 'imgs/Abstract-Ascii-3.png', 'imgs/Tokyo-Night.png', 'imgs/Triple-Monitor-Lily.png']

var imgCount = images.length
var number = Math.floor(Math.random() * imgCount);

window.onload = function(){
    randomChange.style.backgroundImage = 'url(' + images[number] + ')'
    randomChange2.style.backgroundImage = 'url(' + images[number] + ')'
    console.log(images[number])
}