/**
 * Aura Salud - App Showcase & Lightbox Controller
 */

import { APP_SCREENS } from './data.js';

export function initAppShowcase() {
  const gridContainer = document.getElementById('showcase-grid');
  const roleButtons = document.querySelectorAll('.showcase-tab-btn');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxBadge = document.getElementById('lightbox-badge');
  const lightboxHighlights = document.getElementById('lightbox-highlights');
  const lightboxClose = document.getElementById('lightbox-close');

  if (!gridContainer) return;

  let currentRole = 'all';

  function renderScreens(role) {
    gridContainer.innerHTML = '';

    const filtered = role === 'all' 
      ? APP_SCREENS 
      : APP_SCREENS.filter(s => s.role === role);

    filtered.forEach(screen => {
      const card = document.createElement('div');
      card.className = 'screen-card';
      card.dataset.id = screen.id;

      card.innerHTML = `
        <div class="screen-preview-box">
          <img src="/assets/screens/${screen.filename}" alt="${screen.title}" class="screen-preview-img" loading="lazy">
          <div class="screen-overlay-hover">
            <span class="zoom-pill">🔍 Ver en Detalle</span>
          </div>
        </div>
        <div class="screen-info">
          <div class="screen-header-row">
            <span class="screen-badge">${screen.badge}</span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Pantalla ${screen.id}</span>
          </div>
          <h4 class="screen-card-title">${screen.title}</h4>
          <p class="screen-card-desc">${screen.description}</p>
          <ul class="screen-highlights">
            ${screen.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>
      `;

      card.addEventListener('click', () => openLightbox(screen));
      gridContainer.appendChild(card);
    });
  }

  function openLightbox(screen) {
    if (!lightboxModal) return;

    lightboxImg.src = `/assets/screens/${screen.filename}`;
    lightboxImg.alt = screen.title;
    lightboxTitle.textContent = `${screen.id}. ${screen.title}`;
    lightboxDesc.textContent = screen.description;
    lightboxBadge.textContent = screen.badge;

    lightboxHighlights.innerHTML = screen.highlights
      .map(h => `<li style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px; display: flex; align-items: center; gap: 8px;"><span style="color: var(--primary-400); font-weight: bold;">✓</span> ${h}</li>`)
      .join('');

    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  roleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      roleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentRole = btn.dataset.role;
      renderScreens(currentRole);
    });
  });

  renderScreens('all');
}
