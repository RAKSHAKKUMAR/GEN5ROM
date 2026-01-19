const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

<script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.37/build/spline-viewer.js"></script>


// Small interactivity: open the modal when clicking play
const open = document.getElementById('openShowreel');
const modal = document.getElementById('modal');
const close = document.getElementById('closeModal');
const frame = document.getElementById('videoFrame');


function openModal(){
modal.classList.add('open');
}
function closeModal(){
// stop video by resetting src
frame.src = frame.src.replace('?autoplay=1','?autoplay=0');
modal.classList.remove('open');
// restore autoplay url so it will autoplay next time
setTimeout(()=>{
if(!frame.src.includes('?autoplay=1')) frame.src = frame.src.replace('?autoplay=0','?autoplay=1');
},300);
}


open.addEventListener('click', openModal);
open.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') openModal(); });
close.addEventListener('click', closeModal);
modal.addEventListener('click', (e)=>{ if(e.target === modal) closeModal(); });


// Small progressive enhancement: if the hero image file isn't available, reduce opacity
const heroImg = document.querySelector('.showreel img');
heroImg.onerror = () => { heroImg.style.display = 'none'; };

const cards = document.querySelectorAll('.service-card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.04)';
    card.style.boxShadow = '0 30px 60px rgba(192, 132, 252, 0.25)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = 'none';
  });
});

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.work-card');
const searchInput = document.querySelector('.search');

/* FILTER */
filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    cards.forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

/* SEARCH */
searchInput.addEventListener('input', e => {
  const value = e.target.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? 'block' : 'none';
  });
});

// Reserved for future enhancements:
// - Scroll reveal animations
// - Counter animation for stats
// - Profile card hover effects

console.log("About section loaded");

// Reserved for future:
// - form validation
// - API integration
// - success / error toast

console.log("Contact section ready");

// Footer does not require JS.
// File kept intentionally for future enhancements (theme switch, analytics, etc.)

console.log("Footer loaded");

