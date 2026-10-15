import Container from '@/components/common/Container';
import { faqContent } from '@/data/landing';

import FaqItem from './FaqItem';
import styles from './Faq.module.css';

export default function Faq() {
  const { eyebrow, title, description, items } = faqContent;

  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-title">
      <Container>
        <header className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>

          <h2 id="faq-title" className={styles.title}>
            {title}
          </h2>

          <p className={styles.intro}>{description}</p>
        </header>

        <div className={styles.grid}>
          {items.map((item) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </Container>
    </section>
  );
}
