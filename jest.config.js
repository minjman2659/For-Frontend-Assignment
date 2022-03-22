/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: ['node_modules', './src/mock'],
  modulePaths: ['./src'], // NODE_PATH=.
  moduleFileExtensions: ['ts', 'js', 'json'],
};
