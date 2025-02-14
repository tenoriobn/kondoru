export {};

declare global {
  interface Window {
    Playerjs?: new (config: { id: string; file: string }) => void;
  }
}