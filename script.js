// Initialize components
document.addEventListener('DOMContentLoaded', function() {
    // Navbar components
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Handle navbar collapse
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
            // Adding solid background if menu is opened while at the top
            if (window.scrollY < 50) {
                navbar.classList.toggle('scrolled');
            }
        });

        // Close navbar when clicking outside
        document.addEventListener('click', function(event) {
            if (!navbar.contains(event.target)) {
                navbarCollapse.classList.remove('show');
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = targetId === '#top' ? document.body : document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = 80; // approximate height
                const targetPosition = targetId === '#top' ? 0 : targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });

    // Form submission simulation
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="button"]');
            if (btn) {
                const originalText = btn.innerHTML;
                btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin ms-2"></i>';
                btn.disabled = true;
                
                setTimeout(() => {
                    btn.innerHTML = 'Sent Successfully! <i class="fas fa-check ms-2"></i>';
                    btn.classList.add('btn-success');
                    btn.classList.remove('btn-primary');
                    contactForm.reset();
                    
                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                        btn.classList.remove('btn-success');
                        btn.classList.add('btn-primary');
                    }, 3000);
                }, 1500);
            }
        });
        
        // Handle the button click specifically since we used type="button" in HTML
        const submitBtn = contactForm.querySelector('button[type="button"]');
        if (submitBtn) {
            submitBtn.addEventListener('click', () => {
                contactForm.dispatchEvent(new Event('submit', { cancelable: true }));
            });
        }
    }

    // Change navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            // Only remove if menu is not open
            if (!navbarCollapse.classList.contains('show')) {
                navbar.classList.remove('scrolled');
            }
        }
    });
});