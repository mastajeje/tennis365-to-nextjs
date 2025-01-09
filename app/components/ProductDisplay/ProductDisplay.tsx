'use client';
import Link from 'next/link';
import styles from './ProductDisplay.module.scss';

export default function ProductDisplay({product}) {
  // let history = useHistory();

  return (
    <li
      key={product.id}
      className={styles['product']}
    >
      <Link href={`/products/${product.id}`} className={styles['product__link']}>
        {/* <ProductImg product={product} class={"product__img"} /> */}
        <div className={styles['product__img']}>
          <img
            src={product.imgUrl}
            // src={`https://tennis365-api.herokuapp.com/admin/${product.imgUrl}`}
            alt={product.product_name}
          />
        </div>
        <div className={styles['product__descriptions']}>
          <h3>{product.product_name}</h3>
          {/* <small>{product.rating}</small> */}
          <span>{product.price}원</span>
          <span
            className={`${styles['product__descriptions-desc']} ${styles['font-face-BBTreeR']}`}
          >
            {product.description}
          </span>
        </div>
      </Link>
    </li>
  );
}
