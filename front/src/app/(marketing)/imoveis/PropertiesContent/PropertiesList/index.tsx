'use client';
import Link from 'next/link';
import Image from 'next/image';
import LocationIcon from 'public/icons/location.svg';
import PropertiesListSkeleton from './PropertiesListSkeleton';
import Pagination from 'src/components/Pagination';
import type { PropertiesListProps } from './propertiesList.type';
import { formatBRL } from 'src/utils/format-currency';

export default function PropertiesList({
  properties,
  page,
  setPage,
  totalPages,
  isLoading,
}: PropertiesListProps) {
  if (isLoading) {
    return <PropertiesListSkeleton />;
  }

  if (properties.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <h2 className="text-xl font-bold text-dark-slate-900">Nenhum imóvel encontrado</h2>

        <p className="mt-2 text-dark-slate-58 max-w-md">
          Não encontramos imóveis para os critérios selecionados. Tente ajustar os filtros ou
          realizar uma nova busca.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-4 md:mt-8">
        {properties.map(({ id, slug, thumbnail, location, title, price }) => (
          <Link
            key={id}
            href={slug}
            aria-labelledby={`property-title-${id}`}
            className="cursor-pointer grid grid-rows-subgrid row-span-4 gap-y-1 md:gap-y-2 w-full transition duration-300 hover:opacity-75"
          >
            <figure className="relative w-full aspect-[4/3.26] rounded-3xl overflow-hidden">
              <Image
                src={thumbnail}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 400px"
              />
            </figure>

            <h3
              id={`property-title-${id}`}
              className="text-xl md:text-2xl font-extrabold text-dark-slate-900 line-clamp-2"
            >
              {title}
            </h3>

            <p className="text-base font-medium text-dark-slate-84">{formatBRL(price)}</p>

            <address className="flex items-center gap-2 overflow-hidden">
              <LocationIcon className="text-dark-slate-58 w-4 h-5" />

              <span className="flex-1 text-base font-medium text-dark-slate-58 line-clamp-1">
                {location.city}
              </span>
            </address>
          </Link>
        ))}
      </div>

      {totalPages > 1 && <Pagination page={page} totalPages={totalPages} onChange={setPage} />}
    </>
  );
}
