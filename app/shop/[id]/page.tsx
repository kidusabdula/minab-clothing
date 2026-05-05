import { products } from "@/dummyData";
import ProductDetail from "./product-detail";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.slug === id);
  const relatedProducts = product
    ? products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];

  return <ProductDetail product={product || null} relatedProducts={relatedProducts} />;
}
