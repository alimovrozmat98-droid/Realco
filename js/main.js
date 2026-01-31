document.addEventListener('DOMContentLoaded', function() {
 
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const headerList = document.querySelector('.header__list');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  const headerLinks = document.querySelectorAll('.header-link');

  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    headerList.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = headerList.classList.contains('active') ? 'hidden' : '';
  });

  mobileOverlay.addEventListener('click', function() {
    menuToggle.classList.remove('active');
    headerList.classList.remove('active');
    this.classList.remove('active');
    document.body.style.overflow = '';
  });


  headerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
     
      if (window.innerWidth <= 768) {
        menuToggle.classList.remove('active');
        headerList.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
      
      headerLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const cartButton = document.querySelector('.header-item:nth-child(6) .header-btn--mini');
  if (cartButton) {
    cartButton.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Cart opened! You have 3 items in your cart.');
      
    });
  }

  const loginButton = document.querySelector('.header-btn--mini');
  if (loginButton && !loginButton.classList.contains('cart')) {
    loginButton.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Login/Signup modal would open here');
    
    });
  }
  const ctaButton = document.querySelector('.header-btn');
  if (ctaButton) {
    ctaButton.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Starting your journey! This would navigate to the main action page.');
    
    });
  }

  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      menuToggle.classList.remove('active');
      headerList.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  const buttons = document.querySelectorAll('.header-btn, .header-btn--mini');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s ease';
    });
  });

  const logo = document.querySelector('.herader__box img');
  if (logo) {
    logo.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      
      headerLinks.forEach(l => l.classList.remove('active'));
      const homeLink = document.querySelector('.header-link[href="#"]');
      if (homeLink) homeLink.classList.add('active');
    });
  }

  function setInitialActiveLink() {
    const currentPath = window.location.pathname;
    let activeSet = false;
    
    headerLinks.forEach(link => {
      link.classList.remove('active');
      const linkHref = link.getAttribute('href');
    
      if (linkHref && linkHref !== '#' && currentPath.includes(linkHref.replace('#', ''))) {
        link.classList.add('active');
        activeSet = true;
      }
    });
    
  
    if (!activeSet) {
      const homeLink = document.querySelector('.header-link[href="#"]');
      if (homeLink) homeLink.classList.add('active');
    }
  }

  setInitialActiveLink();
});


window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const correspondingLink = document.querySelector(`.header-link[href="#${sectionId}"]`);
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight && correspondingLink) {
      document.querySelectorAll('.header-link').forEach(link => link.classList.remove('active'));
      correspondingLink.classList.add('active');
    }
  });
});
