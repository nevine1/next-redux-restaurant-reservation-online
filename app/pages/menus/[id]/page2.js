
import { productData } from '../../../components/products'

export  function getStaticPaths() {

  const paths = productData.map((product) => ({
    params: { id: product.id.toString() },

  }));

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {

  const productId = params.id;
  const product = productData.find((product) => product.id === productId);
  return {
    props: {
      product,
    },
  };

}

const FoodDetails = ({ product }) => {
console.log(product)
  return (
    <div style={{padding: '200px'}}>
      <p>ellooooooooooooooooooooo</p>
      <p>ellooooooooooooooooooooo</p>
      <p>ellooooooooooooooooooooo</p>
      <p>ellooooooooooooooooooooo</p>
      <p>ellooooooooooooooooooooo</p>
      <p>ellooooooooooooooooooooo</p>
      <p>ellooooooooooooooooooooo</p>
      <p>ellooooooooooooooooooooo</p>
      <p>ellooooooooooooooooooooo</p>
      <p>{product?.title} </p>
    </div>
  );
};

export default FoodDetails;
