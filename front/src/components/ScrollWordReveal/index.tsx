'use client';
import { useScrollWordReveal } from './useScrollWordReveal';
import type { ScrollWordRevealProps } from './scrollWordReveal.type';

export default function ScrollWordReveal({
  text,
  className = '',
  activeClassName = 'text-dark-slate-800',
  inactiveClassName = 'text-gray-400',
}: ScrollWordRevealProps) {
  const { containerRef, words, activeIndex } = useScrollWordReveal(text);

  return (
    <p ref={containerRef} className={`leading-relaxed ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block transition-colors duration-300 ${
            index < activeIndex ? activeClassName : inactiveClassName
          }`}
        >
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
}
