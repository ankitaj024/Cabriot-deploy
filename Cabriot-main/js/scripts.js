document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const dots = document.querySelectorAll('.dot');
    const figure = slider.querySelector('figure');
    let currentIndex = 0;
    let startX;
    let endX;

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            currentIndex = parseInt(dot.getAttribute('data-dot-index'));
            updateSlider();
        });
    });

    slider.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchmove', function(e) {
        endX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', function() {
        if (startX > endX + 50) {
            nextSlide();
        } else if (startX < endX - 50) {
            prevSlide();
        }
    });

    function updateSlider() {
        figure.style.left = `-${currentIndex * 100}%`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        if (currentIndex < dots.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = dots.length - 1;
        }
        updateSlider();
    }
});

  

window.addEventListener('DOMContentLoaded', event => {

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
