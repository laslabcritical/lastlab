# Pendientes KHIPUx Quito 2026

## Auditoría de perfiles — 6 de noviembre de 2026

- Paquete aplicado: `LASTLab_KHIPUx_v9_AUDITORIA_PERFILES_LUCIANA_2026-11-06.zip`. La solicitud directa de Gabriel autoriza actualizar y publicar.
- Cotejados los 34 registros con los IDs existentes, sin altas ni bajas. Normalización de tildes y aliases: Edison Loza/Loza-Aguirre, Julián/Julian Posada, Julio César/Cesar Guanche, Daniel Vizuete/Vizuete Sandoval y Tracey con su sufijo Ph.D. Las 34 biografías ES/EN ya estaban implementadas y se conservan. Miguel mantiene el texto depurado, sin el correo omitido, ORCID ni código postal del archivo recibido.
- Actualizados los perfiles con el JSON auditado. Ángel, Gabriel y Priscilla conservan `profileUrl: null` porque sus fuentes son contextuales. Cristina queda sin botón de perfil: se retiró la convocatoria. Tracey usa la página del equipo de Conexiones en el idioma correspondiente.
- Luciana ya figuraba como Musello. Se añadió el LinkedIn indicado; su foto queda pendiente porque el perfil oficial EN, su equivalente ES y el directorio suministrado respondieron HTTP 404. Se mantienen LM y CC; Mónica continúa sin fotografía en Red/Network.
- Las URLs de USFQ están identificadas en las fuentes del paquete y algunas en el índice de búsqueda, pero varias devolvieron 403/404 al comprobarlas. UNAJ no resolvió desde este entorno; CTS Lab devolvió 406; LinkedIn puede requerir acceso. No se afirma una verificación HTTP satisfactoria de todos los perfiles externos.
- PDF v9 idéntico al ZIP (SHA-256 `68b098b093eebddbf8540b900b090cf69d61aac89e4442f487815203aba12abc`). Agenda, horarios, salas, retratos y biografías institucionales sin cambios en esta revisión. Correo Porkbun fuera del alcance.
- `npm run lint` y `npm run build` correctos, con avisos preexistentes de imágenes y Browserslist. Revisión en Chromium a 390 y 1440 px: 34 fichas y biografías en ambos idiomas, expansión por teclado, múltiples biografías abiertas, CTA híbrido y recarga, retorno al programa completo y ausencia de desbordamiento horizontal o errores JavaScript.

## Registro anterior — 4 de noviembre

Actualización auditada del 4 de noviembre de 2026, sobre `230c230`, rama `update/khipux-audited-20261104`. Gabriel autorizó expresamente actualizar y publicar a producción; esa instrucción prevalece sobre la revisión previa solicitada en el paquete.

## Revisión de coordinación

- Paolo Moncagatta continúa en la apertura, según PDF v6. Confirmar con la organización su papel y el orden de intervenciones; no se le asignó otro cargo ni se lo eliminó.
- Diego Quiroga Ferri se incorpora como rector USFQ, con participación remota desde Valencia, según la confirmación de Horacio incluida en el paquete del 4/11. Arnaldo Medina figura como rector UNAJ; no se le atribuye ubicación remota. Cargos contrastados en las páginas oficiales de autoridades USFQ y UNAJ.
- No se recibieron enlaces ni credenciales de reuniones Zoom. Se muestran solo las sesiones correspondientes, sin crear enlaces de acceso.
- Confirmar sala del Taller D, ubicación precisa del cierre y sala de la conversación con Julián Posada. Se conservan los valores pendientes existentes, sin inferir salas del JSON complementario.
- Incorporar fotografías autorizadas del resto de personas o contacto público cuando se reciban. No se buscaron imágenes externas ni se publicaron datos privados del registro.

## Cambios aplicados

- Una sola fuente de agenda con 26 actividades: indicador Zoom para las 9 sesiones académicas de las llaves del PDF v6 (lunes 5, martes 4). Registro, pausas y transiciones quedan fuera del filtro. Las vistas usan los mismos días y acordeones existentes.
- Control de vista completo/Zoom con radios nativos, estados visibles, foco accesible, navegación con teclado y horario de Quito UTC-5. Se conservan las pestañas lunes/martes y el estado de los desplegables compartidos.
- Título definitivo de Mor Naaman: The Democratic Costs of AI-Mediated Information, tanto en la agenda como en su ficha. Eliminada la indicación de título pendiente.
- PDF oficial v6 copiado sin modificar, enlazado en Programa y Materiales ES/EN. Descarga efectiva y SHA-256 idéntico al adjunto. Los PDF históricos se conservan sin enlaces activos.
- Fotos locales nuevas para Ariel Vercelli, Priscilla Purtschert y Lizette Aguirre. Lizette también en Equipo y miembros. Gabriel confirmó permiso de publicación sin crédito obligatorio el 4/11. Optimización WebP conservando la proporción original y quitando EXIF/XMP; encuadre con el componente y CSS existentes.
- Foto institucional nueva de Gabriel comparada con la publicada: se conserva la elegida. No se modificaron su biografía, cargo ni foto, ni el retrato de Horacio. Las demás fotos existentes se conservan.
- Sobre/About: se insertó únicamente la oración aprobada sobre Mónica Casanovas después de Cheryl. El texto de Origen de las portadas queda intacto.
- Portadas: añadido acceso Becas/Scholarships con el mismo estilo del registro existente. No se cambiaron títulos ni descripciones.
- Gabriel y Lizette permanecen una sola vez en sus paneles y fichas; nodos, orden y desplegables intactos. No se cambiaron horarios, otras sesiones, instituciones ni biografías.

## Validaciones

- `npm run build`: correcto, con ESLint y validación TypeScript. Solo avisos preexistentes sobre img y datos antiguos de Browserslist. `git diff --check`: correcto.
- Comprobación estructural ES/EN: 26 sesiones, filtro de 9 (5/4) contrastado con agenda_zoom.json; el resto de sesiones se comparó contra la versión anterior sin diferencias. Biografías y portada sin cambios; Sobre/About incorpora exclusivamente la cláusula aprobada.
- Chromium: ocho rutas en 1440 y 390 px (16 combinaciones). Verificados radios con flechas, pestañas de días, conservación de desplegables, filtro sin logística, retorno al programa completo manteniendo día, rectores, título Mor, 34 participantes, 14 fotos, estado Gabriel/Lizette, enlaces y descarga v6.
- Sin errores JavaScript, imágenes rotas ni desbordamiento horizontal. No hay enlaces Zoom inventados ni referencias activas a v5.
- Informe y capturas antes/después: `tmp/lastlab-v6-review/`.

Fuentes de cargos: https://www.usfq.edu.ec/es/gobernanza-autoridades y https://www.unaj.edu.ar/autoridades/. El anuncio de asistencia y Valencia proceden del paquete autorizado, no de estas páginas institucionales.
