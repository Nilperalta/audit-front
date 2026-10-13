import { Link } from 'react-router-dom';
import { Activity, ArrowRight, Play, ShieldCheck, Smartphone } from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { heroContent } from '@/data/landing';
import HeroVisual from './HeroVisual';
import styles from './Hero.module.css';

const ICONS = {
  smartphone: Smartphone,
  activity: Activity,
  shield: ShieldCheck,
};

export default function Hero() {
  const { eyebrow, titleLines, titleAccent, description, primaryCta, secondaryCta, badge, highlights } = heroContent;

  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <Container className={styles.grid}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>{eyebrow}</span>

          <h1 id="hero-title" className={styles.title}>
            {titleLines.map((line) => (
              <span key={line} className={styles.line}>{line}</span>
            ))}
            <span className={styles.accent}>{titleAccent}</span>
          </h1>

          <p className={styles.description}>{description}</p>

          <div className={styles.ctas}>
            <Button as={Link} to={primaryCta.to} size="lg" rightIcon={<ArrowRight size={18} />}>
              {primaryCta.label}
            </Button>
            <Button as="a" href={secondaryCta.href} variant="outline" size="lg" leftIcon={<Play size={16} />}>
              {secondaryCta.label}
            </Button>
          </div>

          <ul className={styles.highlights}>
            {highlights.map(({ icon, title, text }) => {
              const Icon = ICONS[icon];
              return (
                <li key={title} className={styles.highlight}>
                  <span className={styles.iconBox}><Icon size={18} aria-hidden="true" /></span>
                  <span>
                    <strong className={styles.highlightTitle}>{title}</strong>
                    <span className={styles.highlightText}>{text}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <HeroVisual badge={badge} />
      </Container>
    </section>
  );
}
