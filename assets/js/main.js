document.addEventListener('DOMContentLoaded', function() {
    const ssBackToTop = function() {
        const pxShow = 100;
        const goTopButton = document.querySelector(".ss-go-top");

        if (!goTopButton) return;

        const checkVisibility = () => {
            if (window.scrollY >= pxShow) {
                if(!goTopButton.classList.contains('link-is-visible')) {
                    goTopButton.classList.add("link-is-visible");
                }
            } else {
                goTopButton.classList.remove("link-is-visible");
            }
        };

        // Check on initial load
        checkVisibility();

        // Check on scroll
        window.addEventListener('scroll', checkVisibility);
    };

    // Initialize the function
    ssBackToTop();
});



