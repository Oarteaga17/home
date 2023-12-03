const menu = document.querySelector('.menu');

menu.addEventListener('click', function () {
    const subMenu = this.querySelector('.sub-menu');
    subMenu.style.display = subMenu.style.display === 'none' ? 'block' : 'none';
})

