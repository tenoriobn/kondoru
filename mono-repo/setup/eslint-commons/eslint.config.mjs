import pluginNext from '@next/eslint-plugin-next';
import parser from '@typescript-eslint/parser';

export default [
  {
    name: 'ESLint Config - nextjs',
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@next/next': pluginNext,
    },
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
      'indent': ['error', 2], // Indentação de 2 espaços
      'quotes': ['error', 'single'], // Usar aspas simples
      'semi': ['error', 'always'], // Ponto e vírgula obrigatório
      'no-console': 'warn', // Aviso para console.log
      'prefer-const': 'warn', // Preferir const quando possível
      'eqeqeq': ['error', 'always'], // Exigir uso de "===" em vez de "=="
    },
  },
];
