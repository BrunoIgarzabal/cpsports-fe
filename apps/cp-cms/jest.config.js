const { name } = require('./package.json')

module.exports = {
  displayName: name,
  roots: ['<rootDir>/tests'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '<rootDir>/src/**/*-helper.ts',
    '!<rootDir>/src/main/**/*',
    '!<rootDir>/src/**/index.ts'
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  moduleNameMapper: {
    '@cp/cms/tests/(.*)': '<rootDir>/tests/$1',
    '@cp/cms/(.*)': '<rootDir>/src/$1'
  },
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/node_modules/']
}
