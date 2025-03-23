let menu = document.getElementById('menu-icon')
let nav = document.getElementById('navbar')
let close = document.getElementById('close')
if(menu){
    menu.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}