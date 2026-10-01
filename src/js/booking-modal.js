/**
 * Aura Salud - Interactive 3-Step Booking Simulator Controller
 * Multi-Country Support: Chile (CLP), Argentina (ARS), Perú (PEN)
 */

import { getCountryData, DEFAULT_COUNTRY } from './data.js';

let activeCountryData = getCountryData(DEFAULT_COUNTRY);
let currentStep = 1;
let bookingData = {
  serviceId: 'medico',
  recipient: 'Para mí (Titular)',
  comuna: '',
  address: '',
  symptoms: ''
};

export function updateBookingModalCountry(countryData) {
  if (!countryData) return;
  activeCountryData = countryData;

  const serviceSelect = document.getElementById('booking-service-select');
  const comunaSelect = document.getElementById('booking-comuna-select');
  const locationLabel = document.getElementById('booking-location-label');

  if (locationLabel) {
    locationLabel.textContent = `${activeCountryData.zoneName} de Atención`;
  }

  // Populate services for the country
  if (serviceSelect) {
    const prevSelected = bookingData.serviceId;
    serviceSelect.innerHTML = activeCountryData.services.map(s => 
      `<option value="${s.id}">${activeCountryData.currency.format(s.price)} — ${s.title} (${s.eta})</option>`
    ).join('');

    const exists = activeCountryData.services.some(s => s.id === prevSelected);
    bookingData.serviceId = exists ? prevSelected : (activeCountryData.services[0]?.id || 'medico');
    serviceSelect.value = bookingData.serviceId;
  }

  // Populate comunas / districts for the country
  if (comunaSelect && activeCountryData.coverage.length > 0) {
    comunaSelect.innerHTML = activeCountryData.coverage.map(c => 
      `<option value="${c.comuna}">${c.comuna} (${c.region}) — ETA ${c.eta}</option>`
    ).join('');

    bookingData.comuna = activeCountryData.coverage[0].comuna;
    comunaSelect.value = bookingData.comuna;
  }

  updateSummary();
}

function updateSummary() {
  const summaryService = document.getElementById('summary-service');
  const summaryRecipient = document.getElementById('summary-recipient');
  const summaryComuna = document.getElementById('summary-comuna');
  const summaryEta = document.getElementById('summary-eta');
  const summaryPrice = document.getElementById('summary-price');
  const summaryCopay = document.getElementById('summary-copay');

  const selectedService = activeCountryData.services.find(s => s.id === bookingData.serviceId) || activeCountryData.services[0];
  const selectedComuna = activeCountryData.coverage.find(c => c.comuna === bookingData.comuna) || activeCountryData.coverage[0];

  if (!selectedService) return;

  const basePrice = selectedService.price;
  const estimatedCopay = selectedService.copayEstimated || Math.round(basePrice * 0.35);

  if (summaryService) summaryService.textContent = selectedService.title;
  if (summaryRecipient) summaryRecipient.textContent = bookingData.recipient;
  if (summaryComuna) summaryComuna.textContent = selectedComuna ? `${selectedComuna.comuna} (${selectedComuna.region})` : bookingData.comuna;
  if (summaryEta) summaryEta.textContent = `⚡ ${selectedService.eta}`;
  if (summaryPrice) summaryPrice.textContent = activeCountryData.currency.format(basePrice);
  
  if (summaryCopay) {
    summaryCopay.textContent = `Aprox. ${activeCountryData.currency.format(estimatedCopay)} (${selectedService.reimbursementNote || 'según cobertura médica'})`;
  }
}

export function initBookingModal() {
  const modal = document.getElementById('booking-modal');
  const closeBtn = document.getElementById('booking-modal-close');
  const openButtons = document.querySelectorAll('[data-open-booking]');

  const step1 = document.getElementById('step-1');
  const step2 = document.getElementById('step-2');
  const step3 = document.getElementById('step-3');

  const stepIndicators = document.querySelectorAll('.step-indicator');
  const nextBtn1 = document.getElementById('btn-step1-next');
  const backBtn2 = document.getElementById('btn-step2-back');
  const nextBtn2 = document.getElementById('btn-step2-next');
  const backBtn3 = document.getElementById('btn-step3-back');
  const finishBtn = document.getElementById('btn-step3-finish');

  const serviceSelect = document.getElementById('booking-service-select');
  const comunaSelect = document.getElementById('booking-comuna-select');
  const recipientCards = document.querySelectorAll('.radio-recipient');

  if (!modal) return;

  // Initial population with default country
  updateBookingModalCountry(activeCountryData);

  // Service select change listener
  if (serviceSelect) {
    serviceSelect.addEventListener('change', (e) => {
      bookingData.serviceId = e.target.value;
      updateSummary();
    });
  }

  // Location select change listener
  if (comunaSelect) {
    comunaSelect.addEventListener('change', (e) => {
      bookingData.comuna = e.target.value;
      updateSummary();
    });
  }

  // Recipient selection
  recipientCards.forEach(card => {
    card.addEventListener('click', () => {
      recipientCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      bookingData.recipient = card.dataset.recipient;
    });
  });

  function showStep(step) {
    currentStep = step;
    
    [step1, step2, step3].forEach((el, index) => {
      if (el) {
        el.classList.toggle('active', index + 1 === step);
      }
    });

    stepIndicators.forEach((ind, index) => {
      ind.classList.toggle('active', index + 1 <= step);
    });

    // Toggle navigation button visibility
    if (nextBtn1) nextBtn1.style.display = step === 1 ? 'inline-flex' : 'none';
    if (backBtn2) backBtn2.style.display = step === 2 ? 'inline-flex' : 'none';
    if (nextBtn2) nextBtn2.style.display = step === 2 ? 'inline-flex' : 'none';
    if (backBtn3) backBtn3.style.display = step === 3 ? 'inline-flex' : 'none';
    if (finishBtn) finishBtn.style.display = step === 3 ? 'inline-flex' : 'none';

    if (step === 3) {
      updateSummary();
    }
  }

  function openModal(preselectedServiceId = null) {
    if (preselectedServiceId && serviceSelect) {
      serviceSelect.value = preselectedServiceId;
      bookingData.serviceId = preselectedServiceId;
    }
    showStep(1);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Event Listeners
  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceId = btn.dataset.serviceId || null;
      openModal(serviceId);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (nextBtn1) nextBtn1.addEventListener('click', () => showStep(2));
  if (backBtn2) backBtn2.addEventListener('click', () => showStep(1));
  if (nextBtn2) {
    nextBtn2.addEventListener('click', () => {
      const addressInput = document.getElementById('booking-address');
      const symptomsInput = document.getElementById('booking-symptoms');
      if (addressInput) bookingData.address = addressInput.value;
      if (symptomsInput) bookingData.symptoms = symptomsInput.value;
      showStep(3);
    });
  }
  if (backBtn3) backBtn3.addEventListener('click', () => showStep(2));

  if (finishBtn) {
    finishBtn.addEventListener('click', () => {
      const selectedService = activeCountryData.services.find(s => s.id === bookingData.serviceId) || activeCountryData.services[0];
      const text = encodeURIComponent(
        `Hola Aura Salud ${activeCountryData.name} ${activeCountryData.flag}, deseo solicitar atención médica a domicilio:\n` +
        `• Servicio: ${selectedService.title} (${activeCountryData.currency.format(selectedService.price)})\n` +
        `• Para: ${bookingData.recipient}\n` +
        `• ${activeCountryData.zoneName}: ${bookingData.comuna}\n` +
        `• Dirección: ${bookingData.address || 'Por confirmar'}\n` +
        `• Síntomas/Motivo: ${bookingData.symptoms || 'Evaluación general'}`
      );
      const cleanPhone = activeCountryData.phone.replace(/[^0-9]/g, '');
      window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
      closeModal();
    });
  }

  // Expose for external calls
  window.openAuraBooking = openModal;
}
