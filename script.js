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


// ✅ Featured Work Modal Logic (NEW)
function openModal(videoId) {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoFrame');

  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoFrame');

  iframe.src = '';
  modal.classList.remove('active');
}

// Close modal on outside click
document.addEventListener('click', function (e) {
  const modal = document.getElementById('videoModal');
  const content = document.querySelector('.modal-content');
  if (modal && modal.classList.contains('active') && !content.contains(e.target) && !e.target.closest('.work-card')) {
    closeModal();
  }
});


// Logging for dev/debug
console.log("About section loaded");
console.log("Contact section ready");
console.log("Footer loaded");
