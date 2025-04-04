import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: {
        ...globals.node, // Permite variáveis globais do Node.js
      },
      sourceType: 'module', // Suporta ES Modules
    },
    rules: {
      'indent': ['error', 2], // Indentação de 2 espaços
      'quotes': ['error', 'single'], // Usar aspas simples
      'semi': ['error', 'always'], // Ponto e vírgula obrigatório
      'no-console': 'warn', // Aviso para console.log
      'prefer-const': 'warn', // Preferir const quando possível
      'eqeqeq': ['error', 'always'], // Exigir uso de "===" em vez de "=="
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_', // Ignora argumentos com nome começando com "_"
          varsIgnorePattern: '^error$', // Ignora a variável 'error' no catch
          caughtErrorsIgnorePattern: '^error$', // Ignora 'error' no catch
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
);
