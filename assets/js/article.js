/* A&P — Renderizador de artículo individual del blog */
(function () {
  var id = new URLSearchParams(location.search).get('id');
  var post = (window.AP_POSTS || []).filter(function (p) { return p.id === id; })[0];
  var root = document.getElementById('artRoot');

  if (!post) {
    document.getElementById('bcTitle').textContent = 'Artículo';
    root.innerHTML = '<h1>Artículo no encontrado</h1><p class="lead">Vuelve al blog para ver todas nuestras guías técnicas.</p><a class="btn btn--primary" href="blog.html">Ir al blog</a>';
    return;
  }

  document.title = (post.metaTitle || post.title) + ' | A&P';
  var md = document.querySelector('meta[name="description"]');
  if (md && post.metaDesc) md.content = post.metaDesc;
  document.getElementById('bcTitle').textContent = post.title;

  function block(b) {
    var tag = b[0], val = b[1];
    if (tag === 'p') return '<p>' + val + '</p>';
    if (tag === 'h2') return '<h2>' + val + '</h2>';
    if (tag === 'h3') return '<h3>' + val + '</h3>';
    if (tag === 'callout') return '<div class="art-callout">' + val + '</div>';
    if (tag === 'ul' || tag === 'ol') {
      return '<' + tag + '>' + val.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</' + tag + '>';
    }
    if (tag === 'table') {
      var head = '<tr>' + val[0].map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr>';
      var rows = val.slice(1).map(function (r) {
        return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>';
      }).join('');
      return '<table><thead>' + head + '</thead><tbody>' + rows + '</tbody></table>';
    }
    return '';
  }

  var bodyHtml = post.body.map(block).join('');
  var waMsg = encodeURIComponent('Hola A&P, leí su artículo "' + post.title + '" y quiero más información.');
  var waLink = 'https://wa.me/' + window.AP_WA_NUMBER + '?text=' + waMsg;

  var rel = (post.relatedCats || []).map(function (c) {
    return '<a class="pill pill--cyan" href="' + c[1] + '">' + c[0] + '</a>';
  }).join('');

  root.innerHTML =
    '<span class="pill pill--cyan">' + post.tag + '</span>' +
    '<h1 style="font-size:clamp(1.7rem,3.6vw,2.6rem);margin:14px 0 8px;line-height:1.15">' + post.title + '</h1>' +
    '<p class="muted" style="margin:0">Por el equipo técnico A&P · ' + post.date + '</p>' +
    '<div class="art-cover ph" data-tone="' + post.tone + '"><span class="ph-tag" style="position:static">Imagen del artículo (reemplazar)</span></div>' +
    '<div class="art-body">' + bodyHtml + '</div>' +
    '<div style="border-top:1px solid var(--ap-stone-200);margin-top:34px;padding-top:26px">' +
      '<h3 style="text-transform:none;color:var(--ap-navy);margin-bottom:6px">Productos relacionados</h3>' +
      '<div class="art-rel">' + rel + '</div>' +
      '<div class="hero-cta" style="margin-top:24px">' +
        '<a class="btn btn--wa" href="' + waLink + '" target="_blank" rel="noopener">' + window.AP_ICONS.whatsapp + 'Cotizar por WhatsApp</a>' +
        '<a class="btn btn--ghost" href="catalogo.html">Ver catálogo</a>' +
      '</div>' +
    '</div>';

  // Article JSON-LD
  var schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDesc || post.excerpt,
    "keywords": post.keyword || '',
    "inLanguage": "es",
    "author": { "@type": "Organization", "name": "INTERTUBEP S.A." },
    "publisher": {
      "@type": "Organization",
      "name": "INTERTUBEP S.A.",
      "logo": { "@type": "ImageObject", "url": "https://intertubep.com.ec/assets/img/ap-logo.png" }
    },
    "mainEntityOfPage": "https://intertubep.com.ec/articulo.html?id=" + post.id
  };
  var sc = document.createElement('script');
  sc.type = 'application/ld+json';
  sc.textContent = JSON.stringify(schema);
  document.head.appendChild(sc);

  // "Sigue leyendo" — 3 otros artículos
  var others = (window.AP_POSTS || []).filter(function (p) { return p.id !== id; }).slice(0, 3);
  if (others.length) {
    document.getElementById('moreSection').style.display = '';
    document.getElementById('moreGrid').innerHTML = others.map(function (b) {
      return '<a class="card" href="articulo.html?id=' + b.id + '">' +
        '<div class="card-media ph" data-tone="' + b.tone + '" style="display:grid;place-items:center">' + window.AP_phMark(60) + '</div>' +
        '<div class="card-body"><span class="card-cat">' + b.tag + '</span>' +
        '<h4 style="font-size:1.05rem;text-transform:none;line-height:1.25">' + b.title + '</h4>' +
        '<div class="card-meta">Leer ' + window.AP_ICONS.arrow + '</div></div>' +
      '</a>';
    }).join('');
  }
})();
