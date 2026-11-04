# Pendientes KHIPUx Quito 2026

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
