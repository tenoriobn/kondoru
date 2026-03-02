import { useEffect, useMemo, useRef, useState } from 'react';

interface UseScrollWordRevealOptions {
  start?: number;
  end?: number;
}

export function useScrollWordReveal(text: string, options?: UseScrollWordRevealOptions) {
  const { start = 0.75, end = 0.32 } = options || {};

  const containerRef = useRef<HTMLParagraphElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const words = useMemo(() => {
    return text.replace(/\n/g, ' ').split(' ').filter(Boolean);
  }, [text]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startPoint = windowHeight * start;
      const endPoint = windowHeight * end;

      const progress = (startPoint - rect.top) / (startPoint - endPoint);
      const clamped = Math.max(0, Math.min(1, progress));

      const currentIndex = Math.floor(clamped * words.length);
      setActiveIndex(currentIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [words.length, start, end]);

  return { containerRef, words, activeIndex };
}
