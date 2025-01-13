import ProductDisplay from "../../../../components/ProductDisplay/ProductDisplay";
import { dummyProducts } from "../../../dummyData";

export default async function page({params}){
    // const {brandName} = await params;

    return (
        <section style={{ width: "100%", margin: "0 auto" }}>
            {dummyProducts.map((product) => <ProductDisplay key={product.id} product={product} />)}
      </section>
    )
    }