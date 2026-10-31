/**
 * ====================================================================
 * 🛠️ Student Portfolio Live Visual Customizer & Data Exporter
 * ====================================================================
 * Allows students to tweak their personal background, GPA, university,
 * skills, and projects visually in the browser and export an updated
 * `js/data.js` file with one click!
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  injectCustomizerUI();
  setupCustomizerHandlers();
});

function injectCustomizerUI() {
  const container = document.createElement('div');
  container.id = 'customizer-wrapper';
  container.innerHTML = `
    <!-- Floating Trigger Pill Button -->
    <button id="customizer-open-btn" class="fixed bottom-6 left-6 z-40 px-4 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs md:text-sm shadow-xl shadow-indigo-600/30 flex items-center gap-2 border border-indigo-400/30 transition-all hover:scale-105">
      <i data-lucide="sliders-horizontal" class="w-4 h-4"></i>
      <span>Customize Profile</span>
      <span class="px-1.5 py-0.5 rounded text-[10px] bg-indigo-800 text-indigo-200">Live</span>
    </button>

    <!-- Slide-over Drawer / Modal -->
    <div id="customizer-drawer" class="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] bg-slate-900/95 backdrop-blur-xl border-l border-slate-700/80 shadow-2xl flex flex-col transform translate-x-full transition-transform duration-300 ease-in-out text-slate-100">
      
      <!-- Drawer Header -->
      <div class="p-5 border-b border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
            <i data-lucide="edit-3" class="w-4 h-4"></i>
          </div>
          <div>
            <h3 class="font-bold text-sm text-slate-100">Student Profile Editor</h3>
            <p class="text-[11px] text-slate-400">Edit fields below to see real-time changes</p>
          </div>
        </div>

        <button id="customizer-close-btn" class="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Drawer Content Scrollable Area -->
      <div class="flex-1 overflow-y-auto p-5 space-y-5">
        
        <!-- Helpful Tip Box -->
        <div class="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-200 space-y-1">
          <div class="font-bold flex items-center gap-1.5">
            <i data-lucide="sparkles" class="w-3.5 h-3.5 text-indigo-400"></i> Easy 2-Step Customization
          </div>
          <p class="text-[11px] text-indigo-300/90 leading-relaxed">
            1. Edit your details below and preview instantly.<br />
            2. Click <strong>"Export data.js"</strong> at the bottom to download or copy the file into your <code>js/data.js</code> folder!
          </p>
        </div>

        <!-- Section 1: Basic Student Info -->
        <div class="space-y-3">
          <h4 class="text-xs uppercase tracking-wider font-bold text-indigo-400 flex items-center gap-1.5">
            <i data-lucide="user" class="w-3.5 h-3.5"></i> 1. Personal & Academic Info
          </h4>

          <div>
            <label class="block text-xs text-slate-400 mb-1">Full Name</label>
            <input type="text" id="cust-name" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500" />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs text-slate-400 mb-1">University / College</label>
              <input type="text" id="cust-university" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label class="block text-xs text-slate-400 mb-1">Degree & Major</label>
              <input type="text" id="cust-degree" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500" />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs text-slate-400 mb-1">Current Year / Status</label>
              <input type="text" id="cust-currentYear" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500" placeholder="e.g. Junior (3rd Year)" />
            </div>
            <div>
              <label class="block text-xs text-slate-400 mb-1">Graduation Year</label>
              <input type="text" id="cust-gradYear" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500" placeholder="Class of 2026" />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs text-slate-400 mb-1">Cumulative GPA / CGPA</label>
              <input type="text" id="cust-gpa" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500" placeholder="e.g. 3.85 / 4.0" />
            </div>
            <div>
              <label class="block text-xs text-slate-400 mb-1">Location / Relocation</label>
              <input type="text" id="cust-location" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500" placeholder="City, State / Remote" />
            </div>
          </div>

          <div>
            <label class="block text-xs text-slate-400 mb-1">Headline (Hero)</label>
            <input type="text" id="cust-headline" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500" />
          </div>

          <div>
            <label class="block text-xs text-slate-400 mb-1">Tagline / Mission</label>
            <textarea id="cust-tagline" rows="2" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500"></textarea>
          </div>

          <div>
            <label class="block text-xs text-slate-400 mb-1">Seeking Status Badge Text</label>
            <input type="text" id="cust-statusBadge" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500" placeholder="Open to Summer 2025 Internships" />
          </div>
        </div>

        <!-- Section 2: Contact & Socials -->
        <div class="space-y-3 pt-3 border-t border-slate-800">
          <h4 class="text-xs uppercase tracking-wider font-bold text-indigo-400 flex items-center gap-1.5">
            <i data-lucide="mail" class="w-3.5 h-3.5"></i> 2. Contact & Socials
          </h4>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs text-slate-400 mb-1">University / Main Email</label>
              <input type="email" id="cust-email" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label class="block text-xs text-slate-400 mb-1">GitHub Username / URL</label>
              <input type="text" id="cust-github" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500" />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs text-slate-400 mb-1">LinkedIn Profile</label>
              <input type="text" id="cust-linkedin" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <label class="block text-xs text-slate-400 mb-1">LeetCode Username</label>
              <input type="text" id="cust-leetcode" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500" />
            </div>
          </div>
        </div>

        <!-- Section 3: Coursework -->
        <div class="space-y-3 pt-3 border-t border-slate-800">
          <h4 class="text-xs uppercase tracking-wider font-bold text-indigo-400 flex items-center gap-1.5">
            <i data-lucide="book-marked" class="w-3.5 h-3.5"></i> 3. Core Coursework (Comma Separated)
          </h4>
          <textarea id="cust-coursework" rows="3" class="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-indigo-500" placeholder="Data Structures, DBMS, Operating Systems..."></textarea>
          <p class="text-[11px] text-slate-400">Separate courses with commas. They will automatically turn into tags.</p>
        </div>

      </div>

      <!-- Drawer Footer Action Buttons -->
      <div class="p-4 border-t border-slate-800 bg-slate-900 flex flex-col gap-2">
        <div class="grid grid-cols-2 gap-2">
          <button id="cust-export-btn" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors">
            <i data-lucide="download" class="w-4 h-4"></i>
            <span>Download data.js</span>
          </button>
          
          <button id="cust-copy-btn" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs flex items-center justify-center gap-1.5 border border-slate-700 transition-colors">
            <i data-lucide="copy" class="w-4 h-4"></i>
            <span>Copy Code</span>
          </button>
        </div>

        <button id="cust-hide-btn" class="text-[11px] text-slate-400 hover:text-slate-300 text-center py-1">
          Hide customizer pill (for final preview)
        </button>
      </div>

    </div>
  `;

  document.body.appendChild(container);
  if (window.lucide) window.lucide.createIcons();
}

function setupCustomizerHandlers() {
  const drawer = document.getElementById('customizer-drawer');
  const openBtn = document.getElementById('customizer-open-btn');
  const closeBtn = document.getElementById('customizer-close-btn');
  const hideBtn = document.getElementById('cust-hide-btn');

  if (!drawer || !openBtn || !closeBtn) return;

  // Open / Close Drawer
  openBtn.addEventListener('click', () => {
    populateFormFields();
    drawer.classList.remove('translate-x-full');
  });

  closeBtn.addEventListener('click', () => {
    drawer.classList.add('translate-x-full');
  });

  hideBtn.addEventListener('click', () => {
    drawer.classList.add('translate-x-full');
    openBtn.classList.add('hidden');
    window.showToast('Customizer hidden. Refresh page anytime to restore it! ✨');
  });

  // Attach live input listeners for real-time reactivity
  attachLiveInputs();

  // Export & Copy listeners
  document.getElementById('cust-export-btn')?.addEventListener('click', exportDataFile);
  document.getElementById('cust-copy-btn')?.addEventListener('click', copyDataToClipboard);
}

function populateFormFields() {
  const data = window.portfolioData;
  if (!data) return;

  setVal('cust-name', data.personal.name);
  setVal('cust-university', data.personal.university);
  setVal('cust-degree', data.personal.degree);
  setVal('cust-currentYear', data.personal.currentYear);
  setVal('cust-gradYear', data.personal.graduationYear);
  setVal('cust-location', data.personal.location);
  setVal('cust-headline', data.personal.headline);
  setVal('cust-tagline', data.personal.tagline);
  setVal('cust-statusBadge', data.personal.statusBadge?.text || '');
  setVal('cust-email', data.personal.email);

  // Education GPA
  if (data.education && data.education[0]) {
    setVal('cust-gpa', data.education[0].gpa);
    setVal('cust-coursework', data.education[0].relevantCoursework ? data.education[0].relevantCoursework.join(', ') : '');
  }

  // Socials
  const gh = data.socials?.find(s => s.name.toLowerCase().includes('github'));
  if (gh) setVal('cust-github', gh.username);

  const li = data.socials?.find(s => s.name.toLowerCase().includes('linkedin'));
  if (li) setVal('cust-linkedin', li.username);

  const lc = data.socials?.find(s => s.name.toLowerCase().includes('leetcode'));
  if (lc) setVal('cust-leetcode', lc.username);
}

function attachLiveInputs() {
  const map = [
    { id: 'cust-name', setter: (v) => { window.portfolioData.personal.name = v; } },
    { id: 'cust-university', setter: (v) => { 
      window.portfolioData.personal.university = v; 
      if (window.portfolioData.education[0]) window.portfolioData.education[0].institution = v;
    } },
    { id: 'cust-degree', setter: (v) => { 
      window.portfolioData.personal.degree = v; 
      if (window.portfolioData.education[0]) window.portfolioData.education[0].degree = v;
    } },
    { id: 'cust-currentYear', setter: (v) => { window.portfolioData.personal.currentYear = v; } },
    { id: 'cust-gradYear', setter: (v) => { window.portfolioData.personal.graduationYear = v; } },
    { id: 'cust-location', setter: (v) => { window.portfolioData.personal.location = v; } },
    { id: 'cust-headline', setter: (v) => { window.portfolioData.personal.headline = v; } },
    { id: 'cust-tagline', setter: (v) => { window.portfolioData.personal.tagline = v; } },
    { id: 'cust-statusBadge', setter: (v) => { 
      if (!window.portfolioData.personal.statusBadge) window.portfolioData.personal.statusBadge = { active: true };
      window.portfolioData.personal.statusBadge.text = v; 
    } },
    { id: 'cust-email', setter: (v) => { 
      window.portfolioData.personal.email = v; 
      window.portfolioData.contact.directEmail = v;
    } },
    { id: 'cust-gpa', setter: (v) => { 
      if (window.portfolioData.education[0]) window.portfolioData.education[0].gpa = v;
      if (window.portfolioData.quickStats[0]) window.portfolioData.quickStats[0].value = v;
    } },
    { id: 'cust-coursework', setter: (v) => { 
      if (window.portfolioData.education[0]) {
        window.portfolioData.education[0].relevantCoursework = v.split(',').map(s => s.trim()).filter(Boolean);
      }
    } }
  ];

  map.forEach(item => {
    const el = document.getElementById(item.id);
    if (el) {
      el.addEventListener('input', (e) => {
        item.setter(e.target.value);
        if (window.renderPortfolio) {
          window.renderPortfolio();
        }
      });
    }
  });
}

function setVal(id, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined) el.value = val;
}

function generateDataJSString() {
  return `/**
 * ====================================================================
 * 🎓 STUDENT PORTFOLIO CONFIGURATION FILE
 * ====================================================================
 * Generated via Live Student Customizer.
 * Save this file directly as 'js/data.js' to make your changes permanent!
 * ====================================================================
 */

const portfolioData = ${JSON.stringify(window.portfolioData, null, 2)};

// Export for module systems or vanilla browser script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
} else {
  window.portfolioData = portfolioData;
}
`;
}

function exportDataFile() {
  const content = generateDataJSString();
  const blob = new Blob([content], { type: 'application/javascript;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.js';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  window.showToast('Downloaded data.js! Save it in your js/ folder. 💾');
}

function copyDataToClipboard() {
  const content = generateDataJSString();
  navigator.clipboard.writeText(content).then(() => {
    window.showToast('Copied full data.js code to clipboard! 📋');
  }).catch(() => {
    window.showToast('Could not access clipboard.');
  });
}

