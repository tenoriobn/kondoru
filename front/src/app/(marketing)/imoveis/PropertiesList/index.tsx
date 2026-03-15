'use client';
import Link from 'next/link';
import Image from 'next/image';
import LocationIcon from 'public/icons/location.svg';
import PropertiesListSkeleton from './PropertiesListSkeleton';
import Pagination from 'src/components/Pagination';
import { usePropertiesList } from './usePropertiesList';

export default function PropertiesList() {
  const { properties, page, setPage, totalPages, isLoading } = usePropertiesList();

  if (isLoading) {
    return <PropertiesListSkeleton />;
  }

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(304px,1fr))] gap-4 md:gap-8 mt-4 md:mt-8">
        {properties.map(({ id, href, imgSrc, location, title, price }) => (
          <article key={id}>
            <Link
              href={href}
              aria-labelledby={`property-title-${id}`}
              className="cursor-pointer grid gap-y-2 md:gap-y-4 w-full transition duration-300 hover:opacity-75"
            >
              <figure className="relative w-full aspect-[4/3.26] rounded-3xl overflow-hidden">
                <Image
                  src={imgSrc}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 400px"
                />
              </figure>

              <div className="grid gap-y-1 md:gap-y-2">
                <h3
                  id={`property-title-${id}`}
                  className="text-xl md:text-2xl font-extrabold text-dark-slate-900 line-clamp-3"
                >
                  {title}
                </h3>

                <p className="text-base font-medium text-dark-slate-84">{price}</p>

                <address className="flex items-center gap-2 overflow-hidden">
                  <LocationIcon className="text-dark-slate-58 w-4 h-5" />

                  <span className="flex-1 text-base font-medium text-dark-slate-58 line-clamp-1">
                    {location}
                  </span>
                </address>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {totalPages > 1 && <Pagination page={page} totalPages={totalPages} onChange={setPage} />}
    </>
  );
}
