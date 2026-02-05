/**
 * Simple component loader for vanilla HTML sites
 * Loads header and footer from external HTML files
 */

document.addEventListener('DOMContentLoaded', async () => {
    // Load header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        try {
            const response = await fetch('/prototypes/components/header.html');
            if (response.ok) {
                headerPlaceholder.innerHTML = await response.text();
                initMobileMenu();
            }
        } catch (e) {
            console.error('Failed to load header:', e);
        }
    }

    // Load footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        try {
            const response = await fetch('/prototypes/components/footer.html');
            if (response.ok) {
                footerPlaceholder.innerHTML = await response.text();
            }
        } catch (e) {
            console.error('Failed to load footer:', e);
        }
    }
});

/**
 * Initialize mobile menu toggle
 */
function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (toggle && mobileNav) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            mobileNav.classList.toggle('open');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking a link
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                mobileNav.classList.remove('open');
                document.body.classList.remove('menu-open');
            });
        });
    }
}

/**
 * Smooth scroll for anchor links
 */
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
        const targetId = link.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
