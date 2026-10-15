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

export const featuresContent = {
  eyebrow: 'Características principales',
  title: 'Todo lo que necesitas para auditar',
  description:
    'Digitaliza todo tu flujo de calidad y cumplimiento con una interfaz pensada para el trabajo de campo.',
  items: [
    {
      icon: 'calendar',
      title: 'Programa auditorías',
      description:
        'Crea planes, asigna responsables y agenda auditorías en cuestión de segundos.',
      linkLabel: 'Calendario inteligente →',
    },
    {
      icon: 'checklist',
      title: 'Ejecuta checklists',
      description:
        'Responde desde tu celular con checklists personalizados adaptados a tus normativas.',
      linkLabel: 'Flujos dinámicos →',
    },
    {
      icon: 'evidence',
      title: 'Gestiona evidencias',
      description:
        'Captura fotos, documentos y notas al instante. Todo queda centralizado y respaldado.',
      linkLabel: 'Respaldo en nube →',
    },
    {
      icon: 'flag',
      title: 'Seguimiento a hallazgos',
      description:
        'Asigna acciones correctivas, define plazos y verifica el cierre con total trazabilidad.',
      linkLabel: 'Cierre de ciclos →',
    },
  ],
};

export const whyAuditContent = {
  eyebrow: '¿Por qué elegir Audit?',
  title: 'Tu equipo de auditoría, siempre a la mano',
  imageAlt: 'Aplicación Audit mostrada en tres dispositivos móviles',
  badge: 'App 100% nativa',
  benefits: [
    {
      icon: 'mobile',
      title: '100% móvil',
      description:
        'Diseñada exclusivamente para auditores en terreno. Cero formularios en papel y sin complicaciones de sincronización.',
    },
    {
      icon: 'speed',
      title: 'Más velocidad',
      description:
        'Información y métricas procesadas en tiempo real para tomar decisiones correctivas al instante.',
    },
    {
      icon: 'roles',
      title: 'Para todos los roles',
      description:
        'Auditores, supervisores de planta y gerentes de calidad colaborando dentro del mismo ecosistema de permisos.',
    },
    {
      icon: 'traceability',
      title: 'Trazabilidad completa',
      description:
        'Historial inmutable, marcas de tiempo, firmas digitales y fotos fechadas con geolocalización.',
    },
  ],
};
