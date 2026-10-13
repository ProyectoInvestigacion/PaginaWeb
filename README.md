# Prototipo Web Informativo - FCE UCE

Este repositorio contiene el código fuente para el despliegue del portal web informativo de la Facultad de Ciencias Económicas. El sistema ha sido optimizado y transformado a una arquitectura completamente **estática (Static Site)**, eliminando dependencias de servidores backend para garantizar la máxima velocidad de carga, seguridad y despliegue gratuito e inmediato.

## Resumen Técnico

La aplicación ha sido desarrollada utilizando tecnologías web estándar (HTML5, CSS3, Vanilla JS) junto con el framework de diseño Bootstrap 5. 

**Características de la nueva arquitectura:**
- **Zero-Backend:** No requiere Python, Flask, Docker, ni bases de datos. Todo el contenido está pre-renderizado.
- **Rendimiento Máximo:** Los archivos estáticos se sirven de forma instantánea.
- **Hosting Gratuito:** 100% compatible con plataformas de despliegue estático como Vercel, Netlify o GitHub Pages.
- **Responsive Design:** Interfaces fluidas que se adaptan a móviles, tablets y escritorios.

## Decisiones técnicas

- **Astro (SSG):** el sitio se genera con [Astro](https://astro.build) a HTML estático, sin JavaScript de framework en el navegador. El menú, el footer y el `<head>` viven una sola vez (antes estaban copiados en 15 archivos). Las URLs `.html` se conservan (`build.format: 'file'`).
- **Sin Next.js/React/Tailwind:** para un sitio informativo estático no aportan beneficio.
- **Sin jQuery ni plugins:** `public/static/js/main.js` es JavaScript nativo (animaciones con `IntersectionObserver`, carrusel con Bootstrap). Las carpetas `static/lib/*` nunca existieron en el repo.
- **Vercel:** `vercel.json` compila con Astro y define cabeceras de seguridad y caché de `/static`.
- `syllabus_economia` y `subir_recursos` aún dependen de jQuery y de endpoints de un backend eliminado; son candidatas a retirarse.
- `public/pages/` (login, registro, forgotpass, admin_dashboard) son páginas heredadas del backend, servidas tal cual.

---

## 💻 Desarrollo Local

Requiere [Node.js](https://nodejs.org) 18 o superior.

```bash
npm install        # una sola vez
npm run dev        # servidor en http://localhost:4321 con recarga automática
npm run build      # genera el sitio estático en dist/
npm run preview    # sirve dist/ para comprobar el resultado final
```

**Cómo editar:**
- Contenido de una página: `src/pages/` (`index.astro` y `src/pages/pages/*.astro`).
- Menú de navegación: `src/components/navbar.html` (la página activa se marca sola).
- Footer: `src/components/Footer.astro`. Estructura común (head, scripts): `src/layouts/Layout.astro`.
- Imágenes, CSS y JS: `public/static/`.

---

## 🚀 Guía de Despliegue en Vercel

Vercel es la plataforma recomendada para alojar este proyecto debido a su velocidad y capa gratuita.

### Pasos para el despliegue:

1. **Sube tu código a GitHub:**
   Asegúrate de que todo el contenido de esta carpeta esté en un repositorio de GitHub (público o privado).

2. **Crea una cuenta en Vercel:**
   Ve a [Vercel.com](https://vercel.com/) y regístrate usando tu cuenta de GitHub.

3. **Importa tu proyecto:**
   - En el panel (Dashboard) de Vercel, haz clic en el botón **"Add New..."** y luego en **"Project"**.
   - Conecta tu cuenta de GitHub si no lo has hecho.
   - Busca el repositorio de esta página web y haz clic en **"Import"**.

4. **Configuración del despliegue:**
   - **Project Name:** Elige un nombre (ej. `fce-uce-web`).
   - **Framework Preset:** Vercel lo detectará automáticamente como `Other` (esto es correcto, ya que es HTML puro).
   - **Build and Output Settings:** Déjalo exactamente como está (no necesitas configurar comandos de compilación).

5. **Desplegar:**
   - Haz clic en el botón **"Deploy"**.
   - Vercel tomará tus archivos estáticos y en menos de 10 segundos tu página estará en vivo en internet.

6. **Dominio Personalizado (Opcional):**
   Una vez desplegado, Vercel te dará un link gratuito (ej. `fce-uce-web.vercel.app`). Si tienes un dominio propio (`tu-universidad.com`), puedes ir a la pestaña **Settings > Domains** en Vercel y agregarlo fácilmente.

---

## 📂 Estructura de Archivos Principal

- `src/` - Código fuente del sitio (Astro):
  - `src/layouts/Layout.astro` - Estructura común: head/SEO, spinner, scripts.
  - `src/components/` - `navbar.html` (menú) y `Footer.astro`.
  - `src/pages/index.astro` - Página de inicio.
  - `src/pages/pages/*.astro` - Docentes, recursos, herramientas, chatbot y vistas académicas (videos, ejercicios, exámenes, aplicaciones, bibliografía).
- `public/` - Archivos servidos tal cual:
  - `public/static/css|js|img|scss/` - Estilos, scripts, imágenes y fuentes SCSS.
  - `public/pages/` - login, registro, forgotpass y admin_dashboard (heredadas).
  - `public/404.html` y `public/robots.txt`.
- `/docs/` - Documentación y guías del proyecto (`GIT_INSTRUCCIONES.txt`).
- `dist/` - Resultado de `npm run build` (no se versiona).
