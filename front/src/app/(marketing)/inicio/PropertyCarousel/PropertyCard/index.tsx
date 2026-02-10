import Link from 'next/link';
import type { PropertyCardProps } from './propertyCard.type';
import LocationIcon from 'public/icons/location.svg';
import Image from 'next/image';

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article>
      <Link
        href={property.href}
        aria-labelledby={`property-title-${property.id}`}
        className="cursor-pointer grid gap-y-4 max-w-100.25 md:max-w-94 transition duration-300 ease-in-out hover:opacity-60"
      >
        <figure className="relative w-full aspect-[4/3.26] rounded-3xl overflow-hidden">
          <Image
            src={property.imgSrc}
            alt={property.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </figure>

        <div className="grid gap-y-2">
          <h3
            id={`property-title-${property.id}`}
            title={property.title}
            className="text-2xl font-extrabold text-dark-slate-900 whitespace-nowrap overflow-hidden text-ellipsis"
          >
            {property.title}
          </h3>

          <address className="flex items-center gap-2 flex-nowrap overflow-hidden">
            <LocationIcon
              aria-hidden="true"
              focusable="false"
              className="text-dark-slate-58 w-4 h-5"
            />

            <span
              title={property.location}
              className="w-full text-base font-medium text-dark-slate-58 whitespace-nowrap overflow-hidden text-ellipsis"
            >
              {property.location}
            </span>
          </address>
        </div>
      </Link>
    </article>
  );
}
