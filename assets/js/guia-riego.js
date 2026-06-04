/* A&P — Renderizador de la Guía Definitiva de Riego (lead magnet) */
(function () {
  var L = {
    riego: 'catalogo.html?cat=tuberia-riego',
    presion: 'catalogo.html?cat=tuberia-presion',
    pn10: 'catalogo.html?cat=accesorios-presion',
    aspersores: 'catalogo.html?cat=aspersores',
    goteros: 'catalogo.html?cat=goteros',
    filtros: 'catalogo.html?cat=filtros',
    valvulasAire: 'catalogo.html?cat=valvulas-aire',
    pega: 'producto.html?id=pega-pvc'
  };
  function a(h, t) { return '<a href="' + h + '">' + t + '</a>'; }

  var SECTIONS = [
    { id: 'dimensionar', n: '1', title: 'Antes de comprar: cómo dimensionar tu sistema',
      blocks: [
        ['p', 'Un sistema de riego bien dimensionado riega parejo y gasta lo justo. Uno mal dimensionado deja zonas secas, revienta tuberías o desperdicia agua y energía. Antes de comprar un solo metro de tubo, define tres datos.'],
        ['h3', 'Caudal, presión y área a regar'],
        ['ul', [
          '<strong>Área a regar:</strong> hectáreas o metros cuadrados de tu lote.',
          '<strong>Caudal disponible:</strong> litros por segundo que entrega tu fuente o bomba.',
          '<strong>Presión de la bomba:</strong> en PSI o bar (la trae la placa del equipo).'
        ]],
        ['h3', 'Cómo calcular el diámetro de la tubería principal'],
        ['p', 'La regla práctica: el diámetro debe mover tu caudal sin que el agua pierda velocidad ni presión en el camino. A más caudal, más diámetro. La ' + a(L.presion, 'tubería de presión A&P') + ' va de 20 a 400 mm para cubrir desde laterales hasta matrices.'],
        ['callout', 'No dimensiones al límite: deja margen. Trabaja al 70% de la presión nominal de la tubería y elige un diámetro que no "ahogue" el caudal.']
      ] },
    { id: 'tipos', n: '2', title: 'Tipos de tubería PVC para riego y cuándo usar cada una',
      blocks: [
        ['h3', 'Presión U/R vs. E/C'],
        ['p', '<strong>E/C (cementado):</strong> se pega con ' + a(L.pega, 'cemento solvente') + ', unión permanente para tramos fijos y enterrados. <strong>U/R (empaque):</strong> sella con anillo de caucho, sin pegamento, permite dilatación y se desarma para reparar.'],
        ['h3', 'Diámetros disponibles y series de presión'],
        ['table', [
          ['Tramo', 'Diámetro típico', 'Función'],
          ['Matriz / principal', '110 – 400 mm', 'Sale de la bomba'],
          ['Secundarias', '63 – 110 mm', 'Reparten por sectores'],
          ['Laterales', '20 – 63 mm', 'Llegan al cultivo']
        ]]
      ] },
    { id: 'metodo', n: '3', title: 'Aspersión o goteo: elige el método correcto',
      blocks: [
        ['h3', 'Aspersores: caudales y alcances'],
        ['p', 'La ' + a(L.aspersores, 'línea de aspersores A&P') + ' va del compacto 2014 (1/2") al cañón 8025 (1-1/4") para grandes superficies, más wobblers de baja presión para cultivos sensibles. Ideal para extensivos y pastos.'],
        ['h3', 'Goteo y fertirriego'],
        ['p', 'Para frutales, hilera e invernadero, el ' + a(L.goteros, 'goteo') + ' es el rey en eficiencia. Suma ' + a(L.filtros, 'filtros') + ' (obligatorios) y un kit Venturi si vas a fertirrigar.'],
        ['callout', 'Muchos productores combinan ambos: aspersión en potreros, goteo en frutales. Con A&P trabajas todo el sistema con una sola marca.']
      ] },
    { id: 'accesorios', n: '4', title: 'Accesorios que no pueden faltar',
      blocks: [
        ['p', 'Una línea de riego es más que tubo. Para que dure y trabaje bien, no olvides:'],
        ['ul', [
          a(L.valvulasAire, 'Válvulas de aire') + ': liberan el aire atrapado y evitan golpes de ariete.',
          a(L.pn10, 'Accesorios PN10') + ': codos, tees, reducciones y adaptadores del diámetro correcto.',
          'Cheques y collarines: protegen la bomba y permiten derivaciones.',
          a(L.filtros, 'Filtros') + ': imprescindibles en goteo, recomendables en aspersión.'
        ]]
      ] },
    { id: 'instalacion', n: '5', title: 'Instalación: pegado, uniones y prueba de presión',
      blocks: [
        ['p', 'Pega en ambas caras (campana y espiga), gira un cuarto de vuelta y respeta los tiempos de fraguado antes de dar presión. Antes de tapar la zanja, haz una prueba de presión gradual y revisa todas las uniones.'],
        ['callout', 'Checklist de oro: corte recto · superficies limpias y secas · pega en ambas caras · giro de 1/4 · fraguado respetado · prueba de presión gradual. Detalle completo en nuestra ' + a('articulo.html?id=guia-pegamento-pvc', 'guía de pegado de PVC') + '.']
      ] },
    { id: 'mantenimiento', n: '6', title: 'Mantenimiento para llegar a 50 años de vida útil',
      blocks: [
        ['p', 'La tubería A&P se fabrica con materia prima 100% virgen, lo que le da hasta 50 años de vida útil. Para aprovecharlos: limpia los filtros con frecuencia, purga el aire de la línea, revisa goteros tapados y protege del sol los tramos expuestos.'],
        ['p', '¿Por qué el material importa tanto? Lo explicamos en ' + a('articulo.html?id=materia-prima-virgen', 'este artículo sobre el PVC virgen') + '.']
      ] }
  ];

  function renderBlock(b) {
    var t = b[0], v = b[1];
    if (t === 'p') return '<p>' + v + '</p>';
    if (t === 'h3') return '<h3>' + v + '</h3>';
    if (t === 'callout') return '<div class="art-callout">' + v + '</div>';
    if (t === 'ul') return '<ul>' + v.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>';
    if (t === 'table') {
      var head = '<tr>' + v[0].map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr>';
      var rows = v.slice(1).map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('');
      return '<table><thead>' + head + '</thead><tbody>' + rows + '</tbody></table>';
    }
    return '';
  }

  document.getElementById('guiaToc').innerHTML = SECTIONS.map(function (s) {
    return '<a href="#' + s.id + '"><span class="toc-num">' + s.n + '</span>' + s.title + '</a>';
  }).join('');

  document.getElementById('guiaBody').innerHTML = SECTIONS.map(function (s) {
    return '<section class="guia-sec" id="' + s.id + '">' +
      '<h2><span class="guia-num">' + s.n + '</span>' + s.title + '</h2>' +
      s.blocks.map(renderBlock).join('') +
    '</section>';
  }).join('');

  var wa = 'https://wa.me/' + window.AP_WA_NUMBER + '?text=' + encodeURIComponent('Hola A&P, leí la Guía de Riego y quiero asesoría para mi sistema.');
  document.getElementById('guiaWa').href = wa;
  document.getElementById('guiaWa2').href = wa;

  var schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Guía Definitiva de Sistemas de Riego con Tubería PVC A&P",
    "description": "Cómo dimensionar, elegir e instalar un sistema de riego con tubería PVC en Ecuador: caudal, presión, diámetros, aspersión vs goteo y accesorios.",
    "keywords": "sistema de riego tubería PVC, riego agrícola Ecuador",
    "inLanguage": "es",
    "author": { "@type": "Organization", "name": "INTERTUBEP S.A." },
    "publisher": { "@type": "Organization", "name": "INTERTUBEP S.A.", "logo": { "@type": "ImageObject", "url": "https://intertubep.com.ec/assets/img/ap-logo.png" } },
    "mainEntityOfPage": "https://intertubep.com.ec/guia-riego.html"
  };
  var sc = document.createElement('script');
  sc.type = 'application/ld+json';
  sc.textContent = JSON.stringify(schema);
  document.head.appendChild(sc);
})();
