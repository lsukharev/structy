module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['jest-extended/all'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/dist/']
};
