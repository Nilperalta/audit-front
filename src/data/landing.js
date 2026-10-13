/**
 * Contenido de la landing. Separado de los componentes para poder
 * editar textos (o traducirlos) sin tocar JSX.
 * IMPORTANTE: los `id` deben coincidir con el id de la <section> de cada sección.
 */
import { PATHS } from '@/routes/paths';

export const navLinks = [
  { id: 'inicio', label: 'Inicio', href: '#inicio' },
  { id: 'caracteristicas', label: 'Características', href: '#caracteristicas' },
  { id: 'como-funciona', label: 'Cómo funciona', href: '#como-funciona' },
  { id: 'seguridad', label: 'Seguridad', href: '#seguridad' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
];

export const navActions = {
  login: { label: 'Iniciar sesión', to: PATHS.LOGIN },
  cta: { label: 'Solicitar acceso', to: PATHS.REQUEST_ACCESS },
};

export const heroContent = {
  eyebrow: 'App móvil de auditorías',
  titleLines: ['Auditorías', 'inteligentes'],
  titleAccent: 'desde tu celular',
  description:
    'Planifica, ejecuta y da seguimiento a tus auditorías desde una sola app. Más agilidad, menos papel y resultados en tiempo real.',
  primaryCta: { label: 'Comenzar', to: PATHS.REQUEST_ACCESS },
  secondaryCta: { label: 'Ver demo', href: '#como-funciona' },
  badge: 'Sincronizado en tiempo real',
  highlights: [
    { icon: 'smartphone', title: 'Todo en tu bolsillo', text: '100% móvil y ágil' },
    { icon: 'activity', title: 'Datos en tiempo real', text: 'Decisiones rápidas' },
    { icon: 'shield', title: 'Seguro y confiable', text: 'Protección total' },
  ],
};
