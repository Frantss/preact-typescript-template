module.exports = {
  preset: 'jest-preset-preact',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  setupFiles: [
    '<rootDir>/src/tests/browserMocks.js',
    '<rootDir>/src/tests/fileMocks.js',
  ],
  testURL: 'http://localhost:8080',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/tests/fileMocks.js',
  },
};
