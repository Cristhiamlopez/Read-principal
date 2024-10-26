module.exports = {
    preset: 'vite-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    transformIgnorePatterns: ['/node_modules/(?!some-esm-package)'],
  };
  