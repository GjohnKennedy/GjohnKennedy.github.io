/* ===================== ICONS ===================== */
const ICONS = {
  sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" stroke-linecap="round"/></svg>',
  moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" stroke-linejoin="round"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round"/></svg>',
  close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg>',
  arrowUpRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 17L17 7M8 7h9v9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  arrowLeft:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 12H5M11 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  chevronLeft:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  chevronRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  android:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 8h10v9a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2M5 8v6M19 8v6M9 21v-3M15 21v-3" stroke-linecap="round"/></svg>',
  api:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="9" width="6" height="6" rx="1"/><rect x="14" y="9" width="6" height="6" rx="1"/><path d="M10 12h4"/></svg>',
  data:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="6" rx="7" ry="2.6"/><path d="M5 6v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6M5 12v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-6"/></svg>',
  device:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="6" y="2.5" width="12" height="19" rx="2.4"/><path d="M10.5 18.5h3" stroke-linecap="round"/></svg>',
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="8" r="3"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><circle cx="17.5" cy="9" r="2.4"/><path d="M15 20a4.5 4.5 0 0 1 7 0"/></svg>',
  kotlin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4h16L12 12l8 8H4V4Z" stroke-linejoin="round"/></svg>',
  bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke-linejoin="round"/></svg>',
  ble:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 7l10 10-5 4V3l5 4L7 17" stroke-linejoin="round"/></svg>',
  chip:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="7" y="7" width="10" height="10" rx="1.4"/><path d="M9.5 3v4M14.5 3v4M9.5 17v4M14.5 17v4M3 9.5h4M3 14.5h4M17 9.5h4M17 14.5h4" stroke-linecap="round"/></svg>',
  server:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="4" width="16" height="6" rx="1.4"/><rect x="4" y="14" width="16" height="6" rx="1.4"/><path d="M7.5 7h.01M7.5 17h.01" stroke-linecap="round"/></svg>',
  lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="5" y="10.5" width="14" height="9" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>',
  key:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="8" cy="9" r="3.4"/><path d="M10.3 11.3 19 20M15.5 15.8l2.3-2.3M18 18.3l2.3-2.3" stroke-linecap="round"/></svg>',
  qr:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><path d="M14 14h2.5v2.5H14zM17.5 14H20M14 17.5h2.5M17.5 17.5H20v2.5h-2.5v-2.5Z"/></svg>',
  box:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Z" stroke-linejoin="round"/><path d="M4 8.5 12 13l8-4.5M12 13v7" stroke-linejoin="round"/></svg>',
  book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v18H6.5A2.5 2.5 0 0 0 4 23V5.5ZM20 5.5A2.5 2.5 0 0 0 17.5 3H12v18h5.5a2.5 2.5 0 0 1 2.5 2V5.5Z"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2" stroke-linecap="round"/></svg>',
  building:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01" stroke-linecap="round"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 11 12 4l8 7" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 9.5V20h12V9.5" stroke-linejoin="round"/></svg>',
  gift:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="9" width="16" height="11" rx="1"/><path d="M4 9h16M12 9v11M12 9c-2-3-6-4-6-1s4 1 6 1Zm0 0c2-3 6-4 6-1s-4 1-6 1Z"/></svg>',
  github:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m8 9-3 3 3 3M16 9l3 3-3 3M13.5 7l-3 10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  linkedin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M8 10.5V16M8 7.8v.01M11.5 16v-5.5M11.5 13c0-1.5 1-2.6 2.4-2.6s2.1 1 2.1 2.6V16" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  palette:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3a9 8 0 1 0 0 16c1.2 0 1.8-.9 1.8-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.7-1.6 1.6-1.6H16a4 4 0 0 0 4-4c0-4-3.6-6.2-8-6.2Z"/><circle cx="7.5" cy="11" r="1"/><circle cx="9.5" cy="7.5" r="1"/><circle cx="14.5" cy="7.5" r="1"/></svg>',
};
function icon(name){return ICONS[name]||'';}

/* ===================== THEME ===================== */
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
function setTheme(t){
  root.setAttribute('data-theme', t);
  themeToggle.innerHTML = icon(t==='light'?'moon':'sun');
  try{ localStorage.setItem('jk-theme', t); }catch(e){}
}
let savedTheme='dark';
try{ if(localStorage.getItem('jk-theme')==='light') savedTheme='light'; }catch(e){}
setTheme(savedTheme);
themeToggle.addEventListener('click', ()=> setTheme(root.getAttribute('data-theme')==='light'?'dark':'light'));
document.getElementById('github-btn').innerHTML = icon('github');
document.getElementById('linkedin-btn').innerHTML = icon('linkedin');

/* reduced motion */
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(prefersReduced) document.body.classList.add('reduced-motion');

/* ===================== NAV ===================== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', ()=>{
  nav.classList.toggle('scrolled', window.scrollY > 24);
},{passive:true});

document.getElementById('menu-open').innerHTML = icon('menu');
document.getElementById('menu-close').innerHTML = icon('close');
const mobileMenu = document.getElementById('mobile-menu');
document.getElementById('menu-open').addEventListener('click', ()=> mobileMenu.classList.add('open'));
document.getElementById('menu-close').addEventListener('click', ()=> mobileMenu.classList.remove('open'));
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=> mobileMenu.classList.remove('open')));

/* scroll spy */
const navLinks = [...document.querySelectorAll('#nav-links a')];
const sections = ['home','about','skills','projects','experience','contact'].map(id=>document.getElementById(id)).filter(Boolean);
const spyObserver = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      navLinks.forEach(l=>l.classList.toggle('active', l.dataset.sec===e.target.id));
    }
  });
},{rootMargin:'-45% 0px -50% 0px'});
sections.forEach(s=>spyObserver.observe(s));

/* ===================== FLOATING KEYWORDS (hero bg) ===================== */
const KEYWORDS = ['Kotlin','Android','Jetpack Compose','MVVM','WebSockets','BLE','IoT','Java','ESP32'];
const kwLayer = document.getElementById('float-kw-layer');
kwLayer.style.cssText='position:absolute;inset:0;z-index:1;pointer-events:none;overflow:hidden;';
const kwPositions = [
  {top:'12%',left:'6%'},{top:'22%',left:'70%'},{top:'68%',left:'8%'},{top:'78%',left:'62%'},
  {top:'40%',left:'2%'},{top:'8%',left:'42%'},{top:'85%',left:'34%'},{top:'55%',left:'80%'},{top:'30%',left:'88%'}
];
KEYWORDS.forEach((kw,i)=>{
  const el = document.createElement('span');
  el.className='float-kw';
  el.textContent = kw;
  const pos = kwPositions[i%kwPositions.length];
  el.style.top = pos.top; el.style.left = pos.left;
  el.style.animationDelay = (i*0.6)+'s';
  el.style.animationDuration = (7+ (i%4))+'s';
  el.style.opacity='0';
  el.style.transition='opacity 1s ease '+(0.4+i*0.08)+'s';
  kwLayer.appendChild(el);
  requestAnimationFrame(()=>{ setTimeout(()=>{ el.style.opacity = (window.innerWidth<720? '0.35':'0.55'); }, 30); });
});

/* ===================== HERO VISUAL (chain cards) ===================== */
const heroVisual = document.getElementById('hero-visual');
const heroChain = [
  {label:'Android App', color:'var(--signal)', top:'4%', left:'6%'},
  {label:'WebSocket / REST', color:'var(--signal)', top:'30%', left:'32%'},
  {label:'BLE Bridge', color:'var(--copper)', top:'56%', left:'8%'},
  {label:'ESP32 Device', color:'var(--copper)', top:'80%', left:'34%'},
];
heroChain.forEach((c,i)=>{
  const el = document.createElement('div');
  el.className='chain-card';
  el.style.top=c.top; el.style.left=c.left;
  el.style.opacity='0'; el.style.transform='translateY(10px)';
  el.style.transition='opacity .6s ease '+(0.6+i*0.15)+'s, transform .6s ease '+(0.6+i*0.15)+'s';
  el.innerHTML = '<span class="chain-dot" style="background:'+c.color+';box-shadow:0 0 8px '+c.color+'"></span>'+c.label;
  heroVisual.appendChild(el);
  requestAnimationFrame(()=> setTimeout(()=>{ el.style.opacity='1'; el.style.transform='translateY(0)'; }, 30));
});
const heroSvg = document.createElementNS('http://www.w3.org/2000/svg','svg');
heroSvg.setAttribute('viewBox','0 0 420 420');
heroSvg.innerHTML = '<path d="M90 40 Q160 90 160 150 Q160 210 90 250 Q40 280 90 330" stroke="url(#g1)" stroke-width="1.5" fill="none" stroke-dasharray="4 6" opacity="0.5"/><defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5EEAD4"/><stop offset="100%" stop-color="#E8A464"/></linearGradient></defs>';
heroVisual.appendChild(heroSvg);

/* ===================== ABOUT FLOW ===================== */
const aboutFlow = [
  {icon:'android', label:'Android', sub:'Kotlin & Java applications'},
  {icon:'api', label:'APIs', sub:'REST & WebSockets'},
  {icon:'data', label:'Data', sub:'Room, Firebase, DataStore'},
  {icon:'device', label:'Devices', sub:'BLE, ESP32, enterprise hardware'},
  {icon:'users', label:'Users', sub:'Real workflows, real releases'},
];
const aboutFlowEl = document.getElementById('about-flow');
aboutFlow.forEach((n,i)=>{
  const node = document.createElement('div');
  node.className='flow-node';
  node.innerHTML = '<span class="node-dot">'+icon(n.icon)+'</span><span><span class="node-label">'+n.label+'</span><br><span class="node-sub">'+n.sub+'</span></span>';
  aboutFlowEl.appendChild(node);
  if(i<aboutFlow.length-1){
    const line = document.createElement('div');
    line.className='flow-line';
    aboutFlowEl.appendChild(line);
  }
});

/* ===================== SKILLS ===================== */
const SKILLS = [
  {title:'Android', items:['Kotlin','Java','Android SDK','Jetpack Compose','XML','Material Design','Material 3','RecyclerView','Navigation Component','ViewModel','LiveData','StateFlow','SharedFlow','Coroutines','Flow','WorkManager','Services','BroadcastReceiver','Paging 3']},
  {title:'Architecture', items:['MVVM','MVP','MVI','Clean Architecture','SOLID','Repository Pattern','Dependency Injection','Hilt','Koin','Dagger']},
  {title:'Networking', items:['Retrofit','OkHttp','REST APIs','WebSockets','Socket.IO','JSON']},
  {title:'Database', items:['Room','SQLite','Firebase','Firestore','DataStore','SharedPreferences']},
  {title:'Security', items:['Secure Storage','SSL Pinning','AES','HMAC','Encryption','R8','ProGuard','API Security']},
  {title:'Cross Platform', items:['Flutter','Dart','Kotlin Multiplatform','Compose Multiplatform']},
  {title:'BLE / IoT', items:['Bluetooth','BLE','Beacons','ESP32','IoT','Hardware Integration']},
  {title:'Testing', items:['JUnit','Mockito','Espresso','Crashlytics','Android Profiler','LeakCanary','StrictMode']},
  {title:'Tools', items:['Git','GitHub','Bitbucket','Jira','Android Studio','Firebase','FCM','Google Play Console','CI/CD']},
  {title:'AI-Assisted Development', items:['ChatGPT','Claude','Google Gemini','AI-assisted coding','Debugging','Code review','Documentation','Prompt engineering','Developer productivity']},
];
const skillGroupsEl = document.getElementById('skill-groups');
SKILLS.forEach(g=>{
  const card = document.createElement('div');
  card.className='skill-card';
  card.innerHTML = '<h3><span class="dot"></span>'+g.title+'</h3><div class="chip-row">'+g.items.map(i=>'<span class="chip">'+i+'</span>').join('')+'</div>';
  skillGroupsEl.appendChild(card);
});

/* ===================== ROLE, OWNERSHIP & RESPONSIBILITIES ===================== */
const ROLE_TABS = [
  {label:'End-to-End Development', items:['Understand business and technical requirements','Analyze existing requirements and convert them into Android implementation plans','Make technical decisions for Android implementation','Design application UI and user flows','Develop Android applications using Kotlin and Java','Implement features from start to finish','Integrate REST APIs and backend services','Handle API request/response models','Implement loading, success, error and empty states','Implement real-time communication where required','Perform application testing and debugging','Fix production issues and application bugs','Optimize application performance','Maintain existing applications and legacy Android code','Prepare production builds','Manage application releases','Support applications after release']},
  {label:'UI Development', items:['Jetpack Compose','XML layouts','Material Design','Material 3','RecyclerView','Custom UI components','Navigation','Responsive Android UI','State management','UI performance optimization','Loading/error/empty states','Form validation','Permission handling']},
  {label:'API Integration', items:['REST API integration','Retrofit','OkHttp','JSON parsing','Authentication flows','API error handling','Request/response handling','Network state handling','API debugging','Backend integration']},
  {label:'Testing & Debugging', items:['Functional testing','UI testing','API testing','Integration testing','Regression testing','Debugging','Crash investigation','Log analysis','Firebase Crashlytics','Android Profiler','Performance analysis','Memory/leak investigation']},
  {label:'Release & Play Console', items:['Google Play Console account setup/creation and maintenance','Application creation and configuration','Production releases','Internal testing / testing tracks','App bundle management','Store listing maintenance','App version management','Release management','Play Console policy compliance','Developer account maintenance','Application policy-related requirements','Addressing Play Console warnings/issues','Supporting application updates and releases']},
  {label:'Production Maintenance', items:['Production issue investigation','Bug fixes','Crash monitoring','Application updates','API compatibility handling','Android version compatibility','Play Store compliance','Performance improvements','Release support','Client issue resolution']},
  {label:'Technical Decision Making', items:['Selecting appropriate Android architecture','Choosing suitable Android components','Deciding implementation approaches','Evaluating technical trade-offs','Choosing API/networking approaches','Making UI implementation decisions','Deciding appropriate data/state management approaches','Identifying performance and stability improvements','Evaluating integration approaches for third-party SDKs and devices']},
];
const roleTabsEl = document.getElementById('role-tabs');
const rolePanelEl = document.getElementById('role-panel');
function renderRolePanel(idx){
  const tab = ROLE_TABS[idx];
  rolePanelEl.style.opacity='0';
  setTimeout(()=>{
    rolePanelEl.innerHTML = '<div class="role-panel-title">'+tab.label+'</div><ul>'+tab.items.map(i=>'<li>'+i+'</li>').join('')+'</ul>';
    rolePanelEl.style.opacity='1';
  }, prefersReduced?0:150);
}
ROLE_TABS.forEach((tab,i)=>{
  const b = document.createElement('button');
  b.className='filter-btn'+(i===0?' active':'');
  b.textContent=tab.label;
  b.addEventListener('click', ()=>{
    roleTabsEl.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    renderRolePanel(i);
  });
  roleTabsEl.appendChild(b);
});
rolePanelEl.style.transition='opacity .25s ease';
renderRolePanel(0);

/* ===================== OWNERSHIP BEYOND DEVELOPMENT ===================== */
const OWNERSHIP_CARDS = [
  {icon:'bolt', title:'End-to-End Development', desc:'Requirement → UI → API → Implementation → Testing → Release → Maintenance.'},
  {icon:'chip', title:'Technical Decision Making', desc:'Architecture, libraries, implementation strategies and integration approaches.'},
  {icon:'server', title:'Production Ownership', desc:'Bug fixing, crash analysis, performance optimization and application maintenance.'},
  {icon:'android', title:'Play Console & Release', desc:'Application setup, releases, policy compliance, developer account maintenance and production updates.'},
  {icon:'users', title:'Client & Product Support', desc:'Understanding requirements, resolving issues and supporting application delivery.'},
  {icon:'chart', title:'Continuous Learning', desc:'Android modernization, Flutter, KMP/CMP and AI-assisted development.'},
];
const ownershipGridEl = document.getElementById('ownership-grid');
OWNERSHIP_CARDS.forEach(c=>{
  const card = document.createElement('div');
  card.className='ownership-card';
  card.innerHTML = '<div class="oc-icon">'+icon(c.icon)+'</div><h3>'+c.title+'</h3><p>'+c.desc+'</p>';
  ownershipGridEl.appendChild(card);
});

/* ===================== ECOSYSTEM CHAIN ===================== */
const ECO = [
  {icon:'android', title:'ANDROID', sub:'Application layer'},
  {icon:'kotlin', title:'KOTLIN / JAVA', sub:'Core implementation'},
  {icon:'api', title:'APIs / WEBSOCKETS', sub:'Networking & real-time data'},
  {icon:'ble', title:'BLE / BLUETOOTH', sub:'Device communication'},
  {icon:'chip', title:'ESP32 / DEVICES', sub:'Embedded hardware'},
  {icon:'bolt', title:'REAL-WORLD SYSTEMS', sub:'Lockers, beacons, scanners'},
];
const ecoChainEl = document.getElementById('eco-chain');
ECO.forEach((n,i)=>{
  const node = document.createElement('div');
  node.className='eco-node';
  node.innerHTML = '<span class="eco-icon">'+icon(n.icon)+'</span><span><span class="eco-title">'+n.title+'</span><br><span class="eco-sub">'+n.sub+'</span></span>';
  ecoChainEl.appendChild(node);
  if(i<ECO.length-1){
    const c = document.createElement('div');
    c.className='eco-connector';
    ecoChainEl.appendChild(c);
  }
});

/* ===================== PROJECT DATA ===================== */
/* ============================================================
   PROJECT IMAGES  (edit this block after copying your images)
   Put files in ./assets/images/ and list the file names below.
   banner : one wide image shown on the project card + case study
   shots  : phone screenshots shown in the gallery + fullscreen viewer
   Leave banner:'' and shots:[] to show the built-in icon placeholder.
   Example: cityplots:{banner:'cityplots-banner.webp', shots:['cityplots-1.webp','cityplots-2.webp']}
   ============================================================ */
const IMG_DIR = './assets/images/';
const PROJECT_IMAGES = {
  cityplots:{banner:'', shots:[]},
  eficyent:{banner:'', shots:[]},
  heraldex:{banner:'', shots:[]},
  bhim:{banner:'', shots:[]},
  timeexchange:{banner:'', shots:[]},
  kliqedu:{banner:'', shots:[]},
  giftbook:{banner:'', shots:[]},
  trackae:{banner:'', shots:[]},
  keyfind:{banner:'', shots:[]},
  pudobox:{banner:'', shots:[]},
  pixelart:{banner:'', shots:[]},
};
function imgsFor(p){
  const m = PROJECT_IMAGES[p.id] || {};
  return { banner: m.banner ? IMG_DIR+m.banner : '', shots: (m.shots||[]).map(f=>IMG_DIR+f) };
}
function scrollLock(on){
  window.__lockCount = Math.max(0, (window.__lockCount||0) + (on?1:-1));
  document.body.style.overflow = window.__lockCount>0 ? 'hidden' : '';
}

const PROJECTS = [
  {
    id:'cityplots', name:'CityPlots', filterCat:'Real Estate', domain:'Real Estate',
    tech:['Kotlin','MVVM','REST APIs','Agora','FCM','Socket.IO'], seed:0,
    summary:'Real-estate application connecting users and agents through property listings, meetings, live events and real-time communication.',
    overview:'CityPlots connects property users and agents through listings, agent uploads, meetings and live events, with real-time audio/video communication and chat layered over core real-estate workflows.',
    role:'Android Developer',
    responsibilities:['Android development using Kotlin and MVVM','REST API integration','Agora audio/video integration','Live chat functionality','FCM notifications and Android permissions','Production debugging and maintenance','Play Store release support'],
    keyFeatures:['Property listings','Agent property uploads','User and agent workflows','Meetings and live events','Audio/video communication','Live chat with 24/7 support using Socket.IO','Push notifications'],
    technicalChallenge:'Coordinating real-time features — audio/video calls, live chat and push notifications — on top of core listing and agent workflows without affecting app stability.',
    additionalResponsibility:'Implemented 24/7 real-time chat support using Socket.IO.',
    impact:'10K+ Play Store downloads',
    playStoreUrl:'https://play.google.com/store/apps/details?id=com.cityplots.app',
    shots:4, gallery:true,
  },
  {
    id:'eficyent', name:'EFICyent', filterCat:'Fintech', domain:'Fintech / Digital Banking',
    tech:['Kotlin','MVVM','REST APIs','Security','Firebase'], seed:1,
    summary:'Digital banking application supporting beneficiaries, transfers, transaction history and account-related financial workflows.',
    overview:'EFICyent is a digital banking application covering beneficiary management, transfers, transaction history and account-related workflows, built with a strong focus on Android-side security.',
    role:'End-to-end Android Developer',
    ownership:'End-to-end Android development and ownership — from beneficiary and transfer workflows through secure storage, encryption-related implementation and production debugging.',
    responsibilities:['End-to-end Android development in Kotlin and MVVM','Banking API integration','Beneficiary and transfer workflows','Transaction history','Secure data handling and encryption-related implementation','Secure storage and R8/ProGuard','Production debugging'],
    securityFocus:['Secure handling of sensitive information','Secure local storage','API communication security','Input validation','Encryption','Android-side security practices'],
    technicalChallenge:'Implementing beneficiary, transfer and transaction workflows on top of secure storage, encryption and hardened API communication.',
    impact:'10K+ downloads',
    availability:'Private Client Project',
    note:'Application access is currently restricted due to client/security requirements.',
    shots:4, gallery:true, premium:true,
  },
  {
    id:'heraldex', name:'HeraldEx', filterCat:'Trading', domain:'Crypto / Trading',
    tech:['Kotlin','WebSockets','REST APIs','HMAC','Encryption','MVVM'], seed:2,
    summary:'Fiat + crypto dual-asset exchange application supporting buy, sell, swap, deposit and withdrawal workflows with real-time market information.',
    overview:'HeraldEx is a crypto exchange application for individual and business users, supporting buy, sell, swap, deposit and withdrawal workflows alongside real-time market price updates over WebSockets.',
    role:'End-to-end Android Developer',
    ownership:'Handled fiat and crypto dual-asset management workflows with end-to-end Android development.',
    responsibilities:['Kotlin Android development','REST API integration','WebSocket implementation for real-time price updates','Trading workflows (buy, sell, swap, deposit, withdrawal)','HMAC-based security and encryption-related implementation','Socket connection handling','UI optimization'],
    keyFeatures:['Fiat + crypto dual-asset management','Buy, sell, swap','Deposit and withdrawal','Real-time market prices over WebSockets','Support for individual and business users'],
    technicalChallenge:'Keeping a live WebSocket connection to market data reliable and performant while trading workflows run alongside HMAC-based request signing.',
    technicalHighlight:'Fiat + crypto dual-asset management, handled end-to-end on the Android side.',
    diagram:{type:'pulse', label:'Live market data', nodes:[]},
    marketAnimation:true,
    playStoreUrl:'https://play.google.com/store/apps/details?id=com.herald.exchange',
    availability:'Published Internationally',
    note:'Published for supported international markets; availability varies by region.',
    shots:4, gallery:true,
  },
  {
    id:'bhim', name:'BHIM Markets', filterCat:'Trading', domain:'Trading',
    tech:['Kotlin','WebSockets','RecyclerView','DiffUtil','REST APIs'], seed:3,
    summary:'Real-time market application handling continuously changing financial market information.',
    overview:'BHIM Markets displays continuously changing financial market data in real time, built around efficient list rendering so the UI stays smooth under a constant stream of updates.',
    role:'End-to-end Android Developer',
    ownership:'Personally handled the Android implementation end-to-end.',
    responsibilities:['Kotlin Android development','WebSocket integration for real-time market updates','RecyclerView implementation with DiffUtil optimization','Dynamic UI updates','Loading and error states','Performance optimization'],
    keyFeatures:['Stock trading','Real-time market data','Trading workflows','Dynamic UI updates'],
    technicalHighlight:'Efficiently updating frequently changing market data without refreshing the entire list.',
    playStoreUrl:'https://play.google.com/store/apps/details?id=com.bhim.markets',
    shots:3, gallery:true,
  },
  {
    id:'kliqedu', name:'KliqEdu', filterCat:'Education', domain:'Education',
    tech:['Kotlin','Android','MVVM','REST APIs'], seed:4,
    summary:'Android education application providing mobile learning and educational workflows.',
    overview:'KliqEdu is an Android education application built around mobile learning and educational workflows, implemented with a standard Kotlin/MVVM foundation.',
    role:'End-to-end Android Developer',
    ownership:'End-to-end Android development and implementation.',
    responsibilities:['Android development','Kotlin implementation','API integration','UI development','Navigation','Testing','Debugging','Production support'],
    availability:'Private Client Project',
    shots:3, gallery:true,
  },
  {
    id:'giftbook', name:'GiftBook', filterCat:'Consumer', domain:'Kotlin Multiplatform / Compose Multiplatform',
    tech:['Kotlin','Kotlin Multiplatform (KMP)','Compose Multiplatform (CMP)','Jetpack Compose','Firebase / Firestore'], seed:5,
    summary:'Cross-platform application concept for digitally managing marriage and event-related gift/moi records.',
    overview:'GiftBook is a cross-platform application concept for digitally managing marriage and event-related gift/moi records, exploring a shared Kotlin Multiplatform codebase with a Compose Multiplatform UI over a Firestore-backed data model.',
    role:'Android &amp; Cross-Platform Developer (KMP/CMP)',
    responsibilities:['Application architecture','KMP implementation','CMP UI','Shared business logic','UI development','Data modeling','Firebase/Firestore integration','Multi-device data considerations','Validation','Application workflow'],
    technicalChallenge:'Designing a Firestore-backed data model for gift/moi records that stays consistent as the same records are accessed across devices.',
    technicalHighlight:'Kotlin Multiplatform and Compose Multiplatform exploration for shared cross-platform application development.',
    shots:3, gallery:true,
  },
  {
    id:'timeexchange', name:'Time Exchange', filterCat:'Consumer', domain:'Consumer / Service Platform',
    tech:['Kotlin','Android','REST APIs','MVVM'], seed:6,
    summary:'Mobile platform centered around exchanging or managing time-based services and user activities.',
    overview:'Time Exchange is a mobile platform centered on exchanging and managing time-based services and user activities, built on a Kotlin/MVVM Android foundation.',
    role:'End-to-end Android Developer',
    responsibilities:['Kotlin Android development','Application screens and navigation','API integration','UI implementation','Testing','Debugging','Production maintenance'],
    availability:'Private Client Project',
    shots:3, gallery:true,
  },
  {
    id:'trackae', name:'TrackAE', filterCat:'Enterprise', domain:'Enterprise / Industrial',
    tech:['Java','Android','QR Code','Honeywell Devices','Enterprise APIs'], seed:7,
    summary:'Enterprise product-chain tracking system designed for large-scale industrial environments using QR-based identification and Honeywell devices.',
    overview:'TrackAE is a large-scale, industrial product-chain tracking system. I contributed to the Android application development and device-specific workflows rather than the entire system — specifically Java implementation, QR scanning and Honeywell device integration.',
    role:'Android Developer (Contributor)',
    responsibilities:['Java Android development','QR-code scanning','Honeywell device integration','Device-specific implementation','Product tracking workflow','API integration','Debugging','Maintenance'],
    technicalChallenge:'Getting reliable QR scanning and stable communication with Honeywell enterprise devices across the product-tracking workflow.',
    diagram:{type:'pipeline', nodes:[{icon:'qr',label:'QR Code'},{icon:'device',label:'Honeywell Device'},{icon:'android',label:'Android App'},{icon:'box',label:'Product Tracking'}]},
    availability:'Private Client / Enterprise Project',
    shots:3, gallery:true,
  },
  {
    id:'keyfind', name:'KeyFind', filterCat:'BLE / IoT', domain:'BLE / Beacon',
    tech:['Android','Bluetooth','BLE','Beacons'], seed:8,
    summary:'Beacon/Bluetooth-based application designed to help users locate tagged keys or objects using proximity information.',
    overview:'KeyFind helps users locate tagged keys or objects using Bluetooth/BLE beacon proximity information, handling scanning, detection and connection state across a range of Android devices.',
    role:'End-to-end Android Developer',
    ownership:'Personally handled the Android application implementation and BLE functionality.',
    responsibilities:['BLE scanning and beacon detection','Bluetooth communication','Device identification','Proximity-based finding','Bluetooth permissions','Connection/state handling','Android device compatibility','Debugging BLE issues'],
    technicalChallenge:'Handling BLE scanning, permissions and connection state consistently across a wide range of Android device and OS-version combinations.',
    keyFeatures:['Device scanning','Proximity finding','Permissions','Device state handling'],
    diagram:{type:'ble'},
    availability:'Private Client Project',
    shots:3, gallery:true,
  },
  {
    id:'pudobox', name:'PudoBox', filterCat:'BLE / IoT', domain:'IoT / Smart Hardware',
    tech:['Android','Bluetooth/BLE','ESP32','Embedded Programming','IoT','Hardware Integration'], seed:9,
    summary:'Bluetooth-enabled smart locker system combining an Android application with ESP32-based hardware.',
    overview:'PudoBox is a Bluetooth-enabled smart locker system spanning both software and hardware — an Android application that discovers and controls physical lockers through an ESP32-based controller.',
    role:'Android & Embedded Developer',
    responsibilities:['Android application development','Bluetooth/BLE communication','Locker workflows','Device discovery','Connection management','UI','Permissions'],
    hardwareResponsibilities:['ESP32 programming','Bluetooth communication','Hardware/software communication and IoT integration','Locker controller integration','Testing hardware communication'],
    technicalChallenge:'Keeping Bluetooth/BLE communication and connection state reliable across the full stack — from the Android app, through the ESP32 controller, to the physical locker.',
    diagram:{type:'pipeline', vertical:true, nodes:[{icon:'android',label:'Android App'},{icon:'ble',label:'Bluetooth / BLE'},{icon:'chip',label:'ESP32'},{icon:'box',label:'Locker Controller'},{icon:'home',label:'Physical Smart Locker'}]},
    availability:'Private / Client Project',
    note:'Android and hardware-side integration only — hardware manufacturing was not part of this responsibility.',
    shots:4, gallery:true, featured:true,
  },
  {
    id:'pixelart', name:'PixelArt', filterCat:'Creative', domain:'Creative / Art Application',
    tech:['Android','Kotlin','Offline Functionality','Custom UI'], seed:10,
    summary:'Art-focused Android application that allows users to customize artwork using selectable color palettes and create different artwork experiences offline.',
    overview:'PixelArt is an art-focused Android application that lets users customize artwork using selectable color palettes and create different artwork experiences entirely offline.',
    role:'End-to-end Android development.',
    responsibilities:['UI development','Art customization workflow','Color palette implementation','Offline functionality','Artwork interaction','Output/preview experience','Testing','Debugging','Android optimization'],
    keyFeatures:['Offline artwork experience','Color palette selection','Artwork customization','Different artwork creation','Color-based customization','Artwork preview','Final visual output'],
    shots:3, gallery:true,
  },
];
const CAT_ICON = {'Real Estate':'home','Fintech':'lock','Trading':'chart','Education':'book','Consumer':'gift','Enterprise':'building','BLE / IoT':'ble','Creative':'palette'};

/* device-frame placeholder visual generator (no fake screenshots — a labelled abstract mark) */
function deviceGlyph(p){
  const hue = (p.seed*47)%360;
  return '<div class="device-frame" aria-hidden="true" style="color: hsl('+hue+' 70% 65%)">'
   + '<div class="glyph">'+ (ICONS[CAT_ICON[p.filterCat]]||ICONS.android) +'</div></div>';
}

/* ===================== FILTERS + GRID ===================== */
const CATS = ['All','Fintech','Trading','Real Estate','Education','Consumer','Enterprise','Creative','BLE / IoT'];
const filtersEl = document.getElementById('filters');
CATS.forEach((c,i)=>{
  const b = document.createElement('button');
  b.className='filter-btn'+(i===0?' active':'');
  b.textContent=c;
  b.dataset.cat=c;
  b.addEventListener('click', ()=>{
    filtersEl.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    applyFilter(c);
  });
  filtersEl.appendChild(b);
});

function cardAvailability(p){
  const label = p.availability || (p.playStoreUrl ? 'Available on Google Play' : '');
  if(!label) return '';
  return '<div class="pc-avail">'+icon(/^Private/.test(label)?'lock':'device')+'<span>'+label+'</span></div>';
}
const gridEl = document.getElementById('project-grid');
PROJECTS.forEach(p=>{
  const card = document.createElement('article');
  card.className='project-card';
  card.dataset.cat = p.filterCat;
  const hue = (p.seed*47)%360;
  card.innerHTML =
    '<div class="pc-media" style="background:linear-gradient(160deg, hsl('+hue+' 45% 14%), var(--surface-2));">'
      +'<div class="pc-glow"></div>'
      + deviceGlyph(p)
      + (imgsFor(p).banner ? '<img class="pc-img" loading="lazy" decoding="async" src="'+imgsFor(p).banner+'" alt="'+p.name+' project banner">' : '')
    +'</div>'
    +'<div class="pc-body">'
      +'<div class="pc-domain">'+p.domain+'</div>'
      +'<h3 class="pc-title">'+p.name+'</h3>'
      +'<p class="pc-desc">'+p.summary+'</p>'
      +'<div class="pc-tags">'+p.tech.slice(0,4).map(t=>'<span>'+t+'</span>').join('')+'</div>'
      + cardAvailability(p)
      +'<button class="pc-cta" data-id="'+p.id+'">View Case Study '+icon('arrowUpRight')+'</button>'
    +'</div>';
  gridEl.appendChild(card);
  const im = card.querySelector('.pc-img'); if(im) im.addEventListener('error', ()=> im.remove());
});
function applyFilter(cat){
  document.querySelectorAll('.project-card').forEach(card=>{
    const show = cat==='All' || card.dataset.cat===cat;
    if(show){ card.classList.remove('hidden-card'); card.style.animation='none'; requestAnimationFrame(()=>{ card.style.opacity='0'; card.style.transform='translateY(8px)'; requestAnimationFrame(()=>{ card.style.transition='opacity .35s ease, transform .35s ease'; card.style.opacity='1'; card.style.transform='translateY(0)'; }); }); }
    else{ card.classList.add('hidden-card'); }
  });
}
gridEl.addEventListener('click', (e)=>{
  const btn = e.target.closest('.pc-cta');
  if(btn) openCaseStudy(btn.dataset.id);
});

/* ===================== CASE STUDY MODAL ===================== */
const csOverlay = document.getElementById('cs-overlay');
const csPanel = document.getElementById('cs-panel');
let currentGallery = [];
let lastFocusedEl = null;

function pipelineHTML(nodes){
  return '<div class="pipeline">'+nodes.map((n,i)=>
    '<div class="pipe-node"><span class="pipe-icon">'+icon(n.icon)+'</span><span>'+n.label+'</span></div>'
    + (i<nodes.length-1 ? '<div class="pipe-arrow"></div>' : '')
  ).join('')+'</div>';
}
function bleVisualHTML(){
  return '<div class="ble-visual"><span class="ble-phone">'+icon('device')+'</span>'
    +'<div class="ble-rings"><span class="ble-ring"></span><span class="ble-ring"></span><span class="ble-ring"></span></div>'
    +'<span class="ble-key">'+icon('key')+'</span></div>';
}
function marketAnimHTML(){
  const bars = Array.from({length:22},(_,i)=>{
    const h = 20+Math.round(Math.sin(i*0.7)*14+Math.random()*10);
    return '<rect x="'+(i*16)+'" y="'+(60-h)+'" width="9" rx="2" height="'+h+'" fill="url(#mg)"><animate attributeName="height" values="'+h+';'+(h*0.5+8)+';'+h+'" dur="'+(1.6+ (i%5)*0.2)+'s" repeatCount="indefinite"/><animate attributeName="y" values="'+(60-h)+';'+(60-(h*0.5+8))+';'+(60-h)+'" dur="'+(1.6+(i%5)*0.2)+'s" repeatCount="indefinite"/></rect>';
  }).join('');
  return '<svg viewBox="0 0 360 64" style="width:100%;height:80px;"><defs><linearGradient id="mg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5EEAD4"/><stop offset="100%" stop-color="#E8A464"/></linearGradient></defs>'+bars+'</svg>';
}

function renderCaseStudy(p){
  const imgs = imgsFor(p);
  const hue = (p.seed*47)%360;
  let html = '';
  html += '<div class="cs-hero" style="background:linear-gradient(160deg, hsl('+hue+' 45% 16%), var(--surface-2));">'
    + '<button class="cs-back" id="cs-back-btn">'+icon('arrowLeft')+' Back to Projects</button>'
    + '<button class="cs-close" id="cs-close-btn">'+icon('close')+'</button>'
    + '<div class="cs-hero-icon" style="color:hsl('+hue+' 70% 68%)">'+ICONS[CAT_ICON[p.filterCat]||'android']+'</div>'
    + (imgs.banner ? '<img class="cs-hero-img" src="'+imgs.banner+'" alt="'+p.name+' project banner">' : '')
    + '</div>';
  html += '<div class="cs-content">';
  html += '<div class="cs-domain">'+p.domain+'</div>';
  html += '<h2>'+p.name+'</h2>';
  html += '<div class="cs-tags">'+p.tech.map(t=>'<span class="chip">'+t+'</span>').join('')+'</div>';
  if(p.availability){
    html += '<div><span class="cs-availability">'+icon(/^Private/.test(p.availability)?'lock':'device')+' '+p.availability+'</span></div>';
  }
  if(p.playStoreUrl){
    html += '<a href="'+p.playStoreUrl+'" target="_blank" rel="noopener" class="btn btn-ghost cs-store-btn">'+icon('arrowUpRight')+' View on Google Play</a>';
  }
  if(p.note){
    html += '<p class="cs-note">'+p.note+'</p>';
  }
  if(p.ownership){
    html += '<div class="cs-block"><div class="cs-ownership">'+icon('bolt')+' <span>'+p.ownership+'</span></div></div>';
  }

  html += '<div class="cs-block"><h4>Overview</h4><p>'+p.overview+'</p></div>';
  html += '<div class="cs-block"><h4>My Role</h4><p>'+p.role+'</p></div>';
  html += '<div class="cs-block"><h4>'+(p.hardwareResponsibilities?'Responsibilities — Android':'Responsibilities')+'</h4><ul>'+p.responsibilities.map(r=>'<li>'+r+'</li>').join('')+'</ul></div>';
  if(p.hardwareResponsibilities){
    html += '<div class="cs-block"><h4>Responsibilities — Hardware / ESP32</h4><ul>'+p.hardwareResponsibilities.map(r=>'<li>'+r+'</li>').join('')+'</ul></div>';
  }
  if(p.keyFeatures){
    html += '<div class="cs-block"><h4>Key Features</h4><ul>'+p.keyFeatures.map(r=>'<li>'+r+'</li>').join('')+'</ul></div>';
  }
  if(p.technicalChallenge){
    html += '<div class="cs-block"><h4>Technical Challenges</h4><p>'+p.technicalChallenge+'</p></div>';
  }
  if(p.technicalHighlight){
    html += '<div class="cs-block"><h4>Technical Highlight</h4><p>'+p.technicalHighlight+'</p></div>';
  }
  if(p.securityFocus){
    html += '<div class="cs-block"><h4>Security Focus</h4><ul>'+p.securityFocus.map(r=>'<li>'+r+'</li>').join('')+'</ul></div>';
  }
  if(p.marketAnimation){
    html += '<div class="cs-block"><h4>Real-Time Market Data</h4>'+marketAnimHTML()+'<p style="margin-top:10px;font-size:.85rem;">Abstract representation of continuous WebSocket price updates — not real trading figures.</p></div>';
  }
  if(p.diagram && p.diagram.type==='pipeline'){
    html += '<div class="cs-block"><h4>System Flow</h4>'+pipelineHTML(p.diagram.nodes)+'</div>';
  }
  if(p.diagram && p.diagram.type==='ble'){
    html += '<div class="cs-block"><h4>Proximity Detection</h4>'+bleVisualHTML()+'<p style="text-align:center;font-size:.85rem;">Phone → BLE signal → Beacon → Key</p></div>';
  }
  html += '<div class="cs-block"><h4>My Contribution</h4><p>'+(p.contribution||p.responsibilities.slice(0,3).join('; '))+'</p></div>';
  if(p.impact){
    html += '<div class="cs-block"><span class="cs-impact">'+icon('bolt')+' '+p.impact+'</span></div>';
  }
  if(imgs.shots.length){
    html += '<div class="cs-block"><h4>Screenshots</h4><div class="gallery-row" id="gallery-row"></div></div>';
  }
  html += '</div>';
  csPanel.innerHTML = html;

  const galleryRow = document.getElementById('gallery-row');
  if(galleryRow){
    imgs.shots.forEach((src,idx)=>{
      const shot = document.createElement('button');
      shot.className='gallery-shot';
      shot.dataset.idx = idx;
      shot.setAttribute('aria-label','Open '+p.name+' screenshot '+(idx+1)+' fullscreen');
      const im = document.createElement('img');
      im.loading='lazy'; im.decoding='async'; im.src=src; im.alt=p.name+' app screenshot '+(idx+1);
      im.addEventListener('error', ()=> shot.remove());
      shot.appendChild(im);
      galleryRow.appendChild(shot);
    });
    galleryRow.addEventListener('click', (e)=>{
      const shot = e.target.closest('.gallery-shot');
      if(shot) openLightbox(p, parseInt(shot.dataset.idx,10));
    });
  }
  document.getElementById('cs-close-btn').addEventListener('click', closeCaseStudy);
  document.getElementById('cs-back-btn').addEventListener('click', closeCaseStudy);
}

function openCaseStudy(id){
  const p = PROJECTS.find(x=>x.id===id);
  if(!p) return;
  lastFocusedEl = document.activeElement;
  renderCaseStudy(p);
  csOverlay.classList.add('open');
  scrollLock(true);
  setTimeout(()=> document.getElementById('cs-close-btn')?.focus(), 250);
}
function closeCaseStudy(){
  if(!csOverlay.classList.contains('open')) return;
  csOverlay.classList.remove('open');
  scrollLock(false);
  if(lastFocusedEl) lastFocusedEl.focus();
}
csOverlay.addEventListener('click', (e)=>{ if(e.target===csOverlay) closeCaseStudy(); });
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape'){ if(lightbox.classList.contains('open')) closeLightbox(); else if(csOverlay.classList.contains('open')) closeCaseStudy(); } });

/* ===================== LIGHTBOX ===================== */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lbCount = document.getElementById('lb-count');
document.getElementById('lb-close').innerHTML = icon('close');
document.getElementById('lb-prev').innerHTML = icon('chevronLeft');
document.getElementById('lb-next').innerHTML = icon('chevronRight');
let lbProject=null, lbIndex=0, lbSrcs=[];
function openLightbox(p, idx){
  lbProject=p; lbIndex=idx; lbSrcs=imgsFor(p).shots;
  renderLightbox();
  if(!lightbox.classList.contains('open')){ lightbox.classList.add('open'); scrollLock(true); }
  document.getElementById('lb-close').focus();
}
function renderLightbox(){
  lightboxImg.innerHTML = '';
  const im = document.createElement('img');
  im.src = lbSrcs[lbIndex]; im.alt = lbProject.name+' app screenshot '+(lbIndex+1)+' of '+lbSrcs.length;
  lightboxImg.appendChild(im);
  lbCount.textContent = (lbIndex+1)+' / '+lbSrcs.length+'  ·  '+lbProject.name;
  [lbIndex-1, lbIndex+1].forEach(i=>{ if(lbSrcs[i]){ new Image().src = lbSrcs[i]; } });
}
function closeLightbox(){
  if(!lightbox.classList.contains('open')) return;
  lightbox.classList.remove('open'); scrollLock(false);
}
document.getElementById('lb-close').addEventListener('click', closeLightbox);
document.getElementById('lb-prev').addEventListener('click', ()=>{ lbIndex=(lbIndex-1+lbSrcs.length)%lbSrcs.length; renderLightbox(); });
document.getElementById('lb-next').addEventListener('click', ()=>{ lbIndex=(lbIndex+1)%lbSrcs.length; renderLightbox(); });
lightbox.addEventListener('click', (e)=>{ if(e.target===lightbox) closeLightbox(); });
document.addEventListener('keydown', (e)=>{
  if(!lightbox.classList.contains('open')) return;
  if(e.key==='ArrowLeft') document.getElementById('lb-prev').click();
  if(e.key==='ArrowRight') document.getElementById('lb-next').click();
});
/* basic swipe */
let touchStartX=null;
lightbox.addEventListener('touchstart', e=>{ touchStartX=e.touches[0].clientX; },{passive:true});
lightbox.addEventListener('touchend', e=>{
  if(touchStartX===null) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if(Math.abs(dx)>40){ dx>0 ? document.getElementById('lb-prev').click() : document.getElementById('lb-next').click(); }
  touchStartX=null;
},{passive:true});

/* ===================== STATS (animated counters) ===================== */
const STATS = [
  {value:4, suffix:'+', label:'Years Experience'},
  {value:10, suffix:'+', label:'Applications'},
  {value:20, suffix:'+', label:'Production Releases'},
  {value:10, suffix:'K+', label:'Downloads on Selected Applications'},
];
const statsGrid = document.getElementById('stats-grid');
STATS.forEach(s=>{
  const el = document.createElement('div');
  el.className='stat-card';
  el.innerHTML = '<div class="counter-num" data-target="'+s.value+'" data-suffix="'+s.suffix+'">0'+s.suffix+'</div><div class="stat-label">'+s.label+'</div>';
  statsGrid.appendChild(el);
});
function animateCounter(el){
  const target = parseInt(el.dataset.target,10);
  const suffix = el.dataset.suffix;
  if(prefersReduced){ el.textContent = target+suffix; return; }
  let cur=0; const dur=1100; const start=performance.now();
  function tick(t){
    const p = Math.min(1,(t-start)/dur);
    cur = Math.round(target*(1-Math.pow(1-p,3)));
    el.textContent = cur+suffix;
    if(p<1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const statsObserver = new IntersectionObserver((entries,obs)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      en.target.querySelectorAll('.counter-num').forEach(animateCounter);
      obs.unobserve(en.target);
    }
  });
},{threshold:0.4});
statsObserver.observe(statsGrid);

/* ===================== PROCESS ===================== */
const PROCESS = [
  {n:'01',t:'Understand',d:'Requirements and business workflows'},
  {n:'02',t:'Design',d:'Architecture, data flow and UI'},
  {n:'03',t:'Develop',d:'Kotlin/Java Android implementation'},
  {n:'04',t:'Integrate',d:'APIs, WebSockets, BLE and hardware'},
  {n:'05',t:'Test',d:'Edge cases, device compatibility and reliability'},
  {n:'06',t:'Optimize',d:'Performance, crashes and stability'},
  {n:'07',t:'Release',d:'Production deployment and maintenance'},
];
const processRow = document.getElementById('process-row');
PROCESS.forEach(s=>{
  const el = document.createElement('div');
  el.className='process-step';
  el.innerHTML = '<div class="process-num">'+s.n+'</div><h4>'+s.t+'</h4><p>'+s.d+'</p>';
  processRow.appendChild(el);
});

/* ===================== WHY ANDROID orbit ===================== */
const whyVisual = document.getElementById('why-visual');
whyVisual.innerHTML =
  '<div class="why-orbit o1"></div><div class="why-orbit o2"></div><div class="why-orbit o3"></div>'
  + '<div class="why-core">'+icon('android')+'</div>'
  + ['ble','chip','lock','chart'].map((ic,i)=>'<div class="why-node" style="animation-delay:-'+(i*4)+'s;color:'+(i%2?'var(--copper)':'var(--signal)')+'">'+icon(ic)+'</div>').join('');

/* ===================== REVEAL ON SCROLL ===================== */
const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('is-visible');
      revealObserver.unobserve(e.target);
    }
  });
},{threshold:0.15});
revealEls.forEach(el=>revealObserver.observe(el));

/* stagger children transition-delay for project grid + skill groups + process + stats */
function staggerChildren(container, base=60){
  [...container.children].forEach((c,i)=>{ c.style.transitionDelay = (i*base)+'ms'; });
}
staggerChildren(document.getElementById('skill-groups'));
staggerChildren(document.getElementById('ownership-grid'));
staggerChildren(document.getElementById('process-row'));
staggerChildren(document.getElementById('stats-grid'));
