import fastify from 'fastify';
import routes from 'routes';
import { CustomCors } from 'plugins/custom-cors';

const port = 8080;

async function Server() {
  const server = fastify({ logger: false });

  server.register(CustomCors);

  server.register(routes, { prefix: '/api' });

  server.listen(port, (err, address) => {
    if (err) {
      server.log.error(err);
      return;
    }
    console.log(`Server is Running: ${address}`);
    // console.log(`Swagger: ${address}/api/swagger`);
  });
}

Server();
