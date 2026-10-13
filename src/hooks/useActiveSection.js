import { useEffect, useState } from 'react';

/**
 * Devuelve el id de la sección visible en pantalla para resaltar el enlace del Navbar.
 * Si una sección todavía no existe en el DOM, simplemente se ignora.
 */
export function useActiveSection(ids, fallback = ids[0]) {
  const [active, setActive] = useState(fallback);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
