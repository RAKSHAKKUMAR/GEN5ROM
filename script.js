// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Spline viewer
// <script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.37/build/spline-viewer.js"></script>

// Showreel modal logic
const open = document.getElementById('openShowreel');
const modal = document.getElementById('modal');
const close = document.getElementById('closeModal');
const frame = document.getElementById('videoFrame');

function openShowreelModal() {
  modal.classList.add('open');
}
function closeShowreelModal() {
  frame.src = frame.src.replace('?autoplay=1', '?autoplay=0');
  modal.classList.remove('open');
  setTimeout(() => {
    if (!frame.src.includes('?autoplay=1')) frame.src = frame.src.replace('?autoplay=0', '?autoplay=1');
  }, 300);
}

if (open && close && modal) {
  open.addEventListener('click', openShowreelModal);
  open.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') openShowreelModal();
  });
  close.addEventListener('click', closeShowreelModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeShowreelModal();
  });
}

// Hero fallback image
const heroImg = document.querySelector('.showreel img');
if (heroImg) {
  heroImg.onerror = () => {
    heroImg.style.display = 'none';
  };
}

// Service card interactivity
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.04)';
    card.style.boxShadow = '0 30px 60px rgba(192, 132, 252, 0.25)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = 'none';
  });
});

// Work filters
const filters = document.querySelectorAll('.filter');
const workCards = document.querySelectorAll('.work-card');
const searchInput = document.querySelector('.search');

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    workCards.forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Search filter
searchInput.addEventListener('input', e => {
  const value = e.target.value.toLowerCase();

  workCards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? 'block' : 'none';
  });
});

// ✅ Featured Work Modal Logic
function openModal(videoId) {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoFrame');

  if (!modal || !iframe) return;

  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoFrame');

  if (!modal || !iframe) return;

  iframe.src = '';
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close modal on outside click
document.addEventListener('click', function (e) {
  const modal = document.getElementById('videoModal');
  const content = document.querySelector('.modal-content');
  
  if (modal && modal.classList.contains('active') && !content.contains(e.target) && !e.target.closest('.work-card')) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Work card cursor pointer
const workCards = document.querySelectorAll('.work-card');
workCards.forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('mouseover', () => {
    card.style.opacity = '0.8';
  });
  card.addEventListener('mouseout', () => {
    card.style.opacity = '1';
  });
});

const navLinks = document.querySelectorAll('nav a[href^="#"]');
navLinks.forEach(link => {
link.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({ behavior: 'smooth' });
}
});
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Close menu when a link is clicked
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
    }
  });
}

// Spline Viewer Setup
window.addEventListener('load', () => {
  const splineViewer = document.querySelector('spline-viewer');
  const loader = document.querySelector('.spline-loader');

  if (splineViewer && loader) {
    // Hide loader when viewer is ready
    splineViewer.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('hidden');
      }, 500);
    });

    // Fallback: hide loader after 8 seconds anyway
    setTimeout(() => {
      if (loader && !loader.classList.contains('hidden')) {
        loader.classList.add('hidden');
      }
    }, 8000);
  }
});

console.log("Scripts optimized and ready");

// Logging for dev/debug
console.log("About section loaded");
console.log("Contact section ready");
console.log("Footer loaded");
