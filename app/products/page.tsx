import styles from "./products.module.scss"
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import {dummyProducts} from "../dummyData"

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