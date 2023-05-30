// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [{
    extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
    files: ['*.ts', '*.tsx'],
    parserOptions: {
      project: path.join(__dirname, 'tsconfig.json')
    }
  }, {
    files: ['*.stories.ts', '*.stories.tsx'],
    rules: {
      'react/prop-types': 'off'
    }
  }, {
    files: ['*.mdx'],
    extends: 'plugin:mdx/recommended',
    rules: {
      'prettier/prettier': 'off',
      quotes: 'off'
    }
  }],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json')
  },
  plugins: ['@typescript-eslint', 'unused-imports', 'jest', 'react', 'mdx'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended', 'plugin:react-hooks/recommended', 'plugin:sonarjs/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    es6: true,
    browser: true,
    jest: true
  },
  rules: {
    quotes: [2, 'single', {
      avoidEscape: true
    }],
    semi: ['error', 'never'],
    '@typescript-eslint/consistent-type-imports': ['warn', {
      prefer: 'type-imports',
      fixStyle: 'inline-type-imports'
    }],
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': ['warn', {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_'
    }]
  }
};
module.exports = config;