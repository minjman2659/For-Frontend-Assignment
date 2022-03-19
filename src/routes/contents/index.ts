import { FastifyPluginCallback } from 'fastify';
import ContentCtrl from './contents';

const contentRouter: FastifyPluginCallback = (fastify, options, done) => {
  fastify.get('/', ContentCtrl.getContentList);

  done();
};

export default contentRouter;
