import { FastifyRequest, FastifyReply } from 'fastify';
import * as Joi from 'joi';
import jsonPath from 'lib/json-path';
import { sortByCompany, sortByCreatedAt } from 'lib/sort-by';

import { content, query } from 'types/content';
import getQuerySchema from './schema';

const mockContents: content[] = require(jsonPath('contents')).contents;

export default class ContentCtrl {
  static getContentList = async (
    req: FastifyRequest<{ Querystring: query }>,
    reply: FastifyReply,
  ) => {
    const validateResult: Joi.ValidationResult<string> =
      getQuerySchema.validate(req.query);

    if (validateResult.error) {
      reply.status(400).send(validateResult.error.details[0].message);
    }

    const { limit, page, sortBy, keyword } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    let contentList = mockContents;
    if (keyword) {
      contentList = mockContents.filter((content: content) =>
        content.company.includes(keyword),
      );
    }

    const slicedContentList = contentList.slice(offset, offset + Number(limit));

    const returnContentList =
      sortBy === 'company'
        ? sortByCompany(slicedContentList)
        : sortByCreatedAt(slicedContentList);

    reply.status(200).send(returnContentList);
  };
}
