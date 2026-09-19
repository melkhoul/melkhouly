
document.querySelectorAll('.flip-card').forEach(card=>{
 const flip=()=>card.classList.toggle('flipped');
 card.addEventListener('click',flip);
 card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flip();}});
});
