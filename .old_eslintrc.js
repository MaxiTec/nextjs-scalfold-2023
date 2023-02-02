module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'eslint:recommended', 'next', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // 'react/react-in-jsx-scope': 'off',
    // 'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off'
  }
}
