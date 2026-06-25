# Despliegue Arias Abogados

Este proyecto genera una landing estatica. No requiere Node.js en el servidor, base de datos ni WordPress para funcionar.

## 1. Instalar dependencias

```bash
npm install
```

## 2. Correr local

```bash
npm run dev
```

## 3. Generar build

```bash
npm run build
```

El build final queda en:

```text
dist/
```

## 4. Que carpeta subir al hosting

Subir unicamente el contenido de `dist/`, no la carpeta completa.

## 5. Preview en Webempresa

Ruta de preview:

```text
/home2/ariasabo/public_html/ariasabogados.mx/preview-v2/
```

URL:

```text
https://ariasabogados.mx/preview-v2/
```

Crear la carpeta `preview-v2` si no existe y subir ahi el contenido de `dist/`.

## 6. Publicacion en raiz

Cuando el cliente apruebe, subir el contenido de `dist/` a:

```text
/home2/ariasabo/public_html/ariasabogados.mx/
```

La home cargara el `index.html` estatico.

## 7. Archivos que NO se deben borrar

No borrar:

- `wp-admin`
- `wp-content`
- `wp-includes`
- `index.php`
- `wp-config.php`
- `.htaccess`

WordPress debe permanecer instalado. Esta landing estatica solo reemplaza visualmente la home mediante `index.html`.

## 8. Rollback

Si algo sale mal:

1. Renombrar temporalmente `index.html` a `index-static-backup.html`.
2. Confirmar que `index.php` de WordPress sigue en la raiz.
3. Limpiar cache del hosting o plugin de cache si aplica.
4. Verificar la home.

No borrar carpetas ni archivos de WordPress para hacer rollback.
