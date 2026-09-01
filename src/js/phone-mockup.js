/**
 * Aura Salud - Interactive 3D Phone Mockup Controller
 */

export function initPhoneMockup() {
  const tabs = document.querySelectorAll('.phone-tab-btn');
  const screens = document.querySelectorAll('.phone-screen-img');
  
  if (!tabs.length || !screens.length) return;

  let currentIndex = 0;
  let autoRotateInterval = null;

  function switchScreen(targetIndex) {
    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === targetIndex);
    });

    screens.forEach((screen, i) => {
      screen.classList.toggle('active', i === targetIndex);
    });

    currentIndex = targetIndex;
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      switchScreen(index);
      resetAutoRotate();
    });
  });

  function startAutoRotate() {
    autoRotateInterval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % tabs.length;
      switchScreen(nextIndex);
    }, 4500);
  }

  function resetAutoRotate() {
    if (autoRotateInterval) clearInterval(autoRotateInterval);
    startAutoRotate();
  }

  // Interactive 3D mouse move tilt on desktop
  const container = document.querySelector('.phone-device-container');
  const wrapper = document.querySelector('.hero-mockup-wrapper');

  if (container && wrapper && window.innerWidth > 1024) {
    wrapper.addEventListener('mousemove', (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotY = (x / (rect.width / 2)) * 12;
      const rotX = -(y / (rect.height / 2)) * 10;

      container.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    });

    wrapper.addEventListener('mouseleave', () => {
      container.style.transform = 'rotateY(-6deg) rotateX(4deg)';
    });
  }

  startAutoRotate();
}
