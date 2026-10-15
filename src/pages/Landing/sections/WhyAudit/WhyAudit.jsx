import {
  Activity,
  FileText,
  Globe2,
  UserRoundPlus,
} from 'lucide-react';

import Container from '@/components/common/Container';
import { whyAuditContent } from '@/data/landing';
import whyAuditImage from '@/assets/images/why-audit-mobile.png';

import styles from './WhyAudit.module.css';

const ICONS = {
  mobile: Globe2,
  speed: Activity,
  roles: UserRoundPlus,
  traceability: FileText,
};

export default function WhyAudit() {
  const {
    eyebrow,
    title,
    imageAlt,
    badge,
    benefits,
  } = whyAuditContent;

  return (
    <section
      id="como-funciona"
      className={styles.section}
      aria-labelledby="why-audit-title"
    >
      <Container>
        <div className={styles.layout}>

          <div className={styles.visual}>
            <img
            src={whyAuditImage}
            alt={imageAlt} 
            />


            <span className={styles.badge}>
              <span
                className={styles.badgeDot}
                aria-hidden="true"
              />

              {badge}
            </span>
          </div>

          <div className={styles.content}>
            <header className={styles.header}>
              <span className={styles.eyebrow}>
                {eyebrow}
              </span>

              <h2
                id="why-audit-title"
                className={styles.title}
              >
                {title}
              </h2>
            </header>

            <div className={styles.benefits}>
              {benefits.map((benefit) => {
                const Icon = ICONS[benefit.icon];

                return (
                  <article
                    key={benefit.title}
                    className={styles.benefit}
                  >
                    <div
                      className={styles.iconBox}
                      aria-hidden="true"
                    >
                      <Icon size={20} strokeWidth={2} />
                    </div>

                    <h3 className={styles.benefitTitle}>
                      {benefit.title}
                    </h3>

                    <p className={styles.benefitDescription}>
                      {benefit.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}