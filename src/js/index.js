const nav = document.querySelector('nav');
const navLinks = nav.querySelectorAll('nav__link');
const section = document.querySelectorAll('section');

function main() {
  // nav.style.opacity = "1";

  navLinks.forEach((section, index) => {
    section.addEventListener('click', section =>)
  })

  for (var i = 0; i < anchorItems.length; i++) {
    anchorItems[i].onclick = function() {


       // 
       for (var i = 0; i < anchorItems.length; i++) {
          $(anchorItems[i]).removeClass('selected');
       }

       for (var i = 0; i < sections.length; i++) {
          $(sections[i]).removeClass("is-selected");
       }

       var href = this.getAttribute('href');

      $(href).addClass("is-selected");
      $(this).addClass('selected');

       if (href === '#hero') {
          list.style.marginBottom = '50px';
       } else if (href === '#projects') {
          list.style.marginBottom = '100px';
       } else if (href === '#contacts') {
          list.style.marginBottom = '150px';
       }
    }
  }

}



window.onload = function() {
  main();
}

///

function main() {
    list.style.opacity = "1";
    for (var i = 0; i < anchorItems.length; i++) {
      anchorItems[i].onclick = function() {

         for (var i = 0; i < anchorItems.length; i++) {
            $(anchorItems[i]).removeClass('selected');
         }

         for (var i = 0; i < sections.length; i++) {
            $(sections[i]).removeClass("is-selected");
         }

         var href = this.getAttribute('href');

        $(href).addClass("is-selected");
        $(this).addClass('selected');

         if (href === '#hero') {
            list.style.marginBottom = '50px';
         } else if (href === '#projects') {
            list.style.marginBottom = '100px';
         } else if (href === '#contacts') {
            list.style.marginBottom = '150px';
         }
      }
    }

}

$('.what-trigger').on('click', function () {
   for (var i = 0; i < anchorItems.length; i++) {
      $(anchorItems[i]).removeClass('selected');
   }

   for (var i = 0; i < sections.length; i++) {
      $(sections[i]).removeClass("is-selected");
   }

   var href = this.getAttribute('href');

  $(href).addClass("is-selected");
  $(anchorItems[1]).addClass('selected');

  if (href === '#hero') {
     list.style.marginBottom = '50px';
  } else if (href === '#projects') {
     list.style.marginBottom = '100px';
  } else if (href === '#contacts') {
     list.style.marginBottom = '150px';
  }
});

$('.where-trigger').on('click', function () {
   for (var i = 0; i < anchorItems.length; i++) {
      $(anchorItems[i]).removeClass('selected');
   }

   for (var i = 0; i < sections.length; i++) {
      $(sections[i]).removeClass("is-selected");
   }

   var href = this.getAttribute('href');

  $(href).addClass("is-selected");
  $(anchorItems[2]).addClass('selected');

  if (href === '#hero') {
     list.style.marginBottom = '50px';
  } else if (href === '#projects') {
     list.style.marginBottom = '100px';
  } else if (href === '#contacts') {
     list.style.marginBottom = '150px';
  }
});

window.onload = function() {
   main();
}