import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>404 Page</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}
