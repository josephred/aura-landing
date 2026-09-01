/**
 * Aura Salud - Main JavaScript Controller
 */

import { CLINICAL_SERVICES, SUBSCRIPTION_PLANS, FAQS, TESTIMONIALS } from './data.js';
import { initPhoneMockup } from './phone-mockup.js';
import { initAppShowcase } from './showcase.js';
import { initBookingModal } from './booking-modal.js';
import { initCoverageChecker } from './coverage.js';

document.addEventListener('DOMContentLoaded', () => {
  renderServices('all');
  renderPricing(false);
  renderFaqs();
  renderTestimonials();
  initHeader();
  initMobileMenu();
  initServiceFilters();
  initPricingToggle();
  initFaqAccordion();
  initStatsCounter();
  
  // Initialize sub-modules
  initPhoneMockup();
  initAppShowcase();
  initBookingModal();
  initCoverageChecker();
});

// ==========================================
// 1. Render Services Catalog
// ==========================================
function renderServices(category = 'all') {
  const container = document.getElementById('services-grid');
  if (!container) return;

  const filtered = category === 'all' 
    ? CLINICAL_SERVICES 
    : CLINICAL_SERVICES.filter(s => s.category === category);

  container.innerHTML = filtered.map(service => `
    <div class="service-card" data-category="${service.category}">
      <div class="service-card-header">
        <div class="service-icon-box">
          ${getServiceIconSvg(service.icon)}
        </div>
        <span class="service-badge">${service.badge}</span>
      </div>
      
      <h3 class="service-title">${service.title}</h3>
      <p class="service-subtitle">${service.subtitle}</p>

      <div class="service-meta-row">
        <div class="service-price-block">
          <span class="service-price-label">Tarifa Base</span>
          <span class="service-price-val">$${service.price.toLocaleString('es-CL')} <span style="font-size: 0.8rem; font-weight: 500; color: var(--text-muted);">CLP</span></span>
        </div>
        <span class="service-eta-pill">
          ⚡ ${service.eta}
        </span>
      </div>

      <div class="service-prescription-note ${service.requiresPrescription ? 'required' : ''}">
        ${service.requiresPrescription 
          ? '📋 Requiere orden o receta médica' 
          : '✓ Sin orden médica previa necesaria'}
      </div>

      <div class="service-card-footer">
        <button class="btn btn-primary" data-open-booking data-service-id="${service.id}">
          Solicitar Atención
        </button>
      </div>
    </div>
  `).join('');

  // Re-bind booking buttons
  container.querySelectorAll('[data-open-booking]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const sId = btn.dataset.serviceId;
      if (window.openAuraBooking) window.openAuraBooking(sId);
    });
  });
}

function initServiceFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.category;
      renderServices(cat);
    });
  });
}

// Icon helper
function getServiceIconSvg(name) {
  switch (name) {
    case 'stethoscope':
      return `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>`;
    case 'activity':
      return `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`;
    case 'wind':
      return `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.7 7.7A2.5 2.5 0 1 1 19 12H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>`;
    case 'footprints':
      return `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.5-2 8.5V16c0 1.1-.9 2-2 2s-2-.9-2-2Z"/><path d="M14 20v-2.38C14 15.5 12.97 14.5 13 12c.03-2.72 1.49-6 4.5-6C19.37 6 20 7.8 20 9.5c0 3.11-2 5.5-2 8.5V20c0 1.1-.9 2-2 2s-2-.9-2-2Z"/></svg>`;
    case 'flask':
      return `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31L4.15 20.25A1 1 0 0 0 5 21.6h14a1 1 0 0 0 .85-1.35L14 9.31V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>`;
    case 'heart-pulse':
      return `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l1.5-3 2 6.5 1.5-3.5h6.28"/></svg>`;
    case 'scan':
      return `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>`;
    case 'heart-handshake':
      return `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`;
    case 'truck':
      return `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 17h4V5H2v12h3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/><path d="M14 8h4l3 3v6h-3.5"/></svg>`;
    default:
      return `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
  }
}

// ==========================================
// 2. Render Pricing Plans
// ==========================================
function renderPricing(isAnnual = false) {
  const container = document.getElementById('pricing-grid');
  if (!container) return;

  container.innerHTML = SUBSCRIPTION_PLANS.map(plan => {
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    const periodText = isAnnual ? '/año (ahorra 2 meses)' : '/mes';

    return `
      <div class="pricing-card ${plan.popular ? 'featured' : ''}">
        ${plan.popular ? `<div class="popular-banner">⭐ MÁS RECOMENDADO</div>` : ''}
        
        <div class="pricing-header">
          <span class="plan-badge">${plan.badge}</span>
          <h3 class="plan-name">${plan.name}</h3>
          <p class="plan-tagline">${plan.tagline}</p>
        </div>

        <div class="plan-price-wrap">
          <span class="currency">$</span>
          <span class="price-val">${price.toLocaleString('es-CL')}</span>
          <span class="period">${periodText}</span>
        </div>

        <ul class="plan-features">
          ${plan.features.map(f => `
            <li>
              <span class="check-icon">✓</span>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>

        <div class="pricing-card-footer">
          <button class="btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}" data-open-booking data-plan="${plan.id}">
            ${plan.ctaText}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function initPricingToggle() {
  const toggleSwitch = document.getElementById('pricing-switch');
  const labelMonthly = document.getElementById('label-monthly');
  const labelAnnual = document.getElementById('label-annual');
  let isAnnual = false;

  if (!toggleSwitch) return;

  function update() {
    toggleSwitch.classList.toggle('annual', isAnnual);
    if (labelMonthly) labelMonthly.classList.toggle('active', !isAnnual);
    if (labelAnnual) labelAnnual.classList.toggle('active', isAnnual);
    renderPricing(isAnnual);
  }

  toggleSwitch.addEventListener('click', () => {
    isAnnual = !isAnnual;
    update();
  });

  if (labelMonthly) labelMonthly.addEventListener('click', () => { isAnnual = false; update(); });
  if (labelAnnual) labelAnnual.addEventListener('click', () => { isAnnual = true; update(); });
}

// ==========================================
// 3. Render FAQs & Accordion
// ==========================================
function renderFaqs() {
  const container = document.getElementById('faq-accordion');
  if (!container) return;

  container.innerHTML = FAQS.map((faq, index) => `
    <div class="faq-item ${index === 0 ? 'active' : ''}">
      <button class="faq-trigger" aria-expanded="${index === 0}">
        <span>${faq.question}</span>
        <span class="faq-icon">▼</span>
      </button>
      <div class="faq-content">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join('');
}

function initFaqAccordion() {
  const container = document.getElementById('faq-accordion');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const trigger = e.target.closest('.faq-trigger');
    if (!trigger) return;

    const item = trigger.parentElement;
    const isActive = item.classList.contains('active');

    // Close all other items
    container.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
    });

    if (!isActive) {
      item.classList.add('active');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
}

// ==========================================
// 4. Render Testimonials
// ==========================================
function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;

  container.innerHTML = TESTIMONIALS.map(t => `
    <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
          <div style="display: flex; gap: 4px; color: #fbbf24;">
            ${'★'.repeat(t.rating)}
          </div>
          <span style="font-size: 0.78rem; color: var(--text-muted);">${t.date}</span>
        </div>
        <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-primary); margin-bottom: 20px; font-style: italic;">
          "${t.text}"
        </p>
      </div>
      <div style="display: flex; align-items: center; gap: 14px; border-top: 1px solid var(--border-subtle); padding-top: 16px;">
        <div style="width: 44px; height: 44px; border-radius: 50%; background: ${t.avatarColor}; color: #042321; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem;">
          ${t.name.charAt(0)}
        </div>
        <div>
          <h5 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 2px;">${t.name}</h5>
          <span style="font-size: 0.78rem; color: var(--primary-300);">${t.role} · ${t.location}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 5. Header Scroll & Mobile Menu
// ==========================================
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// ==========================================
// 6. Stats Counter Animation
// ==========================================
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        if (!isNaN(target)) {
          animateCount(el, target);
        }
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => observer.observe(el));
}

function animateCount(element, target) {
  let start = 0;
  const duration = 1800;
  const stepTime = 20;
  const steps = duration / stepTime;
  const increment = target / steps;

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target >= 1000 ? `+${target.toLocaleString('es-CL')}` : target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start).toLocaleString('es-CL');
    }
  }, stepTime);
}
