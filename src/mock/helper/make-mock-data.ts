import fs = require('fs');
import jsonPath from 'lib/json-path';

import makeContents from './make-contents';
import makeBanners from './make-banners';

const makeMockData = async () => {
  const { mockContents } = await makeContents();
  const { mockBanners } = makeBanners();

  const jsonContents = JSON.stringify(mockContents);
  const jsonBanners = JSON.stringify(mockBanners);

  fs.writeFileSync(jsonPath('contents'), jsonContents);
  fs.writeFileSync(jsonPath('banners'), jsonBanners);
};

makeMockData();
