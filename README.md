# Anime Store Cusco

Landing page en Astro para presentar ropa, mangas y accesorios anime en Cusco. El hero usa `public/hero1.webp`; las categorías usan `public/ropa.webp`, `public/manga.webp` y `public/accesorios.webp`. El diseño conserva referencias abstractas a la arquitectura de piedra y los textiles de la región.

## Desarrollo

Requiere Node.js 22.12 o superior.

```sh
npm install
npm run astro -- dev --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
npm run build
```

## Datos pendientes

La página muestra un número de ejemplo y la dirección y horario como pendientes. Para habilitar los enlaces de consulta, define `PUBLIC_WHATSAPP_NUMBER` en un archivo `.env` con un número internacional de 10 a 15 dígitos, por ejemplo en el formato `51XXXXXXXXX`. Sin esta variable, los botones llevan a la sección de contacto y no abren WhatsApp.

La página se compone de secciones Astro en `src/components/`. Cada sección tiene su propio CSS; `ContactLink.astro` usa la configuración compartida de `src/lib/contact.ts` para todos los botones de consulta.

Antes de publicar, sustituye el número de ejemplo, la dirección y el horario en la página; añade el logo y datos de productos reales si están disponibles. Las imágenes de categorías son ilustrativas; no se muestran precios ni disponibilidad sin confirmación.

## Documentación

El [brief, la especificación, el plan y la validación](docs/README.md) describen el alcance y los pendientes del proyecto.
