# DESIGN.md — Sistema de diseño de Audit

Este archivo es la **guía de diseño en texto** del proyecto. Sirve para que cualquier
integrante del grupo (o una herramienta de IA como Stitch) construya pantallas iguales
sin tener que adivinar. Los valores reales viven en `src/styles/tokens.css`;
si cambias algo allí, actualiza este archivo.

## Marca
- Producto: **Audit**, app móvil de gestión de auditorías empresariales.
- Logo: ballena rosa + palabra "Audit" (`src/assets/images/logo-whale.svg`).
- Tono: claro, profesional y directo. Español, frases cortas, verbos de acción.

## Colores
| Rol | Valor | Uso |
|---|---|---|
| Primario | `#E91E63` (botones `#D81B60`, hover `#C2185B`) | Acciones principales, acentos, enlace activo |
| Secundario | `#212121` | Títulos y texto principal |
| Terciario | `#757575` | Textos de apoyo y etiquetas pequeñas |
| Neutro | `#F8F9FA` | Fondo de secciones alternas |
| Texto de párrafo | `#616161` | Párrafos largos (mejor contraste que el terciario) |

Regla: el rosa es un acento. Máximo un botón primario por zona de pantalla.

## Tipografía
| Nivel | Fuente | Tamaño (escritorio) | Peso |
|---|---|---|---|
| H1 | Plus Jakarta Sans | 48–56 px | 800 |
| H2 | Plus Jakarta Sans | 32–40 px | 700 |
| H3 | Plus Jakarta Sans | 20–24 px | 600 |
| Subtítulo | Inter | 18–20 px | 400 |
| Párrafo | Inter | 16 px | 400 |
| Texto pequeño | Inter | 12–14 px | 400–500 |

Los tamaños son fluidos (`clamp()`), definidos en `tokens.css`.

## Componentes base
- **Button**: `primary` (rosa), `outline` (blanco con borde), `ghost` (solo texto). Forma de píldora.
- **Container**: ancho máximo 1200 px con márgenes laterales.
- **Tarjetas**: fondo blanco, borde `#E8E8EC`, radio 12–20 px, sombra suave.

## Reglas de uso
1. No escribir colores hex ni tamaños de fuente sueltos en los componentes: usar `var(--...)`.
2. Una sección = una carpeta con su `.jsx` y su `.module.css`.
3. Textos en `src/data/`, no dentro del JSX.
4. Todo debe verse bien desde 360 px de ancho (se diseña primero para celular).
