/* ============================================================
   A&P · INTERTUBEP — Calculadoras de riego (estimadoras)
   Mobile-first. Unidades de Ecuador: hectáreas, L/s, PSI, mm/día.
   Todos los valores de cultivos son REFERENCIALES.
   ============================================================ */
(function () {
  var WA = window.AP_WA_NUMBER;
  function waLink(msg) { return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg); }
  function fmt(n, dec) {
    if (!isFinite(n)) return '—';
    dec = dec == null ? 1 : dec;
    return Number(n.toFixed(dec)).toLocaleString('es-EC', { maximumFractionDigits: dec });
  }
  function num(id) { var v = parseFloat(document.getElementById(id).value.replace(',', '.')); return isFinite(v) ? v : 0; }
  var ICON = window.AP_ICONS || {};

  /* ---------- Datos referenciales ---------- */
  // Requerimiento hídrico pico aproximado por cultivo (mm/día). Referencial.
  var CULTIVOS = [
    ['Banano', 5.5], ['Arroz (inundación)', 9], ['Caña de azúcar', 6],
    ['Cacao', 4], ['Café', 4], ['Palma africana', 5], ['Maíz', 6],
    ['Pastos / ganadería', 5.5], ['Hortalizas', 5], ['Flores (invernadero)', 4.5],
    ['Cítricos / frutales', 4.5], ['Otro (ingresar mm/día)', 0]
  ];
  // Marcos de riego sugeridos por tipo de aspersor (distancia × línea, en m)
  var MARCOS = [
    ['Microaspersión', 6, 6],
    ['Aspersión baja presión', 12, 12],
    ['Aspersión media', 12, 15],
    ['Aspersión alta / cañón', 18, 18],
    ['Cañón gran alcance', 24, 24]
  ];
  // Diámetros comerciales A&P (mm)
  var DIAMS = [20, 25, 32, 40, 50, 63, 75, 90, 110, 160, 200, 250, 315, 400];

  /* ---------- CTA reutilizable ---------- */
  function ctaBlock(waMsg, prodHref, prodLabel) {
    return '<div class="calc-cta">' +
      '<p class="calc-cta-q">¿Ya tienes tus cálculos?</p>' +
      '<div class="calc-cta-btns">' +
        '<a class="btn btn--wa" target="_blank" rel="noopener" href="' + waLink(waMsg) + '">' + (ICON.whatsapp || '') + 'Cotiza por WhatsApp en 1 minuto</a>' +
        (prodHref ? '<a class="btn btn--ghost" href="' + prodHref + '">' + prodLabel + '</a>' : '') +
      '</div>' +
    '</div>';
  }
  function disclaimer(txt) { return '<p class="calc-note">' + txt + '</p>'; }

  /* ============================================================
     HERRAMIENTA 1 · Conversor de caudal y volumen
     ============================================================ */
  function toolConversor(host) {
    host.innerHTML =
      '<p class="calc-intro">Convierte un caudal entre litros, galones y metros cúbicos por segundo, minuto u hora.</p>' +
      '<div class="calc-field"><label for="cv-val">Valor a convertir</label>' +
        '<input id="cv-val" type="number" inputmode="decimal" value="10" min="0" step="any"></div>' +
      '<div class="calc-row">' +
        '<div class="calc-field"><label for="cv-vol">Volumen</label>' +
          '<select id="cv-vol"><option value="1">Litros (L)</option><option value="3.78541">Galones (gal)</option><option value="1000">Metros cúbicos (m³)</option></select></div>' +
        '<div class="calc-field"><label for="cv-time">Por</label>' +
          '<select id="cv-time"><option value="1">Segundo</option><option value="60">Minuto</option><option value="3600">Hora</option></select></div>' +
      '</div>' +
      '<div id="cv-out"></div>';

    function run() {
      var val = num('cv-val');
      var volL = parseFloat(document.getElementById('cv-vol').value); // litros por unidad de volumen
      var perSec = parseFloat(document.getElementById('cv-time').value); // segundos por unidad de tiempo
      var Lps = (val * volL) / perSec; // caudal base en litros/segundo
      var rows = [
        ['Litros / segundo (L/s)', Lps, 2],
        ['Litros / minuto (L/min)', Lps * 60, 1],
        ['Litros / hora (L/h)', Lps * 3600, 0],
        ['Galones / minuto (GPM)', (Lps * 60) / 3.78541, 1],
        ['Galones / hora (gal/h)', (Lps * 3600) / 3.78541, 0],
        ['Metros cúbicos / hora (m³/h)', (Lps * 3600) / 1000, 2],
        ['Metros cúbicos / día (m³/día)', (Lps * 86400) / 1000, 1]
      ];
      document.getElementById('cv-out').innerHTML =
        '<div class="calc-result">' +
          '<table class="calc-table"><tbody>' +
          rows.map(function (r) { return '<tr><td>' + r[0] + '</td><td class="calc-val">' + fmt(r[1], r[2]) + '</td></tr>'; }).join('') +
          '</tbody></table>' +
        '</div>';
    }
    host.querySelectorAll('input,select').forEach(function (el) { el.addEventListener('input', run); });
    run();
  }

  /* ============================================================
     HERRAMIENTA 2 · Caudal de agua por hectárea
     ============================================================ */
  function toolCaudal(host) {
    var opts = CULTIVOS.map(function (c, i) { return '<option value="' + c[1] + '" data-i="' + i + '">' + c[0] + '</option>'; }).join('');
    host.innerHTML =
      '<p class="calc-intro">Estima el caudal de agua que necesita tu cultivo según el área y las horas de riego al día.</p>' +
      '<div class="calc-field"><label for="cd-cult">Tipo de cultivo</label><select id="cd-cult">' + opts + '</select></div>' +
      '<div class="calc-field" id="cd-mmwrap"><label for="cd-mm">Requerimiento de agua (mm/día)</label>' +
        '<input id="cd-mm" type="number" inputmode="decimal" value="5.5" min="0" step="any"></div>' +
      '<div class="calc-row">' +
        '<div class="calc-field"><label for="cd-ha">Área (hectáreas)</label>' +
          '<input id="cd-ha" type="number" inputmode="decimal" value="1" min="0" step="any"></div>' +
        '<div class="calc-field"><label for="cd-hrs">Horas de riego al día</label>' +
          '<input id="cd-hrs" type="number" inputmode="decimal" value="8" min="0.5" step="any"></div>' +
      '</div>' +
      '<div id="cd-out"></div>';

    var sel = document.getElementById('cd-cult');
    var mm = document.getElementById('cd-mm');
    sel.addEventListener('change', function () {
      var v = parseFloat(sel.value);
      if (v > 0) mm.value = v;
      else { mm.value = ''; mm.focus(); }
      run();
    });

    function run() {
      var mmDia = num('cd-mm'), ha = num('cd-ha'), hrs = num('cd-hrs') || 1;
      var m3dia = mmDia * 10 * ha;          // 1 mm sobre 1 ha = 10 m³
      var litrosDia = m3dia * 1000;
      var Lps = litrosDia / (hrs * 3600);   // caudal durante las horas de riego
      var gpm = (Lps * 60) / 3.78541;
      var cultName = sel.options[sel.selectedIndex].text;
      var waMsg = 'Hola A&P, calculé que para ' + fmt(ha, 1) + ' ha de ' + cultName +
        ' necesito un caudal aproximado de ' + fmt(Lps, 2) + ' L/s (' + fmt(m3dia, 1) + ' m³/día). Quiero cotizar tubería y accesorios de riego.';
      document.getElementById('cd-out').innerHTML =
        '<div class="calc-result">' +
          '<div class="calc-big"><span class="calc-big-num">' + fmt(Lps, 2) + '</span><span class="calc-big-unit">L/s</span><span class="calc-big-label">caudal requerido</span></div>' +
          '<table class="calc-table"><tbody>' +
            '<tr><td>Volumen diario</td><td class="calc-val">' + fmt(m3dia, 1) + ' m³/día</td></tr>' +
            '<tr><td>Equivalente</td><td class="calc-val">' + fmt(gpm, 1) + ' GPM</td></tr>' +
            '<tr><td>Litros por día</td><td class="calc-val">' + fmt(litrosDia, 0) + ' L</td></tr>' +
          '</tbody></table>' +
          disclaimer('Cálculo estimador con valores referenciales de requerimiento hídrico. Ajusta según tu zona, clima y etapa del cultivo.') +
          ctaBlock(waMsg, 'catalogo.html?cat=tuberia-riego', 'Ver tubería de riego') +
        '</div>';
    }
    host.querySelectorAll('input').forEach(function (el) { el.addEventListener('input', run); });
    run();
  }

  /* ============================================================
     HERRAMIENTA 3 · Aspersores por hectárea
     ============================================================ */
  function toolAspersores(host) {
    var presets = MARCOS.map(function (m, i) { return '<button type="button" class="calc-chip" data-a="' + m[1] + '" data-b="' + m[2] + '">' + m[0] + ' · ' + m[1] + '×' + m[2] + ' m</button>'; }).join('');
    host.innerHTML =
      '<p class="calc-intro">Estima cuántos aspersores necesitas según el marco de riego (separación entre aspersores y entre líneas).</p>' +
      '<div class="calc-field"><label>Marco sugerido (toca uno)</label><div class="calc-chips">' + presets + '</div></div>' +
      '<div class="calc-row">' +
        '<div class="calc-field"><label for="as-a">Entre aspersores (m)</label>' +
          '<input id="as-a" type="number" inputmode="decimal" value="12" min="1" step="any"></div>' +
        '<div class="calc-field"><label for="as-b">Entre líneas (m)</label>' +
          '<input id="as-b" type="number" inputmode="decimal" value="12" min="1" step="any"></div>' +
      '</div>' +
      '<div class="calc-field"><label for="as-ha">Área a regar (hectáreas)</label>' +
        '<input id="as-ha" type="number" inputmode="decimal" value="1" min="0" step="any"></div>' +
      '<div id="as-out"></div>';

    host.querySelectorAll('.calc-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        document.getElementById('as-a').value = chip.getAttribute('data-a');
        document.getElementById('as-b').value = chip.getAttribute('data-b');
        host.querySelectorAll('.calc-chip').forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        run();
      });
    });

    function run() {
      var a = num('as-a') || 1, b = num('as-b') || 1, ha = num('as-ha');
      var areaPorAsp = a * b;                 // m² que cubre cada aspersor
      var porHa = 10000 / areaPorAsp;         // aspersores por hectárea
      var total = Math.ceil(porHa * ha);
      var waMsg = 'Hola A&P, con un marco de ' + fmt(a, 1) + '×' + fmt(b, 1) + ' m necesito aproximadamente ' + total +
        ' aspersores para ' + fmt(ha, 1) + ' ha. Quiero cotizar aspersores A&P y la tubería.';
      document.getElementById('as-out').innerHTML =
        '<div class="calc-result">' +
          '<div class="calc-big"><span class="calc-big-num">' + total + '</span><span class="calc-big-unit">aspersores</span><span class="calc-big-label">para ' + fmt(ha, 1) + ' ha</span></div>' +
          '<table class="calc-table"><tbody>' +
            '<tr><td>Por hectárea</td><td class="calc-val">' + fmt(porHa, 1) + ' aspersores/ha</td></tr>' +
            '<tr><td>Cobertura por aspersor</td><td class="calc-val">' + fmt(areaPorAsp, 0) + ' m²</td></tr>' +
          '</tbody></table>' +
          disclaimer('Estimación por marco de riego. El alcance real depende del modelo de aspersor, la presión y el viento.') +
          ctaBlock(waMsg, 'catalogo.html?cat=aspersores', 'Ver aspersores A&P') +
        '</div>';
    }
    host.querySelectorAll('input').forEach(function (el) { el.addEventListener('input', run); });
    run();
  }

  /* ============================================================
     HERRAMIENTA 4 · Diámetro de tubería recomendado
     ============================================================ */
  function toolDiametro(host) {
    host.innerHTML =
      '<p class="calc-intro">Estima el diámetro de tubería de presión recomendado para tu caudal, manteniendo una velocidad de agua adecuada.</p>' +
      '<div class="calc-row">' +
        '<div class="calc-field"><label for="di-q">Caudal (L/s)</label>' +
          '<input id="di-q" type="number" inputmode="decimal" value="10" min="0" step="any"></div>' +
        '<div class="calc-field"><label for="di-v">Velocidad objetivo (m/s)</label>' +
          '<select id="di-v"><option value="1.2">1,2 — conservadora</option><option value="1.5" selected>1,5 — recomendada</option><option value="2.0">2,0 — máxima</option></select></div>' +
      '</div>' +
      '<div id="di-out"></div>';

    function run() {
      var Q = num('di-q') / 1000;            // m³/s
      var V = parseFloat(document.getElementById('di-v').value);
      var area = Q / V;                       // m²
      var dM = Math.sqrt((4 * area) / Math.PI); // diámetro teórico en m
      var dMM = dM * 1000;
      var rec = DIAMS.filter(function (d) { return d >= dMM; })[0] || DIAMS[DIAMS.length - 1];
      // velocidad real con el diámetro comercial
      var aReal = Math.PI * Math.pow(rec / 1000, 2) / 4;
      var vReal = aReal > 0 ? Q / aReal : 0;
      var waMsg = 'Hola A&P, para un caudal de ' + fmt(num('di-q'), 2) + ' L/s me recomienda tubería de presión de ' + rec + ' mm. Quiero cotizar.';
      document.getElementById('di-out').innerHTML =
        '<div class="calc-result">' +
          '<div class="calc-big"><span class="calc-big-num">' + rec + '</span><span class="calc-big-unit">mm</span><span class="calc-big-label">diámetro recomendado</span></div>' +
          '<table class="calc-table"><tbody>' +
            '<tr><td>Diámetro teórico mínimo</td><td class="calc-val">' + fmt(dMM, 1) + ' mm</td></tr>' +
            '<tr><td>Velocidad real a ' + rec + ' mm</td><td class="calc-val">' + fmt(vReal, 2) + ' m/s</td></tr>' +
          '</tbody></table>' +
          disclaimer('Estimación por criterio de velocidad. El diámetro final depende de la longitud, la pendiente y la pérdida de carga de tu instalación.') +
          ctaBlock(waMsg, 'catalogo.html?cat=tuberia-presion', 'Ver tubería de presión') +
        '</div>';
    }
    host.querySelectorAll('input,select').forEach(function (el) { el.addEventListener('input', run); });
    run();
  }

  /* ============================================================
     HERRAMIENTA 5 · Pegamento PVC por uniones
     ============================================================ */
  function toolPega(host) {
    host.innerHTML =
      '<p class="calc-intro">Estima cuánto pegamento PVC necesitas según el diámetro y el número de uniones de tu proyecto.</p>' +
      '<div class="calc-row">' +
        '<div class="calc-field"><label for="pg-d">Diámetro de tubería</label>' +
          '<select id="pg-d">' +
            '<option value="170">1/2" – 1" (20–32 mm)</option>' +
            '<option value="65">1 1/2" – 2" (50–63 mm)</option>' +
            '<option value="28">3" – 4" (90–110 mm)</option>' +
            '<option value="9">6" o más (160+ mm)</option>' +
          '</select></div>' +
        '<div class="calc-field"><label for="pg-u">Número de uniones</label>' +
          '<input id="pg-u" type="number" inputmode="numeric" value="50" min="1" step="1"></div>' +
      '</div>' +
      '<div id="pg-out"></div>';

    function run() {
      var porCuarto = parseFloat(document.getElementById('pg-d').value); // uniones por 1/4 litro
      var uniones = num('pg-u');
      var litros = (uniones / porCuarto) * 0.25;
      // presentación sugerida
      var pres;
      if (litros <= 0.125) pres = '1/8 de litro';
      else if (litros <= 0.25) pres = '1/4 de litro';
      else if (litros <= 0.5) pres = '1/2 litro';
      else if (litros <= 1) pres = '1 litro';
      else pres = Math.ceil(litros / 4) + ' galón(es) de 4 L';
      var waMsg = 'Hola A&P, para ' + uniones + ' uniones necesito aprox. ' + fmt(litros, 2) + ' L de pega PVC. Quiero cotizar la presentación ' + pres + '.';
      document.getElementById('pg-out').innerHTML =
        '<div class="calc-result">' +
          '<div class="calc-big"><span class="calc-big-num">' + fmt(litros, 2) + '</span><span class="calc-big-unit">litros</span><span class="calc-big-label">de pega estimados</span></div>' +
          '<table class="calc-table"><tbody>' +
            '<tr><td>Presentación sugerida</td><td class="calc-val">' + pres + '</td></tr>' +
          '</tbody></table>' +
          disclaimer('Rendimiento referencial. El consumo real varía con la técnica de aplicación y la temperatura.') +
          ctaBlock(waMsg, 'pegamento-pvc.html', 'Ver pegamento A&P') +
        '</div>';
    }
    host.querySelectorAll('input,select').forEach(function (el) { el.addEventListener('input', run); });
    run();
  }

  /* ============================================================
     HERRAMIENTA 6 · Conversor de presión (BAR / PSI / MPa)
     ============================================================ */
  function toolPresion(host) {
    host.innerHTML =
      '<p class="calc-intro">Convierte la presión de trabajo entre bar, PSI, MPa y otras unidades comunes en tubería y bombas.</p>' +
      '<div class="calc-field"><label for="pr-val">Valor a convertir</label>' +
        '<input id="pr-val" type="number" inputmode="decimal" value="10" min="0" step="any"></div>' +
      '<div class="calc-field"><label for="pr-unit">Unidad de origen</label>' +
        '<select id="pr-unit">' +
          '<option value="100000">bar</option>' +
          '<option value="6894.76">PSI (lb/pulg²)</option>' +
          '<option value="1000000">MPa</option>' +
          '<option value="1000">kPa</option>' +
        '</select></div>' +
      '<div id="pr-out"></div>';

    var sel = document.getElementById('pr-unit');

    function run() {
      var val = num('pr-val');
      var toPa = parseFloat(sel.value);   // pascales por unidad de origen
      var Pa = val * toPa;
      var rows = [
        ['bar', Pa / 100000, 3],
        ['PSI (lb/pulg²)', Pa / 6894.76, 2],
        ['MPa', Pa / 1000000, 4],
        ['kPa', Pa / 1000, 1],
        ['kg/cm² (aprox.)', Pa / 98066.5, 3],
        ['metros de columna de agua (mca)', Pa / 9806.65, 2]
      ];
      document.getElementById('pr-out').innerHTML =
        '<div class="calc-result">' +
          '<table class="calc-table"><tbody>' +
          rows.map(function (r) { return '<tr><td>' + r[0] + '</td><td class="calc-val">' + fmt(r[1], r[2]) + '</td></tr>'; }).join('') +
          '</tbody></table>' +
          disclaimer('La presión nominal de la tubería (PN) y la cédula indican la presión máxima de trabajo. Trabaja siempre con margen sobre la presión de tu bomba.') +
        '</div>';
    }
    host.querySelectorAll('input,select').forEach(function (el) { el.addEventListener('input', run); });
    run();
  }

  /* ---------- Tabs ---------- */
  var TOOLS = [
    { id: 'conversor', label: 'Conversor de caudal', riego: false, fn: toolConversor },
    { id: 'presion', label: 'Conversor de presión', riego: false, fn: toolPresion },
    { id: 'caudal', label: 'Caudal por hectárea', riego: true, fn: toolCaudal },
    { id: 'aspersores', label: 'Aspersores por hectárea', riego: true, fn: toolAspersores },
    { id: 'diametro', label: 'Diámetro de tubería', riego: false, fn: toolDiametro },
    { id: 'pega', label: 'Pegamento PVC', riego: false, fn: toolPega }
  ];

  var tabsEl = document.getElementById('calcTabs');
  var panelEl = document.getElementById('calcPanel');

  tabsEl.innerHTML = TOOLS.map(function (t, i) {
    return '<button class="calc-tab' + (i === 0 ? ' active' : '') + '" data-id="' + t.id + '">' + t.label + '</button>';
  }).join('');

  function open(id) {
    var tool = TOOLS.filter(function (t) { return t.id === id; })[0];
    tabsEl.querySelectorAll('.calc-tab').forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-id') === id); });
    panelEl.className = 'calc-card' + (tool.riego ? ' calc-card--riego' : '');
    tool.fn(panelEl);
    if (history.replaceState) history.replaceState(null, '', 'calculadora.html#' + id);
  }

  tabsEl.querySelectorAll('.calc-tab').forEach(function (b) {
    b.addEventListener('click', function () { open(b.getAttribute('data-id')); });
  });

  var initial = (location.hash || '').replace('#', '');
  open(TOOLS.filter(function (t) { return t.id === initial; })[0] ? initial : TOOLS[0].id);
})();
