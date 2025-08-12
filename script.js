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
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const dropdown = e.target.closest('.dropdown');
    const list = dropdown.querySelector('.dropdown-list');
    const arrow = dropdown.querySelector('.arrow-icon');

    const isOpen = dropdown.classList.contains('link-open');
    dropdown.classList.toggle('link-open');
    list.style.display = isOpen ? 'none' : 'block';
    arrow.src = isOpen
      ? './assets/images/icon-arrow-down.svg'
      : './assets/images/icon-arrow-up.svg';
  });
});
