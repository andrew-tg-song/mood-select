import CardSlider from '../slider/CardSlider';

export default function Similar({ product }) {
  console.log(product);
  return (
    <div>
      <h1>Similar</h1>
      <CardSlider item={product} slidesToShow={4} slidesToScroll={4} />
    </div>
  );
}
