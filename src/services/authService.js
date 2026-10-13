import { httpClient } from './httpClient';

/** REQ-FUN-001, 002, 003. Pendiente de conectar con el backend. */
export const authService = {
  login: (email, password) => httpClient.post('/auth/login', { email, password }),
  logout: () => httpClient.post('/auth/logout'),
  requestPasswordReset: (email) => httpClient.post('/auth/password/reset', { email }),
};
