export function useContactInfo() {
  const openAction = (href: string) => {
    window.open(href, '_blank');
  };

  return {
    openAction,
  };
}
