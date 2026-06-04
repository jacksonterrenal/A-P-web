/* ============================================================
   A&P · INTERTUBEP — Lógica compartida del sitio
   Header, navegación, footer, buscador, WhatsApp, reveal.
   ============================================================ */
(function () {
  var WA_NUMBER = "593967318889"; // 0967318889 con código país
  var WA_MSG = encodeURIComponent("Hola A&P, me gustaría recibir información y cotización de sus productos.");
  var WA_LINK = "https://wa.me/" + WA_NUMBER + "?text=" + WA_MSG;
  var IG = "https://instagram.com/AyP_Intertubep";
  var FB = "https://facebook.com/";
  var TT = "https://tiktok.com/@AyP_Intertubep";

  window.AP_WA_LINK = WA_LINK;
  window.AP_WA_NUMBER = WA_NUMBER;

  /* ============================================================
     SEO · Analítica + datos estructurados (carga temprana)
     ⚠️ REEMPLAZA los marcadores:
       · GA4_ID  →  tu ID de medición Google Analytics 4 (G-XXXXXXXXXX)
     La verificación de Search Console se hace por el método
     "Google Analytics" (recomendado al tener GA4), o pegando la
     <meta> de verificación en el <head> de index.html.
     ============================================================ */
  var GA4_ID = "G-XXXXXXXXXX"; // ← REEMPLAZAR

  (function injectSEO() {
    // --- Google Analytics 4 ---
    if (GA4_ID && GA4_ID.indexOf("XXXX") === -1) {
      var g = document.createElement("script");
      g.async = true;
      g.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4_ID;
      document.head.appendChild(g);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", GA4_ID);
    }

    // --- Organization + WebSite (E-E-A-T, sitewide) ---
    var org = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "INTERTUBEP S.A.",
      "alternateName": "A&P",
      "url": "https://intertubep.com.ec",
      "logo": "https://intertubep.com.ec/assets/img/ap-logo.png",
      "slogan": "¡Nuestra calidad es tu éxito!",
      "description": "Fabricante ecuatoriano de tubería y conexiones PVC marca A&P para riego agrícola, desagüe, conduit y agua potable. Materia prima 100% virgen, vida útil de 50 años.",
      "foundingDate": "2014",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lorenzo de Garaicoa 3306 y Calle Argentina",
        "addressLocality": "Guayaquil",
        "addressRegion": "Guayas",
        "addressCountry": "EC"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+593-96-731-8889",
        "contactType": "ventas",
        "areaServed": "EC",
        "availableLanguage": "es"
      },
      "sameAs": [IG, FB, TT]
    };
    var site = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "A&P · INTERTUBEP",
      "url": "https://intertubep.com.ec"
    };
    [org, site].forEach(function (obj) {
      var s = document.createElement("script");
      s.type = "application/ld+json";
      s.textContent = JSON.stringify(obj);
      document.head.appendChild(s);
    });
  })();


  // path prefix so it works from /producto.html and root pages alike (all flat)
  var ICONS = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5L2 22l5.2-1.4A10 10 0 1 0 12 2zm5 14.4c-.2.6-1.2 1.1-1.7 1.2-.5.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.5-2.7-1.1-4.4-3.8-4.6-4-.1-.2-1.1-1.4-1.1-2.7s.7-1.9 1-2.2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.7 1.8c.1.3 0 .5-.1.7l-.4.5c-.1.1-.3.2-.1.5l.7 1.1c.7 1 1.4 1.4 1.6 1.5.2.1.4.1.5-.1l.7-.9c.2-.2.4-.2.6-.1l1.5.7c.3.1.5.2.5.4.2.2.2.7 0 1.3z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm6-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l.5-4H13V7.5C13 6.5 13.3 6 14.7 6H17V2.2C16.5 2.1 15.4 2 14.2 2 11.5 2 10 3.7 10 6.7V10H7v4h3v8h3z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 8.5a6 6 0 0 1-3.5-1.1V15a5 5 0 1 1-5-5v3a2 2 0 1 0 2 2V2h3a4 4 0 0 0 3.5 3.5v3z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };
  window.AP_ICONS = ICONS;

  var NAV = [
    { label: "Inicio", href: "index.html", key: "inicio" },
    { label: "Nosotros", href: "quienes-somos.html", key: "nosotros" },
    { label: "Catálogo", href: "catalogo.html", key: "catalogo" },
    { label: "Aplicaciones", href: "aplicaciones.html", key: "aplicaciones" },
    { label: "Distribuidores", href: "distribuidores.html", key: "distribuidores" },
    { label: "Descargas", href: "descargas.html", key: "descargas" },
    { label: "Blog", href: "blog.html", key: "blog" }
  ];

  function buildHeader(page) {
    var navLinks = NAV.map(function (n) {
      return '<a href="' + n.href + '"' + (n.key === page ? ' class="active"' : '') + '>' + n.label + '</a>';
    }).join("");

    var header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML =
      '<div class="wrap header-inner">' +
        '<a class="brand-logo" href="index.html" aria-label="A&P Inicio"><img src="assets/img/ap-logo.png" alt="A&P · INTERTUBEP"></a>' +
        '<nav class="main-nav">' + navLinks +
          '<a href="contacto.html"' + (page === "contacto" ? ' class="active"' : '') + '>Contacto</a>' +
        '</nav>' +
        '<div class="header-actions">' +
          '<button class="icon-btn" id="searchOpen" aria-label="Buscar producto">' + ICONS.search + '</button>' +
          '<a class="btn btn--wa btn--sm desktop-only" href="' + WA_LINK + '" target="_blank" rel="noopener">' + ICONS.whatsapp + 'WhatsApp</a>' +
          '<button class="icon-btn nav-toggle" id="navToggle" aria-label="Menú">' + ICONS.menu + '</button>' +
        '</div>' +
      '</div>';

    var mnav = document.createElement("nav");
    mnav.className = "mobile-nav";
    mnav.id = "mobileNav";
    mnav.innerHTML = NAV.concat([{ label: "Contacto", href: "contacto.html" }]).map(function (n) {
      return '<a href="' + n.href + '">' + n.label + '</a>';
    }).join("") +
      '<a class="btn btn--wa" style="margin-top:20px;justify-content:center" href="' + WA_LINK + '" target="_blank" rel="noopener">' + ICONS.whatsapp + 'Escríbenos por WhatsApp</a>';

    document.body.insertBefore(mnav, document.body.firstChild);
    document.body.insertBefore(header, document.body.firstChild);

    var toggle = document.getElementById("navToggle");
    toggle.addEventListener("click", function () {
      var open = mnav.classList.toggle("open");
      toggle.innerHTML = open ? ICONS.x : ICONS.menu;
    });
    mnav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { mnav.classList.remove("open"); toggle.innerHTML = ICONS.menu; });
    });
  }

  function buildFooter() {
    var f = document.createElement("footer");
    f.className = "site-footer";
    f.innerHTML =
      '<div class="wrap">' +
        '<div class="footer-top">' +
          '<div>' +
            '<div class="footer-logo-plate"><img src="assets/img/ap-logo.png" alt="A&P"></div>' +
            '<p class="tagline-script" style="color:var(--ap-cyan-soft);margin:18px 0 10px;font-size:1.9rem">¡Nuestra calidad es tu éxito!</p>' +
            '<p style="color:rgba(255,255,255,.7);font-size:.92rem;max-width:34ch">Fabricantes ecuatorianos de tubería y conexiones PVC bajo la marca A&P. Industria nacional desde 2014.</p>' +
          '</div>' +
          '<div>' +
            '<h5>Empresa</h5>' +
            '<div class="footer-links">' +
              '<a href="quienes-somos.html">Quiénes somos</a>' +
              '<a href="aplicaciones.html">Aplicaciones</a>' +
              '<a href="distribuidores.html">Distribuidores</a>' +
              '<a href="blog.html">Blog</a>' +
            '</div>' +
          '</div>' +
          '<div>' +
            '<h5>Productos</h5>' +
            '<div class="footer-links">' +
              '<a href="catalogo.html?cat=tuberia-riego">Tubería riego</a>' +
              '<a href="catalogo.html?cat=tuberia-desague">Tubería desagüe</a>' +
              '<a href="catalogo.html?cat=tuberia-conduit">Tubería conduit</a>' +
              '<a href="catalogo.html?cat=tuberia-roscable">Roscable agua potable</a>' +
              '<a href="pegamento-pvc.html">Pegamento PVC</a>' +
              '<a href="catalogo.html">Ver catálogo completo</a>' +
            '</div>' +
          '</div>' +
          '<div>' +
            '<h5>Contacto</h5>' +
            '<div class="footer-contact-row">' + ICONS.pin + '<span><a href="https://maps.app.goo.gl/N2F8XVgW83fLDa5C6" target="_blank" rel="noopener" style="color:#fff">Lorenzo de Garaicoa 3306 y Calle Argentina<br>Guayaquil, Ecuador</a></span></div>' +
            '<div class="footer-contact-row">' + ICONS.whatsapp + '<a href="' + WA_LINK + '" target="_blank" rel="noopener" style="color:#fff">0967318889</a></div>' +
            '<div class="footer-contact-row">' + ICONS.mail + '<a href="mailto:ventas@intertubep.com.ec" style="color:#fff">ventas@intertubep.com.ec</a></div>' +
            '<div class="social-strip" style="margin-top:18px">' +
              '<span class="social-ico-group">' +
                '<a class="social-ico" href="' + TT + '" target="_blank" rel="noopener" aria-label="TikTok">' + ICONS.tiktok + '</a>' +
                '<a class="social-ico" href="' + IG + '" target="_blank" rel="noopener" aria-label="Instagram">' + ICONS.instagram + '</a>' +
                '<a class="social-ico" href="' + FB + '" target="_blank" rel="noopener" aria-label="Facebook">' + ICONS.facebook + '</a>' +
                '<a class="social-ico" href="' + WA_LINK + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + ICONS.whatsapp + '</a>' +
              '</span>' +
            '</div>' +
            '<p style="color:rgba(255,255,255,.6);font-size:.8rem;margin-top:10px;letter-spacing:.04em">@AyP_Intertubep</p>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<span>© ' + new Date().getFullYear() + ' INTERTUBEP S.A. · Industria Ecuatoriana · www.intertubep.com.ec</span>' +
          '<span>Tubería y conexiones PVC A&P® · Fabricado y distribuido por INTERTUBEP S.A.</span>' +
        '</div>' +
      '</div>';
    document.body.appendChild(f);

    var wa = document.createElement("a");
    wa.className = "wa-float";
    wa.href = WA_LINK;
    wa.target = "_blank";
    wa.rel = "noopener";
    wa.setAttribute("aria-label", "Escríbenos por WhatsApp");
    wa.innerHTML = ICONS.whatsapp;
    document.body.appendChild(wa);
  }

  function buildSearch() {
    var ov = document.createElement("div");
    ov.className = "search-overlay";
    ov.id = "searchOverlay";
    ov.innerHTML =
      '<div class="search-box wrap" style="padding:0">' +
        '<div class="search-box-top">' + ICONS.search +
          '<input type="text" id="searchInput" placeholder="Buscar producto, ej. codo, válvula, aspersor, 110mm…" autocomplete="off">' +
          '<button class="icon-btn" id="searchClose" aria-label="Cerrar">' + ICONS.x + '</button>' +
        '</div>' +
        '<div class="search-results" id="searchResults"><p class="search-hint">Escribe el nombre o la medida de un producto.</p></div>' +
      '</div>';
    document.body.appendChild(ov);

    var input = ov.querySelector("#searchInput");
    var results = ov.querySelector("#searchResults");

    function open() { ov.classList.add("open"); setTimeout(function () { input.focus(); }, 50); }
    function close() { ov.classList.remove("open"); }

    document.getElementById("searchOpen").addEventListener("click", open);
    ov.querySelector("#searchClose").addEventListener("click", close);
    ov.addEventListener("click", function (e) { if (e.target === ov) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase();
      if (!q || !window.AP_PRODUCTS) { results.innerHTML = '<p class="search-hint">Escribe el nombre o la medida de un producto.</p>'; return; }
      var hits = window.AP_PRODUCTS.filter(function (p) {
        var hay = (p.name + " " + p.category + " " + p.line + " " + (p.sizes || []).join(" ") + " " + (p.keywords || "")).toLowerCase();
        return hay.indexOf(q) > -1;
      }).slice(0, 8);
      if (!hits.length) { results.innerHTML = '<p class="search-hint">Sin resultados para “' + input.value + '”. Escríbenos por WhatsApp y te ayudamos.</p>'; return; }
      results.innerHTML = hits.map(function (p) {
        return '<a href="producto.html?id=' + p.id + '">' +
          '<span class="ph" data-tone="' + (p.tone || 'light') + '" style="width:46px;height:46px;border-radius:8px;flex:none">' + window.AP_phMark(34) + '</span>' +
          '<span><strong style="color:var(--ap-navy)">' + p.name + '</strong><br><span style="font-size:.82rem;color:var(--ap-stone-400)">' + p.categoryLabel + '</span></span>' +
        '</a>';
      }).join("");
    });
  }

  function reveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.getAttribute("data-page") || "";
    buildHeader(page);
    buildFooter();
    buildSearch();
    reveal();
  });
})();
