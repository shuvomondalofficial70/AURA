


document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const heroContent = document.querySelector('.hero-content');
    const heroSection = document.querySelector('.hero');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;


    // Trigger toggle on button click
    menuBtn.addEventListener('click', toggleMobileMenu);

    // Toggle function for the menu
    const toggleMobileMenu = () => {
        // Toggles the 'active' class we styled in CSS
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');

        // LUXURY TOUCH: Disable background scrolling when menu is open
        if (navLinks.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'initial';
        }
    };







    const items = document.querySelectorAll('.nav-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            body.style.overflow = 'initial';
        });
    });
    // 1. Header & Hero Parallax Effect
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;

        // Sticky Glass Effect Toggle
        if (scrollPos > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Subtle Hero Parallax (Moves image slightly slower)
        if (scrollPos < window.innerHeight) {
            heroSection.style.backgroundPositionY = `${scrollPos * 0.5}px`;

            // Fade out hero content as you scroll down
            heroContent.style.opacity = 1 - (scrollPos / 700);
            heroContent.style.transform = `translateY(${scrollPos * 0.3}px)`;
        }
    });

    // 2. Intersection Observer (Reveal sections on scroll)
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                // Once it reveals, we don't need to observe it anymore
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Select all sections you want to animate
    // You would add class="reveal" to your HTML sections
    document.querySelectorAll('.reveal').forEach(section => {
        revealObserver.observe(section);
    });
});












document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Toggle Menu function
    const toggleMenu = () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');

        // Prevent scrolling when menu is open
        if (navLinks.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'initial';
        }
    };

    menuBtn.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            body.style.overflow = 'initial';
        });
    });
});






document.addEventListener('DOMContentLoaded', () => {
    // 1. Custom Cursor Logic
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const cursorFollower = document.createElement('div');
    cursorFollower.className = 'cursor-follower';
    document.body.appendChild(cursorFollower);

    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;

        // Follower with a slight delay for a "fluid" feel
        setTimeout(() => {
            cursorFollower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        }, 50);
    });

    // 2. Philosophy Image Tilt Effect (Vanilla JS Parallax)
    const philImageBox = document.querySelector('.philosophy-image-box');
    const philImage = document.querySelector('.main-phil-img');

    if (philImageBox) {
        philImageBox.addEventListener('mousemove', (e) => {
            const { offsetWidth: width, offsetHeight: height } = philImageBox;
            let { offsetX: mouseX, offsetY: mouseY } = e;

            // Calculate tilt (max 10 degrees)
            const xRotation = ((mouseY / height) - 0.5) * 10;
            const yRotation = ((mouseX / width) - 0.5) * -10;

            philImage.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        philImageBox.addEventListener('mouseleave', () => {
            philImage.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    }

    // 3. Hover States for Cursor (Expanding on Links/Images)
    const interactiveElements = document.querySelectorAll('a, .btn-primary, .btn-ghost, .main-phil-img');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorFollower.classList.add('cursor-active');
            if (el.tagName === 'IMG') cursorFollower.setAttribute('data-content', 'VIEW');
        });
        el.addEventListener('mouseleave', () => {
            cursorFollower.classList.remove('cursor-active');
            cursorFollower.setAttribute('data-content', '');
        });
    });
});












document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');

    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Update active button
            filters.forEach(btn => btn.classList.remove('active'));
            filter.classList.add('active');

            const filterValue = filter.getAttribute('data-filter');

            projects.forEach(project => {
                const projectCategory = project.getAttribute('data-category');

                // Filtering Logic
                if (filterValue === 'all' || filterValue === projectCategory) {
                    project.style.display = 'block';
                    // Trigger a mini-reveal animation manually
                    setTimeout(() => {
                        project.style.opacity = '1';
                        project.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    project.style.opacity = '0';
                    project.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        project.style.display = 'none';
                    }, 400); // Wait for transition to finish
                }
            });
        });
    });
});













document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('compare-slider');
    const imageAfter = document.querySelector('.image-after');
    const handle = document.querySelector('.slider-button');

    slider.addEventListener('input', (e) => {
        const value = e.target.value;

        // Update the clipping path of the 'After' image
        // inset(top right bottom left)
        imageAfter.style.clipPath = `inset(0 0 0 ${value}%)`;

        // Move the visual handle
        handle.style.left = `${value}%`;
    });

    // Bonus: Custom Cursor interaction for this section
    const comparisonSection = document.querySelector('.comparison-slider');
    const cursorFollower = document.querySelector('.cursor-follower');

    comparisonSection.addEventListener('mouseenter', () => {
        cursorFollower.classList.add('cursor-active');
        cursorFollower.setAttribute('data-content', 'DRAG');
    });

    comparisonSection.addEventListener('mouseleave', () => {
        cursorFollower.classList.remove('cursor-active');
        cursorFollower.setAttribute('data-content', '');
    });
});







document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step-card');
    const progressBar = document.getElementById('process-bar');

    const processObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stepNum = entry.target.getAttribute('data-step');

                // Update active classes
                steps.forEach(step => step.classList.remove('active'));
                entry.target.classList.add('active');

                // Update Progress Bar width
                const progressWidth = (stepNum / steps.length) * 100;
                progressBar.style.width = `${progressWidth}%`;
            }
        });
    }, {
        threshold: 0.8 // Trigger when card is 80% visible
    });

    steps.forEach(step => processObserver.observe(step));
});


















document.addEventListener('mousemove', (e) => {
    const items = document.querySelectorAll('.mood-item');
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    items.forEach(item => {
        const speed = item.getAttribute('data-speed');
        const xOffset = x * speed * 10;
        const yOffset = y * speed * 10;

        item.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
    });
});

// Adding scroll-parallax to complement the mouse movement
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const moodItems = document.querySelectorAll('.mood-item');

    moodItems.forEach(item => {
        const speed = item.getAttribute('data-speed');
        // This makes images slide vertically at different rates
        item.style.top = (scrolled * speed * 0.2) + "px";
    });
});












document.addEventListener('DOMContentLoaded', () => {
    const moodOptions = document.querySelectorAll('.mood-option');
    const roomImg = document.getElementById('active-room-img');
    const glow = document.getElementById('glow');
    const moodLabel = document.getElementById('mood-label');

    moodOptions.forEach(option => {
        option.addEventListener('click', () => {
            // 1. UI Update
            moodOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');

            // 2. Data Extraction
            const newImg = option.getAttribute('data-img');
            const newColor = option.getAttribute('data-color');
            const newLabel = option.querySelector('h4').innerText;

            // 3. Visual Transition
            roomImg.style.opacity = '0'; // Fade out

            setTimeout(() => {
                roomImg.src = newImg;
                glow.style.background = newColor;
                moodLabel.innerText = newLabel;
                roomImg.style.opacity = '1'; // Fade in
            }, 400);
        });
    });
});












document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.journal-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within element
            const y = e.clientY - rect.top;  // y position within element

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate rotation (max 5 degrees)
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });
    });
});




















document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('price-toggle-input');
    const amounts = document.querySelectorAll('.amount');
    const currency = document.querySelectorAll('.currency');
    const labelFixed = document.getElementById('label-fixed');
    const labelPercent = document.getElementById('label-percent');

    toggle.addEventListener('change', () => {
        const isPercent = toggle.checked;

        // Toggle Labels
        labelFixed.classList.toggle('active', !isPercent);
        labelPercent.classList.toggle('active', isPercent);

        amounts.forEach((amount, index) => {
            // Animate transition
            amount.style.opacity = '0';

            setTimeout(() => {
                if (isPercent) {
                    currency[index].innerText = '';
                    amount.innerText = amount.getAttribute('data-percent') + '%';
                } else {
                    currency[index].innerText = amount.getAttribute('data-fixed') === 'Custom' ? '' : '$';
                    amount.innerText = amount.getAttribute('data-fixed');
                }
                amount.style.opacity = '1';
            }, 200);
        });
    });
});













document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');
    const btnText = document.querySelector('.btn-text');
    const btnLoader = document.querySelector('.btn-loader');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simulate Loading State
            btnText.style.opacity = '0';
            btnSubmit = document.querySelector('.btn-submit');
            btnSubmit.style.pointerEvents = 'none';

            // Artificial delay to mimic server request
            setTimeout(() => {
                contactForm.style.display = 'none';
                successMsg.style.display = 'block';

                // Optional: Scroll back to top after a few seconds
                // setTimeout(() => window.scrollTo({top: 0, behavior: 'smooth'}), 5000);
            }, 1500);
        });
    }
});