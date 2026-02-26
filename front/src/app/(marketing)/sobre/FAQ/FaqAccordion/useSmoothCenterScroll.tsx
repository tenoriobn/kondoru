import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

export function useSmoothCenterScroll(
  activeId: number | null,
  itemRefs: RefObject<Record<number, HTMLElement | null>>,
  duration = 900
) {
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (activeId === null) return;

    const element = itemRefs.current[activeId];
    if (!element) return;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY;

        const elementHeight = element.offsetHeight;
        const viewportHeight = window.innerHeight;

        const target = absoluteTop - viewportHeight / 2 + elementHeight / 2;

        const start = window.scrollY;
        const distance = target - start;
        const startTime = performance.now();

        function animate(currentTime: number) {
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);

          const ease =
            progress < 0.5
              ? 4 * progress * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 3) / 2;

          window.scrollTo(0, start + distance * ease);

          if (progress < 1) {
            animationFrameRef.current = requestAnimationFrame(animate);
          }
        }

        animationFrameRef.current = requestAnimationFrame(animate);
      });
    });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [activeId, itemRefs, duration]);
}
