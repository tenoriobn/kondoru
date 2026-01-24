import type { StatusMessageProps } from './statusMessage.type';

export default function StatusMessage({ message, Icon, className }: StatusMessageProps) {
  return (
    <div className="grid place-items-center gap-6 w-full">
      <p className={`text-base font-medium text-center md:text-xl ${className}`}>{message}</p>

      <div className="justify-self-center">
        <Icon />
      </div>
    </div>
  );
}
