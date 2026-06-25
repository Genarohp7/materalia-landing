# Arias Abogados Static Landing

Proyecto estatico para la landing principal de Arias Abogados.

## Tecnologia

- Vite en modo vanilla.
- HTML, CSS y JavaScript sin React ni frameworks de UI.
- Build estatico compatible con hosting compartido.

## Instalar dependencias

```bash
npm install
```

## Correr localmente

```bash
npm run dev
```

## Configurar WhatsApp

Editar `src/data/site.config.js`:

- `whatsappNumber`: reemplazar `52XXXXXXXXXX` por el numero real con codigo de pais.
- `whatsappMessage`: ajustar el mensaje inicial si el cliente lo solicita.
- `whatsappUrl`: se genera con el numero y mensaje configurados.

## Actualizar enlace externo de Jorge Arias

Editar `externalJorgeAriasUrl` en `src/data/site.config.js`.

## Generar build

```bash
npm run build
```

El resultado queda en `dist/`.

## Despliegue

Ver `DEPLOYMENT.md`.

## Editable desde configuracion

- URL principal del sitio.
- Numero y mensaje de WhatsApp.
- URL externa de Jorge Arias.

## No tocar

- No agregar credenciales al repositorio.
- No convertir a WordPress.
- No borrar carpetas de WordPress en produccion.
- No modificar el contenido legal o fiscal visible sin aprobacion del cliente.
