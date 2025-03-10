module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals"
  ],
  "globals": {
    "myCustomGlobal": "readonly",
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "project": ["./tsconfig.json"]
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    // Importação React não obrigatória
    "react/react-in-jsx-scope": "off",
    // Ponto e vírgula obrigatório
    "semi": ["error", "always"],

    // Aspas simples em vez de duplas
    "quotes": ["error", "single"],

    // Indentação consistente de 2 espaços
    "indent": ["error", 2],

    // Desencorajar console.log em produção
    "no-console": ["warn", { "allow": ["warn", "error"] }],

    // Forçar uso de `===` e `!==`
    "eqeqeq": ["error", "always"],

    // Exigir trailing commas em objetos e arrays
    "comma-dangle": ["error", "always-multiline"],

    // Limitar comprimento de linhas a 80 caracteres
    "max-len": ["warn", { "code": 120 }],

    // Não permitir variáveis não utilizadas
    "no-unused-vars": ["off"],

    // Forçar consistência em espaçamento antes de chaves
    "space-before-blocks": ["error", "always"],

    // Espaço obrigatório ao redor de operadores
    "space-infix-ops": "error",

    // Garantir espaçamento adequado em funções
    "space-before-function-paren": ["error", "never"]
  }
}
