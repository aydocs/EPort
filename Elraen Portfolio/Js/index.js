document.addEventListener('DOMContentLoaded', () => {
    let dropdowns = document.querySelectorAll('.navbar .dropdown-toggler');
    let dropdownIsOpen = false;

    if (dropdowns.length) {
        dropdowns.forEach((dropdown) => {
            dropdown.addEventListener('click', (event) => {
                let target = document.querySelector(`#${event.target.dataset.dropdown}`);

                if (target) {
                    if (target.classList.contains('show')) {
                        target.classList.remove('show');
                        dropdownIsOpen = false;
                    } else {
                        target.classList.add('show');
                        dropdownIsOpen = true;
                    }
                }
            });
        });
    }

    window.addEventListener('mouseup', (event) => {
        if (dropdownIsOpen) {
            dropdowns.forEach((dropdownButton) => {
                let dropdown = document.querySelector(`#${dropdownButton.dataset.dropdown}`);
                let targetIsDropdown = dropdown == event.target;

                if (dropdownButton == event.target) {
                    return;
                }

                if ((!targetIsDropdown) && (!dropdown.contains(event.target))) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });

    
    var menuItems = document.querySelectorAll('.navbar-nav li');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            
            menuItems.forEach(function(item) {
                item.classList.remove('active');
            });
            
            
            item.classList.add('active');
        });
    });
});

function toggleNavbar() {
    var navbarMenu = document.querySelector('.navbar-menu');
    navbarMenu.classList.toggle('active');
}




$(function(){

    window.sr = ScrollReveal();
  
    if ($(window).width() < 768) {
  
        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
            $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }
  
        sr.reveal('.js--fadeInRight', {
          origin: 'right',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 800,
        });
  
    } else {
        
        sr.reveal('.js--fadeInLeft', {
          origin: 'left',
          distance: '300px',
            easing: 'ease-in-out',
          duration: 800,
        });
  
        sr.reveal('.js--fadeInRight', {
          origin: 'right',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 800,
        });
  
    }
    
    sr.reveal('.js--fadeInLeft', {
          origin: 'left',
          distance: '300px',
            easing: 'ease-in-out',
          duration: 800,
        });
  
        sr.reveal('.js--fadeInRight', {
          origin: 'right',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 800,
        });
  
  
  });
  

  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const timeline = document.querySelector('.timeline');
    const timelineBar = timeline.querySelector('::before');
    
    // Ölçüm ünitesiyle çubuğun rengini ayarlayın
    const height = (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    timelineBar.style.height = `${height}%`;
    timelineBar.style.background = `rgba(0, 0, 0, ${height / 100})`; // Siyahdan zamanla transparan.
  });
  