/** Une nombres de clase ignorando valores vacíos: cn('a', false, 'b') -> 'a b' */
export const cn = (...classes) => classes.filter(Boolean).join(' ');
