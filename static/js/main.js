(function () {
    "use strict";

    var ready = function (fn) {
        if (document.readyState !== "loading") fn();
        else document.addEventListener("DOMContentLoaded", fn);
    };

    ready(function () {

        // Spinner
        var spinner = document.getElementById("spinner");
        if (spinner) {
            setTimeout(function () { spinner.classList.remove("show"); }, 1);
        }


        // Animaciones de entrada (reemplazo de WOW.js con IntersectionObserver)
        var reveals = document.querySelectorAll(".wow");
        var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if ("IntersectionObserver" in window && !reduceMotion) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    var el = entry.target;
                    var delay = el.getAttribute("data-wow-delay");
                    if (delay) el.style.animationDelay = delay;
                    el.classList.add("is-visible");
                    observer.unobserve(el);
                });
            }, { threshold: 0.1 });
            reveals.forEach(function (el) {
                el.classList.add("reveal-pending");
                observer.observe(el);
            });
        }


        // Sticky Navbar y botón "volver arriba"
        var stickyEls = document.querySelectorAll(".sticky-top");
        var backToTop = document.querySelector(".back-to-top");
        var ticking = false;
        var onScroll = function () {
            var scrolled = window.pageYOffset > 300;
            stickyEls.forEach(function (el) { el.style.top = scrolled ? "0px" : "-100px"; });
            if (backToTop) backToTop.classList.toggle("show", scrolled);
            ticking = false;
        };
        window.addEventListener("scroll", function () {
            if (!ticking) {
                window.requestAnimationFrame(onScroll);
                ticking = true;
            }
        }, { passive: true });

        if (backToTop) {
            backToTop.addEventListener("click", function (e) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
            });
        }


        // Dropdown al pasar el mouse (solo escritorio)
        var desktop = window.matchMedia("(min-width: 992px)");
        var showClass = "show";
        document.querySelectorAll(".dropdown").forEach(function (dropdown) {
            var toggle = dropdown.querySelector(".dropdown-toggle");
            var menu = dropdown.querySelector(".dropdown-menu");
            var setState = function (open) {
                dropdown.classList.toggle(showClass, open);
                if (menu) menu.classList.toggle(showClass, open);
                if (toggle) toggle.setAttribute("aria-expanded", open ? "true" : "false");
            };
            dropdown.addEventListener("mouseenter", function () { if (desktop.matches) setState(true); });
            dropdown.addEventListener("mouseleave", function () { if (desktop.matches) setState(false); });
        });


        // Cerrar submenús cuando se abre otro
        window.closeOtherMenus = function (currentMenu) {
            var menus = ['economiaAlgebraLineal', 'economiaMatematicaBasica', 'economiaMatematicaI', 'economiaMatematicaII', 'finanzasMatematicaBasica', 'finanzasCalculoDiferencial', 'finanzasCalculoIntegral', 'estadisticaCalculoI', 'estadisticaCalculoII', 'estadisticaCalculoIII', 'estadisticaAlgebraLineal', 'estadisticaEcuacionesDiferenciales'];
            menus.forEach(function (menu) {
                var element = document.getElementById(menu);
                if (element && menu !== currentMenu && element.classList.contains('show') && window.bootstrap) {
                    new bootstrap.Collapse(element).hide();
                }
            });
        };


        // Reloj en tiempo real (solo si la página lo incluye)
        var clock = document.getElementById("clock");
        if (clock) {
            var pad = function (n) { return String(n).padStart(2, "0"); };
            var updateClock = function () {
                var now = new Date();
                clock.textContent = pad(now.getHours()) + " : " + pad(now.getMinutes()) + " : " + pad(now.getSeconds());
            };
            updateClock();
            setInterval(updateClock, 1000);
        }

    });
})();
