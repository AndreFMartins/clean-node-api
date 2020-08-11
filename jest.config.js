module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/**/*-protocols.ts',
    '!**/protocols/**',
    '!**/test/**'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest'
  }
}
