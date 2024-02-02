export default function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Product List {params.productId}</h1>;
}
