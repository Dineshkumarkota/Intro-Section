// Mobile menu toggle
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

openMenu.addEventListener('click', () => {
  nav.style.display = 'flex';
  overlay.style.opacity = '1';
  overlay.style.visibility = 'visible';
});

closeMenu.addEventListener('click', () => {
  nav.style.display = 'none';
  overlay.style.opacity = '0';
  overlay.style.visibility = 'hidden';
});

// Dropdown toggle with arrow icon
document.querySelectorAll('.dropdown-toggle').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const dropdown = e.target.closest('.dropdown');
    const list = dropdown.querySelector('.dropdown-list');
    const arrow = dropdown.querySelector('.arrow-icon');

    const isOpen = list.style.display === 'block';
    list.style.display = isOpen ? 'none' : 'block';
    arrow.src = isOpen 
      ? './assets/images/icon-arrow-down.svg' 
      : './assets/images/icon-arrow-up.svg';
  });
});