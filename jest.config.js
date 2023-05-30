module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  coveragePathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json',
        diagnostics: false,
      },
    ],
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  testMatch: ['**/*.(src|test|spec).(js|jsx|ts|tsx)'],
  testEnvironment: 'jsdom',
}
