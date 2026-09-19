
document.querySelectorAll('.framework-toggle').forEach(btn=>{
 btn.addEventListener('click',()=>{
   const card=btn.closest('.framework');
   const open=card.classList.toggle('open');
   btn.textContent=open?'Close framework ↑':'Explore framework →';
 });
});
