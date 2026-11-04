# Pendientes KHIPUx Quito 2026

Actualización puntual con la agenda oficial (5), recibida el 3 de noviembre de 2026. Rama `update/khipux-agenda-v5`, sobre `9297eb4`. Revisión completada y publicación a producción autorizada por Gabriel el 3 de noviembre de 2026.

## Revisión de coordinación

- Mor Naaman: confirmar el título definitivo. El PDF dice «AI, Information, and Democracy» y el registro declara «The Democratic Costs of AI-Mediated Information». La web muestra su nombre y «Título por confirmar».
- Confirmar sala del Taller D y ubicación del cierre del martes. Se muestran como «Sala por confirmar».
- Confirmar la sala de la conversación con Julián Posada, que tampoco figura explícitamente en la agenda.
- El PDF oficial (5), entregado como `Agenda K.pdf`, reemplaza la descarga anterior en ambos idiomas mediante `programa-khipux-quito-2026-v5.pdf`. Se publica sin modificar su contenido; conserva erratas editoriales de origen. Descarga y visualización comprobadas y SHA-256 idéntico al adjunto.
- Gabriel Perdomo está confirmado en la sesión de seguridad del martes, 08:30–09:50, con afiliación UADE y UNAJ (EN: UADE and UNAJ). Se reutiliza `/people/gabriel.webp`; cargo y biografía actualizados en Equipo y miembros ES/EN.
- Lizette Aguirre está confirmada en La IA y el trabajo del martes, 11:30–12:45. No se cambiaron horarios, salas, moderadores ni otras sesiones.
- Horacio: incorporado el retrato original indicado por Gabriel en Descargas, con recorte de rostro y hombros y versión WebP local. Se reutiliza en Equipo y miembros, participantes y organización del evento ES/EN, conservando su biografía.
- Faltan retratos autorizados del resto de participantes/equipo y biografías editoriales verificadas de los ponentes. Se conservan iniciales y no se inventan perfiles. Las diez fotos del paquete tienen permiso de publicación confirmado por Gabriel el 3 de noviembre de 2026: diez en el evento, y Gabriel también en el equipo.
- Incorporar correo de contacto público cuando se confirme.

## Implementación y comprobaciones

- Portadas ES/EN: evento inaugural completo de dos jornadas, botones de evento e inscripción y texto aprobado de Origen con Mónica Casanovas.
- Red/Network: tarjetas UNAJ → USFQ → Diversa y tres desplegables nativos con el estilo existente; texto de Diversa conservado.
- Agenda ES/EN: 26 bloques y 33 participantes únicos; horarios, paralelas, salas, participantes y moderadores compartidos. Laura Melo y Ola Bini retirados; Ricardo Flores-Moyano y Pierre Escalante incorporados. La ficha de Horacio muestra todas sus actividades.
- Equipo: biografías, cargos y afiliaciones conservados; se corrigieron identificadores intercambiados de Cheryl, Diana y Gabriel para asociar correctamente la foto.
- Afiche original copiado sin modificaciones (SHA-256 verificado), con vista previa, ampliación y descarga ES/EN. Fotos locales WebP de 640 × 640 con recortes revisados.
- `npm run build`: correcto; incluye ESLint y comprobación TypeScript. Avisos existentes sobre `<img>` y datos de Browserslist antiguos, sin errores. `npx tsc --noEmit`: correcto. `git diff --check`: correcto.
- Navegador Chromium: seis rutas en 1440 y 390 px (12 combinaciones), sin errores JavaScript ni desbordamiento horizontal. Verificados pestañas, agenda, participantes, imágenes, enlaces, precios y desplegables con teclado.
- Registro, becas y pago: HTTP 200 con sus destinos actuales, sin enviar formularios ni realizar pagos.
- No hay enlaces a `20261030` ni nombres retirados en el código activo/HTML generado. Los PDF históricos del repositorio se conservan sin enlaces desde la web.
- Capturas de esta actualización en `tmp/lastlab-v5-review/`. El despliegue utiliza GitHub Pages al incorporar los cambios revisados a `main`.
