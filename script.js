const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

openMenu.addEventListener('click', () => {
  nav.classList.add('active');
  overlay.classList.add('active');

  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  nav.classList.remove('active');
  overlay.classList.remove('active');

  openMenu.style.display = 'block';
  closeMenu.style.display = 'none';
});

// Dropdown Toggle (Features / Company)
const navLinks = document.querySelectorAll('.nav-link.dropdown');

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', (e) => {
    // Prevent toggle when clicking on links inside dropdown
    if (e.target.tagName.toLowerCase() === 'a' || e.target.closest('a')) {
      return;
    }

    const list = navLink.querySelector('.dropdown-list');
    const arrow = navLink.querySelector('.arrow-icon');

    const isOpen = navLink.classList.contains('link-open');
    navLink.classList.toggle('link-open');
    list.style.display = isOpen ? 'none' : 'block';
    arrow.src = isOpen
      ? './assets/images/icon-arrow-down.svg'
      : './assets/images/icon-arrow-up.svg';
  });
});
