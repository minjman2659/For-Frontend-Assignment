import { test } from 'tap';
import { Server } from '../src/server';

test('GET /api', async t => {
  t.plan(4);
  const fastify = Server();

  t.teardown(() => fastify.close());

  const res = await fastify.inject({
    method: 'GET',
    url: '/api',
  });
  t.equal(res.statusCode, 200);
});
