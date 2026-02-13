import Link from 'next/link';
import type { TestimonialCardProps } from './testimonialCard.type';
import Image from 'next/image';

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article>
      <Link
        rel="noopener noreferrer"
        href={testimonial.href}
        aria-labelledby={`testimonial-title-${testimonial.id}`}
        className="cursor-pointer grid justify-items-center gap-y-4 max-w-100.25 md:max-w-94 transition duration-300 ease-in-out hover:opacity-75 active:opacity-60 active:scale-90"
      >
        <figure className="relative rounded-full w-30 h-30 mb-4 overflow-hidden">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </figure>

        <div className="grid gap-y-2">
          <h3
            id={`testimonial-title-${testimonial.id}`}
            title={testimonial.name}
            className="text-2xl font-extrabold text-center text-dark-slate-900 whitespace-nowrap overflow-hidden text-ellipsis"
          >
            {testimonial.name}
          </h3>

          <p
            title={testimonial.testimony}
            className="text-base font-medium text-center text-dark-slate-58"
          >
            {testimonial.testimony}
          </p>
        </div>
      </Link>
    </article>
  );
}
