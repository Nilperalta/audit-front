import { Instagram, Linkedin, Mail, Phone, Youtube } from 'lucide-react';

import Container from '@/components/common/Container';
import Logo from '@/components/common/Logo';
import { footerContent } from '@/data/landing';

import styles from './Footer.module.css';

const ICONS = {
  mail: Mail,
  phone: Phone,
  linkedin: Linkedin,
  youtube: Youtube,
  instagram: Instagram,
};

export default function Footer() {
  const { description, columns, contact, copyright, socialLabel, social } = footerContent;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo />
            <p className={styles.description}>{description}</p>
          </div>

          <nav className={styles.columns} aria-label="Pie de página">
            {columns.map((column) => (
              <div key={column.title} className={styles.column}>
                <h2 className={styles.columnTitle}>{column.title}</h2>
                <ul className={styles.list}>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={styles.link}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className={styles.column}>
              <h2 className={styles.columnTitle}>{contact.title}</h2>
              <ul className={styles.list}>
                {contact.items.map((item) => {
                  const Icon = ICONS[item.icon];
                  return (
                    <li key={item.label}>
                      <a href={item.href} className={styles.contactLink}>
                        <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} {copyright}
          </p>

          <div className={styles.social}>
            <span className={styles.socialLabel}>{socialLabel}</span>
            <ul className={styles.socialList}>
              {social.map((item) => {
                const Icon = ICONS[item.icon];
                return (
                  <li key={item.label}>
                    <a href={item.href} className={styles.socialLink} aria-label={item.label}>
                      <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
