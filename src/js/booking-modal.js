/**
 * Aura Salud - Interactive 3-Step Booking Simulator Controller
 */

import { CLINICAL_SERVICES, COVERAGE_DATA } from './data.js';

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

  const summaryService = document.getElementById('summary-service');
  const summaryRecipient = document.getElementById('summary-recipient');
  const summaryComuna = document.getElementById('summary-comuna');
  const summaryEta = document.getElementById('summary-eta');
  const summaryPrice = document.getElementById('summary-price');
  const summaryCopay = document.getElementById('summary-copay');

  if (!modal) return;

  let currentStep = 1;
  let bookingData = {
    serviceId: 'medico',
    recipient: 'Para mí (Titular)',
    comuna: 'Las Condes',
    address: '',
    symptoms: ''
  };

  // Populate service select options
  if (serviceSelect) {
    serviceSelect.innerHTML = CLINICAL_SERVICES.map(s => 
      `<option value="${s.id}">$${s.price.toLocaleString('es-CL')} — ${s.title} (${s.eta})</option>`
    ).join('');

    serviceSelect.addEventListener('change', (e) => {
      bookingData.serviceId = e.target.value;
      updateSummary();
    });
  }

  // Populate comuna select options
  if (comunaSelect) {
    comunaSelect.innerHTML = COVERAGE_DATA.map(c => 
      `<option value="${c.comuna}">${c.comuna} (${c.region}) — ETA ${c.eta}</option>`
    ).join('');

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

  function updateSummary() {
    const selectedService = CLINICAL_SERVICES.find(s => s.id === bookingData.serviceId) || CLINICAL_SERVICES[0];
    const selectedComuna = COVERAGE_DATA.find(c => c.comuna === bookingData.comuna) || COVERAGE_DATA[0];

    const basePrice = selectedService.price;
    const estimatedCopay = Math.round(basePrice * 0.35); // Estimado copay Isapre 65%

    if (summaryService) summaryService.textContent = selectedService.title;
    if (summaryRecipient) summaryRecipient.textContent = bookingData.recipient;
    if (summaryComuna) summaryComuna.textContent = `${bookingData.comuna} (Región Metropolitana)`;
    if (summaryEta) summaryEta.textContent = selectedService.eta;
    if (summaryPrice) summaryPrice.textContent = `$${basePrice.toLocaleString('es-CL')} CLP`;
    if (summaryCopay) summaryCopay.textContent = `Aprox. $${estimatedCopay.toLocaleString('es-CL')} CLP (según plan Isapre/Fonasa)`;
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
      const selectedService = CLINICAL_SERVICES.find(s => s.id === bookingData.serviceId) || CLINICAL_SERVICES[0];
      const text = encodeURIComponent(
        `Hola Aura Salud, deseo solicitar atención médica a domicilio:\n` +
        `• Servicio: ${selectedService.title}\n` +
        `• Para: ${bookingData.recipient}\n` +
        `• Comuna: ${bookingData.comuna}\n` +
        `• Dirección: ${bookingData.address || 'Por confirmar'}\n` +
        `• Síntomas: ${bookingData.symptoms || 'Evaluación general'}`
      );
      window.open(`https://wa.me/56912345678?text=${text}`, '_blank');
      closeModal();
    });
  }

  // Expose for external calls
  window.openAuraBooking = openModal;
}
