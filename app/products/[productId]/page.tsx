'use client'
import { Carousel } from 'react-responsive-carousel';
import styles from '../products.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useRouter } from 'next/router';

const product ={
    product_name: 'Pure Aero',
    price: 200,
    weight: 300,
    head_size: 100,
    string_pattern: '16x19',
    balance: '320mm',
    length: 27,
    grip_size: 4,
}

const productImgs = [
    {
      id: 1,
      img_url: "/1.jpg",
    },
    {
      id: 2,
      img_url: "/2.jpg",
    },
    {
      id: 4,
      img_url: "/4.jpg",
    },
  ];


export default function productDetailsPage({ params}){
    // const router = useRouter();
    // const {productId} = router.query;
    // const {productId} = await params;

    return (
        <section className={styles['product-container']}>
        <div className={styles["product__display"]}>
        <div className={styles["carousel-container"]}>
        <Carousel  showStatus={false} showThumbs={false}>
          {productImgs.map((img) => {
            return (
              <div key={img.id}>
                <img src={img.img_url} alt={img.img_url} />
              </div>
            );
          })}
        </Carousel>
        </div>
        <div className={styles["detail__info"]}>
          <h2>{product.product_name}</h2>
          <h2>판매가 {product.price}원</h2>
  
          <table className={styles["spec"]} cellSpacing="0">
            <tbody>
              <tr>
                <th>상품명</th>
                <td>{product.product_name}</td>
              </tr>
              <tr>
                <th>무게</th>
                <td>{`${product.weight}g`}</td>
              </tr>
              <tr>
                <th>헤드사이즈</th>
                <td>{`${product.head_size}in`}</td>
              </tr>
              <tr>
                <th>스트링패턴</th>
                <td>{product.string_pattern}</td>
              </tr>
              <tr>
                <th>밸런스</th>
                <td>{product.balance}</td>
              </tr>
              <tr>
                <th>길이</th>
                <td>{`${product.length}in`}</td>
              </tr>
              <tr>
                <th>그립사이즈</th>
                <td>{`${product.grip_size}"`}</td>
              </tr>
            </tbody>
          </table>
          {/* <Button handleBtnClick={addCart} text={"장바구니 담기"} /> */}
        </div>
      </div>
      </section>
    // <div>
    //     <h1>Product Details</h1>
    //     <p>Product ID: {productId}</p>
    // </div>
    )
    }