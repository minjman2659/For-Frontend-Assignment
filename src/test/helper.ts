import Fastify from 'fastify';
import fp from 'fastify-plugin';
import { Server } from 'server';

function build() {
  const app = Fastify();

  beforeAll(async () => {
    app.register(fp(Server));
    await app.ready();
  });

  afterAll(() => app.close());

  return app;
}

export { build };
