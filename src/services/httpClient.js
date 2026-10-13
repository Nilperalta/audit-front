import { env } from '@/config/env';

/**
 * Cliente HTTP único. Todos los services lo usan, así el token,
 * los errores y la URL base se manejan en un solo lugar.
 */
async function request(path, { method = 'GET', body, headers } = {}) {
  const token = localStorage.getItem('audit_token');
  const response = await fetch(`${env.apiUrl}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message ?? 'No se pudo completar la solicitud.');
  }
  return response.status === 204 ? null : response.json();
}

export const httpClient = {
  get: (path) => request(path),
  post: (path, body) => request(path, { method: 'POST', body }),
  put: (path, body) => request(path, { method: 'PUT', body }),
  delete: (path) => request(path, { method: 'DELETE' }),
};
