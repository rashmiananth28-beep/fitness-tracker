// ============================================================
// Rashmi's Fitness Tracker — app.js
// Profile: Petite female (148cm), intermediate, 6 days/week
// Goal: Toned + lean, lift heavy, sculpted physique
// ============================================================

const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const TODAY = new Date();
const TIDX = (TODAY.getDay() + 6) % 7;

document.getElementById('header-date').textContent =
  TODAY.toLocaleDateString('en-IN', { weekday:'long', day:'numeric', month:'long' });

// ── WORKOUT PLAN ─────────────────────────────────────────────
// Tailored for petite frame: compound lifts for full-body
// toning, heavy enough to build lean muscle. Short rest 45-60s.
const PLAN = {
  Monday: {
    focus: 'Lower Body Sculpt',
    icon: 'ti-arrow-up',
    tip: 'Focus on mind-muscle connection. Squeeze glutes at the top of every squat.',
    warmup: [
      { n: 'Hip circles', d: '10 each side' },
      { n: 'Leg swings (forward)', d: '10 each leg' },
      { n: 'Lateral leg swings', d: '10 each leg' },
      { n: 'Bodyweight squat', d: '15 reps slow' },
      { n: 'Glute bridge hold', d: '30 sec' },
    ],
    main: [
      { n: 'Barbell / Goblet squat', d: '4×12 — heavy' },
      { n: 'Romanian deadlift', d: '4×10 — heavy' },
      { n: 'Walking lunges', d: '3×12 each leg' },
      { n: 'Sumo squat', d: '3×15' },
      { n: 'Hip thrust (weighted)', d: '4×15 — squeeze hard' },
      { n: 'Calf raises (single leg)', d: '3×20 each' },
      { n: 'Donkey kicks (weighted)', d: '3×15 each' },
    ],
    cooldown: [
      { n: 'Pigeon pose', d: '60 sec each side' },
      { n: 'Seated butterfly stretch', d: '60 sec' },
      { n: 'Standing quad stretch', d: '30 sec each' },
      { n: 'Hamstring stretch', d: '30 sec each' },
    ]
  },
  Tuesday: {
    focus: 'Upper Body + Core',
    icon: 'ti-arrows-up-down',
    tip: 'Petite frame tip: moderate weight, full range of motion gives you that defined look.',
    warmup: [
      { n: 'Arm circles (forward + back)', d: '30 sec each' },
      { n: 'Shoulder rolls', d: '1 min' },
      { n: 'Chest opener stretch', d: '1 min' },
      { n: 'Cat-cow', d: '1 min' },
    ],
    main: [
      { n: 'Dumbbell shoulder press', d: '4×12' },
      { n: 'Dumbbell bench press', d: '4×10' },
      { n: 'Single-arm dumbbell row', d: '3×12 each side' },
      { n: 'Lateral raises', d: '3×15' },
      { n: 'Bicep curls', d: '3×15' },
      { n: 'Tricep overhead extension', d: '3×12' },
      { n: 'Plank (straight arm)', d: '3×45 sec' },
      { n: 'Dead bug', d: '3×10 each side' },
    ],
    cooldown: [
      { n: 'Cross-body shoulder stretch', d: '30 sec each' },
      { n: 'Tricep stretch overhead', d: '30 sec each' },
      { n: 'Child\'s pose', d: '1 min' },
    ]
  },
  Wednesday: {
    focus: 'HIIT Cardio + Abs',
    icon: 'ti-bolt',
    tip: '40 sec work / 20 sec rest format. Keep intensity HIGH — this is your fat burn day!',
    warmup: [
      { n: 'March in place', d: '2 min' },
      { n: 'Inchworms', d: '5 reps' },
      { n: 'Dynamic torso twists', d: '1 min' },
      { n: 'Hip flexor stretch', d: '30 sec each' },
    ],
    main: [
      { n: 'Jump squats', d: '4×40 sec on / 20 off' },
      { n: 'Mountain climbers', d: '4×40 sec' },
      { n: 'Burpees', d: '3×10' },
      { n: 'High knees', d: '4×40 sec' },
      { n: 'Bicycle crunches', d: '3×25' },
      { n: 'Reverse crunches', d: '3×15' },
      { n: 'V-ups', d: '3×12' },
      { n: 'Side plank + hip dip', d: '3×12 each side' },
    ],
    cooldown: [
      { n: 'Slow walk in place', d: '2 min' },
      { n: 'Cobra stretch', d: '1 min' },
      { n: 'Supine spinal twist', d: '30 sec each' },
      { n: 'Deep breathing', d: '1 min' },
    ]
  },
  Thursday: {
    focus: 'Full Body Strength',
    icon: 'ti-barbell',
    tip: 'Compound movements today. Heavier than you think you can — petite frames respond FAST to progressive overload.',
    warmup: [
      { n: 'Jumping jacks', d: '2 min' },
      { n: 'Arm swings', d: '1 min' },
      { n: 'Leg swings', d: '10 each' },
      { n: 'Bodyweight squat', d: '10 reps' },
    ],
    main: [
      { n: 'Deadlift', d: '4×8 — heavy' },
      { n: 'Dumbbell squat to press', d: '3×12' },
      { n: 'Push-ups (weighted vest optional)', d: '4×12' },
      { n: 'Bent-over dumbbell row', d: '4×12' },
      { n: 'Reverse lunges (weighted)', d: '3×10 each leg' },
      { n: 'Glute bridge (single leg)', d: '3×12 each' },
      { n: 'Plank to shoulder tap', d: '3×20 taps' },
    ],
    cooldown: [
      { n: 'Full body forward fold', d: '1 min' },
      { n: 'Figure-4 stretch', d: '45 sec each' },
      { n: 'Lat stretch (doorframe)', d: '30 sec each' },
      { n: 'Child\'s pose', d: '1 min' },
    ]
  },
  Friday: {
    focus: 'Glutes + Legs Finisher',
    icon: 'ti-flame',
    tip: 'Glute finisher day — high reps, short rest. Feel the burn, this builds the tone!',
    warmup: [
      { n: 'Glute bridges (slow)', d: '15 reps' },
      { n: 'Clamshells', d: '15 each side' },
      { n: 'Side-lying leg raises', d: '10 each' },
      { n: 'Hip flexor stretch', d: '30 sec each' },
    ],
    main: [
      { n: 'Hip thrust (barbell/dumbbell)', d: '5×15 — heavy!' },
      { n: 'Step-ups (weighted)', d: '4×12 each leg' },
      { n: 'Sumo deadlift', d: '4×10' },
      { n: 'Curtsy lunge', d: '3×12 each' },
      { n: 'Fire hydrants', d: '3×20 each' },
      { n: 'Resistance band kickbacks', d: '3×20 each' },
      { n: 'Wall sit', d: '3×45 sec' },
    ],
    cooldown: [
      { n: 'Pigeon pose', d: '90 sec each side' },
      { n: 'Lying glute stretch', d: '45 sec each' },
      { n: 'Happy baby pose', d: '1 min' },
    ]
  },
  Saturday: {
    focus: 'Yoga Flow + Mobility',
    icon: 'ti-leaf',
    tip: 'This is active recovery. Stretch deep, breathe slowly. Your muscles grow on rest days!',
    warmup: [
      { n: 'Sun salutation A', d: '3 rounds slow' },
      { n: 'Cat-cow flow', d: '2 min' },
    ],
    main: [
      { n: 'Warrior I', d: '60 sec each side' },
      { n: 'Warrior II', d: '60 sec each side' },
      { n: 'Triangle pose', d: '60 sec each' },
      { n: 'Low lunge (crescent)', d: '60 sec each' },
      { n: 'Seated forward fold', d: '2 min' },
      { n: 'Reclined butterfly', d: '2 min' },
      { n: 'Legs up the wall', d: '3 min' },
    ],
    cooldown: [
      { n: 'Savasana (full body scan)', d: '5 min' },
      { n: 'Gratitude + box breathing', d: '2 min' },
    ]
  },
  Sunday: null
};

// ── STATE ─────────────────────────────────────────────────────
const KEY = 'rashmi_fit_v4';
const todayStr = TODAY.toDateString();
let S = {
  activeDay: TIDX,
  checked: {},
  water: 0,
  steps: 0,
  streak: 0,
  lastDate: '',
  logs: []
};

try {
  const saved = localStorage.getItem(KEY);
  if (saved) S = { ...S, ...JSON.parse(saved) };
} catch(e) {}

// Reset daily metrics if new day
if (S.lastDate !== todayStr) {
  S.water = 0;
  S.steps = 0;
  S.lastDate = todayStr;
  save();
}

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e) {}
}

// ── NOTIFICATIONS ─────────────────────────────────────────────
function showNotif(msg) {
  document.getElementById('notif-txt').textContent = msg;
  document.getElementById('notif').style.display = 'flex';
  clearTimeout(window._ntimer);
  window._ntimer = setTimeout(hideNotif, 5000);
}
function hideNotif() {
  document.getElementById('notif').style.display = 'none';
}

// Water reminder every hour at :00
setInterval(() => {
  const mn = new Date().getMinutes();
  const h = new Date().getHours();
  if (mn === 0 && h >= 7 && h <= 21 && S.water < 2.5)
    showNotif(`Hydration check! You've had ${S.water.toFixed(1)}L — time to drink! 💧`);
}, 60000);

// ── METRICS ──────────────────────────────────────────────────
function updateMetrics() {
  const dn = DAYS[S.activeDay];
  const plan = PLAN[dn];
  let total = 0, done = 0;
  if (plan) {
    const all = [...plan.warmup, ...plan.main, ...plan.cooldown];
    total = all.length;
    const ck = S.checked[dn] || {};
    done = Object.values(ck).filter(Boolean).length;
  }

  document.getElementById('m-steps').textContent = S.steps.toLocaleString('en-IN');
  document.getElementById('b-steps').style.width = Math.min(100, (S.steps / 100)) + '%';

  document.getElementById('m-water').textContent = S.water.toFixed(1) + 'L';
  document.getElementById('b-water').style.width = Math.min(100, (S.water / 2.5) * 100) + '%';

  document.getElementById('m-done').textContent = done;
  document.getElementById('m-of').textContent = '/' + total;
  document.getElementById('b-ex').style.width = total > 0 ? (done / total) * 100 + '%' : '0%';

  document.getElementById('streak-num').textContent = S.streak;
  document.getElementById('b-streak') && (document.getElementById('b-streak').style.width = Math.min(100, S.streak * 10) + '%');

  const banner = document.getElementById('complete-banner');
  banner.style.display = (total > 0 && done === total) ? 'flex' : 'none';
}

// ── TABS ──────────────────────────────────────────────────────
function renderTabs() {
  const c = document.getElementById('day-tabs');
  c.innerHTML = '';
  DAYS.forEach((d, i) => {
    const b = document.createElement('button');
    b.className = 'dtab' + (i === S.activeDay ? ' active' : '') + (i === TIDX ? ' today' : '');
    b.innerHTML = d.slice(0, 3) + (i === TIDX ? ' ★' : '');
    b.onclick = () => { S.activeDay = i; save(); renderTabs(); renderContent(); updateMetrics(); };
    c.appendChild(b);
    // Scroll active tab into view
    if (i === S.activeDay) setTimeout(() => b.scrollIntoView({ inline: 'center', behavior: 'smooth' }), 50);
  });
}

// ── CONTENT ───────────────────────────────────────────────────
function renderContent() {
  const dn = DAYS[S.activeDay];
  const plan = PLAN[dn];
  const c = document.getElementById('main');

  if (!plan) {
    c.innerHTML = `
      <div class="rest-card">
        <i class="ti ti-moon-stars"></i>
        <h3>Sunday — Rest & Recover 🌙</h3>
        <p>Your muscles are rebuilding stronger right now.<br>Stay hydrated, sleep 7–8 hours, eat protein.<br><br>See you Monday! 💜</p>
      </div>
      ${renderWaterSteps()}
      ${renderLog(dn)}`;
    return;
  }

  if (!S.checked[dn]) S.checked[dn] = {};

  const phases = [
    { label:'Warm-up', badge:'badge-warm', cls:'ph-warm', icon:'ti-flame', exs:plan.warmup, key:'w' },
    { label:'Main workout', badge:'badge-main', cls:'ph-main', icon:'ti-barbell', exs:plan.main, key:'m' },
    { label:'Cool-down', badge:'badge-cool', cls:'ph-cool', icon:'ti-leaf', exs:plan.cooldown, key:'c' },
  ];

  c.innerHTML = `
    <div class="focus-bar">
      <i class="ti ${plan.icon} focus-icon"></i>
      <span class="focus-name">${plan.focus}</span>
      <span class="focus-count">${plan.warmup.length + plan.main.length + plan.cooldown.length} moves</span>
    </div>
    ${plan.tip ? `<div style="margin:.5rem 1.1rem 0;padding:9px 13px;background:#c084fc11;border:1px solid #c084fc33;border-radius:8px;font-size:12px;color:#c084fc;line-height:1.5">💡 ${plan.tip}</div>` : ''}
    ${phases.map(p => `
      <div class="phase-block ${p.cls}">
        <div class="phase-head">
          <i class="ti ${p.icon} phase-head-icon"></i>
          <span class="phase-head-title">${p.label}</span>
          <span class="phase-badge ${p.badge}">${p.exs.length} exercises</span>
        </div>
        ${p.exs.map((ex, i) => {
          const id = p.key + i;
          const on = !!(S.checked[dn] || {})[id];
          return `<div class="ex-row">
            <div class="ck ${on ? 'on':''}" onclick="toggleEx('${dn}','${id}',this)" role="checkbox" aria-checked="${on}" aria-label="Mark ${ex.n} done">
              ${on ? '<i class="ti ti-check"></i>' : ''}
            </div>
            <span class="ex-name ${on ? 'done':''}">${ex.n}</span>
            <span class="ex-sets">${ex.d}</span>
          </div>`;
        }).join('')}
      </div>`).join('')}
    ${renderWaterSteps()}
    ${renderLog(dn)}`;
}

function renderWaterSteps() {
  const wp = Math.min(100, (S.water / 2.5) * 100).toFixed(0);
  const sp = Math.min(100, S.steps / 100).toFixed(0);
  return `
  <div class="two-col">
    <div class="widget">
      <div class="widget-title"><i class="ti ti-droplet" style="color:var(--teal)"></i> Water</div>
      <div class="widget-val">${S.water.toFixed(1)}L</div>
      <div class="widget-sub">${S.water >= 2.5 ? '✅ Goal reached!' : (2.5 - S.water).toFixed(1) + 'L to go'}</div>
      <div class="wbar"><div class="wbar-fill" style="width:${wp}%;background:var(--teal)"></div></div>
      <div class="pill-row">
        <button class="pill" onclick="addWater(0.25)">+250ml</button>
        <button class="pill" onclick="addWater(0.5)">+500ml</button>
        <button class="pill" onclick="addWater(1)">+1L</button>
        <button class="pill minus" onclick="addWater(-0.25)">−</button>
      </div>
    </div>
    <div class="widget">
      <div class="widget-title"><i class="ti ti-shoe" style="color:var(--blue)"></i> Steps</div>
      <div class="widget-val">${S.steps.toLocaleString('en-IN')}</div>
      <div class="widget-sub">${S.steps >= 10000 ? '✅ 10k done!' : (10000 - S.steps).toLocaleString('en-IN') + ' to go'}</div>
      <div class="wbar"><div class="wbar-fill" style="width:${sp}%;background:var(--blue)"></div></div>
      <div class="step-row">
        <input type="number" id="step-inp" placeholder="Enter steps" min="0" max="99999"/>
        <button onclick="setSteps()">Update</button>
      </div>
    </div>
  </div>`;
}

function renderLog(dn) {
  const logs = (S.logs || []).filter(l => l.day === dn);
  return `
  <div class="log-section">
    <div class="sec-title"><i class="ti ti-notes"></i> Today's log</div>
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
        <textarea id="lg-note" placeholder="How did it feel? PRs? Energy level? Weight used?"></textarea>
      </div>
      <button class="save-btn" onclick="saveLog('${dn}')">
        <i class="ti ti-device-floppy"></i> Save log
      </button>
    </div>
    ${logs.length > 0 ? `
      <div class="log-history">
        <div class="sec-title" style="margin-top:1rem">Previous logs — ${dn}</div>
        ${logs.slice().reverse().map(l => `
          <div class="log-item">
            <div class="li-top">
              <span class="li-date">${l.date}${l.dur ? ' · ' + l.dur + 'min' : ''}</span>
              <span class="li-tag">${l.type}</span>
            </div>
            ${l.note ? `<div class="li-note">${l.note}</div>` : ''}
          </div>`).join('')}
      </div>` : ''}
  </div>`;
}

// ── INTERACTIONS ──────────────────────────────────────────────
function toggleEx(dn, id, el) {
  if (!S.checked[dn]) S.checked[dn] = {};
  S.checked[dn][id] = !S.checked[dn][id];
  const on = S.checked[dn][id];
  el.classList.toggle('on', on);
  el.setAttribute('aria-checked', on);
  el.innerHTML = on ? '<i class="ti ti-check"></i>' : '';
  const nm = el.nextElementSibling;
  if (nm) nm.classList.toggle('done', on);
  checkComplete(dn);
  save();
  updateMetrics();
}

function checkComplete(dn) {
  const plan = PLAN[dn];
  if (!plan) return;
  const all = [...plan.warmup, ...plan.main, ...plan.cooldown];
  const ck = S.checked[dn] || {};
  const keys = ['w', 'm', 'c'];
  const counts = [plan.warmup.length, plan.main.length, plan.cooldown.length];
  let done = 0;
  keys.forEach((k, pi) => { for (let i = 0; i < counts[pi]; i++) { if (ck[k + i]) done++; } });
  if (done === all.length) {
    S.streak = (S.streak || 0) + 1;
    save();
    showNotif('🎉 Workout complete! Streak: ' + S.streak + ' days! You\'re unstoppable!');
  }
}

function addWater(amt) {
  S.water = Math.max(0, Math.min(6, +(S.water + amt).toFixed(1)));
  save();
  renderContent();
  updateMetrics();
  if (S.water >= 2.5) showNotif('Hydration goal crushed! 💧 Keep it up!');
}

function setSteps() {
  const v = parseInt(document.getElementById('step-inp')?.value || 0);
  if (!isNaN(v) && v >= 0) {
    S.steps = v;
    save();
    renderContent();
    updateMetrics();
    if (v >= 10000) showNotif('10,000 steps done! 🏃‍♀️ Absolute legend!');
  }
}

function saveLog(dn) {
  const type = document.getElementById('lg-type')?.value;
  const dur = document.getElementById('lg-dur')?.value;
  const note = document.getElementById('lg-note')?.value?.trim();
  if (!type) return;
  if (!S.logs) S.logs = [];
  S.logs.push({
    day: dn, type, dur: dur || '', note: note || '',
    date: new Date().toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' })
  });
  save();
  renderContent();
  showNotif('Log saved for ' + dn + '! 📝');
}

// ── INIT ──────────────────────────────────────────────────────
renderTabs();
renderContent();
updateMetrics();
