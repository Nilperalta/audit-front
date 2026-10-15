import { useId } from 'react';
import { ChevronDown } from 'lucide-react';

import { useDisclosure } from '@/hooks';
import { cn } from '@/utils/cn';

import styles from './Faq.module.css';

/** Una pregunta desplegable. Cada item maneja su propio estado (pueden abrirse varios a la vez). */
export default function FaqItem({ question, answer }) {
  const { isOpen, toggle } = useDisclosure();
  const answerId = useId();

  return (
    <div className={cn(styles.item, isOpen && styles.itemOpen)}>
      <h3 className={styles.question}>
        <button
          type="button"
          className={styles.trigger}
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls={answerId}
        >
          <span>{question}</span>
          <ChevronDown
            size={18}
            strokeWidth={2}
            aria-hidden="true"
            className={cn(styles.chevron, isOpen && styles.chevronOpen)}
          />
        </button>
      </h3>

      <div id={answerId} className={styles.answer} hidden={!isOpen}>
        <p>{answer}</p>
      </div>
    </div>
  );
}
