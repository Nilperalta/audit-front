# Secciones de la landing

Cada sección vive en su propia carpeta y es independiente de las demás:

```
sections/
  Hero/                  <- hecha
  Features/              <- "Todo lo que necesitas para auditar"
  WhyAudit/              <- "Tu equipo de auditoría, siempre a la mano"
  Faq/                   <- "Resolvemos tus dudas"
  FinalCta/              <- "¿Listo para ordenar tus auditorías?"
```

Cómo crear una sección nueva (ejemplo `Features`):

1. Crea `Features/Features.jsx`, `Features/Features.module.css` y `Features/index.js`
   (copia la estructura de `Hero/`).
2. La etiqueta raíz debe ser `<section id="caracteristicas">`.
   El `id` tiene que coincidir con `navLinks` en `src/data/landing.js`
   (`caracteristicas`, `como-funciona`, `seguridad`, `faq`), para que el Navbar resalte el enlace.
3. Los textos van en `src/data/landing.js`, no dentro del JSX.
4. Usa `Container`, `Button` y los tokens de `src/styles/tokens.css`. No escribas colores hex.
5. Importa tu sección en `LandingPage.jsx` y quita el comentario.
