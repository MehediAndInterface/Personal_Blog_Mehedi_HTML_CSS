/* JavaScript for Basic Mobile Navigation Toggle */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('header nav');
const body = document.body;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
    body.classList.toggle('no-scroll'); // Prevent scrolling when menu is open (optional)
});

navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
        body.classList.remove('no-scroll');
    });
});

/* Intersection Observer for Blog Posts Animation */
const blogPostsSection = document.querySelector('.blog-posts');
const posts = document.querySelectorAll('.post');

posts.forEach((post, index) => {
    post.style.setProperty('--post-index', index + 1);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            blogPostsSection.classList.add('in-view');
            observer.unobserve(blogPostsSection); // Animate only once
        }
    });
}, { threshold: 0.2 });

observer.observe(blogPostsSection);