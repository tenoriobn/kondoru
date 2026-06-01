export default function PropertiesListSkeleton() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(304px,1fr))] gap-4 md:gap-8 mt-4 md:mt-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-pulse bg-gray-300 rounded-3xl h-80" />
      ))}
    </div>
  );
}
