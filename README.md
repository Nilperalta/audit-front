# audit-front

Frontend de **Audit**, aplicación para la gestión de auditorías empresariales.
React 18 + Vite + React Router.

## Cómo ejecutarlo
```bash
npm install
cp .env.example .env
npm run dev        # http://localhost:5173
npm run build      # versión de producción en /dist
```

## Estructura de carpetas
```
src/
  assets/        imágenes, íconos y fuentes locales
  components/
    common/      piezas reutilizables sin lógica de negocio (Button, Container, Logo...)
    layout/      estructura de página (Navbar, Footer, MainLayout, DashboardLayout...)
  config/        variables de entorno y constantes de configuración
  data/          textos y datos estáticos (contenido de la landing, catálogos, opciones)
  hooks/         hooks propios reutilizables (useDisclosure, useScrolled...)
  pages/         una carpeta por pantalla; las secciones propias van dentro (Landing/sections)
  routes/        definición de rutas (AppRoutes.jsx) y paths.js
  services/      comunicación con el backend (httpClient + un archivo por módulo)
  styles/        tokens.css (paleta, tipografía, medidas) y base.css (reset)
  utils/         funciones auxiliares puras (cn, formatDate...)
```

### Cómo crecer sin desordenar
Cuando empiecen los módulos de la app (REQ-FUN de auditorías, checklists, etc.),
agreguen carpetas por **módulo** dentro de `pages/` y reutilicen lo común:

```
pages/
  Landing/
  Auth/              login, recuperar contraseña, definir contraseña
  Audits/            programar, ejecutar, historial
    components/      componentes que solo usa este módulo
    hooks/
  Checklists/
services/
  authService.js
  auditService.js
  checklistService.js
```
Regla: si un componente lo usa **un solo módulo**, vive en ese módulo.
Si lo usan dos o más, sube a `components/common`.

## Estilos
- **CSS Modules**: cada componente tiene su `Nombre.module.css` al lado. Las clases no chocan entre componentes.
- **No** hay una hoja por página: la página solo ensambla secciones; el estilo vive en cada sección/componente.
- **Paleta y tipografía**: únicamente en `src/styles/tokens.css`. Se usan como `var(--color-primary)`.
- La guía de diseño en texto está en `DESIGN.md`.

## Convenciones
- Componentes en `PascalCase`, hooks con prefijo `use`, carpetas de componente con `index.js`.
- Imports con alias: `import Button from '@/components/common/Button'`.
- Rutas siempre desde `PATHS` (`src/routes/paths.js`).
- Una rama de Git por sección o funcionalidad (`feat/landing-features`, `feat/login`).

## Estado de la landing
| Sección | Estado |
|---|---|
| Navbar | Hecha |
| Hero | Hecha (visual de celulares es un marcador, ver `HeroVisual.jsx`) |
| Características | Pendiente (ver `src/pages/Landing/sections/README.md`) |
| Por qué elegir Audit | Pendiente |
| FAQ | Pendiente |
| CTA final y Footer | Pendiente |
