let resMenuOpen = false
document.querySelector('.menu-box').addEventListener('click', ()=>{
    if(!resMenuOpen){
        document.body.style.overflow = 'hidden'
        document.querySelector('.res-menu').classList.add('menu-activated')
        document.querySelector('.menu-box div:nth-child(2)').style.opacity = 0
        document.querySelector('.menu-box').style.left = -16.5 + 'px'
        document.querySelector('.menu-box div:first-child').style.transform = 'rotate(45deg) translate(16.5px, -8px)'
        document.querySelector('.menu-box div:nth-child(3)').style.transform = 'rotate(-45deg) translate(16.5px, 8px)'
        resMenuOpen = true
    }else{
        document.body.style.overflow = 'auto'
        document.querySelector('.res-menu').classList.remove('menu-activated')
        document.querySelector('.menu-box div:nth-child(2)').style.opacity = 1
        document.querySelector('.menu-box').style.left = 0 + 'px'
        document.querySelector('.menu-box div:first-child').style.transform = 'translate(0, 0)'
        document.querySelector('.menu-box div:first-child').style.transform = 'rotateZ(0)'
        document.querySelector('.menu-box div:nth-child(3)').style.transform = 'rotateZ(0)'
        resMenuOpen = false
    }
})


const search = document.querySelector('.search'), navLinks = document.querySelector('.nav-links'), times = document.querySelector('#times'), bg = document.querySelector('.bg')
search.addEventListener("focusin", ()=>{
    navLinks.style.display = "none"
    times.style.display = "block"
    bg.style.opacity = '0.6'
    bg.style.display = 'block'
    document.body.style.overflow = 'hidden'
})

function visible(){
    navLinks.style.display = "block";
    bg.style.opacity = '0'
    bg.style.display = 'none'
    document.body.style.overflow = 'scroll'
}
search.addEventListener("focusout",()=>{
    setTimeout(visible, 340)
    times.style.display = "none"
})


document.querySelector('.fa-search').addEventListener('click', ()=>{
    search.classList.toggle('res-input-active')
})

let open = false

document.querySelector('.read-btn').addEventListener('click', ()=>{
    if(!open){
        document.querySelector('.less').style.display = 'none'
        document.querySelector('.other').style.display = 'block'
        document.querySelector('.read-btn').innerHTML = 'Read Less'
        open = true
    }else{
        document.querySelector('.less').style.display = 'inline'
        document.querySelector('.other').style.display = 'none'
        document.querySelector('.read-btn').innerHTML = 'Read More'
        open = false
    }
})