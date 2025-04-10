import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof import('./theme').default.colors;
    gradients: typeof import('./theme').default.gradients;
    borderRadius: typeof import('./theme').default.borderRadius;
    fontSize: typeof import('./theme').default.fontSize;
    fontWeight: typeof import('./theme').default.fontWeight;
    spacing: typeof import('./theme').default.spacing;
  }
}
