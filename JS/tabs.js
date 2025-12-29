document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = Array.from(document.querySelectorAll('.tab-button'));
  const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));

  if (!tabButtons.length || !tabPanels.length) return;

  const setActiveTab = (targetId) => {
    tabButtons.forEach((button) => {
      const isActive = button.dataset.tabTarget === targetId;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', isActive ? 'true' : 'false');
      button.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    tabPanels.forEach((panel) => {
      const isActive = panel.id === targetId;
      panel.classList.toggle('is-active', isActive);
      panel.hidden = !isActive;
    });
  };

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => setActiveTab(button.dataset.tabTarget));
    button.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setActiveTab(button.dataset.tabTarget);
      }
    });
  });

  const initialTarget = tabButtons.find((button) => button.classList.contains('is-active'))?.dataset.tabTarget
    || tabButtons[0].dataset.tabTarget;

  setActiveTab(initialTarget);
});
