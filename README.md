# LAST Lab Web

Sitio institucional bilingue (`/es`, `/en`) para LAST Lab for Critical AI & Digital Technologies, construido con Next.js (App Router) y Tailwind CSS.

## Caracteristicas

- Redireccion de `/` a `/es`.
- Arquitectura i18n con rutas por idioma:
  - Espanol: `/es`, `/es/sobre`, `/es/red`, etc.
  - Ingles: `/en`, `/en/about`, `/en/network`, etc.
- Contenido desacoplado por idioma en `src/content/es.ts` y `src/content/en.ts`.
- Componentes reutilizables de layout y UI.
- SEO por pagina (metadata, OpenGraph, Twitter).
- `sitemap.xml` y `robots.txt`.
- Publicacion automatica en GitHub Pages.

## Instalacion

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Estructura clave

- `src/app/[lang]/page.tsx` y `src/app/[lang]/[slug]/page.tsx`: enrutamiento localizado.
- `src/content/es.ts`: contenido en espanol.
- `src/content/en.ts`: contenido en ingles (placeholder traducido).
- `src/components/layout/*`: navbar, footer y layout general.
- `src/components/pages/*`: composicion por seccion/pagina.
- `public/brand/logo.svg`: logo institucional.
- `public/brand/og-image.svg`: imagen OpenGraph/Twitter.

## Personalizacion

- Reemplazar logo: `public/brand/logo.svg`.
- Ajustar paleta/tipografia: `tailwind.config.ts` y `src/app/globals.css`.
- Actualizar dominio canonico: variable `NEXT_PUBLIC_SITE_URL`.

## Deploy en GitHub Pages

Cada push a `main` ejecuta `.github/workflows/deploy-pages.yml`. El build toma
el origen y la ruta base de la configuracion de Pages, tanto para la URL
`github.io/lastlab` como para un dominio propio.

### Dominio `lastlab.lat`

En Porkbun, configurar los siguientes registros DNS:

| Tipo | Host | Valor |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | laslabcritical.github.io |

Reemplazar los registros de estacionamiento que entren en conflicto con `@`
y `www`, conservando los registros de correo y otros servicios.

Configurar `lastlab.lat` en Settings > Pages > Custom domain del repositorio
y volver a ejecutar el workflow para generar el sitio con el nuevo origen y
sin el prefijo `/lastlab`. Este despliegue usa GitHub Actions y no requiere
un archivo `CNAME`. Una vez que GitHub valide el DNS y emita el certificado,
activar Enforce HTTPS y verificar tanto el dominio principal como `www`.
