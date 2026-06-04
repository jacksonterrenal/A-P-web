/* ============================================================
   A&P · INTERTUBEP — Contenido del blog técnico
   8 artículos del plan editorial SEO. Tono "tú", marca A&P.
   Bloques: ['p'|'h2'|'h3', texto] · ['ul'|'ol', [items]]
            ['table', [[headers],[fila],...]] · ['callout', texto]
   ============================================================ */
(function () {
  var L = {
    riego: 'catalogo.html?cat=tuberia-riego',
    presion: 'catalogo.html?cat=tuberia-presion',
    pn10: 'catalogo.html?cat=accesorios-presion',
    pega: 'producto.html?id=pega-pvc',
    aspersores: 'catalogo.html?cat=aspersores',
    goteros: 'catalogo.html?cat=goteros',
    filtros: 'catalogo.html?cat=filtros',
    valvulasAire: 'catalogo.html?cat=valvulas-aire',
    cedula40: 'catalogo.html?cat=cedula-40',
    descargas: 'descargas.html',
    tuboUR: 'producto.html?id=tubo-presion-ur',
    contacto: 'contacto.html'
  };
  function a(href, txt) { return '<a href="' + href + '">' + txt + '</a>'; }

  window.AP_POSTS = [

    {
      id: 'elegir-tuberia-riego',
      tag: 'Riego', tone: 'riego', date: 'Edición 2025',
      keyword: 'tubería PVC para riego',
      title: 'Cómo elegir la tubería PVC correcta para tu sistema de riego',
      metaTitle: 'Cómo Elegir Tubería PVC para Riego | Guía A&P Ecuador',
      metaDesc: 'Aprende a elegir la tubería PVC para riego correcta: presión de trabajo, diámetro, caudal y tipo de unión. Guía práctica de A&P para agricultores en Ecuador.',
      excerpt: 'Presión, diámetro y tipo de unión: la guía práctica para que tu sistema de riego rinda cada gota y dure décadas.',
      relatedCats: [['Tubería de riego', L.riego], ['Aspersores', L.aspersores], ['Goteros', L.goteros]],
      body: [
        ['p', 'Elegir la tubería correcta para tu sistema de riego es la diferencia entre regar parejo y desperdiciar agua, energía y dinero. La buena noticia: no necesitas ser ingeniero para acertar. Solo tienes que mirar cuatro factores en orden. En esta guía te los explicamos con el lenguaje del campo, no del laboratorio.'],
        ['h2', '1. La presión de trabajo manda'],
        ['p', 'Cada tubería tiene una presión máxima que puede soportar, medida en PSI o en MPa. Esa presión debe ser <strong>siempre mayor</strong> a la presión a la que trabaja tu bomba; de lo contrario, tarde o temprano revienta —y casi nunca en un momento conveniente.'],
        ['p', 'La ' + a(L.presion, 'tubería PVC de presión A&P') + ' cubre desde la red principal que sale de la bomba hasta los laterales que llegan al cultivo. Si tu bomba trabaja a 40 PSI, no elijas una tubería al límite de 40 PSI: deja margen. La regla de oro es trabajar al 70% de la presión nominal de la tubería.'],
        ['callout', 'Tip A&P: anota la presión de tu bomba (la trae la placa o el manual) antes de cotizar. Con ese dato te recomendamos la serie exacta.'],
        ['h2', '2. Diámetro y caudal van de la mano'],
        ['p', 'El diámetro define cuánta agua pasa sin que se "ahogue" la línea. A mayor caudal —más litros por segundo— mayor diámetro necesitas para que el agua no pierda velocidad ni presión en el camino (lo que los técnicos llaman "pérdida de carga").'],
        ['p', 'Un error clásico es ahorrar comprando tubería más delgada: el agua llega con menos fuerza al final del lote y el riego sale disparejo. A&P fabrica diámetros desde 20 mm hasta 400 mm justamente para que cada tramo —principal, secundario y lateral— tenga el suyo.'],
        ['table', [
          ['Tramo del sistema', 'Función', 'Diámetro típico'],
          ['Línea principal', 'Sale de la bomba', '110 – 400 mm'],
          ['Líneas secundarias', 'Reparten por sectores', '63 – 110 mm'],
          ['Laterales', 'Llegan al cultivo', '20 – 63 mm']
        ]],
        ['h2', '3. El tipo de unión: E/C o U/R'],
        ['p', 'Aquí decides cómo se conectan los tubos entre sí:'],
        ['ul', [
          '<strong>Cementado solvente (E/C):</strong> se pega con ' + a(L.pega, 'cemento solvente para PVC') + '. Unión permanente, ideal para tramos fijos y enterrados.',
          '<strong>Unión por empaque (U/R o UZ):</strong> se arma con un anillo de caucho, sin pegamento. Permite dilatación y se puede desarmar para reparar.'
        ]],
        ['p', 'Si prevés mover o reparar la línea, la ' + a(L.tuboUR, 'tubería U/R') + ' te ahorrará dolores de cabeza. Para una matriz enterrada que no tocarás en años, el cementado E/C es más económico y hermético.'],
        ['h2', '4. No olvides los accesorios de protección'],
        ['p', 'Una línea de riego no es solo tubo. Para que dure y trabaje bien necesita ' + a(L.valvulasAire, 'válvulas de aire') + ' que liberen el aire atrapado, ' + a(L.filtros, 'filtros') + ' que protejan goteros y aspersores, y los codos, tees y reducciones del calibre correcto.'],
        ['callout', 'La materia prima importa: toda la tubería A&P se fabrica con PVC 100% virgen, lo que le da hasta 50 años de vida útil. En riego, eso es la diferencia entre reinstalar en 5 años o regar tranquilo por décadas.'],
        ['h2', 'En resumen'],
        ['p', 'Mira la presión de tu bomba, dimensiona el diámetro según el caudal, elige la unión según si vas a reparar o no, y suma los accesorios de protección. Con eso tienes el 90% de la decisión tomada. El 10% restante lo resolvemos juntos: cuéntanos tu proyecto y te armamos la lista exacta.']
      ]
    },

    {
      id: 'guia-pegamento-pvc',
      tag: 'Instalación', tone: 'gray', date: 'Edición 2025',
      keyword: 'pegamento para tubería PVC',
      title: 'Pegamento para tubería PVC: guía de aplicación paso a paso',
      metaTitle: 'Cómo Pegar Tubería PVC Paso a Paso | Pega A&P',
      metaDesc: 'Guía paso a paso para aplicar pegamento (cemento solvente) en tubería PVC sin fugas. Tiempos de fraguado, errores comunes y consejos de A&P Ecuador.',
      excerpt: 'Una tubería de presión es tan fuerte como su unión más débil. Aprende a pegar PVC sin fugas, paso a paso.',
      relatedCats: [['Pega para PVC A&P', L.pega], ['Accesorios Presión PN10', L.pn10], ['Tubería de presión', L.presion]],
      body: [
        ['p', 'Una tubería de presión es tan fuerte como su unión más débil. Puedes comprar el mejor tubo del mercado, pero si la unión está mal pegada, ahí tendrás la fuga. La buena noticia: pegar PVC correctamente es sencillo si respetas el procedimiento y los tiempos. Te lo explicamos paso a paso.'],
        ['h2', 'Qué es el cemento solvente (y por qué no es "pega" común)'],
        ['p', 'El ' + a(L.pega, 'pegamento para PVC A&P AP-2528') + ' no pega como un adhesivo cualquiera: es un cemento solvente que <strong>fusiona químicamente</strong> la espiga y la campana. Ablanda ambas superficies y las suelda en frío hasta que se vuelven una sola pieza. Por eso la unión, bien hecha, es tan resistente como el propio tubo.'],
        ['h2', 'Lo que necesitas a la mano'],
        ['ul', [
          'Pega para PVC A&P (presentación según tu diámetro: desde 1/8 de litro a galón)',
          'Limpiador/removedor o un paño limpio y seco',
          'Una segueta o cortatubos para un corte recto',
          'Lija fina o lima para quitar la rebaba',
          'Guantes y un trapo'
        ]],
        ['h2', 'El procedimiento, paso a paso'],
        ['ol', [
          '<strong>Corta a escuadra.</strong> El corte debe ser recto. Un corte torcido deja huecos por donde se filtra el agua.',
          '<strong>Quita la rebaba y achaflana.</strong> Lima el borde interior y exterior. Un leve chaflán ayuda a que la espiga entre sin raspar el pegamento.',
          '<strong>Limpia y seca.</strong> Ambas superficies deben estar libres de polvo, grasa y humedad. El PVC mojado no fusiona bien.',
          '<strong>Prueba en seco.</strong> Encaja sin pegamento: la espiga debe entrar firme. Marca la profundidad con un lápiz.',
          '<strong>Aplica el cemento en AMBAS piezas.</strong> Una capa pareja dentro de la campana y otra sobre la espiga. Este es el secreto: pegar las dos caras, no solo una.',
          '<strong>Une y gira un cuarto de vuelta.</strong> Inserta hasta el fondo y gira 1/4 para repartir el cemento. Sostén unos segundos: el PVC tiende a "escupir" la espiga.',
          '<strong>Limpia el exceso</strong> con el trapo y deja fraguar sin mover.'
        ]],
        ['callout', 'El error #1: aplicar pega en una sola pieza. Siempre en las dos —campana y espiga— para un sello uniforme en todo el contorno.'],
        ['h2', 'Tiempos de fraguado (no te apures)'],
        ['p', 'El tiempo depende del diámetro y de la temperatura ambiente. Como referencia práctica en clima cálido como el de la costa ecuatoriana:'],
        ['table', [
          ['Diámetro', 'Espera antes de manipular', 'Antes de dar presión'],
          ['Hasta 50 mm', '15 – 30 min', '6 horas'],
          ['63 – 110 mm', '30 – 60 min', '12 horas'],
          ['160 mm o más', '1 – 2 horas', '24 horas']
        ]],
        ['p', 'Dar presión antes de tiempo es la causa más común de fugas en uniones recién hechas. La paciencia aquí se paga sola.'],
        ['h2', 'Almacenamiento'],
        ['p', 'Guarda la pega bien tapada, entre 5 °C y 44 °C, lejos de fuentes de calor. Tiene una vida útil de 3 años. Si ves que se espesó demasiado, no la "rebajes" con cualquier solvente: pierde propiedades.'],
        ['p', '¿Vas a comprar para tu ferretería o tu obra grande? Tenemos presentación en galón para uso industrial. ' + a(L.contacto, 'Escríbenos') + ' y te cotizamos por volumen.']
      ]
    },

    {
      id: 'pn10-cedula40-ur-ec',
      tag: 'Técnico', tone: 'navy', date: 'Edición 2025',
      keyword: 'tubería PVC PN10 Cédula 40',
      title: 'PN10, Cédula 40, U/R y E/C: qué significan y cuándo usar cada uno',
      metaTitle: 'PN10, Cédula 40, U/R y E/C en Tubería PVC | A&P',
      metaDesc: 'Descifra las siglas del catálogo PVC: PN10, Cédula 40 (SCH40), U/R y E/C. Qué significan y cuándo usar cada accesorio. Guía técnica de A&P Ecuador.',
      excerpt: 'Descifra las siglas del catálogo PVC para pedir exactamente el accesorio que necesitas, sin errores en obra.',
      relatedCats: [['Accesorios Presión PN10', L.pn10], ['Cédula 40', L.cedula40], ['Tubería de presión', L.presion]],
      body: [
        ['p', 'El catálogo PVC está lleno de siglas que, si no las conoces, te hacen pedir el accesorio equivocado. Aquí están las cuatro más importantes, explicadas claro, para que compres bien a la primera.'],
        ['h2', 'PN10: la presión nominal'],
        ['p', '"PN" significa Presión Nominal y el número son los bares de presión que aguanta. <strong>PN10 ≈ 10 bar (unos 145 PSI)</strong>. Es el estándar de la mayoría de los ' + a(L.pn10, 'accesorios de presión A&P') + ': codos, tees, uniones y adaptadores pegables. También verás PN16 en piezas como las cruces, que soportan más.'],
        ['h2', 'Cédula 40 (SCH40): pared gruesa'],
        ['p', 'La ' + a(L.cedula40, 'Cédula 40') + ' (o SCH40, por "schedule" en inglés) se refiere al <strong>espesor de pared</strong>. A más cédula, pared más gruesa y mayor resistencia a la presión. La Cédula 40 es la opción robusta para alta presión y uso industrial, donde se exige un margen extra de seguridad.'],
        ['callout', 'Regla rápida: PN10 te dice cuánta presión aguanta; Cédula 40 te dice qué tan gruesa es la pared. Son dos formas de hablar de lo mismo —resistencia— bajo normas distintas (métrica vs. americana).'],
        ['h2', 'E/C: Espiga / Campana'],
        ['p', 'Describe cómo se conectan las piezas con cemento solvente. Un extremo es la <strong>espiga</strong> (liso, entra) y el otro la <strong>campana</strong> (ensanchado, recibe). Se unen con ' + a(L.pega, 'pega para PVC') + ' en una unión permanente. Es el sistema más común y económico.'],
        ['h2', 'U/R: Unión por Empaque'],
        ['p', 'Aquí la unión no se pega: lleva un <strong>anillo de caucho (empaque)</strong> que sella por compresión. Se llama también UZ (unión elastomérica). Ventajas: se monta sin pegamento, permite que la tubería se dilate con el calor y se puede desarmar para reparar.'],
        ['table', [
          ['Sigla', 'Significa', 'Cuándo usarla'],
          ['PN10', 'Presión nominal 10 bar', 'Accesorios de presión estándar'],
          ['SCH40', 'Cédula 40, pared gruesa', 'Alta presión / industrial'],
          ['E/C', 'Espiga / Campana', 'Uniones pegadas permanentes'],
          ['U/R', 'Unión por empaque (caucho)', 'Líneas desarmables o con dilatación']
        ]],
        ['h2', 'Cómo pedir sin equivocarte'],
        ['p', 'Al cotizar, indica siempre tres cosas: <strong>diámetro</strong> (ej. 110 mm), <strong>tipo de unión</strong> (E/C o U/R) y <strong>presión o cédula</strong> (PN10, Cédula 40). Con esos tres datos no hay confusión posible. ¿Dudas? ' + a(L.contacto, 'Mándanos tu lista') + ' y la revisamos contigo.']
      ]
    },

    {
      id: 'tabla-diametros-presiones-riego',
      tag: 'Técnico', tone: 'riego', date: 'Edición 2025',
      keyword: 'diámetros tubería PVC riego',
      title: 'Tabla de diámetros y presiones de tubería PVC para riego en Ecuador',
      metaTitle: 'Diámetros y Presiones de Tubería PVC para Riego | A&P',
      metaDesc: 'Tabla de diámetros (20–400 mm) y presiones de la tubería PVC para riego A&P en Ecuador. Equivalencias mm a pulgadas y guía rápida de selección.',
      excerpt: 'Diámetros de 20 a 400 mm, equivalencias en pulgadas y presiones de trabajo en una sola tabla de referencia.',
      relatedCats: [['Tubería de presión', L.presion], ['Tubería de riego', L.riego], ['Accesorios Presión PN10', L.pn10]],
      body: [
        ['p', 'Tener a mano las equivalencias y presiones evita errores de pedido. Esta es la tabla de referencia rápida de la tubería PVC de presión A&P, pensada para riego agrícola en Ecuador. Guárdala o imprímela para tu obra.'],
        ['h2', 'Equivalencias de diámetro (mm a pulgadas)'],
        ['table', [
          ['Milímetros (mm)', 'Pulgadas aprox.', 'Uso típico en riego'],
          ['20 mm', '1/2"', 'Laterales, conexiones'],
          ['25 mm', '3/4"', 'Laterales'],
          ['32 mm', '1"', 'Laterales / submatriz'],
          ['40 mm', '1 1/4"', 'Submatrices'],
          ['50 mm', '1 1/2"', 'Líneas secundarias'],
          ['63 mm', '2"', 'Secundarias'],
          ['75 mm', '2 1/2"', 'Secundarias / principal pequeña'],
          ['90 mm', '3"', 'Principal'],
          ['110 mm', '4"', 'Principal'],
          ['160 mm', '6"', 'Matriz'],
          ['200 mm', '8"', 'Matriz'],
          ['250 – 400 mm', '10" – 16"', 'Conducción / grandes caudales']
        ]],
        ['callout', 'Las pulgadas son aproximadas: el sistema métrico (mm) mide el diámetro exterior y el de pulgadas a veces el nominal. Al pedir, usa los milímetros para no equivocarte.'],
        ['h2', 'Presiones de trabajo'],
        ['p', 'La ' + a(L.presion, 'tubería de presión A&P') + ' se fabrica en distintas series según la presión que necesites. Como referencia, el rango cubre desde <strong>0,50 hasta 1,60 MPa</strong> (aproximadamente 70 a 230 PSI), dependiendo del diámetro y la serie.'],
        ['table', [
          ['Presión (MPa)', 'Presión (PSI) aprox.', 'Aplicación'],
          ['0,50 MPa', '~72 PSI', 'Riego por gravedad / baja presión'],
          ['0,63 MPa', '~91 PSI', 'Riego tecnificado estándar'],
          ['1,00 MPa', '~145 PSI', 'Aspersión y bombeo'],
          ['1,25 – 1,60 MPa', '~180 – 230 PSI', 'Alta presión / conducción']
        ]],
        ['h2', 'Cómo usar estas tablas para elegir'],
        ['ol', [
          'Define el caudal de tu sistema (litros por segundo) y usa el diámetro que lo mueva sin ahogarse.',
          'Mira la presión de tu bomba y elige una serie con margen (trabaja al 70% de la presión nominal).',
          'Confirma el tipo de unión (E/C pegada o U/R por empaque).',
          'Suma los accesorios PN10 del mismo diámetro.'
        ]],
        ['p', 'Si quieres todas las medidas exactas con sus espesores, descárgalas en ' + a(L.descargas, 'nuestras fichas técnicas en PDF') + ', o ' + a(L.contacto, 'escríbenos') + ' con tu caudal y presión y te decimos el diámetro y la serie ideales.']
      ]
    },

    {
      id: 'materia-prima-virgen',
      tag: 'Calidad', tone: 'navy', date: 'Edición 2025',
      keyword: 'tubería PVC materia prima virgen',
      title: '¿Por qué la materia prima 100% virgen da 50 años de vida útil?',
      metaTitle: 'PVC 100% Virgen: 50 Años de Vida Útil | A&P Ecuador',
      metaDesc: '¿Por qué la tubería de PVC 100% virgen dura hasta 50 años? Te explicamos la diferencia con el material reciclado y por qué importa en tu obra o cultivo.',
      excerpt: 'La diferencia entre una tubería que dura décadas y una que falla está en el material. Te lo explicamos sin tecnicismos.',
      relatedCats: [['Tubería de presión', L.presion], ['Tubería de riego', L.riego], ['Quiénes somos', 'quienes-somos.html']],
      body: [
        ['p', 'La durabilidad de una tubería PVC no se ve a simple vista: se nota a los años. Dos tubos pueden parecer idénticos en la ferretería y comportarse muy distinto bajo tierra una década después. La diferencia empieza —y muchas veces termina— en la materia prima.'],
        ['h2', '¿Qué es el PVC 100% virgen?'],
        ['p', 'Es resina nueva, sin mezcla de material reciclado ni reprocesado. Conserva una <strong>estructura molecular homogénea</strong>: imagina una pared de ladrillos perfectamente alineados frente a una pared con pedazos de distintos tamaños y huecos. La primera resiste; la segunda se fisura por donde menos esperas.'],
        ['p', 'Toda la ' + a(L.presion, 'tubería de presión A&P') + ' se fabrica con materia prima 100% virgen. Por eso le damos una vida útil estimada de hasta <strong>50 años</strong> conservando su resistencia a la presión y a los químicos.'],
        ['h2', 'Qué pasa con el material reciclado'],
        ['p', 'El PVC reciclado abarata el costo de fabricación, pero introduce impurezas y puntos débiles. Bajo presión constante o expuesto a la intemperie, esos puntos se vuelven micro-fisuras, y las micro-fisuras se vuelven fugas. En una línea enterrada o en una matriz de riego, encontrar y reparar esa fuga cuesta mucho más que lo que se ahorró comprando barato.'],
        ['callout', 'En una obra, el material es una fracción del costo total. La mano de obra, la excavación y el tiempo perdido son lo caro. Una fuga te hace pagar todo eso otra vez.'],
        ['h2', 'Por qué importa en tu proyecto'],
        ['ul', [
          '<strong>En riego:</strong> una línea que falla en plena temporada significa cultivo sin agua justo cuando más lo necesita.',
          '<strong>En construcción:</strong> una tubería de desagüe o presión empotrada que falla obliga a romper pisos y paredes.',
          '<strong>En agua potable:</strong> la calidad del material influye en que el agua llegue sin sabores ni contaminación.'
        ]],
        ['h2', 'Cómo reconocer calidad'],
        ['p', 'Pide siempre tubería que declare materia prima virgen y que cumpla normas (NTE INEN, ISO). Fíjate en el marcado del tubo, en la uniformidad del color y en el respaldo del fabricante. A&P es industria ecuatoriana desde 2014 y fabrica bajo norma: conoce más en ' + a('quienes-somos.html', 'quiénes somos') + '.'],
        ['p', 'Invertir en calidad real no es gastar más: es gastar una sola vez. Esa es la idea detrás de nuestra promesa de marca: <em>¡Nuestra calidad es tu éxito!</em>']
      ]
    },

    {
      id: 'cuanto-pegamento-pvc',
      tag: 'Instalación', tone: 'gray', date: 'Edición 2025',
      keyword: 'cuánto cemento solvente PVC',
      title: 'Cuánto pegamento PVC necesitas por diámetro y unión',
      metaTitle: 'Cuánto Pegamento PVC Necesitas por Diámetro | A&P',
      metaDesc: 'Calcula cuánto cemento solvente PVC necesitas según el diámetro y número de uniones. Guía de rendimiento y presentaciones de la Pega A&P en Ecuador.',
      excerpt: 'Deja de comprar de más o de menos: estima el rendimiento del cemento solvente según diámetro y número de uniones.',
      relatedCats: [['Pega para PVC A&P', L.pega], ['Accesorios Presión PN10', L.pn10], ['Descargas', L.descargas]],
      body: [
        ['p', 'Comprar pegamento "a ojo" termina de dos formas: te sobra medio galón que se seca, o te quedas a mitad de obra un domingo. Esta guía te ayuda a estimar cuánto cemento solvente necesitas según el diámetro y el número de uniones de tu proyecto.'],
        ['h2', 'De qué depende el consumo'],
        ['ul', [
          '<strong>El diámetro:</strong> a mayor diámetro, más superficie de campana y espiga que cubrir, y más producto por unión.',
          '<strong>El número de uniones:</strong> cada codo, tee, unión y acople es un punto de pegado (a veces dos o tres caras).',
          '<strong>La mano:</strong> aplicar parejo y sin excesos rinde mucho más que embadurnar.'
        ]],
        ['h2', 'Rendimiento orientativo por unión'],
        ['p', 'Estos valores son una referencia práctica para planificar tu compra. El consumo real varía con la técnica y la temperatura.'],
        ['table', [
          ['Diámetro', 'Uniones aprox. por 1/4 de litro', 'Recomendado para'],
          ['1/2" – 1" (20–32 mm)', '120 – 200 uniones', 'Riego por goteo, instalaciones menores'],
          ['1 1/2" – 2" (50–63 mm)', '50 – 80 uniones', 'Líneas secundarias'],
          ['3" – 4" (90–110 mm)', '20 – 35 uniones', 'Líneas principales'],
          ['6" o más (160+ mm)', '6 – 12 uniones', 'Matrices, conducción']
        ]],
        ['callout', 'Para diámetros grandes (160 mm o más) conviene la presentación en galón: rinde mejor por costo y evita quedarte corto en plena unión.'],
        ['h2', 'Presentaciones de la Pega A&P'],
        ['p', 'La ' + a(L.pega, 'Pega para PVC A&P AP-2528') + ' viene en varios tamaños para que pagues solo por lo que usas:'],
        ['ul', [
          '<strong>1/8 y 1/4 de litro:</strong> arreglos domésticos y riego de jardín.',
          '<strong>1/2 y 1 litro:</strong> obras medianas y ferreterías.',
          '<strong>Galón (4.000 ml):</strong> uso industrial y diámetros grandes.'
        ]],
        ['h2', 'Tres consejos para que rinda más'],
        ['ol', [
          'Aplica una capa pareja, no gruesa: el exceso no pega mejor, solo se desperdicia.',
          'Cierra bien el envase entre unión y unión para que no se evapore el solvente.',
          'Trabaja a la sombra en horas frescas: el calor extremo acelera el secado del bote abierto.'
        ]],
        ['p', '¿Obra grande o ferretería? ' + a(L.contacto, 'Pídenos precio por volumen') + ' y te ayudamos a calcular la cantidad exacta para tu proyecto.']
      ]
    },

    {
      id: 'aspersion-vs-goteo',
      tag: 'Riego', tone: 'riego', date: 'Edición 2025',
      keyword: 'riego por aspersión y goteo',
      title: 'Riego por aspersión vs. goteo: qué tubería y accesorios usar',
      metaTitle: 'Riego por Aspersión vs. Goteo: Qué Elegir | A&P Ecuador',
      metaDesc: 'Aspersión o goteo: compara ventajas, cultivos ideales y qué tubería y accesorios A&P usar en cada sistema de riego. Guía práctica para Ecuador.',
      excerpt: '¿Aspersores o goteros? Compara los dos métodos y descubre qué tubería y accesorios necesita cada uno.',
      relatedCats: [['Aspersores', L.aspersores], ['Goteros', L.goteros], ['Filtros y Fertirriego', L.filtros]],
      body: [
        ['p', 'No existe el "mejor" sistema de riego en abstracto: existe el mejor para tu cultivo, tu agua y tu terreno. Las dos grandes familias son la aspersión y el goteo. Veamos cuándo conviene cada una y qué necesitas para montarla.'],
        ['h2', 'Riego por aspersión'],
        ['p', 'Lanza el agua en forma de lluvia mediante ' + a(L.aspersores, 'aspersores') + '. Cubre superficies grandes de manera uniforme y es ideal para cultivos extensivos, pastos y hortalizas sembradas en alta densidad.'],
        ['h3', 'Ventajas'],
        ['ul', [
          'Cubre mucha área con pocos puntos de emisión.',
          'Refresca el cultivo y ayuda contra heladas leves.',
          'Buena opción para suelos que infiltran rápido.'
        ]],
        ['h3', 'Qué necesitas'],
        ['p', 'Tubería de presión de buen diámetro (la aspersión pide presión), tubos elevadores para montar los aspersores, y aspersores del caudal y alcance correctos. A&P tiene modelos desde el compacto 2014 hasta el cañón 8025 para grandes superficies.'],
        ['h2', 'Riego por goteo'],
        ['p', 'Entrega el agua gota a gota, justo en la raíz, mediante ' + a(L.goteros, 'goteros') + '. Es el más eficiente en uso de agua y el rey para frutales, hortalizas en hilera, invernaderos y zonas con poca agua.'],
        ['h3', 'Ventajas'],
        ['ul', [
          'Máximo ahorro de agua: moja solo la zona de raíces.',
          'Permite fertirriego (inyectar fertilizante en el agua).',
          'Menos malezas porque no moja todo el terreno.'
        ]],
        ['h3', 'Qué necesitas'],
        ['p', 'Goteros (autocompensados si tu terreno tiene desnivel), ' + a(L.filtros, 'filtros') + ' obligatorios para que los goteros no se tapen, y un kit Venturi si vas a fertirrigar. La presión de trabajo es menor que en aspersión.'],
        ['h2', 'Tabla comparativa'],
        ['table', [
          ['Criterio', 'Aspersión', 'Goteo'],
          ['Eficiencia de agua', 'Media', 'Alta'],
          ['Presión necesaria', 'Mayor', 'Menor'],
          ['Cultivo ideal', 'Extensivos, pastos', 'Frutales, hilera, invernadero'],
          ['Filtración', 'Recomendable', 'Imprescindible'],
          ['Fertirriego', 'Limitado', 'Excelente']
        ]],
        ['callout', 'Muchos productores combinan ambos: aspersión en potreros y goteo en frutales. A&P fabrica y distribuye todo el sistema, así trabajas con una sola marca de principio a fin.'],
        ['p', 'Cuéntanos tu cultivo, tu fuente de agua y el área a regar. Con esos datos te recomendamos el método y te armamos la lista completa de tubería y accesorios.']
      ]
    },

    {
      id: 'errores-instalacion-pvc',
      tag: 'Instalación', tone: 'navy', date: 'Edición 2025',
      keyword: 'instalación tubería PVC errores',
      title: 'Errores comunes al instalar tubería PVC (y cómo evitarlos)',
      metaTitle: 'Errores al Instalar Tubería PVC y Cómo Evitarlos | A&P',
      metaDesc: '7 errores comunes al instalar tubería PVC —y cómo evitarlos— para que tu línea no tenga fugas. Consejos de instalación de A&P Ecuador.',
      excerpt: 'Siete errores que arruinan una instalación de PVC —y cómo evitarlos para que tu línea no tenga fugas.',
      relatedCats: [['Pega para PVC A&P', L.pega], ['Accesorios Presión PN10', L.pn10], ['Válvulas de Aire', L.valvulasAire]],
      body: [
        ['p', 'La mayoría de las fugas en tubería PVC no son culpa del tubo: son culpa de la instalación. La buena noticia es que casi todos los errores se evitan conociéndolos de antemano. Estos son los siete que más vemos en obra.'],
        ['h2', '1. Dar presión antes de tiempo'],
        ['p', 'El error número uno. La unión recién pegada necesita horas para fraguar antes de soportar presión. Apurarse aquí garantiza fugas. Respeta los tiempos según el diámetro (revisa nuestra ' + a('articulo.html?id=guia-pegamento-pvc', 'guía de pegado') + ').'],
        ['h2', '2. Pegar con la superficie húmeda o sucia'],
        ['p', 'El ' + a(L.pega, 'cemento solvente') + ' no fusiona bien sobre PVC mojado, polvoriento o grasoso. Limpia y seca ambas caras antes de aplicar.'],
        ['h2', '3. Aplicar pega en una sola pieza'],
        ['p', 'Hay que cubrir <strong>las dos superficies</strong>: la campana por dentro y la espiga por fuera. Pegar solo una deja zonas sin sellar.'],
        ['h2', '4. Cortar torcido'],
        ['p', 'Un corte que no es a escuadra deja huecos en la unión. Usa cortatubos o segueta con guía, y lima la rebaba.'],
        ['h2', '5. No dejar espacio para la dilatación'],
        ['p', 'El PVC se dilata y contrae con la temperatura, sobre todo expuesto al sol. En tramos largos, las uniones por empaque (U/R) absorben ese movimiento. En líneas 100% pegadas y al sol, prevé el detalle o el tubo "trabaja" y fisura.'],
        ['h2', '6. Olvidar las válvulas de aire'],
        ['p', 'En líneas de presión, el aire atrapado causa golpes de ariete que dañan la tubería. Las ' + a(L.valvulasAire, 'válvulas de aire') + ' liberan ese aire en los puntos altos. No son opcionales en una matriz seria.'],
        ['h2', '7. Mezclar calidades y normas'],
        ['p', 'Combinar tubería virgen de norma con accesorios baratos sin norma es poner el eslabón débil tú mismo. Usa componentes del mismo nivel de calidad para que toda la línea rinda igual.'],
        ['callout', 'Checklist de oro antes de enterrar: corte recto · superficies limpias y secas · pega en ambas caras · giro de 1/4 de vuelta · tiempo de fraguado respetado · prueba de presión gradual.'],
        ['h2', 'La prueba final'],
        ['p', 'Antes de tapar la zanja, haz una prueba de presión gradual y revisa todas las uniones. Encontrar una fuga con la zanja abierta cuesta minutos; encontrarla después cuesta días. ¿Dudas con tu instalación? ' + a(L.contacto, 'Consúltanos') + ': te asesora nuestro equipo técnico.']
      ]
    }

  ];
})();
