function menuToggle() {
    const trigger = document.querySelectorAll('.toggle-nav');
    
    for(let i = 0;  i < trigger.length; i++) {
        trigger[i].addEventListener('click', function() {
            document.getElementsByClassName('menu__container')[0].classList.toggle('menu__container--active');
        });
    }
}

menuToggle();