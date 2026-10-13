import { Link } from 'react-router-dom';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { PATHS } from '@/routes/paths';

export default function NotFoundPage() {
  return (
    <Container style={{ paddingBlock: 'var(--space-9)', display: 'grid', gap: 'var(--space-4)', justifyItems: 'start' }}>
      <h1>No encontramos esa página</h1>
      <p>Revisa la dirección o vuelve al inicio.</p>
      <Button as={Link} to={PATHS.HOME}>Ir al inicio</Button>
    </Container>
  );
}
