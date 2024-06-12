const { pathsToModuleNameMapper } = require('ts-jest');
const { defaults: tsjPreset } = require('ts-jest/presets');
const { compilerOptions: { paths } } = require('./tsconfig.json');

const jestConfig = {
  ...tsjPreset,
  cacheDirectory: '.jest/cache',
  clearMocks: true,
  verbose: true,
  preset: 'react-native',
  moduleNameMapper: pathsToModuleNameMapper(paths),
  moduleDirectories: [__dirname, 'node_modules', 'src/utils'],
  modulePathIgnorePatterns: ['<rootDir>/example/node_modules', '<rootDir>/lib/', '<rootDir>/__tests__/utils/'],
  restoreMocks: true,
  setupFiles: [],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testPathIgnorePatterns: ['\\.snap$'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  transform: {
    '^.+\\.ts?$': ['ts-jest', { tsconfig: './tsconfig.jest.json' }],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)'
  ],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
  coveragePathIgnorePatterns: ['node_modules'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    './src/': {
      branches: 0,
      statements: 0
    },
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  }
};

module.exports = jestConfig;
