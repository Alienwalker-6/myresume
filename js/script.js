const menuToggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".site-nav");
const navLinks=[...document.querySelectorAll(".nav-link")];

menuToggle?.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",String(open));
  menuToggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");
});

navLinks.forEach(link=>link.addEventListener("click",()=>{
  nav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded","false");
  menuToggle?.setAttribute("aria-label","Open navigation");
}));

const sections=[...document.querySelectorAll("main section[id]")];
const sectionObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    navLinks.forEach(link=>{
      link.classList.toggle("active",link.getAttribute("href")===`#${entry.target.id}`);
    });
  });
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(section=>sectionObserver.observe(section));

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));

const reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const core=document.querySelector(".alien-core");
if(core && !reduceMotion){
  window.addEventListener("pointermove",e=>{
    const x=(e.clientX/window.innerWidth-.5)*10;
    const y=(e.clientY/window.innerHeight-.5)*10;
    core.style.transform=`translate(${x}px,${y}px)`;
  },{passive:true});
}


const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(contactForm);
    const name = String(form.get('name') || '').trim();
    const channel = String(form.get('channel') || '').trim();
    const message = String(form.get('message') || '').trim();
    const subject = `Portfolio enquiry from ${name}`;
    const body = `Name: ${name}\nContact: ${channel}\n\n${message}`;
    window.location.href = `mailto:pranavpradeepmk5@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
