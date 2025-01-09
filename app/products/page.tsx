import styles from "./products.module.scss"
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";

const dummyProducts = [
    {
      id: 1,
      product_name: "Product 1",
      price: 100,
      rating: "3",
      description: "This is product 2",
        imgUrl: '/1.jpg'
    },
    {
      id: 2,
      product_name: "Product 2",
      price: 200,
      rating: "4",
      description: "This is product 2",
      imgUrl:'/2.jpg'
    },
    {
      id: 3,
      product_name: "Product 3",
      price: 300,
        rating: "5",
      description: "This is product 3",
      imgUrl:'/4.jpg'
    },
  ];
export default function page({products = dummyProducts}) {
    // const { products } = useContext(ProductContext);
    
    return (
      <main style={{ margin: "0 auto" }}>
        <ul id={styles['display-product']}>
        {products.map((product) => <ProductDisplay key={product.id} product={product} /> )}
        </ul>
      </main>
    );
    }