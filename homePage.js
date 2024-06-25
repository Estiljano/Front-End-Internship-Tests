// homePage.js

document.addEventListener('DOMContentLoaded', function() {
  const autoBullets = function (Glide, Components, Events) {
    return {
      mount() {
        var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
        var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';

        this._n =
            Components.Html.root.querySelectorAll(NAV_SELECTOR);

        //Automatically create bullets
        const totalSlides = Components.Html.slides.length;
        const bulletWrapper =
            Components.Html.root.querySelector(NAV_SELECTOR);
        if (bulletWrapper) {
          const fragment = document.createDocumentFragment();
          for (var index = 0; index < totalSlides; index++) {
            var button = document.createElement('button');
            button.className = 'glide__bullet';
            button.setAttribute('data-glide-dir', '=' + index);
            fragment.appendChild(button);
          }
          bulletWrapper.innerHTML = '';
          bulletWrapper.appendChild(fragment);
        }

        this._c =
            Components.Html.root.querySelectorAll(
                CONTROLS_SELECTOR
            );

        Components.Controls.addBindings();
      }
    };
  };

  var slide = new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    breakpoints: {
      800: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
  })

  slide.mount({
    AutoBullets: autoBullets
  });
});
