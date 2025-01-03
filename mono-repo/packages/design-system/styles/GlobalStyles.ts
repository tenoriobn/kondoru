import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* 1. Modelo de dimensionamento de caixa mais intuitivo */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* 2. Remove margens e padding padrão */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 3. Corrige a tipografia para herdar estilos */
  html, body {
    font-size: 16px;
    font-family: ${({ theme }) => theme.font.mulish};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    letter-spacing: -.8px;
  }

  /* 4. Configura largura e altura padrão */
  html, body, #root {
    height: 100%;
    width: 100%;
  }

  #root, #__next {
    isolation: isolate;
  }

  /* 5. Evita estouros de texto */
  h1, h2, h3, h4, h5, h6 {
    word-wrap: balance;
  }

  /* 6. Melhora a quebra de linha */
  p {
    word-wrap: pretty;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /* 7. Remove decorações de links */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* 8. Remove marcadores de listas e ajusta preenchimento */
  ul, ol {
    list-style: none;
  }

  /* 9. Remove estilos padrões de botões */
  button {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
  }

  /* 10. Configura imagens e elementos de mídia */
  img, picture, video, canvas {
    max-width: 100%;
    display: block;
  }

  /* 11. Previne estilos adicionais para input e textarea */
  input, textarea, select, button {
    font: inherit;
  }

  /* 12. Configura elementos HTML5 para block por padrão */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  /* 13. Reseta tabelas */
  table {
    border-collapse: collapse;
    width: 100%;
  }

  /* 14. Define estilos padrão para formatação */
  strong {
    font-weight: bold;
  }

  code {
    font-family: 'Courier New', Courier, monospace;
  }
`;

export default GlobalStyles;