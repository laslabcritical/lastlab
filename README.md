# LAST Lab Web

Sitio institucional bilingue (`/es`, `/en`) para LAST Lab for Critical AI, construido con Next.js (App Router) y Tailwind CSS.

## Caracteristicas

- Redireccion de `/` a `/es`.
- Arquitectura i18n con rutas por idioma:
  - Espanol: `/es`, `/es/sobre`, `/es/red`, etc.
  - Ingles: `/en`, `/en/about`, `/en/network`, etc.
- Contenido desacoplado por idioma en `src/content/es.ts` y `src/content/en.ts`.
- Componentes reutilizables de layout y UI.
- SEO por pagina (metadata, OpenGraph, Twitter).
- `sitemap.xml` y `robots.txt`.
- Configuracion lista para Vercel.

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

- `src/app/[lang]/[[...slug]]/page.tsx`: enrutamiento localizado.
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

## Deploy en Vercel

1. Importar el repositorio en Vercel.
2. Configurar variable `NEXT_PUBLIC_SITE_URL` (ejemplo: `https://lastlab.org`).
3. Deploy.
