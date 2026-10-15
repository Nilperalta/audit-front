import {
  CalendarDays,
  Camera,
  Flag,
  ListChecks,
} from 'lucide-react';

import Container from '@/components/common/Container';
import { featuresContent } from '@/data/landing';

import styles from './Features.module.css';

const ICONS = {
  calendar: CalendarDays,
  checklist: ListChecks,
  evidence: Camera,
  flag: Flag,
};

export default function Features() {
  const { eyebrow, title, description, items } = featuresContent;

  return (
    <section
      id="caracteristicas"
      className={styles.section}
      aria-labelledby="features-title"
    >
      <Container>
        <header className={styles.header}>
          <span className={styles.eyebrow}>
            {eyebrow}
          </span>

          <h2
            id="features-title"
            className={styles.title}
          >
            {title}
          </h2>

          <p className={styles.intro}>
            {description}
          </p>
        </header>

        <div className={styles.grid}>
          {items.map((item) => {
            const Icon = ICONS[item.icon];

            return (
              <article
                key={item.title}
                className={styles.card}
              >
                <div
                  className={styles.iconBox}
                  aria-hidden="true"
                >
                  <Icon size={22} strokeWidth={2} />
                </div>

                <h3 className={styles.cardTitle}>
                  {item.title}
                </h3>

                <p className={styles.cardDescription}>
                  {item.description}
                </p>

                <span className={styles.cardLink}>
                  {item.linkLabel}
                </span>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}