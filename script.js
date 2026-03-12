/*========toggle icon navbar========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*========scroll sections active link========*/
let sections = document.querySelectorAll('section');

let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classList.add('active');
        
      });

    };
  });

  /*========sticky navbar========*/
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  /*========remove toggle icon and navbar when click navbar link (scroll)========*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/*========scroll reveal========*/
const sr = ScrollReveal({
  //reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

sr.reveal('.tagli', { delay: 500 });

sr.reveal('.home-content,.heading', { origin: 'top' });
sr.reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
sr.reveal('.home-content h1, .about-img', { origin: 'left' });
sr.reveal('.home-content p, .about-content', { origin: 'right' });

/*========typed js========*/
const typed = new Typed('.multiple-text', {
  strings: ['Fullstack Developer', 'Solution Engineer', 'Freelancer', 'Tech Enthusiast'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

/*the about text section*/
const readMoreBtn = document.querySelector('#read-more-btn');
const moreText = document.querySelector('.about-more-text'); 

readMoreBtn.addEventListener('click', () => {
    if (moreText.style.display === 'none') {
        moreText.style.display = 'inline'; // Shows the text
        readMoreBtn.textContent = 'Read Less'; // Changes button text
    } else {
        moreText.style.display = 'none'; // Hides the text
        readMoreBtn.textContent = 'Read More'; // Reverts button text
    }
});