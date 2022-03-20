import fs = require('fs');
import jsonPath from './json-path';
import { content } from 'types/content';
import { banner } from 'types/banner';

const randomDate = (start: Date, end: Date) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
};

const makeMockData = () => {
  const mockContents: content[] = [];
  const mockBanners: banner[] = [];

  for (let i = 1; i <= 60; i++) {
    const mockDate = randomDate(new Date(2018, 0, 1), new Date());
    const mockContent: content = {
      id: i,
      company: '오픈놀',
      title: `과제명${i}`,
      thumbnail: `thumbnail${i}`,
      createdAt: mockDate,
      updatedAt: mockDate,
    };
    mockContents.push(mockContent);
  }

  for (let i = 1; i <= 15; i++) {
    const mockDate = randomDate(new Date(2018, 0, 1), new Date());
    const mockBanner: banner = {
      id: i,
      image: `image${i}`,
      createdAt: mockDate,
      updatedAt: mockDate,
    };
    mockBanners.push(mockBanner);
  }

  const jsonContents = JSON.stringify(mockContents);
  const jsonBanners = JSON.stringify(mockBanners);

  fs.writeFileSync(jsonPath('contents'), jsonContents);
  fs.writeFileSync(jsonPath('banners'), jsonBanners);
};

makeMockData();
