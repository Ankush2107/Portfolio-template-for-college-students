/**
 * ====================================================================
 * 🚀 Portfolio Main Application Logic
 * Dynamic DOM renderer, Theme Switcher, Filter & Interaction Handlers
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Theme
  initTheme();
  
  // Render all portfolio sections from data.js
  renderPortfolio();

  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup UI event listeners
  setupEventListeners();
});

/**
 * Render all sections dynamically using window.portfolioData
 */
function renderPortfolio() {
  const data = window.portfolioData;
  if (!data) {
    console.error("Portfolio data not found. Ensure js/data.js is loaded first.");
    return;
  }

  renderNavbar(data);
  renderHero(data);
  renderStats(data);
  renderAbout(data);
  renderEducation(data);
  renderSkills(data);
  renderProjects(data, 'all');
  renderCampusInvolvement(data);
  renderAchievements(data);
  renderTestimonials(data);
  renderContact(data);
  renderFooter(data);

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/**
 * 1. Navbar
 */
function renderNavbar(data) {
  const brandEl = document.getElementById('nav-brand');
  if (brandEl) {
    brandEl.innerHTML = `
      <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/20">
        ${data.personal.name.charAt(0)}
      </div>
      <div class="flex flex-col">
        <span class="font-bold tracking-tight text-slate-100 text-sm md:text-base">${data.personal.name}</span>
        <span class="text-xs text-indigo-400 font-medium">${data.personal.currentYear.split(' ')[0]} • ${data.personal.degree.split(' in ')[0]}</span>
      </div>
    `;
  }
}

/**
 * 2. Hero Section
 */
function renderHero(data) {
  const p = data.personal;

  // Status Badge
  const statusContainer = document.getElementById('hero-status-container');
  if (statusContainer && p.statusBadge && p.statusBadge.active) {
    statusContainer.innerHTML = `
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs md:text-sm font-medium mb-6">
        <span class="w-2 h-2 rounded-full bg-emerald-400 status-pulse"></span>
        <span>${p.statusBadge.text}</span>
      </div>
    `;
  }

  // Headline & Student Subtext
  const nameEl = document.getElementById('hero-name');
  if (nameEl) nameEl.textContent = p.name;

  const headlineEl = document.getElementById('hero-headline');
  if (headlineEl) {
    headlineEl.innerHTML = `${p.headline} <br class="hidden sm:inline" /><span class="text-indigo-400">@ ${p.university}</span>`;
  }

  const taglineEl = document.getElementById('hero-tagline');
  if (taglineEl) taglineEl.textContent = p.tagline;

  const academicPill = document.getElementById('hero-academic-pill');
  if (academicPill) {
    academicPill.innerHTML = `
      <div class="flex flex-wrap items-center gap-3 text-xs md:text-sm text-slate-400 mt-3">
        <span class="flex items-center gap-1.5"><i data-lucide="graduation-cap" class="w-4 h-4 text-cyan-400"></i> ${p.degree}</span>
        <span class="text-slate-600">•</span>
        <span class="flex items-center gap-1.5"><i data-lucide="calendar" class="w-4 h-4 text-indigo-400"></i> ${p.graduationYear}</span>
        <span class="text-slate-600">•</span>
        <span class="flex items-center gap-1.5"><i data-lucide="map-pin" class="w-4 h-4 text-rose-400"></i> ${p.location}</span>
      </div>
    `;
  }

  // Hero CTAs
  const resumeBtn = document.getElementById('hero-resume-btn');
  if (resumeBtn) {
    resumeBtn.href = p.resumeUrl;
  }

  // Hero Avatar
  const avatarEl = document.getElementById('hero-avatar');
  if (avatarEl && p.avatar) {
    avatarEl.src = p.avatar;
    avatarEl.alt = p.name;
  }
}

/**
 * 3. Quick Stats
 */
function renderStats(data) {
  const container = document.getElementById('stats-grid');
  if (!container || !data.quickStats) return;

  container.innerHTML = data.quickStats.map(stat => `
    <div class="glass-card p-5 rounded-2xl flex items-center gap-4">
      <div class="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
        <i data-lucide="${stat.icon || 'star'}" class="w-6 h-6"></i>
      </div>
      <div>
        <div class="text-2xl font-bold font-heading text-slate-100">${stat.value}</div>
        <div class="text-xs font-semibold text-slate-300 uppercase tracking-wider">${stat.label}</div>
        <div class="text-xs text-indigo-400/90 mt-0.5">${stat.subtext || ''}</div>
      </div>
    </div>
  `).join('');
}

/**
 * 4. About Section
 */
function renderAbout(data) {
  const bioContainer = document.getElementById('about-bio');
  if (bioContainer && data.about && data.about.bioParagraphs) {
    bioContainer.innerHTML = data.about.bioParagraphs.map(p => `
      <p class="text-slate-300 leading-relaxed text-sm md:text-base">${p}</p>
    `).join('');
  }

  const highlightsContainer = document.getElementById('about-highlights');
  if (highlightsContainer && data.about && data.about.highlights) {
    highlightsContainer.innerHTML = data.about.highlights.map(h => `
      <div class="glass-card p-4 rounded-xl flex items-start gap-3">
        <div class="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
          <i data-lucide="${h.icon}" class="w-4 h-4"></i>
        </div>
        <div>
          <h4 class="font-bold text-slate-100 text-sm mb-1">${h.title}</h4>
          <p class="text-xs text-slate-400 leading-normal">${h.description}</p>
        </div>
      </div>
    `).join('');
  }
}

/**
 * 5. Education & Coursework (Key for students!)
 */
function renderEducation(data) {
  const container = document.getElementById('education-list');
  if (!container || !data.education) return;

  container.innerHTML = data.education.map(edu => `
    <div class="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden mb-6">
      <!-- Glow ambient accent -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
        <div>
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-2">
            <i data-lucide="check-circle" class="w-3.5 h-3.5"></i> ${edu.status}
          </div>
          <h3 class="text-xl md:text-2xl font-bold font-heading text-slate-100">${edu.institution}</h3>
          <p class="text-indigo-400 font-medium text-sm md:text-base mt-0.5">${edu.degree} ${edu.minor ? `• ${edu.minor}` : ''}</p>
          <div class="flex items-center gap-3 text-xs text-slate-400 mt-2">
            <span class="flex items-center gap-1"><i data-lucide="map-pin" class="w-3.5 h-3.5"></i> ${edu.location}</span>
            <span>•</span>
            <span class="flex items-center gap-1"><i data-lucide="calendar" class="w-3.5 h-3.5"></i> ${edu.duration}</span>
          </div>
        </div>
        
        <div class="bg-indigo-950/40 border border-indigo-500/20 px-4 py-3 rounded-xl shrink-0 text-left md:text-right">
          <div class="text-xs text-slate-400 uppercase tracking-wider font-semibold">Cumulative Grade</div>
          <div class="text-lg md:text-xl font-bold text-indigo-300 font-heading">${edu.gpa}</div>
        </div>
      </div>

      <!-- Relevant Coursework Grid -->
      <div class="mt-6 pt-6 border-t border-slate-700/50">
        <h4 class="text-xs uppercase tracking-wider font-bold text-slate-300 mb-3 flex items-center gap-2">
          <i data-lucide="book-marked" class="w-4 h-4 text-indigo-400"></i> Relevant Core Coursework
        </h4>
        <div class="flex flex-wrap gap-2">
          ${edu.relevantCoursework.map(course => `
            <span class="course-tag text-xs px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-slate-300 font-medium">
              ${course}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Academic Achievements / Honors -->
      ${edu.achievements && edu.achievements.length > 0 ? `
        <div class="mt-5 pt-4 border-t border-slate-800/60">
          <h4 class="text-xs uppercase tracking-wider font-bold text-slate-300 mb-2.5 flex items-center gap-2">
            <i data-lucide="award" class="w-4 h-4 text-amber-400"></i> Honors & Highlights
          </h4>
          <ul class="space-y-1.5">
            ${edu.achievements.map(ach => `
              <li class="text-xs md:text-sm text-slate-300 flex items-start gap-2">
                <span class="text-indigo-400 font-bold mt-1">▸</span>
                <span>${ach}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      ` : ''}
    </div>
  `).join('');
}

/**
 * 6. Skills Section
 */
function renderSkills(data) {
  const container = document.getElementById('skills-grid');
  if (!container || !data.skills) return;

  container.innerHTML = data.skills.categories.map(cat => `
    <div class="glass-card p-6 rounded-2xl flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-3 mb-5">
          <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <i data-lucide="${cat.icon || 'code'}" class="w-5 h-5"></i>
          </div>
          <h3 class="font-bold text-base md:text-lg text-slate-100 font-heading">${cat.name}</h3>
        </div>
        
        <div class="flex flex-wrap gap-2">
          ${cat.items.map(skill => `
            <div class="group px-3 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700/80 hover:border-indigo-500/40 hover:bg-slate-800 transition-all flex items-center gap-2">
              <span class="text-xs font-medium text-slate-200">${skill.name}</span>
              ${skill.badge ? `
                <span class="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                  ${skill.badge}
                </span>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="mt-4 pt-3 border-t border-slate-800/50 flex justify-between text-[11px] text-slate-400">
        <span>${cat.items.length} proficiencies listed</span>
        <span class="text-indigo-400/80">Self-taught & Coursework</span>
      </div>
    </div>
  `).join('');
}

/**
 * 7. Projects Section with Category Filtering
 */
function renderProjects(data, activeFilter = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container || !data.projects) return;

  const filteredProjects = activeFilter === 'all' 
    ? data.projects 
    : data.projects.filter(p => p.category === activeFilter);

  if (filteredProjects.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400">
        <i data-lucide="folder-search" class="w-12 h-12 mx-auto mb-3 text-slate-600"></i>
        <p>No projects found in this category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredProjects.map(proj => `
    <div class="glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-800/80 group">
      <div>
        <!-- Project Mockup / Header Preview -->
        <div class="relative w-full h-48 bg-slate-900 overflow-hidden border-b border-slate-800/80">
          <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='assets/images/project-studysync.svg'" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
          
          <!-- Category & Badge Overlays -->
          <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span class="px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-cyan-300 text-xs font-semibold">
              ${proj.tag}
            </span>
          </div>

          ${proj.badge ? `
            <div class="absolute top-3 right-3">
              <span class="px-2.5 py-1 rounded-md bg-indigo-600/90 backdrop-blur-md text-white text-xs font-semibold shadow-sm">
                ${proj.badge}
              </span>
            </div>
          ` : ''}

          <div class="absolute bottom-2 right-3 text-[11px] text-slate-400 font-mono">
            ${proj.duration || ''}
          </div>
        </div>

        <!-- Project Details -->
        <div class="p-6">
          <h3 class="text-lg md:text-xl font-bold font-heading text-slate-100 group-hover:text-indigo-300 transition-colors">
            ${proj.title}
          </h3>

          <p class="text-xs md:text-sm text-slate-300 mt-2.5 leading-relaxed">
            ${proj.description}
          </p>

          <!-- Problem Solved Callout (Crucial for recruiter impact!) -->
          ${proj.problemSolved ? `
            <div class="mt-3.5 p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs">
              <span class="font-bold text-indigo-300">💡 Problem Solved: </span>
              <span class="text-slate-300">${proj.problemSolved}</span>
            </div>
          ` : ''}

          <!-- Engineering Highlights -->
          <div class="mt-4 space-y-1.5">
            ${proj.highlights.map(hl => `
              <div class="text-xs text-slate-400 flex items-start gap-2">
                <span class="text-cyan-400 font-bold">✓</span>
                <span>${hl}</span>
              </div>
            `).join('')}
          </div>

          <!-- Tech Stack Badges -->
          <div class="mt-5 flex flex-wrap gap-1.5">
            ${proj.techStack.map(tech => `
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                ${tech}
              </span>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Action Footer Links -->
      <div class="p-6 pt-0 mt-4 border-t border-slate-800/60 flex items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          ${proj.githubUrl ? `
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors">
              <i data-lucide="github" class="w-3.5 h-3.5"></i> Code
            </a>
          ` : ''}
          ${proj.liveDemoUrl ? `
            <a href="${proj.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors">
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i> Live Demo
            </a>
          ` : ''}
        </div>

        <span class="text-xs text-slate-500 font-mono">
          #${proj.id}
        </span>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/**
 * 8. Campus Involvement & Leadership (Replaces Job Experience)
 */
function renderCampusInvolvement(data) {
  const container = document.getElementById('involvement-list');
  if (!container || !data.campusInvolvement) return;

  container.innerHTML = data.campusInvolvement.map((item, index) => `
    <div class="relative pl-8 pb-8 last:pb-0 border-l-2 border-indigo-500/30">
      <!-- Timeline Node Indicator -->
      <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-400"></div>

      <div class="glass-card p-6 rounded-2xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <div>
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              ${item.badge || item.type}
            </span>
            <h3 class="text-lg font-bold font-heading text-slate-100 mt-1.5">${item.role}</h3>
            <div class="text-sm text-cyan-300 font-medium">${item.organization}</div>
          </div>
          <div class="text-xs font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-lg self-start sm:self-auto">
            ${item.duration}
          </div>
        </div>

        <ul class="mt-4 space-y-2">
          ${item.highlights.map(hl => `
            <li class="text-xs md:text-sm text-slate-300 flex items-start gap-2.5">
              <span class="text-indigo-400 font-bold mt-1">▸</span>
              <span class="leading-relaxed">${hl}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/**
 * 9. Honors & Certifications
 */
function renderAchievements(data) {
  const container = document.getElementById('achievements-grid');
  if (!container || !data.achievements) return;

  container.innerHTML = data.achievements.map(ach => `
    <div class="glass-card p-5 rounded-2xl flex items-start gap-4">
      <div class="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
        <i data-lucide="${ach.icon || 'trophy'}" class="w-6 h-6"></i>
      </div>
      <div>
        <div class="flex items-center justify-between gap-2">
          <h4 class="font-bold text-slate-100 text-sm md:text-base">${ach.title}</h4>
          <span class="text-[11px] font-mono text-slate-400 shrink-0">${ach.date}</span>
        </div>
        <div class="text-xs text-indigo-400 font-medium mt-0.5">${ach.issuer}</div>
        <p class="text-xs text-slate-400 mt-2 leading-relaxed">${ach.description}</p>
      </div>
    </div>
  `).join('');
}

/**
 * 10. Testimonials / Endorsements
 */
function renderTestimonials(data) {
  const container = document.getElementById('testimonials-grid');
  if (!container || !data.testimonials || data.testimonials.length === 0) {
    const parentSection = document.getElementById('testimonials-section');
    if (parentSection) parentSection.classList.add('hidden');
    return;
  }

  container.innerHTML = data.testimonials.map(t => `
    <div class="glass-card p-6 rounded-2xl flex flex-col justify-between">
      <div class="mb-4">
        <i data-lucide="quote" class="w-8 h-8 text-indigo-400/40 mb-3"></i>
        <p class="text-xs md:text-sm text-slate-300 italic leading-relaxed">
          "${t.quote}"
        </p>
      </div>
      <div class="pt-4 border-t border-slate-800/80 flex items-center gap-3">
        <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xs">
          ${t.author.charAt(0)}
        </div>
        <div>
          <div class="text-xs font-bold text-slate-100">${t.author}</div>
          <div class="text-[11px] text-slate-400">${t.title} • ${t.institution}</div>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * 11. Contact Section
 */
function renderContact(data) {
  const c = data.contact;
  if (!c) return;

  const headingEl = document.getElementById('contact-heading');
  if (headingEl) headingEl.textContent = c.heading;

  const subheadingEl = document.getElementById('contact-subheading');
  if (subheadingEl) subheadingEl.textContent = c.subheading;

  const noteEl = document.getElementById('contact-availability-note');
  if (noteEl && c.availabilityNote) {
    noteEl.textContent = c.availabilityNote;
  }

  const emailDisplay = document.getElementById('contact-email-text');
  if (emailDisplay) emailDisplay.textContent = c.directEmail;

  // Social Links in contact section
  const socialsContainer = document.getElementById('contact-socials-list');
  if (socialsContainer && data.socials) {
    socialsContainer.innerHTML = data.socials.map(s => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 hover:border-indigo-500/40 border border-slate-700/80 text-slate-200 transition-all text-xs font-medium">
        <i data-lucide="${s.icon}" class="w-4 h-4 text-indigo-400"></i>
        <span>${s.name}</span>
        <span class="text-slate-500 ml-auto font-mono text-[11px]">${s.username}</span>
      </a>
    `).join('');
  }
}

/**
 * 12. Footer
 */
function renderFooter(data) {
  const footerYear = document.getElementById('footer-year');
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  const footerName = document.getElementById('footer-name');
  if (footerName) footerName.textContent = data.personal.name;

  const footerDegree = document.getElementById('footer-degree');
  if (footerDegree) footerDegree.textContent = `${data.personal.degree} • ${data.personal.university}`;
}

/**
 * Setup Interactive Event Listeners (Theme, Filters, Clipboard, Modals)
 */
function setupEventListeners() {
  // Theme Toggle Button
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking nav links
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Project Category Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active', 'bg-indigo-600', 'text-white'));
      filterBtns.forEach(b => b.classList.add('text-slate-400'));
      
      btn.classList.add('active', 'bg-indigo-600', 'text-white');
      btn.classList.remove('text-slate-400');

      const filterCategory = btn.getAttribute('data-filter');
      renderProjects(window.portfolioData, filterCategory);
    });
  });

  // Copy Email Button with Toast Notification
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = window.portfolioData.personal.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied ${email} to clipboard! 📋`);
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  }

  // Contact Form Mock Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name')?.value;
      const email = document.getElementById('form-email')?.value;
      const message = document.getElementById('form-message')?.value;
      
      // Open default mail client or display success
      const mailtoLink = `mailto:${window.portfolioData.personal.email}?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;
      window.location.href = mailtoLink;
      
      showToast('Opening your email client... ✉️');
      contactForm.reset();
    });
  }
}

/**
 * Toast Notification Utility
 */
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-slate-900/90 text-white text-xs md:text-sm font-medium border border-indigo-500/40 shadow-2xl backdrop-blur-md flex items-center gap-2';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-emerald-400"></i> ${message}`;
  if (window.lucide) window.lucide.createIcons();

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/**
 * Theme Manager (Dark / Light)
 */
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light');
    updateThemeIcon('light');
  } else {
    document.documentElement.classList.remove('light');
    updateThemeIcon('dark');
  }
}

function toggleTheme() {
  const isLight = document.documentElement.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  updateThemeIcon(isLight ? 'light' : 'dark');
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-toggle-icon');
  if (icon) {
    icon.setAttribute('data-lucide', theme === 'light' ? 'moon' : 'sun');
    if (window.lucide) window.lucide.createIcons();
  }
}

// Make functions globally accessible for the visual customizer
window.renderPortfolio = renderPortfolio;
window.showToast = showToast;
