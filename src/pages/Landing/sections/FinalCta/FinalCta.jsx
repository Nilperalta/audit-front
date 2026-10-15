import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { finalCtaContent } from '@/data/landing';
import logoUrl from '@/assets/images/logo-whale.svg';

import styles from './FinalCta.module.css';

export default function FinalCta() {
  const { eyebrow, title, description, cta } = finalCtaContent;

  return (
    <section className={styles.section} aria-labelledby="final-cta-title">
      <Container>
        <div className={styles.card}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>
              <img src={logoUrl} alt="" width="18" height="18" />
              {eyebrow}
            </span>

            <h2 id="final-cta-title" className={styles.title}>
              {title}
            </h2>

            <p className={styles.description}>{description}</p>
          </div>

          <Button
            as={Link}
            to={cta.to}
            size="lg"
            className={styles.button}
            rightIcon={<ArrowRight size={18} aria-hidden="true" />}
          >
            {cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
