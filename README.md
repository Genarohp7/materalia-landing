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

## Formulario de contacto

La captacion de consultas se hace mediante un formulario de Mailchimp integrado en la seccion `#consulta`.

- El correo operativo configurado es `contacto@ariasabogados.mx`.
- Las notificaciones se administran desde Mailchimp, no desde el codigo.
- El sitio no usa API keys, backend, PHP ni WordPress para enviar el formulario.
- El envio se hace por `POST` directo al endpoint de Mailchimp y abre la respuesta en una nueva pestana.
- Para cambiar campos, actualizar primero Mailchimp y despues el HTML con los `name` correspondientes.
- Para probar recepcion, enviar una prueba desde GitHub Pages o desde `npm run preview` y revisar Mailchimp o `contacto@ariasabogados.mx`.

La configuracion general de contacto vive en `src/data/site.config.js`:

- `contactSectionId`: id de la seccion del formulario.
- `contactHref`: ancla usada por los botones de contacto.
- `contactEmail`: correo operativo del cliente.
- `mailchimpAction`: endpoint funcional del formulario.

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
- Ancla y endpoint del formulario de contacto.
- URL externa de Jorge Arias.

## No tocar

- No agregar credenciales al repositorio.
- No convertir a WordPress.
- No borrar carpetas de WordPress en produccion.
- No modificar el contenido legal o fiscal visible sin aprobacion del cliente.
