# Pendientes KHIPUx Quito 2026

Actualización local del 3 de noviembre de 2026. Rama `update/khipux-20261103`, sobre `be67470` (coincide con `origin/main` al iniciar). Publicación autorizada por Gabriel el 3 de noviembre de 2026 mediante el flujo habitual de GitHub Pages.

## Revisión de coordinación

- Mor Naaman: confirmar el título definitivo. El PDF dice «AI, Information, and Democracy» y el registro declara «The Democratic Costs of AI-Mediated Information». La web muestra su nombre y «Título por confirmar».
- Confirmar sala del Taller D y ubicación del cierre del martes. Se muestran como «Sala por confirmar».
- Confirmar la sala de la conversación con Julián Posada, que tampoco figura explícitamente en la agenda.
- Solicitar el editable o una copia oficial corregida del PDF del 3 de noviembre: contiene «Eccuador», concordancias, rótulos y un horario de portada que no abarca el cierre del martes. No se alteraron datos oficiales ni se publicó una nueva copia con erratas. `links.fullProgramUrl` queda en `null` hasta recibir la versión definitiva; las funciones Ver/Descargar siguen implementadas y reaparecen al configurar la ruta. Se retiraron los enlaces al programa anterior y se explica la disponibilidad pendiente en Materiales.
- Gabriel Perdomo continúa como miembro del equipo; no agregarlo como ponente sin confirmación en la agenda.
- Faltan retratos autorizados del resto de participantes/equipo y biografías editoriales verificadas de los ponentes. Se conservan iniciales y no se inventan perfiles. Las diez fotos del paquete tienen permiso de publicación confirmado por Gabriel el 3 de noviembre de 2026: nueve en el evento y Gabriel en el equipo.
- Incorporar correo de contacto público cuando se confirme.

## Implementación y comprobaciones

- Portadas ES/EN: evento inaugural completo de dos jornadas, botones de evento e inscripción y texto aprobado de Origen con Mónica Casanovas.
- Red/Network: tarjetas UNAJ → USFQ → Diversa y tres desplegables nativos con el estilo existente; texto de Diversa conservado.
- Agenda ES/EN: 26 bloques y 31 participantes únicos; horarios, paralelas, salas, participantes y moderadores compartidos. Laura Melo y Ola Bini retirados; Ricardo Flores-Moyano y Pierre Escalante incorporados. La ficha de Horacio muestra todas sus actividades.
- Equipo: biografías, cargos y afiliaciones conservados; se corrigieron identificadores intercambiados de Cheryl, Diana y Gabriel para asociar correctamente la foto.
- Afiche original copiado sin modificaciones (SHA-256 verificado), con vista previa, ampliación y descarga ES/EN. Fotos locales WebP de 640 × 640 con recortes revisados.
- `npm run build`: correcto; incluye ESLint y comprobación TypeScript. Avisos existentes sobre `<img>` y datos de Browserslist antiguos, sin errores. `npx tsc --noEmit`: correcto. `git diff --check`: correcto.
- Navegador Chromium: seis rutas en 1440 y 390 px (12 combinaciones), sin errores JavaScript ni desbordamiento horizontal. Verificados pestañas, agenda, participantes, imágenes, enlaces, precios y desplegables con teclado.
- Registro, becas y pago: HTTP 200 con sus destinos actuales, sin enviar formularios ni realizar pagos.
- No hay enlaces a `20261030` ni nombres retirados en el código activo/HTML generado. Los PDF históricos del repositorio se conservan sin enlaces desde la web.
- Capturas antes/después e informe local en `tmp/lastlab-review/`. El despliegue utiliza el flujo de GitHub Pages al incorporar estos cambios a `main`.
