import { collections } from "@/dummyData";
import CollectionDetail from "./collection-detail";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  return <CollectionDetail collection={collection || null} />;
}
