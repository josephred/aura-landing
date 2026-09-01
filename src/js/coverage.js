/**
 * Aura Salud - Coverage Checker & Comunas Controller
 */

import { COVERAGE_DATA } from './data.js';

export function initCoverageChecker() {
  const input = document.getElementById('coverage-search-input');
  const resultsContainer = document.getElementById('coverage-results-container');

  if (!input || !resultsContainer) return;

  function renderList(query = '') {
    const q = query.trim().toLowerCase();
    const filtered = COVERAGE_DATA.filter(item => 
      item.comuna.toLowerCase().includes(q) || 
      item.region.toLowerCase().includes(q)
    );

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `
        <div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          No encontramos esa comuna en el registro directo. ¡Consúltanos por WhatsApp para verificar disponibilidad especial!
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

  input.addEventListener('input', (e) => {
    renderList(e.target.value);
  });

  renderList();
}
