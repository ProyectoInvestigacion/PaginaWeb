# Prototipo Web Informativo - FCE UCE

Este repositorio contiene el código fuente para el despliegue del portal web informativo de la Facultad de Ciencias Económicas. El sistema ha sido optimizado y transformado a una arquitectura completamente **estática (Static Site)**, eliminando dependencias de servidores backend para garantizar la máxima velocidad de carga, seguridad y despliegue gratuito e inmediato.

## Resumen Técnico

La aplicación ha sido desarrollada utilizando tecnologías web estándar (HTML5, CSS3, Vanilla JS) junto con el framework de diseño Bootstrap 5. 

**Características de la nueva arquitectura:**
- **Zero-Backend:** No requiere Python, Flask, Docker, ni bases de datos. Todo el contenido está pre-renderizado.
- **Rendimiento Máximo:** Los archivos estáticos se sirven de forma instantánea.
- **Hosting Gratuito:** 100% compatible con plataformas de despliegue estático como Vercel, Netlify o GitHub Pages.
- **Responsive Design:** Interfaces fluidas que se adaptan a móviles, tablets y escritorios.

---

## 💻 Desarrollo Local

Para visualizar y editar la página en tu propia computadora no necesitas instalar bases de datos complejas. 

**Opción 1: Servidor Python (Recomendado)**
Si tienes Python instalado, abre una terminal en la carpeta del proyecto y ejecuta:
```bash
python -m http.server 8000
```
Luego abre en tu navegador: `http://localhost:8000`

**Opción 2: VS Code Live Server**
Si usas Visual Studio Code, instala la extensión "Live Server", haz clic derecho sobre `index.html` y selecciona "Open with Live Server".

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

- `index.html` - Página de inicio (Home principal).
- `/pages/` - Vistas y páginas secundarias del portal:
  - `/pages/docentes.html` - Directorio y perfiles docentes.
  - `/pages/recursos.html` - Biblioteca y repositorio de recursos.
  - `/pages/herramientas.html` - Herramientas interactivas y utilidades.
  - `/pages/chatboot.html` - Asistente virtual y chat.
  - `/pages/login.html` & `/pages/registro.html` - Acceso y autenticación.
  - `/pages/admin_dashboard.html` - Panel administrativo.
  - Vistas académicas (videos, ejercicios, exámenes, aplicaciones y bibliografía por materia).
- `/docs/` - Documentación y guías del proyecto:
  - `GIT_INSTRUCCIONES.txt` - Guía de descarga, control de versiones y despliegue.
- `/static/` - Carpeta que contiene todos los recursos visuales y de código:
  - `/static/css/` - Hojas de estilo y personalizaciones (Bootstrap, glassmorphism, estilos propios).
  - `/static/js/` - Scripts de interactividad, reloj y animaciones.
  - `/static/img/` - Imágenes y logos institucionales.
  - `/static/scss/` - Fuentes y personalizaciones SCSS de Bootstrap.
