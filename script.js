const menuContainer = document.getElementById('menu-container'),
    menuToggle = document.getElementById('hm_button'),
    menuClose = document.getElementById('close_btn'),
    pantherBackGround = document.getElementById('panther_bg')


if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuContainer.classList.add('toggle_menu')
        pantherBackGround.style.display = 'none'
        menuToggle.style.display = 'none'
        menuClose.style.display = 'inline-block'
        menuContainer.style.display = 'grid'


    })
}

if (menuClose) {
    menuClose.addEventListener('click', () => {
        pantherBackGround.style.display = 'flex'
        pantherBackGround.style.transition = 'linear 0.5s'

        menuContainer.style.display = 'none'

        menuToggle.style.display = 'inline-block'
        menuClose.style.display = 'none'


    })
}


// let menuToggle = undefined
// if (menuToggle = 1) {
//     menuToggle.addEventListener('click', () => {
//         menuContainer.classList.toggle('toggle_menu')
//         pantherBackGround.style.display = 'none'
//         menuToggle.style.display = 'none'
//     })
// }