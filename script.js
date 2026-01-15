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