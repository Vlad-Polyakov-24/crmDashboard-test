import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const toggleSidebarVisibility = () => {
  const sidebar = document.querySelector('[data-sidebar]');
  if (!sidebar) return;
  const hamburger = document.querySelector('[data-hamburger]');
  let state = false;

  const toggleVisibility = status => {
      sidebar.dataset.sidebar = status;
      hamburger.dataset.hamburger = status;
      if (status === 'open') {
          state = true;
          disableBodyScroll(sidebar);
      } else {
          state = false;
          enableBodyScroll(sidebar);
      }
  };

  hamburger.addEventListener('click', e => {
      e.preventDefault();
      state === false ? toggleVisibility('open') : toggleVisibility('close');
  });
};

if (window.innerWidth <= 767) toggleSidebarVisibility();


