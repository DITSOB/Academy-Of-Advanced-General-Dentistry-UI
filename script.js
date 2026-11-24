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

/* ---------- Programs: each card links to its own page ---------- */
const slug=t=>t.toLowerCase().replace(/™/g,"").replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
const IMG={"digiplan":"dentist,computer","guided-gum-therapy":"dental,hygiene","micd-resto":"dentist,teeth","bite-balance-therapy":"dental,jaw","smile-makeup-therapy":"smile,teeth","biofirst-implant-dentistry":"dental,implant","micd-rehab":"dentist,patient","gp-orthoalign-program":"braces,orthodontic","dental-practice-management":"clinic,office","dental-communication-skills":"doctor,patient","dental-practice-economics":"business,finance","dental-innovation-and-entrepreneurship":"innovation,technology"};
/* Stand-in photos (keyword-based, from loremflickr.com). To use your own, add  image:"images/digiplan.jpg"  to a program above. */
const imgFor=(p,w,h)=>p.image||`https://loremflickr.com/${w}/${h}/${IMG[slug(p.title)]||"dentist"}?lock=${Object.keys(IMG).indexOf(slug(p.title))+1}`;
function programCard(p,i,icon,id){
  const a=document.createElement("a");
  a.href="program.html?p="+slug(p.title);a.id=id+(i+1);a.className="program-card canva-card reveal";
  a.setAttribute("aria-label","View "+p.title);
  a.innerHTML=`<span class="program-photo"><img alt="" loading="lazy"><span class="program-icon"><i data-lucide="${icon}"></i></span></span><strong></strong><span class="practice-card-subtitle"></span><span class="practice-card-preview"></span><span class="card-bottom"><span>View program</span><i data-lucide="arrow-up-right"></i></span>`;
  const im=a.querySelector("img");im.src=imgFor(p,600,360);im.onerror=()=>im.remove();
  a.querySelector("strong").textContent=p.title;
  a.querySelector(".practice-card-subtitle").textContent=p.subtitle;
  a.querySelector(".practice-card-preview").textContent=p.overview;
  return a;
}
const grid=$("program-grid");
if(grid){
  programs.forEach((p,i)=>grid.appendChild(programCard(p,i,"activity","program-")));
  practicePrograms.forEach((p,i)=>$("practice-grid").appendChild(programCard(p,i,"briefcase-business","practice-program-")));
  const tabs=[$("clinical-tab"),$("practice-tab")];
  const setTab=(n,focus=true)=>{tabs.forEach((t,i)=>{t.setAttribute("aria-selected",String(i===n));t.tabIndex=i===n?0:-1});
    $("clinical-panel").hidden=n!==0;$("practice-panel").hidden=n!==1;if(focus)tabs[n].focus();refreshReveal()};
  tabs.forEach((t,i)=>{t.onclick=()=>setTab(i);t.onkeydown=e=>{if(e.key==="ArrowRight"||e.key==="ArrowLeft"){e.preventDefault();setTab(1-i)}}});
  if(new URLSearchParams(location.search).get("tab")==="practice")setTab(1,false);
}

/* ---------- program.html: one dedicated page per program (?p=slug) ---------- */
const DEFAULTS={duration:"[Duration]",mode:"[In-person / Hybrid]",schedule:"[Dates & timings]",fee:"[Course fee]",eligibility:"[Eligibility]",certificate:"[Certification]",intake:"[Next intake]",seats:"[Seats available]"};
const detail=$("program-detail");
if(detail){
  const all=[...programs.map(p=>({...p,kind:"clinical"})),...practicePrograms.map(p=>({...p,kind:"practice"}))];
  const k=all.findIndex(p=>slug(p.title)===new URLSearchParams(location.search).get("p"));
  const mk=(tag,cls,txt)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e};
  const link=(cls,href,html)=>{const a=mk("a",cls);a.href=href;a.innerHTML=html;return a};
  const p=all[k];
  if(!p){
    detail.append(mk("h1","program-title","Program not found"),link("program-back","programs.html",'<i data-lucide="arrow-left"></i>Back to all programs'));
  }else{
    const clinical=p.kind==="clinical",d=Object.assign({},DEFAULTS,p.details);
    document.title=p.title+" | AAGD";
    const head=mk("div","program-head");
    head.append(link("program-back",clinical?"programs.html":"programs.html?tab=practice",'<i data-lucide="arrow-left"></i>All programs'),
      mk("span","eyebrow",clinical?"Clinical skills program":"Practice skills program"),mk("h1","program-title",p.title),mk("p","program-sub",p.subtitle));
    const main=mk("div","program-main"),side=mk("aside","program-side"),block=h=>{const s=mk("section","program-block");s.append(mk("h2",null,h));return s};
    /* banner */
    const banner=mk("div","program-banner"),bi=document.createElement("img");
    bi.src=imgFor(p,1100,460);bi.alt=p.title;bi.onerror=()=>bi.remove();banner.append(bi);
    /* about */
    const about=block("About this course");about.append(mk("p","program-overview",p.overview));
    /* curriculum (accordion) */
    const cur=block("Curriculum");
    (clinical?p.items:p.modules.map(m=>[m,""])).forEach((r,n)=>{
      const det=document.createElement("details"),sm=document.createElement("summary"),body=mk("div","mod-body");
      if(n===0)det.open=true;
      sm.append(mk("span","mod-no","Module "+(n+1)),mk("span","mod-name",r[0]));
      if(r[1])body.append(mk("p",null,r[1].charAt(0).toUpperCase()+r[1].slice(1)));
      body.append(mk("p","mod-meta","Hours: [00]  ·  Format: [Lecture / Hands-on]  ·  Assessment: [Method]"),mk("p","mod-meta","Topics: [Add the topic list for this module]"));
      det.append(sm,body);cur.append(det)});
    /* flyers & images */
    const fly=block("Flyers & images"),fg=mk("div","flyer-grid");
    (p.flyers&&p.flyers.length?p.flyers:[0,0,0]).forEach((f,n)=>{
      const t=mk("figure","flyer");
      if(f){const i=document.createElement("img");i.src=f;i.alt=p.title+" flyer "+(n+1);t.append(i)}
      else{t.classList.add("is-empty");t.innerHTML='<i data-lucide="image"></i><span>Flyer / poster image</span><small>Add your image here</small>'}
      fg.append(t)});
    fly.append(fg);
    /* downloads */
    const mat=block("Downloads & materials"),ml=mk("ul","material-list");
    (p.materials||[["Course flyer","PDF"],["Curriculum brochure","PDF"],["Application form","PDF"],["Class schedule","PDF"]]).forEach(([t,ty,h])=>{
      const li=mk("li"),a=link("",h||"#",'<i data-lucide="file-text"></i><span class="mat-title"></span><span class="mat-type"></span><i data-lucide="download"></i>');
      a.querySelector(".mat-title").textContent=t;a.querySelector(".mat-type").textContent=ty;li.append(a);ml.append(li)});
    mat.append(ml);
    main.append(banner,about,cur,fly,mat);
    /* sidebar: course details */
    const facts=mk("div","program-facts"),dl=mk("dl");
    facts.append(mk("h3",null,"Course details"));
    [["Duration","duration"],["Mode","mode"],["Schedule","schedule"],["Fee","fee"],["Eligibility","eligibility"],["Certificate","certificate"],["Next intake","intake"],["Seats","seats"]]
      .forEach(([l,key])=>dl.append(mk("dt",null,l),mk("dd",null,d[key])));
    const ext=link("text-link","https://aagd.colornpixel.com/?p="+(clinical?"clinical":"practice")+"-skills-training",'View on AAGD website<i data-lucide="arrow-up-right"></i>');
    ext.target="_blank";ext.rel="noopener noreferrer";
    facts.append(dl,link("button button-primary","index.html#join",'Apply / Join AAGD<i data-lucide="arrow-up-right"></i>'),link("button button-outline","contact.html",'Enquire about this course<i data-lucide="mail"></i>'),ext);
    side.append(facts);
    const layout=mk("div","program-layout");layout.append(main,side);
    /* prev / next */
    const same=all.filter(x=>x.kind===p.kind),j=same.indexOf(p),pager=mk("div","program-pager"),pv=same[j-1],nx=same[j+1];
    pager.append(pv?link("","program.html?p="+slug(pv.title),"← "+pv.title):mk("span"),nx?link("","program.html?p="+slug(nx.title),nx.title+" →"):mk("span"));
    detail.append(head,layout,pager);
  }
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
  const og=groups.find(g=>g.classList.contains("open"));
  if(og){closeAll();og.querySelector(".nav-trigger").focus()}
  else if(nav.classList.contains("open")){setMenu(false);menuBtn.focus()}
});
matchMedia("(min-width:1281px)").addEventListener("change",e=>{if(e.matches)setMenu(false)});
/* highlight the link for the current page */
let here=(location.pathname.split("/").pop()||"index.html").toLowerCase();
if(here==="program.html")here="programs.html";
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
const hdr=$("site-header");let tick=false;
const upd=()=>{tick=false;hdr.style.setProperty("--hp",Math.min(1,Math.max(0,scrollY/160)).toFixed(3));hdr.classList.toggle("scrolled",scrollY>12)};
addEventListener("scroll",()=>{if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});upd();

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