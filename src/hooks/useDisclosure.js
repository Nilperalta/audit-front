import { useCallback, useState } from 'react';

/** Estado abrir/cerrar reutilizable: menús, modales, acordeones. */
export function useDisclosure(initial = false) {

  const [isOpen, setIsOpen] = useState(initial);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);
  return { isOpen, open, close, toggle };
  
}
