import { cn } from '@/utils/cn';
import styles from './Button.module.css';

/**
 * Botón único de la app.
 *  - variant: 'primary' | 'outline' | 'ghost'
 *  - size: 'sm' | 'md' | 'lg'
 *  - as: 'button' (por defecto), 'a' o el <Link> de react-router
 */
export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  className,
  children,
  ...rest
}) {
  const extra = Component === 'button' && !rest.type ? { type: 'button' } : {};

  return (
    <Component
      className={cn(styles.button, styles[variant], styles[size], className)}
      {...extra}
      {...rest}
    >
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </Component>
  );
}
