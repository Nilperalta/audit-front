import { cn } from '@/utils/cn';
import styles from './HeroVisual.module.css';

/**
 * Marcador de posición de los 3 celulares.
 * Para usar la imagen real exportada de Stitch:
 *   1) guárdala en src/assets/images/hero-mockup.png
 *   2) reemplaza el contenido de este componente por <img src={...} alt="..." />
 */
export default function HeroVisual({ badge }) {
  return (
    <div className={styles.card} role="img" aria-label="Vista previa de la app Audit en tres celulares">
      <div className={styles.phones} aria-hidden="true">
        <div className={cn(styles.phone, styles.left)} />
        <div className={cn(styles.phone, styles.center)} />
        <div className={cn(styles.phone, styles.right)} />
      </div>
      <span className={styles.badge}>
        <span className={styles.dot} />
        {badge}
      </span>
    </div>
  );
}
