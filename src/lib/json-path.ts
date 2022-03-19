import path = require('path');

const jsonPath = (jsonName: string) => {
  return jsonName === 'contents'
    ? path.join(process.cwd(), '/mock/contents.json')
    : path.join(process.cwd(), '/mock/banners.json');
};

export default jsonPath;
