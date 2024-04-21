let home = document.getElementById('home')
let menu = document.getElementById('menu');
let menuClase = document.getElementById('close');
let content = document.getElementById('cont');
let unOrderList = document.getElementById('unorder')


menu.addEventListener('click', () => {
    menu.style.display = 'none';
    menuClase.style.display = 'block';
    unOrderList.style.display = 'block';
    content.style.color = 'black'
    content.style.border = 'black'
    home.style.background = 'black'
    document.body.style.overflowY = 'hidden'

})

menuClase.addEventListener('click', () => {
    menuClase.style.display = 'none';
    unOrderList.style.display = 'none'
    menu.style.display = 'block'
    content.style.color = 'white'
    content.style.border = '2px solid white'
    home.style.background = 'url(image-hero.jpg)';
    document.body.style.overflowY = 'scroll'
})

window.addEventListener('resize', () => {
    location.reload()
})