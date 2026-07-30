// Smooth active navigation
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link=>{
    link.addEventListener("click",function(){
        navLinks.forEach(item=>item.classList.remove("active"));
        this.classList.add("active");
    });
});

// Reveal animation
const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
},{
    threshold:.15
});

document.querySelectorAll(".card,.kpi,#dashboard img,#about,#developer")
.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(50px)";
    el.style.transition="all .8s ease";

    observer.observe(el);

});

// Animated KPI Counter

const counters=document.querySelectorAll(".kpi h1");

const animateCounter=(counter)=>{

let target=parseFloat(counter.innerText);

let suffix="";

if(counter.innerText.includes("K")) suffix="K";

if(counter.innerText.includes("M")) suffix="M";

let current=0;

const increment=target/120;

function update(){

current+=increment;

if(current<target){

counter.innerText=current.toFixed(1)+suffix;

requestAnimationFrame(update);

}else{

counter.innerText=target+suffix;

}

}

update();

}

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// Navbar shadow while scrolling

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";

}else{

nav.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

}

});

// Hero image hover

const heroImage=document.querySelector(".right img");

if(heroImage){

heroImage.addEventListener("mouseenter",()=>{

heroImage.style.transform="scale(1.03)";

heroImage.style.transition=".4s";

});

heroImage.addEventListener("mouseleave",()=>{

heroImage.style.transform="scale(1)";

});

}

// Dashboard hover

const dashboard=document.querySelector("#dashboard img");

if(dashboard){

dashboard.addEventListener("mouseenter",()=>{

dashboard.style.transform="scale(1.02)";

dashboard.style.transition=".4s";

});

dashboard.addEventListener("mouseleave",()=>{

dashboard.style.transform="scale(1)";

});

}

// Footer Year

const footer=document.querySelector("footer");

const year=new Date().getFullYear();

footer.innerHTML=`© ${year} Finance Dashboard | Developed by Abhijit Vishwakarma`;
