export default function PropertyCarouselSkeleton() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="animate-pulse bg-gray-300 rounded-3xl aspect-[4/3.26]" />

      <div className="hidden sm:block animate-pulse bg-gray-300 rounded-3xl aspect-[4/3.26]" />

      <div className="hidden lg:block animate-pulse bg-gray-300 rounded-3xl aspect-[4/3.26]" />
    </div>
  );
}
