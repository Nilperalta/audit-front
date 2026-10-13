import { Link } from 'react-router-dom';
import logoUrl from '@/assets/images/logo-whale.svg';
import { PATHS } from '@/routes/paths';
import styles from './Logo.module.css';

/** Reemplaza src/assets/images/logo-whale.svg por el logo real de la ballena. */
export default function Logo() {
  return (
    <Link to={PATHS.HOME} className={styles.logo} aria-label="Audit, ir al inicio">
      <img src={logoUrl} alt="" width="36" height="36" />
      <span className={styles.name}>Audit</span>
    </Link>
  );
}
