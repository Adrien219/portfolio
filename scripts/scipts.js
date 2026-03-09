
// CURSOR
const dot=document.getElementById('c-dot'),ring=document.getElementById('c-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
(function tick(){rx+=(mx-rx)*.18;ry+=(my-ry)*.18;
  dot.style.left=mx+'px';dot.style.top=my+'px';
  ring.style.left=rx+'px';ring.style.top=ry+'px';
  requestAnimationFrame(tick)})();

// LOADER
const loader=document.getElementById('loader'),pct=document.getElementById('ldrPct');
let count=0;
const intv=setInterval(()=>{
  count+=Math.floor(Math.random()*8)+2;
  if(count>100)count=100;
  pct.textContent=count+'%';
  if(count===100){clearInterval(intv);setTimeout(()=>loader.classList.add('gone'),600)}
},80);

// NAV
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>50));

// BURGER
const burger=document.getElementById('burgerBtn'),mobNav=document.getElementById('mobNav');
burger.addEventListener('click',()=>{burger.classList.toggle('open');mobNav.classList.toggle('open')});
mobNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{burger.classList.remove('open');mobNav.classList.remove('open')}));

// SCROLL REVEAL
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
},{threshold:.12});
document.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el=>obs.observe(el));

// STAGGER
document.querySelectorAll('.skills-grid,.proj-list,.exp-list,.edu-grid,.about-cards').forEach(p=>{
  p.children&&[...p.children].forEach((c,i)=>c.style.transitionDelay=(i*.1)+'s')});

// BARS
const barObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.querySelectorAll('.hv-bar-fill').forEach(b=>b.style.width=b.dataset.pct+'%')})
},{threshold:.3});
document.querySelectorAll('.hero-visual').forEach(el=>barObs.observe(el));
setTimeout(()=>document.querySelectorAll('.hv-bar-fill').forEach(b=>b.style.width=b.dataset.pct+'%'),2800);

// 3D TILT
const card=document.querySelector('.hero-visual-card');
if(card){
  card.parentElement.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const xP=(e.clientX-r.left-r.width/2)/(r.width/2);
    const yP=(e.clientY-r.top-r.height/2)/(r.height/2);
    card.style.transform=`perspective(600px) rotateY(${xP*8}deg) rotateX(${-yP*6}deg)`;
  });
  card.parentElement.addEventListener('mouseleave',()=>card.style.transform='perspective(600px) rotateY(0deg) rotateX(0deg)');
}

// FORM
document.getElementById('contactForm').addEventListener('submit',function(e){
  e.preventDefault();
  const s=this.querySelector('button span');
  s.innerHTML='<i class="fas fa-check"></i> Message envoyé !';
  setTimeout(()=>{s.innerHTML='<i class="fas fa-paper-plane"></i> Envoyer le message';this.reset()},3000);
});

// ACTIVE NAV
const sections=document.querySelectorAll('section[id]'),links=document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  let cur='';
  sections.forEach(s=>{if(window.scrollY>=s.offsetTop-200)cur=s.id});
  links.forEach(a=>{a.style.color=a.getAttribute('href')==='#'+cur?'var(--white)':''});
},{passive:true});
