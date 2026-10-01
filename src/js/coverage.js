/**
 * Aura Salud - Coverage Checker Controller
 * Multi-Country Support: Chile, Argentina, Perú
 */

import { getCountryData, DEFAULT_COUNTRY } from './data.js';

let activeCountryData = getCountryData(DEFAULT_COUNTRY);
let lastQuery = '';

export function updateCoverageCheckerCountry(countryData) {
  if (!countryData) return;
  activeCountryData = countryData;

  const input = document.getElementById('coverage-search-input');
  if (input) {
    input.placeholder = activeCountryData.zonePlaceholder || 'Buscar zona o comuna...';
    input.value = '';
    lastQuery = '';
  }

  renderCoverageList('');
}

function renderCoverageList(query = '') {
  const resultsContainer = document.getElementById('coverage-results-container');
  if (!resultsContainer) return;

  const q = query.trim().toLowerCase();
  const coverageList = activeCountryData.coverage || [];
  const filtered = coverageList.filter(item => 
    item.comuna.toLowerCase().includes(q) || 
    item.region.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    const cleanPhone = activeCountryData.phone.replace(/[^0-9]/g, '');
    resultsContainer.innerHTML = `
      <div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
        No encontramos esa zona en el registro directo de ${activeCountryData.name}. 
        <a href="https://wa.me/${cleanPhone}?text=Hola%20Aura%20Salud%20${encodeURIComponent(activeCountryData.name)}%2C%20quisiera%20consultar%20cobertura%20para%20mi%20zona" target="_blank" style="color: var(--primary-300); text-decoration: underline; margin-left: 4px;">
          ¡Consúltanos por WhatsApp para disponibilidad especial!
        </a>
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = filtered.map(item => {
    let statusClass = 'status-available';
    if (item.status === 'Alta Disponibilidad') statusClass = 'status-high';
    if (item.status === 'Próxima Expansión') statusClass = 'status-soon';

    return `
      <div class="coverage-item">
        <div class="coverage-item-info">
          <span class="coverage-comuna-name">${item.comuna}</span>
          <span class="coverage-region-name">${item.region} · ETA aprox. ${item.eta}</span>
        </div>
        <span class="coverage-status-tag ${statusClass}">
          <span class="live-dot" style="width: 6px; height: 6px;"></span>
          ${item.status}
        </span>
      </div>
    `;
  }).join('');
}

export function initCoverageChecker() {
  const input = document.getElementById('coverage-search-input');
  if (!input) return;

  updateCoverageCheckerCountry(activeCountryData);

  input.addEventListener('input', (e) => {
    lastQuery = e.target.value;
    renderCoverageList(lastQuery);
  });
}
