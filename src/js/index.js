const nav = document.querySelector('.nav');
const navSections = nav.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('.section');

function jumpSection (event) {
  const { target } = event;
  const sectionLink = this.getAttribute('href');
  const sectionToJump = document.querySelector(sectionLink);

  navSections.forEach(sectionLink => {
    sectionLink.classList.remove('nav__links--active');
  })

  sections.forEach(section => {
    section.classList.remove('section--selected');
  })

  target.classList.add('nav__links--active');
  sectionToJump.classList.add('section--selected');

  // if (href === '#hero') {
  //     list.style.marginBottom = '50px';
  // } else if (href === '#projects') {
  //     list.style.marginBottom = '100px';
  // } else if (href === '#contacts') {
  //     list.style.marginBottom = '150px';
  // }
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


// $('.what-trigger').on('click', function () {
//    for (var i = 0; i < anchorItems.length; i++) {
//       $(anchorItems[i]).removeClass('selected');
//    }

//    for (var i = 0; i < sections.length; i++) {
//       $(sections[i]).removeClass("is-selected");
//    }

//    var href = this.getAttribute('href');

//   $(href).addClass("is-selected");
//   $(anchorItems[1]).addClass('selected');

//   if (href === '#hero') {
//      list.style.marginBottom = '50px';
//   } else if (href === '#projects') {
//      list.style.marginBottom = '100px';
//   } else if (href === '#contacts') {
//      list.style.marginBottom = '150px';
//   }
// });

// $('.where-trigger').on('click', function () {
//    for (var i = 0; i < anchorItems.length; i++) {
//       $(anchorItems[i]).removeClass('selected');
//    }

//    for (var i = 0; i < sections.length; i++) {
//       $(sections[i]).removeClass("is-selected");
//    }

//    var href = this.getAttribute('href');

//   $(href).addClass("is-selected");
//   $(anchorItems[2]).addClass('selected');

//   if (href === '#hero') {
//      list.style.marginBottom = '50px';
//   } else if (href === '#projects') {
//      list.style.marginBottom = '100px';
//   } else if (href === '#contacts') {
//      list.style.marginBottom = '150px';
//   }
// });

// window.onload = function() {
//    main();
// }