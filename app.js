// ============================================================
// Rashmi·Fit — app.js v2 (Premium)
// Profile: Petite female (148cm), intermediate, 6 days/week
// Goal: Toned + lean, heavy compound lifts
// ============================================================

const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const TODAY = new Date();
const TIDX = (TODAY.getDay() + 6) % 7;

document.getElementById('header-date').textContent =
  TODAY.toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long'});

// ── WORKOUT PLAN ──────────────────────────────────────────────
const PLAN = {
  Monday:{
    focus:'Lower Body Sculpt',icon:'ti-arrow-up',
    tip:'Squeeze your glutes at the top of every rep. Mind-muscle connection is everything for toning.',
    warmup:[
      {n:'Hip circles',d:'10 each side'},{n:'Forward leg swings',d:'10 each'},
      {n:'Lateral leg swings',d:'10 each'},{n:'Bodyweight squat (slow)',d:'15 reps'},
      {n:'Glute bridge hold',d:'30 sec'},
    ],
    main:[
      {n:'Barbell / Goblet squat',d:'4×12 — heavy'},{n:'Romanian deadlift',d:'4×10 — heavy'},
      {n:'Walking lunges (weighted)',d:'3×12 each leg'},{n:'Sumo squat',d:'3×15'},
      {n:'Hip thrust (barbell/heavy DB)',d:'4×15 — squeeze!'},
      {n:'Calf raises — single leg',d:'3×20 each'},{n:'Donkey kicks (weighted)',d:'3×15 each'},
    ],
    cooldown:[
      {n:'Pigeon pose',d:'60 sec each side'},{n:'Seated butterfly stretch',d:'60 sec'},
      {n:'Standing quad stretch',d:'30 sec each'},{n:'Hamstring stretch',d:'30 sec each'},
    ]
  },
  Tuesday:{
    focus:'Upper Body + Core',icon:'ti-arrows-up-down',
    tip:'Full range of motion > heavy weight. Control the negative (lowering) phase for best toning.',
    warmup:[
      {n:'Arm circles forward + back',d:'30 sec each'},{n:'Shoulder rolls',d:'1 min'},
      {n:'Chest opener stretch',d:'1 min'},{n:'Cat-cow',d:'1 min'},
    ],
    main:[
      {n:'Dumbbell shoulder press',d:'4×12'},{n:'Dumbbell bench press / floor press',d:'4×10'},
      {n:'Single-arm dumbbell row',d:'3×12 each'},{n:'Lateral raises',d:'3×15'},
      {n:'Bicep curls',d:'3×15'},{n:'Tricep overhead extension',d:'3×12'},
      {n:'Plank (straight arm)',d:'3×45 sec'},{n:'Dead bug',d:'3×10 each side'},
    ],
    cooldown:[
      {n:'Cross-body shoulder stretch',d:'30 sec each'},{n:'Tricep overhead stretch',d:'30 sec each'},
      {n:'Child\'s pose',d:'1 min'},
    ]
  },
  Wednesday:{
    focus:'HIIT Cardio + Abs',icon:'ti-bolt',
    tip:'40 sec work / 20 sec rest. Keep intensity MAX — this is your fat-burn day. Push through!',
    warmup:[
      {n:'March in place',d:'2 min'},{n:'Inchworms',d:'5 reps'},
      {n:'Dynamic torso twists',d:'1 min'},{n:'Hip flexor stretch',d:'30 sec each'},
    ],
    main:[
      {n:'Jump squats',d:'4×40 sec on/20 off'},{n:'Mountain climbers',d:'4×40 sec'},
      {n:'Burpees',d:'3×10'},{n:'High knees',d:'4×40 sec'},
      {n:'Bicycle crunches',d:'3×25'},{n:'Reverse crunches',d:'3×15'},
      {n:'V-ups',d:'3×12'},{n:'Side plank + hip dip',d:'3×12 each'},
    ],
    cooldown:[
      {n:'Slow walk in place',d:'2 min'},{n:'Cobra stretch',d:'1 min'},
      {n:'Supine spinal twist',d:'30 sec each'},{n:'Deep breathing',d:'1 min'},
    ]
  },
  Thursday:{
    focus:'Full Body Strength',icon:'ti-barbell',
    tip:'Compound lifts today. Petite frames respond FAST to progressive overload — go heavier than you think!',
    warmup:[
      {n:'Jumping jacks',d:'2 min'},{n:'Arm swings',d:'1 min'},
      {n:'Leg swings',d:'10 each'},{n:'Bodyweight squat',d:'10 reps'},
    ],
    main:[
      {n:'Deadlift',d:'4×8 — heavy'},{n:'Dumbbell squat to press',d:'3×12'},
      {n:'Push-ups',d:'4×12'},{n:'Bent-over dumbbell row',d:'4×12'},
      {n:'Reverse lunges (weighted)',d:'3×10 each'},{n:'Single-leg glute bridge',d:'3×12 each'},
      {n:'Plank to shoulder tap',d:'3×20 taps'},
    ],
    cooldown:[
      {n:'Full body forward fold',d:'1 min'},{n:'Figure-4 stretch',d:'45 sec each'},
      {n:'Lat stretch (doorframe)',d:'30 sec each'},{n:'Child\'s pose',d:'1 min'},
    ]
  },
  Friday:{
    focus:'Glutes + Legs Finisher',icon:'ti-flame',
    tip:'High reps, short rest. The burn you feel is your glutes growing. Embrace it! 🍑',
    warmup:[
      {n:'Glute bridges slow',d:'15 reps'},{n:'Clamshells',d:'15 each side'},
      {n:'Side-lying leg raises',d:'10 each'},{n:'Hip flexor stretch',d:'30 sec each'},
    ],
    main:[
      {n:'Hip thrust (heavy barbell/DB)',d:'5×15 — max weight!'},{n:'Step-ups (weighted)',d:'4×12 each'},
      {n:'Sumo deadlift',d:'4×10'},{n:'Curtsy lunge',d:'3×12 each'},
      {n:'Fire hydrants',d:'3×20 each'},{n:'Resistance band kickbacks',d:'3×20 each'},
      {n:'Wall sit',d:'3×45 sec'},
    ],
    cooldown:[
      {n:'Pigeon pose',d:'90 sec each side'},{n:'Lying glute stretch',d:'45 sec each'},
      {n:'Happy baby pose',d:'1 min'},
    ]
  },
  Saturday:{
    focus:'Yoga Flow + Mobility',icon:'ti-leaf',
    tip:'Active recovery. Stretch deep and breathe slowly. Your muscles rebuild stronger on rest days.',
    warmup:[{n:'Sun salutation A',d:'3 rounds slow'},{n:'Cat-cow flow',d:'2 min'}],
    main:[
      {n:'Warrior I',d:'60 sec each'},{n:'Warrior II',d:'60 sec each'},
      {n:'Triangle pose',d:'60 sec each'},{n:'Low crescent lunge',d:'60 sec each'},
      {n:'Seated forward fold',d:'2 min'},{n:'Reclined butterfly',d:'2 min'},
      {n:'Legs up the wall',d:'3 min'},
    ],
    cooldown:[
      {n:'Savasana — full body scan',d:'5 min'},{n:'Box breathing',d:'2 min'},
    ]
  },
  Sunday:null
};

// ── STATE ─────────────────────────────────────────────────────
const KEY = 'rashmi_fit_v5';
const todayStr = TODAY.toDateString();
let S = { activeDay:TIDX, checked:{}, water:0, steps:0, streak:0, lastDate:'', logs:[] };

try { const sv = localStorage.getItem(KEY); if(sv) S = {...S,...JSON.parse(sv)}; } catch(e){}
if(S.lastDate !== todayStr){ S.water=0; S.steps=0; S.lastDate=todayStr; save(); }

function save(){ try{ localStorage.setItem(KEY,JSON.stringify(S)); }catch(e){} }

// ── NOTIFICATIONS ─────────────────────────────────────────────
function showNotif(msg){
  document.getElementById('notif-txt').textContent = msg;
  document.getElementById('notif').style.display = 'flex';
  clearTimeout(window._nt);
  window._nt = setTimeout(hideNotif,5000);
}
function hideNotif(){ document.getElementById('notif').style.display='none'; }

setInterval(()=>{
  const mn=new Date().getMinutes(), h=new Date().getHours();
  if(mn===0 && h>=7 && h<=21 && S.water<2.5)
    showNotif(`💧 Hydration check! You've had ${S.water.toFixed(1)}L — drink some water!`);
},60000);

// ── RING CHART (SVG) ──────────────────────────────────────────
function setRing(id, radius, pct){
  const circ = 2 * Math.PI * radius;
  const el = document.getElementById(id);
  if(!el) return;
  el.setAttribute('stroke-dasharray', circ.toFixed(1));
  el.setAttribute('stroke-dashoffset', (circ * (1 - Math.min(1, pct))).toFixed(1));
}

// Inject SVG gradients once
function injectGradients(){
  const svg = document.querySelector('.ring-svg');
  if(!svg || svg.querySelector('defs')) return;
  svg.insertAdjacentHTML('afterbegin',`
    <defs>
      <linearGradient id="gSteps" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#60a5fa"/>
      </linearGradient>
      <linearGradient id="gWater" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#0d9488"/><stop offset="100%" stop-color="#2dd4bf"/>
      </linearGradient>
      <linearGradient id="gEx" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#c084fc"/>
      </linearGradient>
    </defs>`);
  // Fix stroke references
  document.getElementById('rs').setAttribute('stroke','url(#gSteps)');
  document.getElementById('rw').setAttribute('stroke','url(#gWater)');
  document.getElementById('re').setAttribute('stroke','url(#gEx)');
}

// ── METRICS UPDATE ─────────────────────────────────────────────
function updateMetrics(){
  const dn = DAYS[S.activeDay];
  const plan = PLAN[dn];
  let total=0, done=0;
  if(plan){
    const all=[...plan.warmup,...plan.main,...plan.cooldown];
    total=all.length;
    const ck=S.checked[dn]||{};
    done=Object.values(ck).filter(Boolean).length;
  }
  const sp=Math.min(1,S.steps/10000);
  const wp=Math.min(1,S.water/2.5);
  const ep=total>0?done/total:0;
  const overall=Math.round(((sp+wp+ep)/3)*100);

  // Stats row
  document.getElementById('sv-steps').textContent = S.steps.toLocaleString('en-IN');
  document.getElementById('sb-steps').style.width = (sp*100).toFixed(0)+'%';
  document.getElementById('sv-water').textContent = S.water.toFixed(1)+'L';
  document.getElementById('sb-water').style.width = (wp*100).toFixed(0)+'%';
  document.getElementById('sv-done').textContent = done;
  document.getElementById('sv-of').textContent = '/'+total;
  document.getElementById('sb-ex').style.width = (ep*100).toFixed(0)+'%';

  // Rings
  injectGradients();
  setRing('rs',58,sp);
  setRing('rw',46,wp);
  setRing('re',34,ep);
  document.getElementById('ring-pct').textContent = overall+'%';

  // Streak
  document.getElementById('streak-num').textContent = S.streak;

  // Hero
  if(plan){
    document.getElementById('hero-day-tag').textContent = S.activeDay===TIDX?'TODAY':DAYS[S.activeDay].toUpperCase();
    document.getElementById('hero-focus').textContent = plan.focus;
    document.getElementById('hero-tip').textContent = plan.tip||'';
  } else {
    document.getElementById('hero-day-tag').textContent = 'REST DAY';
    document.getElementById('hero-focus').textContent = 'Rest & Recover';
    document.getElementById('hero-tip').textContent = 'Sleep well, eat protein, let your muscles rebuild.';
  }

  // Complete banner
  document.getElementById('complete-banner').style.display =
    (total>0 && done===total) ? 'flex' : 'none';
}

// ── TABS ───────────────────────────────────────────────────────
function renderTabs(){
  const c = document.getElementById('day-tabs');
  c.innerHTML='';
  DAYS.forEach((d,i)=>{
    const b=document.createElement('button');
    b.className='dtab'+(i===S.activeDay?' active':'')+(i===TIDX?' today':'');
    b.innerHTML=d.slice(0,3)+(i===TIDX?' ★':'');
    b.onclick=()=>{ S.activeDay=i; save(); renderTabs(); renderContent(); updateMetrics(); };
    c.appendChild(b);
    if(i===S.activeDay) setTimeout(()=>b.scrollIntoView({inline:'center',behavior:'smooth'}),60);
  });
}

// ── CONTENT ────────────────────────────────────────────────────
function renderContent(){
  const dn=DAYS[S.activeDay];
  const plan=PLAN[dn];
  const c=document.getElementById('main');

  if(!plan){
    c.innerHTML=`
      <div class="rest-card">
        <span class="rest-moon">🌙</span>
        <div class="rest-title">Sunday Rest Day</div>
        <div class="rest-sub">Your muscles are rebuilding stronger right now.<br>
        Stay hydrated, eat enough protein,<br>sleep 7–8 hours and come back Monday. 💜</div>
      </div>
      ${renderWaterSteps()}
      ${renderLog(dn)}`;
    return;
  }
  if(!S.checked[dn]) S.checked[dn]={};

  const phases=[
    {label:'Warm-up',badge:'bw',cls:'ph-warm',icon:'ti-flame',exs:plan.warmup,key:'w'},
    {label:'Main Workout',badge:'bm',cls:'ph-main',icon:'ti-barbell',exs:plan.main,key:'m'},
    {label:'Cool-down',badge:'bc',cls:'ph-cool',icon:'ti-leaf',exs:plan.cooldown,key:'c'},
  ];

  c.innerHTML=`
    <div class="focus-bar">
      <div class="fb-icon"><i class="ti ${plan.icon}"></i></div>
      <span class="fb-name">${plan.focus}</span>
      <span class="fb-count">${plan.warmup.length+plan.main.length+plan.cooldown.length} moves</span>
    </div>
    ${plan.tip?`<div class="tip-card">💡 <strong>Coach tip:</strong> ${plan.tip}</div>`:''}
    ${phases.map(p=>`
      <div class="phase-block ${p.cls}">
        <div class="phase-head">
          <i class="ti ${p.icon} ph-icon"></i>
          <span class="ph-title">${p.label}</span>
          <span class="ph-badge ${p.badge}">${p.exs.length}</span>
        </div>
        ${p.exs.map((ex,i)=>{
          const id=p.key+i; const on=!!(S.checked[dn]||{})[id];
          return `<div class="ex-row">
            <div class="ck${on?' on':''}" onclick="toggleEx('${dn}','${id}',this)" role="checkbox" aria-checked="${on}" aria-label="${ex.n}">
              ${on?'<i class="ti ti-check"></i>':''}
            </div>
            <span class="ex-name${on?' done':''}">${ex.n}</span>
            <span class="ex-sets">${ex.d}</span>
          </div>`;
        }).join('')}
      </div>`).join('')}
    ${renderWaterSteps()}
    ${renderLog(dn)}`;
}

function renderWaterSteps(){
  const wp=(Math.min(1,S.water/2.5)*100).toFixed(0);
  const sp=(Math.min(1,S.steps/10000)*100).toFixed(0);
  return `
  <div class="two-col">
    <div class="widget w-water">
      <div class="w-title"><i class="ti ti-droplet-filled"></i> Water</div>
      <div class="w-val">${S.water.toFixed(1)}L</div>
      <div class="w-sub">${S.water>=2.5?'✅ Goal reached! 💧':((2.5-S.water).toFixed(1)+'L to go')}</div>
      <div class="wbar"><div class="wbar-fill wbf-water" style="width:${wp}%"></div></div>
      <div class="pill-row">
        <button class="pill" onclick="addWater(0.25)">+250ml</button>
        <button class="pill" onclick="addWater(0.5)">+500ml</button>
        <button class="pill" onclick="addWater(1)">+1L</button>
        <button class="pill minus" onclick="addWater(-0.25)">−</button>
      </div>
    </div>
    <div class="widget w-steps">
      <div class="w-title"><i class="ti ti-shoe"></i> Steps</div>
      <div class="w-val">${S.steps.toLocaleString('en-IN')}</div>
      <div class="w-sub">${S.steps>=10000?'✅ 10k crushed! 🏃':((10000-S.steps).toLocaleString('en-IN')+' to go')}</div>
      <div class="wbar"><div class="wbar-fill wbf-steps" style="width:${sp}%"></div></div>
      <div class="step-inp-row">
        <input type="number" id="step-inp" placeholder="Enter steps" min="0" max="99999"/>
        <button onclick="setSteps()">Set</button>
      </div>
    </div>
  </div>`;
}

function renderLog(dn){
  const logs=(S.logs||[]).filter(l=>l.day===dn);
  return `
  <div class="log-section">
    <div class="sec-label"><i class="ti ti-notes" style="color:var(--purple)"></i> Today's log</div>
    <div class="log-form">
      <div class="lf-row">
        <select id="lg-type">
          <option>Completed full workout 💪</option>
          <option>Partial workout</option>
          <option>Cardio only</option>
          <option>Strength only</option>
          <option>Rest — sore/tired</option>
          <option>Custom session</option>
        </select>
        <input type="number" id="lg-dur" placeholder="Mins" min="0" max="300"/>
      </div>
      <div class="lf-row">
        <textarea id="lg-note" placeholder="How did it feel? PRs hit? Weight used? Energy level?"></textarea>
      </div>
      <button class="save-btn" onclick="saveLog('${dn}')">
        <i class="ti ti-device-floppy"></i> Save log
      </button>
    </div>
    ${logs.length>0?`
      <div class="log-history">
        <div class="sec-label" style="margin-top:1rem"><i class="ti ti-history" style="color:var(--purple)"></i> Previous — ${dn}</div>
        ${logs.slice().reverse().map(l=>`
          <div class="log-item">
            <div class="li-top">
              <span class="li-date">${l.date}${l.dur?' · '+l.dur+'min':''}</span>
              <span class="li-tag">${l.type}</span>
            </div>
            ${l.note?`<div class="li-note">${l.note}</div>`:''}
          </div>`).join('')}
      </div>`:''}
  </div>`;
}

// ── ACTIONS ────────────────────────────────────────────────────
function toggleEx(dn,id,el){
  if(!S.checked[dn]) S.checked[dn]={};
  S.checked[dn][id]=!S.checked[dn][id];
  const on=S.checked[dn][id];
  el.classList.toggle('on',on);
  el.setAttribute('aria-checked',on);
  el.innerHTML=on?'<i class="ti ti-check"></i>':'';
  const nm=el.nextElementSibling;
  if(nm) nm.classList.toggle('done',on);
  checkComplete(dn); save(); updateMetrics();
}

function checkComplete(dn){
  const plan=PLAN[dn]; if(!plan) return;
  const all=[...plan.warmup,...plan.main,...plan.cooldown];
  const ck=S.checked[dn]||{};
  const keys=['w','m','c'];
  const counts=[plan.warmup.length,plan.main.length,plan.cooldown.length];
  let done=0;
  keys.forEach((k,pi)=>{ for(let i=0;i<counts[pi];i++){ if(ck[k+i]) done++; } });
  if(done===all.length){ S.streak=(S.streak||0)+1; save(); showNotif('🎉 Streak: '+S.streak+' days! You\'re absolutely killing it, Rashmi!'); }
}

function addWater(amt){
  S.water=Math.max(0,Math.min(6,+(S.water+amt).toFixed(1)));
  save(); renderContent(); updateMetrics();
  if(S.water>=2.5) showNotif('💧 Hydration goal smashed! Amazing!');
}

function setSteps(){
  const v=parseInt(document.getElementById('step-inp')?.value||0);
  if(!isNaN(v)&&v>=0){ S.steps=v; save(); renderContent(); updateMetrics();
    if(v>=10000) showNotif('🏃‍♀️ 10,000 steps! Absolute legend!'); }
}

function saveLog(dn){
  const type=document.getElementById('lg-type')?.value;
  const dur=document.getElementById('lg-dur')?.value;
  const note=document.getElementById('lg-note')?.value?.trim();
  if(!type) return;
  if(!S.logs) S.logs=[];
  S.logs.push({day:dn,type,dur:dur||'',note:note||'',
    date:new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})});
  save(); renderContent(); showNotif('📝 Log saved for '+dn+'!');
}

// ── INIT ───────────────────────────────────────────────────────
renderTabs();
renderContent();
updateMetrics();
