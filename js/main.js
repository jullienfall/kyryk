function dropMenu() {
    document.querySelector('.icon').classList.toggle('fa-bars');
    document.querySelector('.icon').classList.toggle('fa-times');
    document.querySelector('.nav').classList.toggle('active-nav');
}

function dropSubMenu() {
    if (window.innerWidth < 768) {
        this.classList.toggle('red-bg');
        this.childNodes[3].classList.toggle('active');
        const links = this.childNodes[1];
        links.childNodes[1].classList.toggle('fa-angle-double-down');
        links.childNodes[1].classList.toggle('fa-angle-double-up');
    }
}

document.querySelectorAll('.nav-li-dropdown').forEach(nav => nav.addEventListener("click", dropSubMenu));

