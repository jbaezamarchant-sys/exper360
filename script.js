/* Grupo Exper360 — interacciones */

document.addEventListener('DOMContentLoaded', function () {

  /* Año actual en el footer */
    var yearEl = document.getElementById('year');
      if (yearEl) {
          yearEl.textContent = new Date().getFullYear();
            }

              /* Menú móvil */
                var header = document.getElementById('top');
                  var navToggle = document.getElementById('navToggle');
                    if (header && navToggle) {
                        navToggle.addEventListener('click', function () {
                              var isOpen = header.classList.toggle('nav-open');
                                    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
                                        });

                                            /* Cierra el menú al hacer clic en un link */
                                                var navLinks = header.querySelectorAll('.main-nav a, .header-cta');
                                                    navLinks.forEach(function (link) {
                                                          link.addEventListener('click', function () {
                                                                  header.classList.remove('nav-open');
                                                                          navToggle.setAttribute('aria-expanded', 'false');
                                                                                });
                                                                                    });
                                                                                      }

                                                                                        /* Animación de aparición al hacer scroll */
                                                                                          var revealEls = document.querySelectorAll('[data-reveal]');
                                                                                            if ('IntersectionObserver' in window && revealEls.length) {
                                                                                                var revealObserver = new IntersectionObserver(function (entries) {
                                                                                                      entries.forEach(function (entry) {
                                                                                                              if (entry.isIntersecting) {
                                                                                                                        entry.target.classList.add('in-view');
                                                                                                                                  revealObserver.unobserve(entry.target);
                                                                                                                                          }
                                                                                                                                                });
                                                                                                                                                    }, { threshold: 0.15 });
                                                                                                                                                    
                                                                                                                                                        revealEls.forEach(function (el) {
                                                                                                                                                              revealObserver.observe(el);
                                                                                                                                                                  });
                                                                                                                                                                    } else {
                                                                                                                                                                        /* Sin soporte de IntersectionObserver: mostrar todo directamente */
                                                                                                                                                                            revealEls.forEach(function (el) {
                                                                                                                                                                                  el.classList.add('in-view');
                                                                                                                                                                                      });
                                                                                                                                                                                        }
                                                                                                                                                                                        
                                                                                                                                                                                          /* Botón volver arriba */
                                                                                                                                                                                            var toTop = document.getElementById('toTop');
                                                                                                                                                                                              if (toTop) {
                                                                                                                                                                                                  var toggleToTop = function () {
                                                                                                                                                                                                        if (window.scrollY > 480) {
                                                                                                                                                                                                                toTop.classList.add('visible');
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                              toTop.classList.remove('visible');
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                            window.addEventListener('scroll', toggleToTop, { passive: true });
                                                                                                                                                                                                                                                toggleToTop();
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                    toTop.addEventListener('click', function () {
                                                                                                                                                                                                                                                          window.scrollTo({ top: 0, behavior: 'smooth' });
                                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                
