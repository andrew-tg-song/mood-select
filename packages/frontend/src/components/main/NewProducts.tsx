import ProductsList from '../product/ProductsList';

export default function NewProducts() {
  return (
    <div>
      <h1>새로운 제품.</h1>
      <p>더 다양한 제품으로 고객님의 취향을 저격!</p>

      <ProductsList />
      <ProductsList />
    </div>
  );
}
