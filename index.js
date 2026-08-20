document.addEventListener('DOMContentLoaded', () => {
  // --- Header Scroll Effect ---
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Mobile Menu Toggle ---
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    // Change icon state
    const spans = menuToggle.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('open'));
  });

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // --- Savings Calculator ---
  const rangeInputs = {
    funnels: document.getElementById('calc-funnels'),
    email: document.getElementById('calc-email'),
    chat: document.getElementById('calc-chat'),
    calendar: document.getElementById('calc-calendar'),
    crm: document.getElementById('calc-crm')
  };

  const rangeValues = {
    funnels: document.getElementById('val-funnels'),
    email: document.getElementById('val-email'),
    chat: document.getElementById('val-chat'),
    calendar: document.getElementById('val-calendar'),
    crm: document.getElementById('val-crm')
  };

  const calcSaving = document.getElementById('total-saving');

  function calculateSavings() {
    let currentTotal = 0;
    Object.keys(rangeInputs).forEach(key => {
      const val = parseInt(rangeInputs[key].value, 10);
      rangeValues[key].textContent = `₹${val.toLocaleString('en-IN')}`;
      currentTotal += val;
    });

    // Advyu standard cost is ₹5999/mo
    const advyuCost = 5999;
    const saving = Math.max(0, currentTotal - advyuCost);
    calcSaving.textContent = `₹${saving.toLocaleString('en-IN')}/mo`;
  }

  if (rangeInputs.funnels) {
    Object.keys(rangeInputs).forEach(key => {
      rangeInputs[key].addEventListener('input', calculateSavings);
    });
    calculateSavings(); // Initial calculation
  }

  // --- Feature Explorer Tabs ---
  const tabButtons = document.querySelectorAll('.explorer-tabs .tab-btn');
  const tabPanes = document.querySelectorAll('.explorer-panes .tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      
      // Update active button
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update active pane
      tabPanes.forEach(pane => {
        if (pane.id === target) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });

  // --- Niche Solutions Tabs ---
  const solutionButtons = document.querySelectorAll('.solutions-tabs .tab-btn');
  const solutionPanes = document.querySelectorAll('.solutions-panes .tab-pane');

  solutionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      
      solutionButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      solutionPanes.forEach(pane => {
        if (pane.id === target) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });



  // --- Testimonial Slider ---
  const wrapper = document.querySelector('.testimonial-wrapper');
  const dots = document.querySelectorAll('.testimonial-dots .dot-indicator');
  let currentSlide = 0;

  function showSlide(index) {
    if (!wrapper || dots.length === 0) return;
    currentSlide = index;
    wrapper.style.transform = `translateX(-${index * 100}%)`;
    
    dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
    });
  });

  // Automatic testimonial rotation
  let slideInterval;
  function startSlideCycle() {
    slideInterval = setInterval(() => {
      if (dots.length === 0) return;
      let nextSlide = (currentSlide + 1) % dots.length;
      showSlide(nextSlide);
    }, 6000);
  }

  if (wrapper && dots.length > 0) {
    showSlide(0);
    startSlideCycle();
    
    // Pause on hover
    const container = document.querySelector('.testimonial-container');
    container.addEventListener('mouseenter', () => clearInterval(slideInterval));
    container.addEventListener('mouseleave', () => startSlideCycle());
  }

  // --- Contact Form Handling ---
  const contactForm = document.getElementById('advyu-contact-form');
  const formSuccess = document.getElementById('advyu-form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let hasErrors = false;
      const inputs = contactForm.querySelectorAll('.form-control');

      inputs.forEach(input => {
        const group = input.closest('.form-group');
        group.classList.remove('has-error');

        // Simple validation
        if (input.required && !input.value.trim()) {
          group.classList.add('has-error');
          hasErrors = true;
        }

        // Email validation
        if (input.type === 'email' && input.value.trim()) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(input.value.trim())) {
            group.classList.add('has-error');
            hasErrors = true;
          }
        }
      });

      if (!hasErrors) {
        // Mock successful form submission
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
      }
    });
  }





  // --- CRO: FOMO Live Notifications ---
  const fomoNotification = document.getElementById('fomo-notification');
  const fomoText = document.getElementById('fomo-text');
  
  if (fomoNotification && fomoText) {
    const fomoNames = ["Rahul from Delhi", "Priya from Bangalore", "Amit from Mumbai", "Neha from Pune", "Vikram from Hyderabad"];
    const fomoActions = ["started a 14-day trial", "booked a demo", "upgraded to Growth Engine", "synced their Justdial CRM"];
    
    // Show first notification after 5 seconds
    setTimeout(showFomoNotification, 5000);
    
    function showFomoNotification() {
      // Randomize content
      const name = fomoNames[Math.floor(Math.random() * fomoNames.length)];
      const action = fomoActions[Math.floor(Math.random() * fomoActions.length)];
      fomoText.innerHTML = `<strong>${name}</strong> just ${action}.`;
      
      // Slide in
      fomoNotification.classList.add('show');
      
      // Hide after 4 seconds
      setTimeout(() => {
        fomoNotification.classList.remove('show');
        
        // Schedule next one (random between 10-20 seconds)
        const nextDelay = Math.floor(Math.random() * 10000) + 10000;
        setTimeout(showFomoNotification, nextDelay);
      }, 4000);
    }
  }

});

