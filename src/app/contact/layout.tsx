export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const siteURL = 'https://www.jknairvitaltraining.com';

  return {
    title: `Contact us`,
    alternates: {
      canonical: `${siteURL}/${slug}`,
    },
  };
}

export default function SkeletonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
