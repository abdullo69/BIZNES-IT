const menu_icon = document.querySelector('.bars')
const nav_links = document.querySelector('.nav_links')

menu_icon.addEventListener('click', () => {
    menu_icon.classList.toggle('active')
    nav_links.classList.toggle('active')
})

