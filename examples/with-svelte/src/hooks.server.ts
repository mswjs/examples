import { dev } from '$app/environment';

if (dev) {
  const { server } = await import('./mocks/node');

  server.listen();
}
