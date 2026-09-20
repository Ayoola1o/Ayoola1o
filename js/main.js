/* ==========================================================================
   Portfolio Core JavaScript Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const projectsContainer = document.getElementById('projects-container');
  const filterPills = document.querySelectorAll('.filter-pill');
  const searchInput = document.getElementById('project-search');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const menuToggleBtn = document.getElementById('menu-toggle');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const modalBackdrop = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const contactForm = document.getElementById('contact-form');
  const toastContainer = document.getElementById('toast-container');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  let activeCategory = 'all';
  let searchQuery = '';

  // 1. Theme Management (Dark by default)
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    updateThemeIcon(newTheme);
    showToast(`Switched to ${newTheme} mode`);
  });

  function updateThemeIcon(theme) {
    if (theme === 'light') {
      themeToggleBtn.innerHTML = `
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        </svg>
      `;
      themeToggleBtn.setAttribute('title', 'Switch to dark mode');
    } else {
      themeToggleBtn.innerHTML = `
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2"/><path d="M12 20v2"/>
          <path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/>
          <path d="M2 12h2"/><path d="M20 12h2"/>
          <path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
        </svg>
      `;
      themeToggleBtn.setAttribute('title', 'Switch to light mode');
    }
  }

  // 2. Mobile Menu Toggle
  if (menuToggleBtn && mobileNavDrawer) {
    menuToggleBtn.addEventListener('click', () => {
      mobileNavDrawer.classList.toggle('open');
    });

    mobileNavDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('open');
      });
    });
  }

  // 3. Render Projects
  function renderProjects() {
    if (!projectsContainer) return;

    const filtered = portfolioProjects.filter(project => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch = !q || 
        project.title.toLowerCase().includes(q) ||
        project.tagline.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.techStack.some(tech => tech.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      projectsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-surface); border: 1px dashed var(--border-subtle); border-radius: var(--radius-lg);">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="1.5" style="margin: 0 auto 16px;">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3 style="font-family: var(--font-display); font-size: 1.25rem; margin-bottom: 8px;">No matching web applications found</h3>
          <p style="color: var(--text-secondary); margin-bottom: 20px;">Try adjusting your search terms or clearing the filter.</p>
          <button id="reset-filter-btn" class="btn-primary" style="padding: 8px 18px; font-size: 0.875rem;">Reset Filter</button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-filter-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          searchInput.value = '';
          searchQuery = '';
          activeCategory = 'all';
          filterPills.forEach(p => p.classList.remove('active'));
          filterPills[0].classList.add('active');
          renderProjects();
        });
      }
      return;
    }

    projectsContainer.innerHTML = filtered.map(project => `
      <article class="project-card glass-card" data-project-id="${project.id}">
        <div class="project-thumbnail card-media-wrapper">
          <img src="${project.image}" alt="${project.title} Web Application Mockup" loading="lazy">
          <span class="project-status-badge badge-${project.statusColor}">
            <span class="pulse-dot" style="background-color: #fff;"></span>
            ${project.status}
          </span>
        </div>
        <div class="project-content">
          <div class="project-meta-row">
            <span class="project-category-tag">${project.categoryName}</span>
            <span class="project-year">${project.year}</span>
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-tagline">${project.tagline}</p>
          <p class="project-summary">${project.summary}</p>
          
          <ul class="project-highlights-list">
            ${project.highlights.slice(0, 2).map(h => `
              <li class="project-highlight-item">
                <svg class="highlight-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>

          <div class="tech-stack-row">
            ${project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>

          <div class="project-actions">
            <button class="btn-card-action btn-detail open-modal-btn" data-id="${project.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              Details & Specs
            </button>
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-demo">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </article>
    `).join('');

    // Attach click listeners to "Details & Specs" buttons
    document.querySelectorAll('.open-modal-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openProjectModal(id);
      });
    });
  }

  // 4. Filtering & Search handlers
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-category');
      renderProjects();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderProjects();
    });
  }

  // 5. Project Details Modal Logic
  function openProjectModal(projectId) {
    const project = portfolioProjects.find(p => p.id === projectId);
    if (!project || !modalBackdrop) return;

    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalImage = document.getElementById('modal-image');
    const modalMetrics = document.getElementById('modal-metrics');
    const modalDescription = document.getElementById('modal-description');
    const modalHighlights = document.getElementById('modal-highlights');
    const modalArchitecture = document.getElementById('modal-architecture');
    const modalStack = document.getElementById('modal-stack');
    const modalLiveLink = document.getElementById('modal-live-link');
    const modalGithubLink = document.getElementById('modal-github-link');

    modalTitle.textContent = project.title;
    modalCategory.textContent = `${project.categoryName} • ${project.year} • ${project.status}`;
    modalImage.src = project.image;
    modalImage.alt = `${project.title} Preview`;
    modalDescription.textContent = project.description;
    modalArchitecture.textContent = project.architecture;

    modalMetrics.innerHTML = project.metrics.map(m => `
      <div class="modal-metric-card">
        <div class="val">${m.value}</div>
        <div class="lbl">${m.label}</div>
      </div>
    `).join('');

    modalHighlights.innerHTML = project.highlights.map(h => `
      <li class="project-highlight-item" style="margin-bottom: 8px;">
        <svg class="highlight-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${h}</span>
      </li>
    `).join('');

    modalStack.innerHTML = project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('');

    modalLiveLink.href = project.liveUrl;
    modalGithubLink.href = project.githubUrl;

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // 6. Skills & Journey Rendering
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer && typeof technicalSkills !== 'undefined') {
    skillsContainer.innerHTML = technicalSkills.map(cat => `
      <div class="skill-card glass-card">
        <div class="skill-card-icon">${cat.icon}</div>
        <h3 class="skill-card-title">${cat.category}</h3>
        <p class="skill-card-desc">${cat.description}</p>
        <div class="skill-chips">
          ${cat.skills.map(s => `<span class="skill-chip">${s}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  const timelineContainer = document.getElementById('timeline-container');
  if (timelineContainer && typeof careerJourney !== 'undefined') {
    timelineContainer.innerHTML = careerJourney.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card glass-card">
          <div class="timeline-header">
            <h4 class="timeline-role">${item.role}</h4>
            <span class="timeline-period">${item.period}</span>
          </div>
          <div class="timeline-org">${item.organization}</div>
          <p class="timeline-desc">${item.description}</p>
          <div class="timeline-badges">
            ${item.badges.map(b => `<span class="tech-tag">${b}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  // 7. Copy Email Interaction
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = document.getElementById('email-address-text').textContent.trim();
      navigator.clipboard.writeText(email).then(() => {
        showToast('✓ Email address copied to clipboard!');
      }).catch(() => {
        showToast('Email: ' + email);
      });
    });
  }

  // 8. Contact Form Submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin" style="animation: spin 1s linear infinite;">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
          <path d="M12 2a10 10 0 0 1 10 10"/>
        </svg>
        Sending...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        showToast('🎉 Message sent successfully! I will get back to you within 24 hours.');
      }, 1200);
    });
  }

  // 9. Toast Helper
  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast toast-visible';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--status-emerald)" stroke-width="2.5">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translate(-50%, 20px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // 10. Scroll Spy for Navigation Links
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Initial render
  renderProjects();
});
