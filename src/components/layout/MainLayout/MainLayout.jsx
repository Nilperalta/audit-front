import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';

/** Estructura común de las páginas públicas: Navbar + contenido + (Footer). */
export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* TODO: <Footer /> (lo hace el compañero asignado) */}
    </>
  );
}
