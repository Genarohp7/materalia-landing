# Despliegue Arias Abogados

Este proyecto genera una landing estatica con Vite. No requiere Node.js en el servidor, base de datos, backend ni WordPress para funcionar.

El hosting final es Webempresa/wePanel y el dominio de produccion es:

```text
https://ariasabogados.mx/
```

Actualmente WordPress existe en:

```text
/home2/ariasabo/public_html/ariasabogados.mx
```

La publicacion final debe subir el build estatico sin borrar WordPress. La landing reemplaza visualmente la home mediante `index.html`, pero WordPress debe quedar intacto para acceder a `/wp-admin` o hacer rollback.

## 1. Preparar el proyecto local

Instalar dependencias:

```bash
npm install
```

Ejecutar entorno local:

```bash
npm run dev
```

Generar build de produccion:

```bash
npm run build
```

El build final queda en:

```text
dist/
```

Para revisar el build localmente:

```bash
npm run preview
```

## 2. Configuracion de rutas

Vite esta configurado con `base: './'` para que los assets funcionen correctamente tanto en una subcarpeta de prueba como en el dominio raiz.

El mismo build debe funcionar en:

```text
https://ariasabogados.mx/preview-v2/
https://ariasabogados.mx/
```

## 3. Contenido del build

Subir unicamente el contenido interno de `dist/`, no la carpeta completa.

Estructura esperada:

```text
index.html
assets/
favicon.svg
robots.txt
sitemap.xml
```

No subirlo asi:

```text
dist/index.html
dist/assets/
```

Si se usa el ZIP `arias-abogados-production.zip`, descomprimirlo directamente dentro de la carpeta destino. El ZIP ya debe contener el contenido interno de `dist/`.

## 4. SEO de produccion

Antes de publicar, confirmar que el build apunta al dominio final:

- Canonical: `https://ariasabogados.mx/`
- Open Graph URL: `https://ariasabogados.mx/`
- Sitemap: `https://ariasabogados.mx/sitemap.xml`
- Robots: permite indexacion e indica el sitemap de produccion.

## 5. Formulario

El formulario debe mantenerse como integracion directa con Mailchimp:

- `action` hacia Mailchimp.
- `method="post"`.
- Campos `name`: `EMAIL`, `FNAME`, `PHONE`, `CASO`.
- Campo anti-spam oculto de Mailchimp presente.
- Sin API keys.
- Sin backend.
- Sin `fetch` propio para enviar datos.
- WhatsApp no debe ser el flujo principal de contacto.

## 6. Preview en Webempresa

Antes de tocar la raiz, hacer un respaldo completo de:

```text
/home2/ariasabo/public_html/ariasabogados.mx
```

Despues crear la carpeta de preview si no existe:

```text
/home2/ariasabo/public_html/ariasabogados.mx/preview-v2/
```

Subir ahi el contenido interno de `dist/` o descomprimir ahi `arias-abogados-production.zip`.

Probar:

```text
https://ariasabogados.mx/preview-v2/
```

Checklist de preview:

- La pagina carga con estilos.
- El JavaScript carga sin errores visibles.
- El favicon carga.
- Los CTAs de contacto llevan al formulario.
- El formulario abre/envia hacia Mailchimp.
- La pagina se revisa en escritorio, tablet y movil.

## 7. Publicacion en raiz

Cuando el preview este aprobado, subir el mismo contenido interno de `dist/` a:

```text
/home2/ariasabo/public_html/ariasabogados.mx/
```

Archivos/carpetas que se pueden subir o reemplazar desde el build:

- `index.html`
- `assets/`
- `favicon.svg`
- `robots.txt`
- `sitemap.xml`

No borrar archivos de WordPress para publicar esta landing.

## 8. Archivos que NO se deben borrar

No borrar:

- `wp-admin`
- `wp-content`
- `wp-includes`
- `index.php`
- `wp-config.php`
- `.htaccess`

WordPress debe permanecer instalado. Esta landing estatica solo reemplaza visualmente la home mediante `index.html`.

Tampoco reemplazar `.htaccess` salvo que el cliente o el administrador del hosting lo indiquen expresamente. Este proyecto no necesita modificar `.htaccess`.

## 9. Rollback recomendado

Si algo sale mal:

1. Renombrar temporalmente `index.html` a `index-static-backup.html`.
2. Confirmar que `index.php` de WordPress sigue en la raiz.
3. Restaurar cualquier archivo respaldado antes de la publicacion si aplica.
4. Limpiar cache del hosting o plugin de cache si aplica.
5. Verificar la home y `/wp-admin`.

No borrar carpetas ni archivos de WordPress para hacer rollback.

## 10. Confirmacion final antes de entregar

Antes de entregar el ZIP o subir manualmente:

```bash
npm install
npm run build
npm run preview
```

Confirmar que:

- `dist/` existe.
- `dist/index.html` existe.
- `dist/assets/` contiene CSS y JS generados por Vite.
- `dist/favicon.svg`, `dist/robots.txt` y `dist/sitemap.xml` existen.
- El ZIP contiene `index.html` en la raiz del comprimido, no `dist/index.html`.
