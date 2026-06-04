import PropertiesContent from './PropertiesContent';

type PropertiesPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function PropertiesPage({ searchParams }: PropertiesPageProps) {
  await searchParams;

  return <PropertiesContent />;
}
