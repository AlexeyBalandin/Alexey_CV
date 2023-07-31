const toggleButton = document.querySelector('#nav-toggle');
const navMenu = document.querySelector('#nav-menu');
const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section[id]');
const scrollTopButton = document.getElementById('scroll-top');
const themeButton = document.getElementById('theme-btn');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

function getCurrentTheme() {
  return document.body.classList.contains(darkTheme) ? 'dark' : 'light';
}

function getCurrentIcon() {
  return themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';
}

function toggleDarkTheme() {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
}

function showScrollTop() {
  if (window.scrollY >= 200) {
    scrollTopButton.classList.add('show-scroll');
  } else {
    scrollTopButton.classList.remove('show-scroll');
  }
}

function scrollActive() {
  const { scrollY } = window;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50;
    const sectionBottom = sectionTop + section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);

    if (scrollY >= sectionTop && scrollY <= sectionBottom) {
      navLink.classList.add('active-link');
    } else {
      navLink.classList.remove('active-link');
    }
  });
}

toggleButton.addEventListener('click', () => navMenu.classList.toggle('show-menu'));
navLinks.forEach((navLink) => navLink.addEventListener('click', () => navMenu.classList.remove('show-menu')));
themeButton.addEventListener('click', toggleDarkTheme);
window.addEventListener('scroll', scrollActive);
window.addEventListener('scroll', showScrollTop);

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}
