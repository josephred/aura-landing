/**
 * Aura Salud - Main JavaScript Controller
 * Multi-Country Orchestrator (Chile, Argentina, Perú)
 */

import { getCountryData, DEFAULT_COUNTRY, SUPPORTED_COUNTRIES } from './data.js';
import { initPhoneMockup } from './phone-mockup.js';
import { initAppShowcase } from './showcase.js';
import { initBookingModal, updateBookingModalCountry } from './booking-modal.js';
import { initCoverageChecker, updateCoverageCheckerCountry } from './coverage.js';

let currentCountryCode = DEFAULT_COUNTRY;
let currentCountryData = getCountryData(DEFAULT_COUNTRY);
let currentServiceCategory = 'all';
let isAnnualPricing = false;

document.addEventListener('DOMContentLoaded', () => {
  initCountryFromEnvironment();
  initHeader();
  initMobileMenu();
  initCountrySelector();
  initServiceFilters();
  initPricingToggle();
  initFaqAccordion();
  initStatsCounter();
  
  // Initialize sub-modules
  initPhoneMockup();
  initAppShowcase();
  initBookingModal();
  initCoverageChecker();

  // Apply initial country data across all sections
  switchCountry(currentCountryCode, false);
});

// ==========================================
// 1. Country Selection & Multi-Country State
// ==========================================
function initCountryFromEnvironment() {
  // Check URL query params first: ?pais=ar or ?country=pe
  const urlParams = new URLSearchParams(window.location.search);
  const paramCountry = urlParams.get('pais') || urlParams.get('country');
  
  if (paramCountry && SUPPORTED_COUNTRIES.includes(paramCountry.toLowerCase())) {
    currentCountryCode = paramCountry.toLowerCase();
    currentCountryData = getCountryData(currentCountryCode);
    return;
  }

  // Check LocalStorage next
  const stored = localStorage.getItem('aura_country');
  if (stored && SUPPORTED_COUNTRIES.includes(stored.toLowerCase())) {
    currentCountryCode = stored.toLowerCase();
    currentCountryData = getCountryData(currentCountryCode);
    return;
  }

  currentCountryCode = DEFAULT_COUNTRY;
  currentCountryData = getCountryData(DEFAULT_COUNTRY);
}

export function switchCountry(countryCode, updateUrl = true) {
  if (!SUPPORTED_COUNTRIES.includes(countryCode)) return;

  currentCountryCode = countryCode;
  currentCountryData = getCountryData(countryCode);

  try {
    localStorage.setItem('aura_country', countryCode);
  } catch (e) {
    // Ignore storage quota or privacy mode errors
  }

  if (updateUrl && window.history && window.history.replaceState) {
    const url = new URL(window.location.href);
    url.searchParams.set('pais', countryCode);
    window.history.replaceState({}, '', url.toString());
  }

  // 1. Update Selector UI
  updateCountrySelectorUI();

  // 2. Update Header & Announcement Banner
  updateHeaderAndBanner();

  // 3. Update Hero Section
  updateHeroSection();

  // 4. Update Trust Badges & Partner Clinics
  updateTrustAndClinics();

  // 5. Update Services Catalog
  renderServices(currentServiceCategory);

  // 6. Update Pricing Plans
  renderPricing(isAnnualPricing);

  // 7. Update Coverage Section
  updateCoverageSection();

  // 8. Update Professionals Section
  updateProfessionalsSection();

  // 9. Update Testimonials
  renderTestimonials();

  // 10. Update FAQs
  renderFaqs();

  // 11. Update CTAs & WhatsApp Widgets
  updateWhatsAppAndCTAs();

  // 12. Update Footer
  updateFooter();

  // 13. Update Booking Modal
  updateBookingModalCountry(currentCountryData);
  updateCoverageCheckerCountry(currentCountryData);
}

function initCountrySelector() {
  // 1. Generate all selector HTML from data
  renderCountrySelectors();

  // 2. Desktop dropdown toggle
  const dropdown = document.getElementById('country-dropdown');
  const triggerBtn = document.getElementById('country-trigger-btn');
  const menu = document.getElementById('country-menu');

  if (triggerBtn && menu) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.toggle('open');
      triggerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (dropdown && !dropdown.contains(e.target)) {
        menu.classList.remove('open');
        triggerBtn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        triggerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 3. Delegated click handler for ALL country buttons across the page
  //    Uses a single pattern: any [data-country] inside known containers
  const countryContainers = [
    document.getElementById('top-country-pills'),
    document.getElementById('country-menu'),
    document.getElementById('mobile-country-buttons'),
    document.getElementById('footer-country-switcher')
  ];

  countryContainers.forEach(container => {
    if (!container) return;
    container.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-country]');
      if (!btn) return;
      e.preventDefault();
      const code = btn.dataset.country;
      if (code) {
        switchCountry(code, true);
        // Close dropdown if inside nav menu
        if (menu && container === menu) {
          menu.classList.remove('open');
          triggerBtn?.setAttribute('aria-expanded', 'false');
        }
        // Close mobile nav if inside mobile picker
        if (container.id === 'mobile-country-buttons') {
          const navLinks = document.querySelector('.nav-links');
          if (navLinks) navLinks.classList.remove('open');
        }
      }
    });
  });
}

/**
 * Generates HTML for all 4 country selector locations from COUNTRIES_DATA.
 * Single source of truth — no country info hardcoded in HTML.
 */
function renderCountrySelectors() {
  const countries = SUPPORTED_COUNTRIES.map(code => getCountryData(code));

  // 1. Top banner pills
  const topPills = document.getElementById('top-country-pills');
  if (topPills) {
    topPills.innerHTML = countries.map(c => `
      <button class="top-country-pill ${c.code === currentCountryCode ? 'active' : ''}" 
              data-country="${c.code}" title="Cambiar a ${c.name} (${c.currency.code})">
        <span class="pill-flag">${c.flag}</span>
        <span class="pill-name">${c.name}</span>
        <span class="pill-currency">${c.currency.code}</span>
      </button>
    `).join('');
  }

  // 2. Desktop dropdown menu options
  const menu = document.getElementById('country-menu');
  if (menu) {
    menu.innerHTML = countries.map(c => `
      <button class="country-opt-btn ${c.code === currentCountryCode ? 'active' : ''}" data-country="${c.code}">
        <span class="opt-flag">${c.flag}</span>
        <div class="opt-info">
          <span class="opt-title">${c.name}</span>
          <span class="opt-sub">${c.selectorSubtitle || `${c.currency.code} (${c.currency.symbol})`}</span>
        </div>
        <span class="opt-check">✓</span>
      </button>
    `).join('');
  }

  // 3. Mobile nav country buttons
  const mobileButtons = document.getElementById('mobile-country-buttons');
  if (mobileButtons) {
    mobileButtons.innerHTML = countries.map(c => `
      <button class="mobile-country-btn ${c.code === currentCountryCode ? 'active' : ''}" data-country="${c.code}">
        ${c.flag} ${c.name}
      </button>
    `).join('');
  }

  // 4. Footer country buttons
  const footerSwitcher = document.getElementById('footer-country-switcher');
  if (footerSwitcher) {
    // Keep the existing "País:" label, append buttons
    const existingLabel = footerSwitcher.querySelector('span');
    const labelHTML = existingLabel ? existingLabel.outerHTML : '';
    footerSwitcher.innerHTML = labelHTML + countries.map(c => `
      <button class="footer-country-btn ${c.code === currentCountryCode ? 'active' : ''}" data-country="${c.code}">
        ${c.flag} ${c.name}
      </button>
    `).join('');
  }
}

/**
 * Updates the active state across all country selectors.
 * Uses a shared helper to avoid repeating querySelectorAll toggle loops.
 */
function updateCountrySelectorUI() {
  // Helper: toggle .active for all buttons with [data-country] inside a container
  const setActiveInContainer = (containerId) => {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.querySelectorAll('[data-country]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.country === currentCountryCode);
    });
  };

  // Update all 4 selector locations
  setActiveInContainer('top-country-pills');
  setActiveInContainer('country-menu');
  setActiveInContainer('mobile-country-buttons');
  setActiveInContainer('footer-country-switcher');

  // Update desktop trigger button face
  const flagEl = document.getElementById('nav-country-flag');
  const nameEl = document.getElementById('nav-country-name');
  const currEl = document.getElementById('nav-country-currency');

  if (flagEl) flagEl.textContent = currentCountryData.flag;
  if (nameEl) nameEl.textContent = currentCountryData.name;
  if (currEl) currEl.textContent = currentCountryData.currency.code;
}


// ==========================================
// 2. DOM Updates for Header & Announcement
// ==========================================
function updateHeaderAndBanner() {
  const liveDot = document.getElementById('top-banner-live-text');
  const emergencyText = document.getElementById('top-banner-emergency-text');
  const brandBadge = document.getElementById('brand-country-badge');

  if (liveDot) {
    liveDot.innerHTML = `<strong>Médicos y enfermeros en ruta:</strong> ${currentCountryData.topBanner.liveText}`;
  }
  if (emergencyText) {
    emergencyText.innerHTML = `${currentCountryData.topBanner.emergencyText}`;
  }
  if (brandBadge) {
    brandBadge.textContent = `${currentCountryData.flag} ${currentCountryData.name}`;
  }
}

// ==========================================
// 3. Hero Section Updates
// ==========================================
function updateHeroSection() {
  const livePill = document.getElementById('hero-live-pill-text');
  const heroDesc = document.getElementById('hero-description-text');
  const chipDocTitle = document.getElementById('hero-chip-doctor-title');
  const chipDocEta = document.getElementById('hero-chip-doctor-eta');
  const chipRecipeTitle = document.getElementById('hero-chip-recipe-title');
  const chipRecipeDesc = document.getElementById('hero-chip-recipe-desc');

  if (livePill) livePill.textContent = currentCountryData.topBanner.staffCountText;
  if (heroDesc) heroDesc.textContent = currentCountryData.hero.subtitle;
  if (chipDocTitle) chipDocTitle.textContent = currentCountryData.hero.chipDoctor.title;
  if (chipDocEta) chipDocEta.textContent = currentCountryData.hero.chipDoctor.eta;
  if (chipRecipeTitle) chipRecipeTitle.textContent = currentCountryData.hero.chipRecipe.title;
  if (chipRecipeDesc) chipRecipeDesc.textContent = currentCountryData.hero.chipRecipe.desc;
}

// ==========================================
// 4. Trust Badges & Partner Clinics
// ==========================================
function updateTrustAndClinics() {
  const trustBadgeAccreditation = document.getElementById('trust-badge-accreditation');
  const trustBadgeReimbursement = document.getElementById('trust-badge-reimbursement');
  const trustBadgePayments = document.getElementById('trust-badge-payments');
  const trustBadgePrivacy = document.getElementById('trust-badge-privacy');

  if (trustBadgeAccreditation) trustBadgeAccreditation.textContent = currentCountryData.trust.accreditation;
  if (trustBadgeReimbursement) trustBadgeReimbursement.textContent = currentCountryData.trust.reimbursement;
  if (trustBadgePayments) trustBadgePayments.textContent = currentCountryData.trust.payments;
  if (trustBadgePrivacy) trustBadgePrivacy.textContent = currentCountryData.trust.privacy;

  const clinicsTitle = document.getElementById('clinics-title');
  const clinicsSubtitle = document.getElementById('clinics-subtitle');
  const clinicsGrid = document.getElementById('clinics-grid');

  if (clinicsTitle) clinicsTitle.textContent = currentCountryData.clinicsLabel;
  if (clinicsSubtitle) clinicsSubtitle.textContent = currentCountryData.clinicsSublabel;

  if (clinicsGrid) {
    clinicsGrid.innerHTML = currentCountryData.clinics.map(clinic => `
      <div class="clinic-card">
        <div class="clinic-icon-wrap">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 21h18"/>
            <path d="M5 21V7l8-4v18"/>
            <path d="M19 21V11l-6-4"/>
            <path d="M9 9h1"/>
            <path d="M9 13h1"/>
            <path d="M9 17h1"/>
          </svg>
        </div>
        <div class="clinic-body">
          <div class="clinic-top-row">
            <h4 class="clinic-name">${clinic.name}</h4>
            <span class="clinic-badge">${clinic.badge}</span>
          </div>
          <span class="clinic-location">📍 ${clinic.location}</span>
          <span class="clinic-type">${clinic.type}</span>
        </div>
      </div>
    `).join('');
  }
}

// ==========================================
// 5. Render Services Catalog
// ==========================================
function renderServices(category = 'all') {
  currentServiceCategory = category;
  const container = document.getElementById('services-grid');
  const subtitleEl = document.getElementById('services-section-subtitle');

  if (subtitleEl) {
    subtitleEl.textContent = `Tarifas transparentes en ${currentCountryData.currency.code} (${currentCountryData.currency.symbol}), tiempos de arribo garantizados y profesionales certificados.`;
  }

  if (!container) return;

  const servicesList = currentCountryData.services || [];
  const filtered = category === 'all' 
    ? servicesList 
    : servicesList.filter(s => s.category === category);

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
          <span class="service-price-val">${currentCountryData.currency.formatShort(service.price)} <span style="font-size: 0.8rem; font-weight: 500; color: var(--text-muted);">${currentCountryData.currency.code}</span></span>
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
// 6. Render Pricing Plans
// ==========================================
function renderPricing(isAnnual = false) {
  isAnnualPricing = isAnnual;
  const container = document.getElementById('pricing-grid');
  if (!container) return;

  const plans = currentCountryData.subscriptionPlans || [];

  container.innerHTML = plans.map(plan => {
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
          <span class="currency">${currentCountryData.currency.symbol}</span>
          <span class="price-val">${price.toLocaleString()}</span>
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

  if (!toggleSwitch) return;

  function update() {
    toggleSwitch.classList.toggle('annual', isAnnualPricing);
    if (labelMonthly) labelMonthly.classList.toggle('active', !isAnnualPricing);
    if (labelAnnual) labelAnnual.classList.toggle('active', isAnnualPricing);
    renderPricing(isAnnualPricing);
  }

  toggleSwitch.addEventListener('click', () => {
    isAnnualPricing = !isAnnualPricing;
    update();
  });

  if (labelMonthly) labelMonthly.addEventListener('click', () => { isAnnualPricing = false; update(); });
  if (labelAnnual) labelAnnual.addEventListener('click', () => { isAnnualPricing = true; update(); });
}

// ==========================================
// 7. Coverage Section DOM Update
// ==========================================
function updateCoverageSection() {
  const zoneType = document.getElementById('coverage-zone-type');
  const hubBadge = document.getElementById('coverage-hub-badge');
  const hubTitle = document.getElementById('coverage-hub-title');
  const hubDesc = document.getElementById('coverage-hub-desc');
  const hubMetric1Val = document.getElementById('coverage-hub-metric1-val');
  const hubMetric1Label = document.getElementById('coverage-hub-metric1-label');
  const hubMetric2Val = document.getElementById('coverage-hub-metric2-val');
  const hubMetric2Label = document.getElementById('coverage-hub-metric2-label');

  if (zoneType) zoneType.textContent = currentCountryData.zoneName;
  if (hubBadge) hubBadge.textContent = currentCountryData.coverageHub.badge;
  if (hubTitle) hubTitle.textContent = currentCountryData.coverageHub.title;
  if (hubDesc) hubDesc.textContent = currentCountryData.coverageHub.desc;
  if (hubMetric1Val) hubMetric1Val.textContent = currentCountryData.coverageHub.metric1Val;
  if (hubMetric1Label) hubMetric1Label.textContent = currentCountryData.coverageHub.metric1Label;
  if (hubMetric2Val) hubMetric2Val.textContent = currentCountryData.coverageHub.metric2Val;
  if (hubMetric2Label) hubMetric2Label.textContent = currentCountryData.coverageHub.metric2Label;
}

// ==========================================
// 8. Professionals Section Updates
// ==========================================
function updateProfessionalsSection() {
  const profSubtitle = document.getElementById('profesionales-subtitle');
  const profList = document.getElementById('profesionales-requirements-list');
  const profApplyBtn = document.getElementById('profesionales-apply-btn');

  if (profSubtitle) {
    profSubtitle.textContent = `Únete a la red de salud domiciliaria más moderna de ${currentCountryData.name}. Elige tus horarios, recibe pacientes geolocalizados cerca de ti, gestiona fichas y recetas 100% digitales y obtén pagos semanales garantizados.`;
  }

  if (profList) {
    profList.innerHTML = currentCountryData.professionalRequirements.map(req => `
      <li style="display: flex; align-items: center; gap: 8px;">✓ ${req}</li>
    `).join('');
  }

  if (profApplyBtn) {
    const cleanPhone = currentCountryData.phone.replace(/[^0-9]/g, '');
    const msg = encodeURIComponent(`Hola Aura Salud ${currentCountryData.name}, soy profesional de la salud y deseo postular`);
    profApplyBtn.href = `https://wa.me/${cleanPhone}?text=${msg}`;
  }
}

// ==========================================
// 9. Render FAQs & Accordion
// ==========================================
function renderFaqs() {
  const container = document.getElementById('faq-accordion');
  if (!container) return;

  const faqs = currentCountryData.faqs || [];

  container.innerHTML = faqs.map((faq, index) => `
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
// 10. Render Testimonials
// ==========================================
function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  const subtitleEl = document.getElementById('testimonials-section-subtitle');

  if (subtitleEl) {
    subtitleEl.textContent = `Más de 15.000 hogares en ${currentCountryData.name} han confiado su salud y la de sus seres queridos en Aura.`;
  }

  if (!container) return;

  const testimonials = currentCountryData.testimonials || [];

  container.innerHTML = testimonials.map(t => `
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
// 11. WhatsApp Links & Bottom CTA
// ==========================================
function updateWhatsAppAndCTAs() {
  const cleanPhone = currentCountryData.phone.replace(/[^0-9]/g, '');
  const floatingBtn = document.querySelector('.floating-whatsapp-btn');
  const bottomCtaBtn = document.getElementById('bottom-cta-whatsapp');
  const bottomSubtitle = document.getElementById('bottom-cta-subtitle');

  const defaultMsg = encodeURIComponent(`Hola Aura Salud ${currentCountryData.name}, necesito orientación médica`);

  if (floatingBtn) {
    floatingBtn.href = `https://wa.me/${cleanPhone}?text=${defaultMsg}`;
  }

  if (bottomCtaBtn) {
    bottomCtaBtn.href = `https://wa.me/${cleanPhone}?text=${defaultMsg}`;
  }

  if (bottomSubtitle) {
    bottomSubtitle.textContent = `Solicita tu médico clínico o general, enfermera o toma de muestras ahora mismo en ${currentCountryData.name}.`;
  }
}

// ==========================================
// 12. Footer Updates
// ==========================================
function updateFooter() {
  const footerAbout = document.getElementById('footer-about-text');
  const emergencyCardTitle = document.getElementById('footer-emergency-title');
  const emergencyCardDesc = document.getElementById('footer-emergency-desc');
  const footerLegalEntity = document.getElementById('footer-legal-entity');
  const footerLegalList = document.getElementById('footer-legal-list');

  if (footerAbout) footerAbout.textContent = currentCountryData.footer.about;
  if (emergencyCardTitle) emergencyCardTitle.textContent = `⚠️ Aviso de Emergencia (${currentCountryData.emergency.name})`;
  if (emergencyCardDesc) emergencyCardDesc.textContent = currentCountryData.emergency.warning;
  if (footerLegalEntity) footerLegalEntity.textContent = currentCountryData.footer.legalEntity;

  if (footerLegalList) {
    footerLegalList.innerHTML = currentCountryData.footer.legalItems.map(item => `
      <li><span style="color: var(--text-secondary); font-size: 0.9rem;">${item}</span></li>
    `).join('');
  }
}

// ==========================================
// 13. Header Scroll & Mobile Menu
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
// 14. Stats Counter Animation
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
      element.textContent = target >= 1000 ? `+${target.toLocaleString()}` : target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start).toLocaleString();
    }
  }, stepTime);
}
