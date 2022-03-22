import tap = require('tap');
import { Server } from '../server';

tap.test('GET /api', t => {
  t.plan(4);
  const fastify = Server();

  t.teardown(() => fastify.close());

  fastify.inject(
    {
      method: 'GET',
      url: '/api',
    },
    (err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200);
    },
  );
});
