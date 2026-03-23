import type { PageContainerProps } from './pageContainer.type';

export default function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div
      className={`
        bg-white flex flex-col items-center relative mx-4 xs:mx-6 pt-0.5 mb-25 gap-25 md:gap-32 md:mx-16 md:mb-32'
        ${className || ''}
      `}
    >
      {children}
    </div>
  );
}
