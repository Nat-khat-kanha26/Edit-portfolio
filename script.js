// Smooth scroll to sections
document.querySelectorAll('.home, .portfolio').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target');
    const section = document.getElementById(targetId);
    
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, null, ' ');
    }
  });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  const homeLinks = document.getElementsByClassName('home');
  const portfoliolink = document.getElementsByClassName('portfolio');
  const contactLinks = document.getElementsByClassName('contact');
  
  if (window.scrollY >= 50) {
    header.classList.add('scrolled');
    [...homeLinks, ...portfoliolink].forEach(el => {
      el.classList.add('scrolled');
    });
  } else {
    header.classList.remove('scrolled');
    [...homeLinks, ...portfoliolink].forEach(el => {
      el.classList.remove('scrolled');
    });
  }
});
