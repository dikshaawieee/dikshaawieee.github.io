const CFG={
  philosophy:"I learn by building. Every page I design and every line of code I write is one more step towards becoming a developer who makes things that are simple, clear and useful.",
  skills:[["Core skills",["HTML","CSS","C programming"]],["AI tools",["Generative AI tools","AI image generation"]],["Currently learning",["JavaScript","Python"]]],
  projects:[
    {t:"Personal portfolio",d:"Responsive portfolio with About, Skills, Projects and Contact sections, published with GitHub Pages.",tags:["HTML","CSS","GitHub Pages"],link:"https://dikshaawieee.github.io",a:"#ff4b3e"},
    {t:"Restaurant website",d:"A restaurant website with a clear layout, menu and sections for visitors.",tags:["Web design"],link:"",a:"#ff7a2f"},
    {t:"Shop websites",d:"A set of shop websites with product sections and simple navigation.",tags:["Web design"],link:"",a:"#3b6bff"},
    {t:"Coursework websites",d:"Fresh Bites, Bright Future Foundation and a juice shop page with a login page.",tags:["HTML","CSS"],link:"",a:"#13c08a"}
  ],
  jobs:[
    ["2025 – 2028","Diploma in Computer Engineering (AI Tools)","DSEU Rajokri Campus, Delhi. Currently in 3rd semester."],
    ["Appearing April 2027","Senior Secondary (12th)","NIOS"],
    ["2025","Secondary (10th)","CBSE. 76.6% (best of 5 subjects)."]
  ]
};
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
$("#yr").textContent=new Date().getFullYear();
$("#philText").innerHTML=CFG.philosophy.split(" ").map(w=>`<span class="w">${esc(w)}</span>`).join(" ");
$("#skillList").innerHTML=CFG.skills.map(g=>`<div><h4>${esc(g[0])}</h4><div class="chips">${g[1].map(t=>`<span>${esc(t)}</span>`).join("")}</div></div>`).join("");
$("#projects").innerHTML=CFG.projects.map((p,i)=>`<article class="card"><div class="shot" style="--a:${p.a}"><span>0${i+1}</span></div><div class="b"><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p><div class="tags">${p.tags.map(t=>`<i>${esc(t)}</i>`).join("")}</div>${p.link?`<a class="l" href="${esc(p.link)}" target="_blank" rel="noopener">View live site</a>`:""}</div></article>`).join("");
$("#jobs").innerHTML=CFG.jobs.map(j=>`<div class="job"><small>${esc(j[0])}</small><h3>${esc(j[1])}</h3><p>${esc(j[2])}</p></div>`).join("");
(function(){let n=0;const c=$("#cnt"),b=$("#bar i");const t=setInterval(()=>{n=Math.min(100,n+Math.ceil(Math.random()*6));c.textContent=n;b.style.width=n+"%";if(n===100){clearInterval(t);setTimeout(()=>$("#pre").classList.add("done"),350)}},55)})();
const wrap=$("#name");"DIKSHA".split("").forEach(ch=>{const s=document.createElement("span");s.textContent=ch;wrap.appendChild(s)});
const L=[...wrap.children];let mx=-9999,my=-9999,last=0,gx=innerWidth/2,gy=innerHeight/2,tx=gx,ty=gy;
const still=matchMedia("(prefers-reduced-motion: reduce)").matches;
addEventListener("pointermove",e=>{mx=e.clientX;my=e.clientY;tx=mx;ty=my;last=performance.now()});
function frame(t){const idle=t-last>1800,r=wrap.getBoundingClientRect();
 const px=idle?r.left+(.5+.5*Math.sin(t/1400))*r.width:mx,py=idle?r.top+r.height/2:my;
 L.forEach(l=>{const b=l.getBoundingClientRect(),d=Math.hypot(px-(b.left+b.width/2),(py-(b.top+b.height/2))*.6),k=Math.max(0,1-d/(r.width*.24));
  l.style.fontVariationSettings=`'wght' ${still?100:Math.round(100+k*k*800)}`;const g=Math.round(154+k*101);l.style.color=`rgb(${g},${g},${g})`});
 if(idle){tx=innerWidth*(.7+.15*Math.sin(t/2500));ty=innerHeight*(.25+.1*Math.cos(t/2100))}
 gx+=(tx-gx)*.06;gy+=(ty-gy)*.06;$("#glow").style.transform=`translate(${gx-innerWidth*.23}px,${gy-innerHeight*.23}px)`;requestAnimationFrame(frame)}
requestAnimationFrame(frame);
const W=[...document.querySelectorAll("#phil .w")];
function lit(){const p=$("#phil").getBoundingClientRect(),k=Math.min(1,Math.max(0,(innerHeight*.8-p.top)/(p.height*.9))),u=Math.round(k*W.length);W.forEach((w,i)=>w.classList.toggle("on",i<u))}
addEventListener("scroll",lit,{passive:true});lit();
(function(){const w=["Web design with HTML and CSS","C programming","AI tools"],el=$("#rot");let i=0,j=0,del=false;
if(still){el.textContent=w[0];return}
(function tick(){const s=w[i];j+=del?-1:1;el.textContent=s.slice(0,j);let d=del?35:70;
 if(!del&&j===s.length){del=true;d=1400}else if(del&&j===0){del=false;i=(i+1)%w.length;d=300}
 setTimeout(tick,d)})()})();
const m=$("#menu");$("#mbtn").onclick=()=>m.classList.add("open");$("#mclose").onclick=()=>m.classList.remove("open");
m.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>m.classList.remove("open")));
addEventListener("keydown",e=>{if(e.key==="Escape")m.classList.remove("open")});
