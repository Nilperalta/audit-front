import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import LandingPage from '@/pages/Landing/LandingPage';
import LoginPage from '@/pages/Login/LoginPage';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';
import { PATHS } from './paths';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Páginas públicas con Navbar y Footer */}
      <Route element={<MainLayout />}>
        <Route path={PATHS.HOME} element={<LandingPage />} />
        <Route path={PATHS.LOGIN} element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* A futuro: <Route element={<DashboardLayout />}> con rutas protegidas por rol */}
    </Routes>
  );
}
