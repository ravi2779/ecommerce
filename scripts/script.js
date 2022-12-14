const navSlide = () => {
    const burgerfun = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burgerfun.addEventListener(
        'click', () => {
            // Toogle Nav
            nav.classList.toggle('nav-active');
            //Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ''
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 16 + 0.5}s`
                }
            });
            //Burger Animation
            burgerfun.classList.toggle('toggleBurger')
        });
}

navSlide();