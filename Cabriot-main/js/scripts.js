document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.dots .dot');
    const slides = document.querySelectorAll('#slider figure header');
    const figure = document.querySelector('#slider figure');

    let touchStartX = 0;
    let touchEndX = 0;

    function handleTouchStart(event) {
        touchStartX = event.touches[0].clientX;
    }

    function handleTouchMove(event) {
        touchEndX = event.touches[0].clientX;
    }

    function handleTouchEnd() {
        if (touchStartX - touchEndX > 50) {
            // Swiped left, move to the next slide
            currentIndex = (currentIndex + 1) % slides.length;
        } else if (touchEndX - touchStartX > 50) {
            // Swiped right, move to the previous slide
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        }

        updateSliderPosition(currentIndex);
        updateActiveDot(currentIndex);
    }

    figure.addEventListener('touchstart', handleTouchStart, false);
    figure.addEventListener('touchmove', handleTouchMove, false);
    figure.addEventListener('touchend', handleTouchEnd, false);

    function updateSliderPosition(index) {
        const slideWidth = slides[0].clientWidth;
        figure.style.left = `-${index * slideWidth}px`;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Remove active class from all dots
            dots.forEach(d => d.classList.remove('active'));
            // Add active class to the clicked dot
            dot.classList.add('active');
            // Move the slider to the corresponding slide
            currentIndex = index;
            updateSliderPosition(currentIndex);
        });
    });

    function updateActiveDot(index) {
        // Remove active class from all dots
        dots.forEach(dot => dot.classList.remove('active'));
        // Add active class to the corresponding dot
        dots[index].classList.add('active');
    }

    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSliderPosition(currentIndex);
        updateActiveDot(currentIndex);
    }, 5000); // Change slide every 5 seconds

    window.addEventListener('resize', () => {
        updateSliderPosition(currentIndex);
    });
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

<nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
  <div class="container px-5">
    <a href="/">
      <img class="navbar-brand" src="./assets/img/cabriot_ventures.svg" alt="" />
    </a>
    <button class="navbar-toggler menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      Menu
      <i class="bi-list"></i>
    </button>
    <button class="navbar-toggler menu-keypad" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <i class="bi-list"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
        <li class="nav-item">
          <a class="nav-link me-lg-3 active" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link me-lg-3" href="eat">Eat</a>
        </li>
        <li class="nav-item">
          <a class="nav-link me-lg-3" href="stay">Stay</a>
        </li>
        <li class="nav-item">
          <a class="nav-link me-lg-3" href="go">Go</a>
        </li>
        <li class="nav-item">
          <a class="nav-link me-lg-3" href="xpress">Xpress</a>
        </li>
      </ul>
      <button class="nav-btn navprimary-btn rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
        <span class="d-flex align-items-center">
          <i class="bi-chat-text-fill me-2"></i>
          <span class="small">Contact</span>
        </span>
      </button>
    </div>
  </div>
</nav>
