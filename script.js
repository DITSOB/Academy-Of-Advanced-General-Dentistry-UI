/* AAGD shared script: renders data, nav, theme, modal, reveal. Safe on every page. */
const programs=[
{title:"DigiPlan™",subtitle:"Digital Documentation & Case Planning",overview:"DigiPlan™ focuses on digital documentation and case planning in Advanced General Dentistry. Accurate records are the starting point of every good treatment decision. The program teaches dentists to capture, organize and use digital patient information and turn it into a clear, predictable plan before treatment begins.",heading:"What you will learn",items:[["Digital dental skills","the everyday digital tools and workflow habits of a modern general practice."],["Digital photography","standardized intraoral and extraoral photographs for diagnosis, planning, communication and records."],["Intraoral scanning","capturing digital impressions of teeth and soft tissues for planning and monitoring."],["Digital occlusal recording","recording and analyzing bite and functional data to guide occlusal decisions."],["CBCT data use","reading and using 3D imaging data sensibly in diagnosis and treatment planning."],["eDental Cloud application","storing, organizing and sharing patient records securely in the cloud."],["Digital case documentation","building complete, well-organized case files from diagnosis through follow-up."]]},
{title:"Guided Gum Therapy™",subtitle:"Biofilm Management & Non-Surgical Periodontal Care",overview:"Diagnose periodontal disease, visualize microbial activity with a phase-contrast microscope, motivate and monitor patients, and apply evidence-based biofilm control through professional and home-care Clean–Rinse–Massage (CRM) protocols, emphasizing prevention over routine surgical, chemical or drug-based interventions.",heading:"What you will learn",items:[["Periodontal diagnosis & risk assessment","comprehensive clinical charting and early detection of gingival and periodontal inflammation."],["Phase-contrast microscopy","chairside visualization of live subgingival plaque biofilm to educate and motivate patients."],["Clean–Rinse–Massage (CRM) protocols","structured non-surgical professional debridement and personalized home-care biofilm management."],["Minimally invasive instrumentation","gentle ultrasonic and hand scaling techniques that protect root cementum and soft tissue."],["Supportive periodontal therapy","individualized recall intervals and long-term maintenance without routine surgical or antibiotic overuse."]]},
{title:"MiCD Resto™",subtitle:"Composite Resin Dentistry",overview:"A comprehensive program in predictable, minimally invasive composite dentistry: adhesive dentistry, rubber dam isolation, cavity design, the MiCD Resto 5B protocol, layering, contouring, finishing and occlusal refinement.",heading:"Levels & What you will learn",items:[["MiCD Resto Level I","fundamentals of modern dental adhesion, moisture control with rubber dam isolation, and conservative cavity preparation."],["MiCD Resto Level II","the MiCD Resto 5B protocol, anatomical stratification, natural shade layering, and biomimetic posterior restorations."],["MiCD Resto Level III","advanced anterior polychromatic layering, complex contact and contour creation, high-luster finishing, and micron-level occlusal refinement."]]},
{title:"Bite Balance Therapy™",subtitle:"Functional Occlusion & Bite Management",overview:"A modular program in functional occlusion assessment, bite balancing and conservative occlusal management, including digitally balanced appliances for occlusal protection, neuromuscular deprogramming and support for TMD management.",heading:"Modules & What you will learn",items:[["Occlusion in Microns™ – Analog Occlusal Analysis & Refinement","precision articulating paper marking, centric relation recording, and conservative enameloplasty."],["Digital Occlusion™ – Digital Occlusal Analysis & Data-Guided Balancing","computerized bite force and timing analysis for objective, data-guided occlusal equilibration."],["Bite Balance Appliance™ – Digitally Balanced Occlusal Appliance System","design, delivery, and adjustment of custom appliances for bruxism protection, neuromuscular deprogramming, and TMD support."]]},
{title:"Smile Makeup Therapy™",subtitle:"Minimally Invasive Cosmetic Dentistry",overview:"Create naturally beautiful smiles through the ABC Principle: Alignment, Brightening and Contouring. Integrate scientific principles with artistic excellence while preserving maximum natural tooth structure.",heading:"Modules & What you will learn",items:[["Quick Smile Design","facial and dentolabial aesthetic analysis to preview and plan harmonious smile proportions."],["Smile Makeup Braces & Aligner","conservative pre-restorative tooth alignment to minimize or eliminate healthy enamel reduction."],["Smile Brightening Therapy","safe, predictable vital and non-vital tooth whitening protocols with sensitivity management."],["Smile Makeup Veneers","ultra-thin, no-prep and minimal-prep direct and indirect veneers that preserve natural enamel."]]},
{title:"BioFirst Implant Dentistry™",subtitle:"Biologically Driven Implant Dentistry",overview:"Integrate implants into daily practice through simple, bio-functionally driven, minimally invasive protocols: case selection, atraumatic extraction, ridge preservation, autologous grafting, slow-speed osteotomy and single-tooth implant restoration, with online case monitoring and mentoring.",heading:"Modules & What you will learn",items:[["STI – Foundation Program","biological case selection, CBCT-guided planning, atraumatic extraction, and predictable single-tooth implant placement."],["STI – Advanced Program","slow-speed biological osteotomy, soft-tissue management, prosthetic emergence profile design, and mentored clinical cases."],["Ridge Preservation Therapy","socket preservation and bone regeneration using autologous L-PRF, dentin grafts, and biocompatible synthetic grafts."]]},
{title:"MiCD Rehab™",subtitle:"Adhesive Oral Rehabilitation",overview:"Manage complex restorative cases through logical, step-by-step, minimally invasive adhesive protocols: risk assessment, treatment planning, vertical dimension, tooth wear management, indirect adhesive restorations and full-mouth rehabilitation.",heading:"What you will learn",items:[["Comprehensive risk & biomechanical assessment","identifying etiological factors behind severe tooth wear, erosion, and structural breakdown."],["Vertical dimension of occlusion (VDO)","predictable evaluation, testing, and conservative restoration of lost vertical dimension."],["Tooth wear management","additive, non-destructive adhesive strategies for worn and debilitated dentitions."],["Indirect adhesive restorations","preparation, bonding, and cementation of partial-coverage ceramic and composite overlays, table-tops, and onlays."],["Full-mouth rehabilitation workflow","phased quadrant-by-quadrant execution with long-term functional and aesthetic follow-up."]]},
{title:"GP-OrthoAlign Program",subtitle:"Fixed Orthodontics & Clear Aligner Therapy",overview:"A training program for general dental practitioners to integrate minor to moderate fixed orthodontic and clear aligner therapy into everyday practice through simple, predictable and minimally invasive protocols, from case selection and treatment planning to monitoring and finishing.",heading:"What you will learn",items:[["Orthodontic diagnosis & case selection","distinguishing straightforward general-practice cases from complex skeletal malocclusions."],["Treatment planning & biomechanics","digital setup review, space analysis, interproximal reduction (IPR), and predictable tooth movement staging."],["Fixed orthodontic protocols","simplified bracket positioning, light-force wire sequencing, and biological anchorage control."],["Clear aligner workflows","digital scanning, attachment placement, patient compliance tracking, and mid-course refinements."],["Occlusal finishing & retention","detailing functional occlusion at case completion and designing long-term retention protocols."]]}];
const practicePrograms=[
{title:"Dental Practice Management",subtitle:"Practice Excellence through Systems & Leadership",overview:"Establish, manage and lead an efficient, patient-centered practice: clinical operations, scheduling, workflow optimization, infection prevention, documentation, quality assurance, regulatory compliance, team coordination and strategic planning.",modules:["Clinical Operations & Scheduling Systems","Workflow Optimization & Time Management","Infection Prevention & Quality Assurance","Digital Documentation & Regulatory Compliance","Team Coordination, Leadership & Strategic Planning"]},
{title:"Dental Communication Skills",subtitle:"Effective Communication. Enhanced Patient Care.",overview:"Strengthen patient trust and teamwork through active listening, patient interviewing, case presentation, informed consent, motivational communication, patient education, behavior management and conflict resolution.",modules:["Active Listening & Patient Interviewing","Ethical Case Presentation & Informed Consent","Motivational Communication & Patient Education","Chairside Behavior Management & Empathy","Team Communication & Conflict Resolution"]},
{title:"Dental Practice Economics",subtitle:"Sustainable Growth with Purpose",overview:"Understand the financial principles behind a sustainable practice: treatment costing, pricing, budgeting, cash flow, financial reporting, inventory, procurement, KPIs, investment planning, practice valuation and revenue optimization.",modules:["Treatment Costing, Pricing & Fee Structuring","Budgeting, Cash Flow & Financial Reporting","Inventory Control & Smart Procurement","Key Performance Indicators (KPIs) & Revenue Optimization","Capital Investment Planning & Practice Valuation"]},
{title:"Dental Innovation & Entrepreneurship",subtitle:"Creating Ideas. Transforming Dentistry.",overview:"Develop innovative thinking and turn ideas into practical solutions: creative problem-solving, digital transformation, emerging technologies, new models of care and entrepreneurial approaches to dental practice.",modules:["Creative Problem-Solving in Clinical Practice","Digital Transformation & Emerging Dental Technologies","Designing Patient-Centered Models of Care","Dental Entrepreneurship & Practice Growth Strategy"]}];
const mentors=["Prof Dr Shaili Pradhan","Prof Dr Mabi Singh","Dr Pranaya Khanal","Dr Suhit Raj Adhikari","Dr Bodh Bikram Karki","Dr Parakram Parajuli","Dr Santosh Man Rajbhandari","Dr Shyam Kaji Maharjan","Dr Gaurav Basnyat"];

const $=id=>document.getElementById(id);
const icons=()=>{if(window.lucide)lucide.createIcons()};
let refreshReveal=()=>{};

/* ---------- Programs, modal, tabs ---------- */
const modal=$("dg");let lastFocus=null;
function openModal(btn,eyebrow,p,heading,rows){
  lastFocus=btn;$("modal-eyebrow").textContent=eyebrow;$("modal-title").textContent=p.title;
  $("modal-subtitle").textContent=p.subtitle;$("modal-subtitle").hidden=false;
  $("modal-description").textContent=p.overview;
  document.querySelector("#modal-module-section h3").textContent=heading;
  $("modal-modules").replaceChildren(...rows);
  $("modal-module-section").hidden=false;$("modal-link").hidden=true;
  modal.showModal();document.body.style.overflow="hidden";$("modal-close").focus();
}
function programCard(p,i,icon,id,eyebrow,heading,rowsFn){
  const b=document.createElement("button");b.type="button";b.id=id+(i+1);b.className="program-card canva-card reveal";
  b.setAttribute("aria-label","Overview of "+p.title);
  b.innerHTML=`<span class="program-icon"><i data-lucide="${icon}"></i></span><strong></strong><span class="practice-card-subtitle"></span><span class="practice-card-preview"></span><span class="card-bottom"><span>View program overview</span><i data-lucide="arrow-up-right"></i></span>`;
  b.querySelector("strong").textContent=p.title;
  b.querySelector(".practice-card-subtitle").textContent=p.subtitle;
  b.querySelector(".practice-card-preview").textContent=p.overview;
  b.onclick=()=>openModal(b,eyebrow,p,heading,rowsFn(p));
  return b;
}
const grid=$("program-grid");
if(grid){
  programs.forEach((p,i)=>grid.appendChild(programCard(p,i,"activity","program-","Clinical skills program",p.heading,
    p=>p.items.map(([n,t])=>{const li=document.createElement("li"),b=document.createElement("b");b.textContent=n+":";li.append(b," "+t);return li}))));
  practicePrograms.forEach((p,i)=>$("practice-grid").appendChild(programCard(p,i,"briefcase-business","practice-program-","Practice skills program","Modules",
    p=>p.modules.map(t=>{const li=document.createElement("li");li.textContent=t;return li}))));
  $("modal-close").onclick=()=>modal.close();
  modal.addEventListener("close",()=>{document.body.style.overflow="";lastFocus&&lastFocus.focus()});
  modal.addEventListener("click",e=>{if(e.target===modal)modal.close()});
  const tabs=[$("clinical-tab"),$("practice-tab")];
  const setTab=n=>{tabs.forEach((t,i)=>{t.setAttribute("aria-selected",String(i===n));t.tabIndex=i===n?0:-1});
    $("clinical-panel").hidden=n!==0;$("practice-panel").hidden=n!==1;tabs[n].focus();refreshReveal()};
  tabs.forEach((t,i)=>{t.onclick=()=>setTab(i);t.onkeydown=e=>{if(e.key==="ArrowRight"||e.key==="ArrowLeft"){e.preventDefault();setTab(1-i)}}});
}
const mg=$("mentor-grid");
if(mg)mentors.forEach((name,i)=>{
  const c=document.createElement("article");c.className="mentor-card canva-card reveal";c.id="mentor-"+(i+1);
  const ini=name.replace(/^(Prof|Dr)\s+/g,"").split(" ").map(w=>w[0]).slice(0,2).join("").toUpperCase();
  c.innerHTML='<div class="avatar" aria-hidden="true"></div><div><h3></h3><p>MiCD Nepal mentor</p></div>';
  c.querySelector(".avatar").textContent=ini;c.querySelector("h3").textContent=name;mg.appendChild(c);
});

/* ---------- Navbar: dropdowns, mobile menu, active page ---------- */
const nav=$("primary-nav"),menuBtn=$("menu-toggle"),groups=[...nav.querySelectorAll(".nav-group")];
const setGroup=(g,open)=>{g.classList.toggle("open",open);g.querySelector(".nav-trigger").setAttribute("aria-expanded",String(open))};
const closeAll=except=>groups.forEach(g=>{if(g!==except)setGroup(g,false)});
groups.forEach(g=>{
  const t=g.querySelector(".nav-trigger");
  t.addEventListener("click",()=>{const open=t.getAttribute("aria-expanded")!=="true";closeAll(g);setGroup(g,open)});
  t.addEventListener("keydown",e=>{if(e.key==="ArrowDown"){e.preventDefault();closeAll(g);setGroup(g,true);g.querySelector(".nav-dropdown a").focus()}});
  const wide=()=>matchMedia("(min-width:1281px)").matches;
  g.addEventListener("pointerenter",e=>{if(e.pointerType==="mouse"&&wide()){closeAll(g);setGroup(g,true)}});
  g.addEventListener("pointerleave",e=>{if(e.pointerType==="mouse"&&wide()&&!g.contains(document.activeElement))setGroup(g,false)});
});
document.addEventListener("pointerdown",e=>{if(!nav.contains(e.target))closeAll()});
function setMenu(open){
  if(!open)closeAll();
  nav.classList.toggle("open",open);menuBtn.setAttribute("aria-expanded",String(open));
  menuBtn.setAttribute("aria-label",open?"Close menu":"Open menu");
  menuBtn.innerHTML=`<i data-lucide="${open?"x":"menu"}"></i>`;icons();
}
menuBtn.addEventListener("click",()=>setMenu(!nav.classList.contains("open")));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>setMenu(false)));
document.addEventListener("keydown",e=>{
  if(e.key!=="Escape")return;
  if(modal&&modal.open)return;
  const og=groups.find(g=>g.classList.contains("open"));
  if(og){closeAll();og.querySelector(".nav-trigger").focus()}
  else if(nav.classList.contains("open")){setMenu(false);menuBtn.focus()}
});
matchMedia("(min-width:1281px)").addEventListener("change",e=>{if(e.matches)setMenu(false)});
/* highlight the link for the current page */
const here=(location.pathname.split("/").pop()||"index.html").toLowerCase();
document.querySelectorAll("#primary-nav a[href]").forEach(a=>{
  const h=a.getAttribute("href");
  if(!h.includes("#")&&!/^https?:/.test(h)&&h.toLowerCase()===here)a.setAttribute("aria-current","page");
});

/* ---------- Theme ---------- */
const themeBtn=$("theme-toggle");
const isDark=()=>getComputedStyle(document.documentElement).colorScheme==="dark";
try{const s=localStorage.getItem("aagd-theme");if(s)document.documentElement.dataset.theme=s}catch(_){}
function syncTheme(){const d=isDark();themeBtn.setAttribute("aria-label",d?"Switch to light theme":"Switch to dark theme");
  themeBtn.innerHTML=`<i data-lucide="${d?"sun":"moon"}"></i>`;icons()}
themeBtn.addEventListener("click",()=>{const t=isDark()?"light":"dark";document.documentElement.dataset.theme=t;
  try{localStorage.setItem("aagd-theme",t)}catch(_){}syncTheme()});

/* ---------- Join accordion, sticky header shadow ---------- */
document.querySelectorAll(".join-item-toggle").forEach(b=>b.addEventListener("click",()=>{
  const ex=b.getAttribute("aria-expanded")==="true";b.setAttribute("aria-expanded",String(!ex));
  $(b.getAttribute("aria-controls")).setAttribute("aria-hidden",String(ex))}));
const hdr=$("site-header"),upd=()=>hdr.classList.toggle("scrolled",scrollY>12);
addEventListener("scroll",upd,{passive:true});upd();

/* ---------- Upward scroll reveal (.rv -> .rv.in) ---------- */
const AUTO="main section h1,main section h2,main section h3,main .lead,main .section-heading,main .quote,main .tabs,main .cont > *,main .cols3 > *,main .fr,main .fp > *,main .fb,main .stats,main .proj,main .soon,main .join-box,main .about-image,main .about-copy,main .practice-description,main .mentor-more,.reveal,footer .footer-grid";
const reduce=matchMedia("(prefers-reduced-motion: reduce)");
let io=null;
const show=el=>{el.classList.add("in");io&&io.unobserve(el)};
function inView(el){const r=el.getBoundingClientRect();return r.width&&r.height&&r.top<innerHeight*.92&&r.bottom>0}
function check(){document.querySelectorAll(".rv:not(.in)").forEach(el=>{if(reduce.matches||inView(el))show(el)})}
refreshReveal=function(){
  if(!io&&"IntersectionObserver"in window)io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&show(e.target)),{threshold:.05});
  document.querySelectorAll(AUTO).forEach(el=>{if(!el.classList.contains("rv")){el.classList.add("rv");io&&io.observe(el)}});
  check();
};
["scroll","resize","load"].forEach(ev=>addEventListener(ev,check,{passive:true}));
reduce.addEventListener("change",check);

syncTheme();icons();refreshReveal();
setTimeout(()=>{icons();refreshReveal()},300);
