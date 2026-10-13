import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Container from '@/components/common/Container';
import Logo from '@/components/common/Logo';
import Button from '@/components/common/Button';
import { useActiveSection, useDisclosure, useScrolled } from '@/hooks';
import { navLinks, navActions } from '@/data/landing';
import { cn } from '@/utils/cn';
import styles from './Navbar.module.css';

const sectionIds = navLinks.map((link) => link.id);

export default function Navbar() {
  const scrolled = useScrolled();
  const activeId = useActiveSection(sectionIds);
  const { isOpen, toggle, close } = useDisclosure();

  return (
    <header className={cn(styles.header, scrolled && styles.scrolled)}>
      <Container className={styles.bar}>
        <Logo />

        <nav className={styles.nav} aria-label="Principal">
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={cn(styles.link, activeId === link.id && styles.active)}
                  aria-current={activeId === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button as={Link} to={navActions.login.to} variant="ghost" size="sm">
            {navActions.login.label}
          </Button>
          <Button as={Link} to={navActions.cta.to} size="sm">
            {navActions.cta.label}
          </Button>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls="menu-movil"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <div id="menu-movil" className={cn(styles.mobile, isOpen && styles.mobileOpen)}>
        <Container>
          <ul className={styles.mobileLinks}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} className={styles.mobileLink} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.mobileActions}>
            <Button as={Link} to={navActions.login.to} variant="outline" onClick={close}>
              {navActions.login.label}
            </Button>
            <Button as={Link} to={navActions.cta.to} onClick={close}>
              {navActions.cta.label}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
