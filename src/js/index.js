const nav = document.querySelector('.nav');
const navSections = nav.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('.section');

function jumpSection (event) {
  const { target } = event;
  const sectionLink = this.getAttribute('href');
  const sectionToJump = document.querySelector(sectionLink);
  const navigation = target.parentElement;
  const targetIndex = Array.from(navigation.children).indexOf(target);

  navSections.forEach(sectionLink => {
    sectionLink.classList.remove('nav__links--active');
  })

  sections.forEach(section => {
    section.classList.remove('section--selected');
  })

  target.classList.add('nav__links--active');
  sectionToJump.classList.add('section--selected');


  navigation.style.setProperty('--nav-padding-bottom', targetIndex * 15);
}


function main() { 
  navSections.forEach(navSection => {
    navSection.addEventListener('click', jumpSection);
  });
}

// Replace event listener
window.onload = function() {
  main();
}
