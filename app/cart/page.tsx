'use client';
import styles from './cart.module.scss';
import {useState} from 'react';
import Button from '../../components/Button/Button';
import CartDisplay from './_PageSections/CartDisplay';
import { dummyCartItems } from '../dummyData';


export default function page() {
  const [errorMessage, setErrorMessage] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState('');

  return (
    <section className={styles['cart']}>
      {errorMessage || dummyCartItems.length === 0 ? (
        <div className={styles['cart-is-empty']}>
          <span>장바구니에 담긴 상품이 없습니다</span>
        </div>
      ) : null}
      <ul className={styles['cart-items']}>
        {!errorMessage && (
          <>
            <CartDisplay
              //   errorMessage={errorMessage}
              cartItems={dummyCartItems}
              handleQuantity={() => {}}
              handleDelete={() => {}}
            />
            {/* <div>Cart</div> */}
          </>
        )}
      </ul>
      <div className={styles['cart_bottom']}>
        <div className={styles['empty-div']}></div>
        {errorMessage || dummyCartItems.length === 0 ? null : (
          <div className={styles['order-summary']}>
            <div className={styles['total']}>
              <span>합계</span>
              <span>
                {errorMessage || dummyCartItems.length === 0
                  ? null
                  : `${grandTotal.toLocaleString()}원`}
              </span>
            </div>
            <div className={styles['cart__orderBtn']}>
              <Button handleBtnClick={() => {}} text={'주문하기'} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
